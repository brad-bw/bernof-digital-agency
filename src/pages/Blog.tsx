import React, { useEffect, useState } from 'react';
import { fetchBlogPosts } from '@/utils/sanityClient';
import { BlogGridModern } from '@/components/blog/BlogGridModern';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { useSEO } from '@/hooks/useSEO';
import { Search, Filter } from 'lucide-react';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const seoData = useSEO('blog');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetchBlogPosts()
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Error fetching blog posts');
        setIsLoading(false);
      });
  }, []);

  // Map Sanity post data to BlogGridModern format
  const mappedPosts = posts?.map((post) => ({
    id: post._id,
    title: post.metaTitle,
    excerpt: post.excerpt,
    slug: post.slug?.current || post.slug,
    date: post.publishedAt,
    author: post.author?.name || '',
    featuredImage: post.featuredImage?.asset?.url,
    category: post.categories?.[0] || '',
  })) || [];

  // Filter posts based on search and category
  const filteredPosts = mappedPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      (post.title && post.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = [...new Set(mappedPosts.map(post => post.category).filter(Boolean))];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SEO {...seoData} />
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Blog</h1>
          <div className="flex gap-4 items-center">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search posts..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <select
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div>
          {isLoading ? (
            <div className="text-center py-12">Loading blog posts...</div>
          ) : error ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4 text-red-600">Error loading blog posts</h2>
              <p className="text-gray-600 mb-8">{String(error)}</p>
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
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;