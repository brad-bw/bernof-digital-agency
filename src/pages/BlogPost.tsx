import React, { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useWordPressPost } from '@/hooks/useWordPressPosts';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

// Utility to extract headings from HTML string for TOC
function extractHeadings(html: string) {
  if (!html) return [];
  const div = document.createElement('div');
  div.innerHTML = html;
  const headings = Array.from(div.querySelectorAll('h2, h3')).map((el) => ({
    id: el.id || el.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || '',
    text: el.textContent || '',
    level: el.tagName,
  }));
  return headings;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useWordPressPost(slug || '');

  // Memoize TOC extraction
  const toc = useMemo(() => post?.content ? extractHeadings(post.content) : [], [post?.content]);

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
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 bg-brand-teal-dark text-white px-6 py-3 rounded-lg hover:bg-brand-teal transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white blog-article font-satoshi">
      <div className="max-w-7xl mx-auto py-16 px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider">
              <Link to="/blog" className="hover:text-brand-teal-dark font-semibold">Blog</Link>
              <span>/</span>
              {post.category && <span className="text-brand-teal-dark font-semibold">{post.category}</span>}
            </div>
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-brand-teal-dark mb-4 leading-tight">{post.title}</h1>
            {/* Meta row */}
            <div className="blog-meta flex items-center gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-brand-teal-dark" />
                <span className="font-medium text-gray-700">{post.author}</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-teal-dark" />
                <span>{post.date}</span>
              </div>
              <span className="text-gray-300">•</span>
              <button className="inline-flex items-center gap-1 text-brand-teal-dark hover:text-brand-teal font-semibold transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
            {/* Featured Image */}
            {post.featuredImage && (
              <div className="mb-12 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img 
                  src={post.featuredImage} 
                  alt={post.title} 
                  className="w-full h-96 object-cover" 
                />
              </div>
            )}
            {/* Content */}
            <article className="prose prose-lg max-w-none text-gray-800">
              <div 
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </div>
          {/* Sidebar: TOC + CTA */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-32 flex flex-col gap-8">
              {/* Table of Contents */}
              {toc.length > 0 && (
                <nav className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8 shadow-sm">
                  <h2 className="text-lg font-bold text-brand-teal-dark mb-4">On this page</h2>
                  <ul className="space-y-2">
                    {toc.map((heading, i) => (
                      <li key={i} className={heading.level === 'H2' ? 'ml-0' : 'ml-4'}>
                        <a
                          href={`#${heading.id}`}
                          className="text-brand-teal-dark hover:text-brand-teal font-medium transition-colors text-sm"
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
              {/* Sticky CTA */}
              <div className="bg-brand-teal-dark rounded-2xl p-8 text-white shadow-lg flex flex-col items-center gap-4">
                <h3 className="text-2xl font-bold mb-2 text-white text-center">Start Your Project</h3>
                <p className="text-white/80 mb-4 text-center">Get a free consultation and project estimate from our expert team.</p>
                <a
                  href="https://calendly.com/bernof-co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-brand-teal-dark font-bold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 