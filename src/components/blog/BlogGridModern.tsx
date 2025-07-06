import React from 'react';
import { BlogCardModern } from './BlogCardModern';

interface BlogGridModernProps {
  posts: Array<{
    id: number;
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    author: string;
    authorAvatar?: string;
    category?: string;
    featuredImage?: string;
    cardThumbnail?: string;
  }>;
}

export const BlogGridModern: React.FC<BlogGridModernProps> = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  // If only one post, show it as a hero
  if (posts.length === 1) {
    return (
      <div className="blog-main w-full">
        <BlogCardModern post={posts[0]} hero />
      </div>
    );
  }

  // If two posts, show first as hero, second as regular card
  if (posts.length === 2) {
    const [hero, second] = posts;
    return (
      <div className="blog-main w-full flex flex-col gap-16">
        <div className="mb-8">
          <BlogCardModern post={hero} hero />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCardModern post={second} />
        </div>
      </div>
    );
  }

  // For 3+ posts, show first as hero, rest in grid
  const [hero, ...rest] = posts;
  return (
    <div className="blog-main w-full flex flex-col gap-16">
      {/* Hero card */}
      <div className="mb-8">
        <BlogCardModern post={hero} hero />
      </div>
      {/* Grid of other posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rest.map((post) => (
          <BlogCardModern key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}; 