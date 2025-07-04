import React from 'react';
import { useWordPressPosts } from '@/hooks/useWordPressPosts';
import { BlogGridModern } from '@/components/blog/BlogGridModern';

const BlogPreview: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Blog Preview (Modern Design)</h1>
        {isLoading && <div className="mb-8">Loading posts...</div>}
        {error && <div className="mb-8 text-red-600">Error fetching posts: {String(error)}</div>}
        <pre className="bg-gray-100 p-4 rounded mb-8 text-xs overflow-x-auto">{JSON.stringify(posts, null, 2)}</pre>
        {mappedPosts.length > 0 ? (
          <BlogGridModern posts={mappedPosts} />
        ) : (
          <div className="text-center text-gray-600">No blog posts found.</div>
        )}
      </div>
    </div>
  );
};

export default BlogPreview; 