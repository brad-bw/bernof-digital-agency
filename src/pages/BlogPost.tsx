import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { fetchBlogPosts } from '@/utils/sanityClient';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { PortableText } from '@portabletext/react';

// Utility to extract headings from Portable Text blocks for TOC
function extractHeadings(blocks: any[]) {
  if (!blocks) return [];
  return blocks
    .filter(block => block._type === 'block' && (block.style === 'h2' || block.style === 'h3'))
    .map(block => ({
      id: block._key,
      text: block.children?.map((child: any) => child.text).join(' ') || '',
      level: block.style,
    }));
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <img
        src={value.asset?.url}
        alt={value.alt || ''}
        className="my-8 rounded-2xl mx-auto max-h-96 w-auto"
        style={{ maxWidth: '100%' }}
      />
    ),
    code: ({ value }: any) => (
      <pre className="bg-gray-900 text-white rounded-lg p-4 overflow-x-auto my-6">
        <code>{value.code}</code>
      </pre>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl font-bold my-6 text-brand-teal-dark">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl font-bold my-6 text-brand-teal-dark">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold my-6 text-brand-teal-dark">{children}</h3>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-brand-teal-dark pl-6 italic text-gray-700 my-8">{children}</blockquote>
    ),
    normal: ({ children }: any) => <p className="my-4 text-lg text-gray-800">{children}</p>,
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-brand-teal-dark underline hover:text-brand-teal" target="_blank" rel="noopener noreferrer">{children}</a>
    ),
    strong: ({ children }: any) => <strong className="font-semibold text-brand-teal-dark">{children}</strong>,
    em: ({ children }: any) => <em className="italic text-gray-700">{children}</em>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc ml-6 my-4">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal ml-6 my-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="mb-2">{children}</li>,
    number: ({ children }: any) => <li className="mb-2">{children}</li>,
  },
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setIsLoading(true);
    fetchBlogPosts()
      .then((posts) => {
        const found = posts.find((p: any) => (p.slug?.current || p.slug) === slug);
        setPost(found || null);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Error fetching blog post');
        setIsLoading(false);
      });
  }, [slug]);

  // Memoize TOC extraction
  const toc = useMemo(() => post?.body ? extractHeadings(post.body) : [], [post?.body]);

  if (!slug) return <Navigate to="/blog" replace />;
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto py-32 px-4 animate-pulse">
          <div className="h-8 w-2/3 bg-gray-200 rounded mb-6"></div>
          <div className="h-4 w-1/3 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded mb-8"></div>
          <div className="h-96 w-full bg-gray-100 rounded-2xl mb-12"></div>
          <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-2/3 bg-gray-200 rounded mb-2"></div>
        </div>
      </div>
    );
  }
  if (error || !post) {
    console.error('Blog post error:', error);
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center blog-article font-satoshi">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Unable to load article</h2>
        <p className="text-gray-600 mb-8">Please try again later.</p>
        <Link to="/blog" className="bg-brand-teal-dark text-white px-6 py-3 rounded-lg hover:bg-brand-teal transition-colors font-semibold">
          <ArrowLeft className="inline-block mr-2" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto py-12 px-4">
        <Link to="/blog" className="text-brand-teal-dark hover:underline flex items-center mb-8">
          <ArrowLeft className="mr-2" /> Back to Blog
        </Link>
        <h1 className="text-4xl font-bold mb-4">{post.metaTitle}</h1>
        <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
          <Calendar size={16} />
          <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}</span>
          {post.author?.name && (
            <><User size={16} className="ml-4" />{post.author.name}</>
          )}
        </div>
        {post.featuredImage?.asset?.url && (
          <img src={post.featuredImage.asset.url} alt={post.featuredImage.alt || post.metaTitle} className="w-full rounded-2xl mb-8" />
        )}
        <div className="prose prose-lg max-w-none mb-12">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>
        {/* Table of Contents (optional) */}
        {toc.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">On this page</h2>
            <ul className="list-disc ml-6">
              {toc.map((heading: any) => (
                <li key={heading.id} className={heading.level === 'h3' ? 'ml-4' : ''}>
                  {heading.text}
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Social/Share/SEO fields can be added here */}
      </div>
    </div>
  );
};

export default BlogPost; 