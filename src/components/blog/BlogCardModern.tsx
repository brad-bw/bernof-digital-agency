import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BlogCardModernProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    author: string;
    authorAvatar?: string;
    category?: string;
    featuredImage?: string;
  };
  hero?: boolean;
}

export const BlogCardModern: React.FC<BlogCardModernProps> = ({ post, hero = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${post.slug}`);
  };

  return (
    <div
      className={
        `blog-card relative rounded-3xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer group font-satoshi ` +
        (hero
          ? 'bg-white min-h-[420px] flex flex-col md:flex-row md:items-stretch md:gap-8 p-0 md:p-0'
          : 'bg-white text-gray-900 p-6 hover:shadow-2xl hover:border-brand-teal-dark border border-gray-200')
      }
      style={{ minHeight: hero ? 420 : 320 }}
      onClick={handleClick}
    >
      {/* Featured Image */}
      {post.featuredImage && (
        <div className={hero ? 'md:w-1/2 w-full h-80 md:h-auto rounded-3xl overflow-hidden' : 'w-full h-56 rounded-2xl mb-4 overflow-hidden'}>
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className={hero ? 'flex-1 flex flex-col justify-center p-8' : ''}>
        {/* Meta row */}
        <div className="blog-meta flex items-center gap-3 mb-4">
          {post.category && (
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-brand-teal/10 text-brand-teal-dark uppercase">
              {post.category}
            </span>
          )}
          <span className="text-gray-400 text-xs">•</span>
          <span className="text-gray-700 text-xs font-medium">{post.author}</span>
          <span className="text-gray-400 text-xs">•</span>
          <span className="text-gray-400 text-xs">{post.date}</span>
        </div>
        {/* Title */}
        <h2 className={
          'font-bold blog-card-title ' +
          (hero
            ? 'text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight text-brand-teal-dark'
            : 'text-xl md:text-2xl mb-4 leading-snug line-clamp-3 text-brand-teal-dark')
        }>
          {post.title}
        </h2>
        {/* Excerpt */}
        <p className={hero ? 'text-lg text-gray-700 mb-8 line-clamp-4' : 'text-base text-gray-600 mb-6 line-clamp-3'} dangerouslySetInnerHTML={{ __html: post.excerpt }} />
      </div>
      {/* Overlay for dark teal hover effect */}
      <div className={
        'absolute inset-0 rounded-3xl pointer-events-none transition-all duration-300 ' +
        (hero
          ? 'bg-brand-teal-dark/10 opacity-0 group-hover:opacity-100'
          : 'bg-brand-teal-dark/10 opacity-0 group-hover:opacity-100')
      }></div>
    </div>
  );
}; 