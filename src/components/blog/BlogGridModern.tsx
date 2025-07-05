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
  }>;
}

export const BlogGridModern: React.FC<BlogGridModernProps> = ({ posts }) => {
  if (!posts || posts.length === 0) return null;
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