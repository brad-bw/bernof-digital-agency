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
        `relative rounded-3xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer group font-inter ` +
        (hero
          ? 'bg-primary text-white min-h-[420px] flex flex-col justify-end p-8 hover:bg-primary/90'
          : 'bg-white text-gray-900 p-6 hover:bg-primary/90 hover:text-white')
      }
      style={{ minHeight: hero ? 420 : 280 }}
      onClick={handleClick}
    >
      {/* Featured Image (optional) */}
      {post.featuredImage && hero && (
        <img
          src={post.featuredImage}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300 z-0"
        />
      )}
      <div className={hero ? 'relative z-10' : ''}>
        {/* Category pill */}
        {post.category && (
          <span className={
            'inline-block px-3 py-1 mb-4 rounded-full text-xs font-semibold tracking-wide ' +
            (hero
              ? 'bg-white/20 text-white border border-white/30'
              : 'bg-primary/10 text-primary')
          }>
            {post.category}
          </span>
        )}
        {/* Title */}
        <h2 className={
          'font-bold ' +
          (hero
            ? 'text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight'
            : 'text-xl md:text-2xl mb-4 leading-snug line-clamp-3')
        }>
          {post.title}
        </h2>
        {/* Excerpt */}
        {!hero && (
          <p className="text-base opacity-80 mb-6 line-clamp-3" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        )}
        {/* Author row */}
        <div className="flex items-center gap-3 mt-auto">
          {post.authorAvatar && (
            <img
              src={post.authorAvatar}
              alt={post.author}
              className="w-8 h-8 rounded-full border-2 border-white shadow"
            />
          )}
          <span className={hero ? 'text-white/90' : 'text-gray-700'}>{post.author}</span>
          <span className={hero ? 'text-white/60' : 'text-gray-400'}>• {post.date}</span>
        </div>
      </div>
      {/* Overlay for dark hover effect */}
      <div className={
        'absolute inset-0 rounded-3xl pointer-events-none transition-all duration-300 ' +
        (hero
          ? 'bg-black/30 opacity-0 group-hover:opacity-100'
          : 'bg-primary/90 opacity-0 group-hover:opacity-100')
      }></div>
    </div>
  );
}; 