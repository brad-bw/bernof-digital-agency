import React from 'react';
import { useWordPressPosts } from '@/hooks/useWordPressPosts';
import { BlogGridModern } from '@/components/blog/BlogGridModern';
import { BlogHero } from '@/components/blog/BlogHero';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";

const Blog: React.FC = () => {
  const { data: posts, isLoading, error } = useWordPressPosts();
  const seoData = useSEO('blog');

  // Map WordPress post data to BlogGridModern format
  const mappedPosts = posts?.map((post) => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    date: post.date,
    author: post.author,
    featuredImage: post.featuredImage,
    category: post.category,
    // authorAvatar and category omitted for now
  })) || [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <SEO {...seoData} />
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-center">
            <div className="h-8 w-48 bg-gray-200 rounded mb-4 mx-auto"></div>
            <div className="h-4 w-32 bg-gray-200 rounded mb-2 mx-auto"></div>
            <div className="h-4 w-64 bg-gray-200 rounded mb-2 mx-auto"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData} />
      <Header />
      
      {/* Hero Section */}
      <BlogHero />
      
      {/* Blog Content */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {error ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4 text-red-600">Error loading blog posts</h2>
              <p className="text-gray-600 mb-8">{String(error)}</p>
              <a 
                href="https://bernofco.wordpress.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Visit WordPress Blog
              </a>
            </div>
          ) : mappedPosts.length > 0 ? (
            <BlogGridModern posts={mappedPosts} />
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">No blog posts found</h2>
              <p className="text-gray-600 mb-8">Check back soon for new articles!</p>
              <a 
                href="https://bernofco.wordpress.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Visit WordPress Blog
              </a>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;