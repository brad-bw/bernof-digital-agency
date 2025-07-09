import React, { useEffect, useState, useRef } from 'react';
import { fetchBlogPosts, fetchBlogPostsDirect } from '@/utils/sanityClient';
import { BlogGridModern } from '@/components/blog/BlogGridModern';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { useSEO } from '@/hooks/useSEO';
import { Search, Filter, BookOpen, AlertCircle } from 'lucide-react';
import useErrorLogger from '@/hooks/useErrorLogger';
import { Link } from 'react-router-dom';

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
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const { error: loggerError, log, clearError } = useErrorLogger();

  useEffect(() => {
    setIsLoading(true);
    fetchBlogPostsDirect()
      .then((posts) => {
        setPosts(posts);
        setIsLoading(false);
      })
      .catch((err) => {
        log(err, { context: 'Blog fetch' });
        setIsLoading(false);
      });
  }, [log]);

  // Map Sanity post data to BlogGridModern format
  const mappedPosts = posts?.map((post) => ({
    id: post._id,
    title: post.metaTitle,
    excerpt: post.excerpt,
    slug: post.slug?.current || post.slug,
    date: post.publishedAt,
    author: post.author?.name || '',
    featuredImage: post.featuredImage?.asset?.url,
    cardThumbnail: post.cardThumbnail?.asset?.url,
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

  // Close filter dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setShowFilter(false);
      }
    }
    if (showFilter) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showFilter]);

  if (loggerError) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-3xl mx-auto py-32 px-4 flex flex-col items-center justify-center blog-article font-satoshi">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Unable to load blog</h2>
          <p className="text-gray-600 mb-8">An error occurred. Please contact support with this code: {loggerError.errorId}</p>
          <button onClick={clearError} className="bg-brand-teal-dark text-white px-6 py-3 rounded-lg hover:bg-brand-teal transition-colors font-semibold mb-4">Try Again</button>
          <Link to="/" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold">Go Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

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
          {/* Modern Search & Filter UI - search always visible, filter only if >10 articles, desktop only */}
          <div className="hidden md:flex w-full max-w-2xl justify-center items-center mt-4 gap-4 relative">
            {/* Search Bar */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-12 pr-4 py-3 w-full rounded-full bg-white/90 border border-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-[#2ed6c5] text-black font-satoshi placeholder-gray-400 text-lg transition"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={{ minWidth: 280, maxWidth: 480 }}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
            </div>
            {/* Filter Icon - only if >10 articles */}
            {mappedPosts.length > 10 && (
              <div className="relative" ref={filterRef}>
                <button
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 border border-gray-200 shadow-md hover:bg-[#2ed6c5]/10 transition"
                  onClick={() => setShowFilter(v => !v)}
                  aria-label="Filter articles"
                >
                  <Filter className="text-[#2ed6c5]" size={24} />
                </button>
                {/* Dropdown */}
                {showFilter && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-20 p-4">
                    <div className="mb-2 text-sm font-semibold text-gray-700">Filter by category</div>
                    <select
                      className="w-full p-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 font-satoshi"
                      value={selectedCategory}
                      onChange={e => { setSelectedCategory(e.target.value); setShowFilter(false); }}
                    >
                      <option value="">All Categories</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Articles Section */}
      <div id="articles" className="max-w-7xl mx-auto py-12 px-4">
        <div>
          {isLoading ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-teal/10 rounded-full mb-6">
                <BookOpen className="w-8 h-8 text-brand-teal-dark animate-pulse" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-brand-teal-dark">Loading insights...</h2>
              <p className="text-gray-600">Fetching the latest articles for you</p>
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-red-600">Unable to load articles</h2>
              <p className="text-gray-600 mb-8">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="bg-brand-teal-dark text-white px-6 py-3 rounded-lg hover:bg-brand-teal transition-colors font-semibold"
              >
                Try Again
              </button>
            </div>
          ) : filteredPosts.length > 0 ? (
            <BlogGridModern posts={filteredPosts} />
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
                <BookOpen className="w-8 h-8 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-700">No articles found</h2>
              <p className="text-gray-600 mb-8">
                {searchTerm || selectedCategory 
                  ? "Try adjusting your search or filter criteria to find what you're looking for."
                  : "We're working on new content. Check back soon for fresh insights!"
                }
              </p>
              {(searchTerm || selectedCategory) && (
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
                  }}
                  className="bg-brand-teal-dark text-white px-6 py-3 rounded-lg hover:bg-brand-teal transition-colors font-semibold"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;