import React from 'react';
import { useWordPressPosts } from '@/hooks/useWordPressPosts';
import { BlogGridModern } from '@/components/blog/BlogGridModern';

const Blog: React.FC = () => {
  const { data: posts, isLoading, error } = useWordPressPosts();

  // Map WordPress post data to BlogGridModern format
  const mappedPosts = posts?.map((post) => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    date: post.date,
    author: post.author,
    featuredImage: post.featuredImage,
    // authorAvatar and category omitted for now
  })) || [];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-8 w-48 bg-gray-200 rounded mb-4 mx-auto"></div>
          <div className="h-4 w-32 bg-gray-200 rounded mb-2 mx-auto"></div>
          <div className="h-4 w-64 bg-gray-200 rounded mb-2 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error || mappedPosts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No blog posts found</h2>
          <p className="text-gray-600">Check back soon for new articles!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <BlogGridModern posts={mappedPosts} />
      </div>
    </div>
  );
};

export default Blog;