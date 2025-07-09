import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { fetchBlogPostsDirect } from '@/utils/sanityClient';
import { ArrowLeft, Calendar, User, Clock, Tag } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { useSEO } from '@/hooks/useSEO';
import OptimizedImage from '@/components/OptimizedImage';

// Helper function to safely convert date inputs to ISO string
const safeToISOString = (dateInput: any, fallbackDate: Date = new Date()): string => {
  if (!dateInput) {
    return fallbackDate.toISOString();
  }
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) { 
    return fallbackDate.toISOString();
  }
  return date.toISOString();
};

// Revised Utility to extract TOC
function extractTOC(blocks: any[]): Array<{ id: string; text: string }> {
  if (!blocks || !Array.isArray(blocks)) return [];
  return blocks
    .filter(block => 
      block && 
      block._type === 'block' && 
      block.style === 'h2' && 
      block._key && // Ensure _key exists for ID
      Array.isArray(block.children) && 
      block.children.length > 0
    )
    .map(block => ({
      id: block._key, // Use _key as the ID
      text: block.children
                .map((child: any) => child && typeof child.text === 'string' ? child.text : '')
                .join('') || 'Unnamed Section', // Fallback text
    }));
}

// Utility to log detailed error information for debugging
function logBlogPostError(context: string, error: any, extra?: Record<string, any>) {
  // eslint-disable-next-line no-console
  console.error(`\n[BlogPost Error] Context: ${context}`);
  if (error) console.error('Error:', error);
  if (extra) console.error('Extra:', extra);
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <img
        src={value.asset?.url}
        alt={value.alt || ''}
        className="my-8 rounded-2xl mx-auto max-h-96 w-auto shadow-lg"
        style={{ maxWidth: '100%' }}
      />
    ),
    code: ({ value }: any) => (
      <pre className="bg-gray-900 text-white rounded-lg p-4 overflow-x-auto my-6 shadow-lg">
        <code>{value.code}</code>
      </pre>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl font-bold my-8 text-brand-teal-dark font-satoshi">{children}</h1>,
    // Ensure H2 elements get an ID corresponding to block._key for TOC linking
    h2: ({ children, value }: any) => <h2 id={value?._key || undefined} className="text-3xl font-bold my-8 text-brand-teal-dark font-satoshi scroll-mt-20">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold my-6 text-brand-teal-dark font-satoshi">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-xl font-bold my-6 text-brand-teal-dark font-satoshi">{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-brand-teal-dark pl-6 italic text-gray-700 my-8 bg-gray-50 py-4 rounded-r-lg">
        <p className="text-lg">{children}</p>
      </blockquote>
    ),
    normal: ({ children }: any) => <p className="my-6 text-lg text-gray-800 leading-relaxed font-satoshi">{children}</p>,
  },
  marks: {
    link: ({ children, value }: any) => {
      const href = value.href || '';
      const isInternal = href.startsWith('/') || href.startsWith('https://bernofco.com');
      
      if (isInternal) {
        const to = href.startsWith('https://bernofco.com') ? href.substring('https://bernofco.com'.length) || '/' : href;
        return (
          <Link to={to} className="text-brand-teal-dark underline hover:text-brand-teal transition-colors">
            {children}
          </Link>
        );
      }
      return (
        <a 
          href={href} 
          className="text-brand-teal-dark underline hover:text-brand-teal transition-colors" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }: any) => <strong className="font-semibold text-brand-teal-dark">{children}</strong>,
    em: ({ children }: any) => <em className="italic text-gray-700">{children}</em>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc ml-6 my-6 space-y-2">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal ml-6 my-6 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="text-lg text-gray-800">{children}</li>,
    number: ({ children }: any) => <li className="text-lg text-gray-800">{children}</li>,
  },
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const defaultSeoData = useSEO('blog-post'); 

  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setIsLoading(true);
    fetchBlogPostsDirect()
      .then((posts) => {
        const found = posts.find((p: any) => (p.slug?.current || p.slug) === slug);
        setPost(found || null);
        setIsLoading(false);
        if (!found) {
          logBlogPostError('No post found for slug', null, { slug, posts });
          console.warn('No post found for slug:', slug);
        }
      })
      .catch((err) => {
        logBlogPostError('Error fetching blog post', err, { slug });
        setError(err.message || 'Error fetching blog post');
        setIsLoading(false);
      });
  }, [slug]);

  const toc = useMemo(() => post?.body ? extractTOC(post.body) : [], [post?.body]);

  const readingTime = useMemo(() => {
    if (!post?.body) return 0;
    const text = post.body.map((block: any) => 
      block.children?.map((child: any) => child.text).join(' ') || ''
    ).join(' ');
    const wordCount = text.split(' ').length;
    return Math.ceil(wordCount / 200);
  }, [post?.body]);

  const formattedDate = useMemo(() => {
    if (!post?.publishedAt) return '';
    const date = new Date(post.publishedAt);
    if (isNaN(date.getTime())) return 'Invalid Date'; 
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }, [post?.publishedAt]);

  // Revised useEffect for scroll handling
  useEffect(() => {
    if (!toc || toc.length === 0) { // More robust check
      setActiveId(null); // Ensure activeId is cleared if no TOC
      return;
    }

    const handleScroll = () => {
      let currentId = toc[0]?.id; // Default to first item if available
      for (const heading of toc) {
        if (!heading || !heading.id) continue; // Skip if heading or id is invalid
        const el = document.getElementById(heading.id); 
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) { 
            currentId = heading.id;
          }
        }
      }
      setActiveId(currentId || null); // Ensure setActiveId gets null if no currentId found
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc]);

  if (!slug) return <Navigate to="/blog" replace />;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className="animate-pulse">
            <div className="h-4 w-32 bg-gray-200 rounded mb-8"></div>
            <div className="h-12 w-3/4 bg-gray-200 rounded mb-6"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded mb-8"></div>
            <div className="h-96 w-full bg-gray-100 rounded-2xl mb-12"></div>
            <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded mb-2"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    logBlogPostError('Render error or missing post', error, { slug, post });
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-3xl mx-auto py-32 px-4 flex flex-col items-center justify-center blog-article font-satoshi">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Unable to load article</h2>
          <p className="text-gray-600 mb-8">{error || "The article could not be found or there was an issue loading it."} Please try again later.</p>
          <Link to="/blog" className="bg-brand-teal-dark text-white px-6 py-3 rounded-lg hover:bg-brand-teal transition-colors font-semibold">
            <ArrowLeft className="inline-block mr-2" /> Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const dynamicSeoProps = useMemo(() => {
    if (!post) return defaultSeoData; 

    const canonicalUrl = `https://bernofco.com/blog/${post.slug?.current || slug}`;
    const defaultFallbackDate = new Date(); 
    const publishedDateString = safeToISOString(post.publishedAt, defaultFallbackDate);
    
    let modifiedDateForSchemaInput: any = post.updatedAt || post.publishedAt;
    if (post.updatedAt && post.publishedAt) {
        const pDate = new Date(post.publishedAt);
        const uDate = new Date(post.updatedAt);
        if (!isNaN(pDate.getTime()) && !isNaN(uDate.getTime()) && uDate < pDate) {
            modifiedDateForSchemaInput = post.publishedAt; 
        }
    }
    const modifiedDateString = safeToISOString(modifiedDateForSchemaInput, new Date(publishedDateString));

    return {
      title: `${post.metaTitle || 'Blog Post'} | Bernof Co`,
      description: post.excerpt || defaultSeoData.description,
      keywords: post.keywords || defaultSeoData.keywords, 
      canonical: canonicalUrl,
      ogType: 'article',
      ogImage: post.featuredImage?.asset?.url || (defaultSeoData as any).ogImage,
      url: canonicalUrl,
      type: 'article' as const,
      schemaData: {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
        "headline": post.metaTitle || 'Blog Post',
        "image": post.featuredImage?.asset?.url ? [post.featuredImage.asset.url] : (defaultSeoData.schemaData as any)?.image || [],
        "datePublished": publishedDateString,
        "dateModified": modifiedDateString,
        "author": {
          "@type": "Person", 
          "name": post.author?.name || "Bernof Co"
        },
        "publisher": (defaultSeoData.schemaData as any)?.publisher || {
          "@type": "Organization",
          "name": "Bernof Co",
          "logo": { "@type": "ImageObject", "url": "https://bernofco.com/favicon.ico" }
        },
        "description": post.excerpt || defaultSeoData.description,
        ...(post.categories && post.categories.length > 0 && { "articleSection": post.categories[0] }),
        ...(post.keywords && (typeof post.keywords === 'string' || Array.isArray(post.keywords)) && { "keywords": post.keywords }),
      }
    };
  }, [post, slug, defaultSeoData]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SEO {...dynamicSeoProps} />
      
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/blog" className="text-brand-teal-dark hover:text-brand-teal transition-colors flex items-center font-satoshi">
            <ArrowLeft className="mr-2" size={16} /> Back to Blog
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {post.categories && post.categories.length > 0 && (
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-teal/10 text-brand-teal-dark uppercase tracking-wide">
                <Tag className="mr-1" size={12} />
                {post.categories[0]}
              </span>
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-brand-teal-dark mb-6 font-satoshi leading-tight">
            {post.metaTitle || "Blog Post Title"}
          </h1>
          <p className="text-xl text-gray-600 mb-8 font-satoshi leading-relaxed">
            {post.excerpt || "Brief excerpt about the blog post."}
          </p>
          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-8 pb-8 border-b border-gray-200">
            {post.author?.name && (
              <div className="flex items-center">
                {post.author.avatar && typeof post.author.avatar === 'string' && (
                  <OptimizedImage 
                    src={post.author.avatar} 
                    alt={post.author.name || 'Author avatar'}
                    className="w-8 h-8 rounded-full mr-3"
                    width={32} 
                    height={32}
                    priority={false}
                  />
                )}
                <span className="font-medium text-gray-700">{post.author.name}</span>
              </div>
            )}
            <div className="flex items-center">
              <Calendar className="mr-2" size={16} />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2" size={16} />
              <span>{readingTime} min read</span>
            </div>
          </div>
          
          {post.featuredImage?.asset?.url && typeof post.featuredImage.asset.url === 'string' && (
            <div className="mb-10">
              <div className="w-full aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <OptimizedImage 
                  src={post.featuredImage.asset.url} 
                  alt={post.featuredImage.alt || post.metaTitle || 'Blog post featured image'}
                  className="w-full h-full object-cover"
                  priority 
                />
              </div>
            </div>
          )}
          
          <article className="prose prose-lg max-w-none font-satoshi">
             {/* Ensure post.body is not null/undefined before passing to PortableText */}
            <PortableText value={post.body || []} components={portableTextComponents} />
          </article>
          
          <div className="mt-16 p-8 bg-gradient-to-r from-brand-teal-dark to-brand-teal rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to build something amazing?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss your project and bring your vision to life with our expert development team.
            </p>
            <Link 
              to="/#discovery-call" 
              className="inline-flex items-center bg-white text-brand-teal-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Your Free Discovery Call
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost; 