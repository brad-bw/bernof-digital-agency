import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { fetchBlogPostsDirect } from '@/utils/sanityClient';
import { ArrowLeft, Calendar, User, Share2, Clock, Tag } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { useSEO } from '@/hooks/useSEO';

// Utility to extract TOC: only h2
function extractTOC(blocks: any[]) {
  if (!blocks) return [];
  return blocks
    .filter(block => block._type === 'block' && block.style === 'h2')
    .map(block => ({
      id: block._key,
      text: block.children?.map((child: any) => child.text).join(' ') || '',
    }));
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
    h2: ({ children }: any) => <h2 className="text-3xl font-bold my-8 text-brand-teal-dark font-satoshi">{children}</h2>,
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
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-brand-teal-dark underline hover:text-brand-teal transition-colors" target="_blank" rel="noopener noreferrer">{children}</a>
    ),
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
  const seoData = useSEO('blog-post');

  // Scrollspy state
  const [activeId, setActiveId] = useState<string | null>(null);

  // Add state for expanded TOC sections
  const [expandedToc, setExpandedToc] = useState<string | null>(null);

  // Refs for sidebar and wrapper
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const sidebarContainerRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!slug) return;
    setIsLoading(true);
    fetchBlogPostsDirect()
      .then((posts) => {
        console.log('Fetched posts for article:', posts);
        const found = posts.find((p: any) => (p.slug?.current || p.slug) === slug);
        setPost(found || null);
        setIsLoading(false);
        if (!found) {
          console.warn('No post found for slug:', slug);
        }
      })
      .catch((err) => {
        setError(err.message || 'Error fetching blog post');
        setIsLoading(false);
        console.error('Blog post fetch error:', err);
      });
  }, [slug]);

  // Memoize TOC extraction
  const toc = useMemo(() => post?.body ? extractTOC(post.body) : [], [post?.body]);

  // Calculate reading time (rough estimate: 200 words per minute)
  const readingTime = useMemo(() => {
    if (!post?.body) return 0;
    const text = post.body.map((block: any) => 
      block.children?.map((child: any) => child.text).join(' ') || ''
    ).join(' ');
    const wordCount = text.split(' ').length;
    return Math.ceil(wordCount / 200);
  }, [post?.body]);

  // Format date
  const formattedDate = post?.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }) : '';

  useEffect(() => {
    if (!toc.length) return;
    const handleScroll = () => {
      let currentId = toc[0]?.id;
      for (const heading of toc) {
        const el = document.getElementById(heading.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            currentId = heading.id;
          }
        }
      }
      setActiveId(currentId);
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
    console.error('Blog post error:', error);
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-3xl mx-auto py-32 px-4 flex flex-col items-center justify-center blog-article font-satoshi">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Unable to load article</h2>
          <p className="text-gray-600 mb-8">Please try again later.</p>
          <Link to="/blog" className="bg-brand-teal-dark text-white px-6 py-3 rounded-lg hover:bg-brand-teal transition-colors font-semibold">
            <ArrowLeft className="inline-block mr-2" /> Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SEO {...seoData} />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/blog" className="text-brand-teal-dark hover:text-brand-teal transition-colors flex items-center font-satoshi">
            <ArrowLeft className="mr-2" size={16} /> Back to Blog
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Article Header, Meta, Featured Image */}
        <div className="mb-12">
          {post.categories && post.categories.length > 0 && (
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-teal/10 text-brand-teal-dark uppercase tracking-wide">
                <Tag className="mr-1" size={12} />
                {post.categories[0]}
              </span>
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-brand-teal-dark mb-6 font-satoshi leading-tight">
            {post.metaTitle}
          </h1>
          <p className="text-xl text-gray-600 mb-8 font-satoshi leading-relaxed">
            {post.excerpt}
          </p>
          {/* Meta Row */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-8 pb-8 border-b border-gray-200">
            {post.author?.name && (
              <div className="flex items-center">
                {post.author.avatar && (
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full mr-3"
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
          {/* Featured Image - fixed aspect ratio, proper margin */}
          {post.featuredImage?.asset?.url && (
            <div className="mb-10">
              <div className="w-full aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={post.featuredImage.asset.url} 
                  alt={post.featuredImage.alt || post.metaTitle} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Grid layout: sidebar (1fr) | article (3fr) */}
        <div ref={wrapperRef} className="grid grid-cols-1 lg:grid-cols-[minmax(260px,1fr)_minmax(0,3fr)] gap-12 items-start">
          {/* Sidebar - Modern left sidebar container */}
          <div className="relative hidden lg:block">
            <aside id="blog-post-sidebar" className="z-5 relative h-max flex-col gap-2 lg:sticky lg:top-28 [font-feature-settings:normal]">
              <div ref={sidebarContainerRef} className="px-3 md:px-4 relative border-l border-[#555555]">
                {/* Animated highlight bar */}
                <div className="absolute -left-px w-px bg-brand-teal-dark opacity-[var(--o,0)] transition-[transform,height,opacity] duration-[350ms] ease-out"
                  aria-hidden="true"
                  style={{
                    height: `var(--h,24px)`,
                    transform: `translateY(var(--y,0px))`,
                    opacity: 'var(--o,0)'
                  }}
                />
                <ul className="flex flex-col gap-3">
                  {toc.map((heading: any, idx: number) => (
                    <li key={heading.id} style={{ paddingLeft: 0 }}>
                      <a
                        className={`block h-full transition-colors duration-200 text-sm font-satoshi ${activeId === heading.id ? 'text-brand-teal-dark font-bold' : 'text-gray-600'}`}
                        href={`#${heading.id}`}
                        onClick={e => {
                          e.preventDefault();
                          const el = document.getElementById(heading.id);
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            window.history.replaceState(null, '', `#${heading.id}`);
                          }
                        }}
                        ref={el => {
                          if (activeId === heading.id && el && sidebarContainerRef.current) {
                            // Set highlight bar position/height via CSS vars on the sidebar container
                            const rect = el.getBoundingClientRect();
                            const containerRect = sidebarContainerRef.current.getBoundingClientRect();
                            const y = rect.top - containerRect.top;
                            sidebarContainerRef.current.style.setProperty('--y', `${y}px`);
                            sidebarContainerRef.current.style.setProperty('--h', `${rect.height}px`);
                            sidebarContainerRef.current.style.setProperty('--o', '1');
                          }
                        }}
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
          {/* Article body column */}
          <div>
            {/* Article Content */}
            <article className="prose prose-lg max-w-none font-satoshi">
              <PortableText value={post.body} components={portableTextComponents} />
            </article>
            {/* CTA Section */}
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
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost; 