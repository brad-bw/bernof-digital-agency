import React, { useEffect, useState } from 'react';
import { fetchBlogPosts, fetchBlogPostsDirect } from '@/utils/sanityClient';
import { BlogGridModern } from '@/components/blog/BlogGridModern';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { useSEO } from '@/hooks/useSEO';
import { Search, Filter } from 'lucide-react';

const HERO_BG = 'bg-[#1b5c56] bg-gradient-to-br from-[#1b5c56] to-[#133c38]'; // Dark teal with darker gradient
const HERO_TEXT = 'text-white';
const HERO_ACCENT = 'text-[#2ed6c5]'; // Accent color for "Insights"
const BUTTON_BG = 'bg-[#2ed6c5] text-[#1b5c56]';
const BUTTON_OUTLINE = 'border border-white text-white';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const seoData = useSEO('blog');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetchBlogPostsDirect()
      .then((result) => {
        setPosts(Array.isArray(result) ? result : []);
        setIsLoading(false);
        console.log('Direct fetch result:', result);
      })
      .catch((err) => {
        setError(err.message || 'Unknown error');
        setIsLoading(false);
        console.error('Direct fetch error:', err);
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
      {/* Hero Section */}
      <section className={`${HERO_BG} ${HERO_TEXT} w-full py-16 px-4 md:px-0 relative`}>
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center blog-hero font-satoshi">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Digital <span className={HERO_ACCENT}>Insights</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Explore the latest trends in web development, startup growth, and digital innovation. Your guide to building better digital experiences.
          </p>
          {/* Redesigned Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl justify-center items-center mt-4">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-4 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search posts..."
                className="pl-12 pr-4 py-2 w-full rounded-full bg-white/90 border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2ed6c5] text-black font-satoshi placeholder-gray-400 transition"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative w-full md:w-1/2">
              <Filter className="absolute left-4 top-3 text-gray-400" size={18} />
              <select
                className="pl-12 pr-4 py-2 w-full rounded-full bg-white/90 border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2ed6c5] text-black font-satoshi transition"
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
      </section>
      {/* Articles Section */}
      <div id="articles" className="max-w-7xl mx-auto py-12 px-4">
        <div>
          {isLoading ? (
            <div className="text-center py-12">Loading blog posts...</div>
          ) : error ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4 text-red-600">Unable to load articles</h2>
              <p className="text-gray-600 mb-8">Please try again later.</p>
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