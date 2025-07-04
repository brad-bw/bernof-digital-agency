import React, { useState } from 'react';
import { useWordPressPosts } from '@/hooks/useWordPressPosts';
import { BlogGridModern } from '@/components/blog/BlogGridModern';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { Search, Filter } from 'lucide-react';

const Blog: React.FC = () => {
  const { data: posts, isLoading, error } = useWordPressPosts();
  const seoData = useSEO('blog');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

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
  })) || [];

  // Filter posts based on search and category
  const filteredPosts = mappedPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = [...new Set(mappedPosts.map(post => post.category).filter(Boolean))];

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
      
      {/* Blog Content */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center gap-3">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

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
          ) : filteredPosts.length > 0 ? (
            <BlogGridModern posts={filteredPosts} />
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">No blog posts found</h2>
              <p className="text-gray-600 mb-8">
                {searchTerm || selectedCategory 
                  ? "Try adjusting your search or filter criteria."
                  : "Check back soon for new articles!"
                }
              </p>
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