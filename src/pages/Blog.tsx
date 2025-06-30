
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogHero from '@/components/blog/BlogHero';
import BlogCategories from '@/components/blog/BlogCategories';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogDebug from '@/components/blog/BlogDebug';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showDebug, setShowDebug] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Blog - Digital Insights & Industry Trends | Bernof Co</title>
        <meta name="description" content="Explore the latest insights on web development, startup growth, and digital innovation. Expert analysis and practical tips from Bernof Co's team." />
        <meta name="keywords" content="web development blog, startup insights, digital marketing, tech trends, business strategy" />
      </Helmet>
      
      <Header />
      
      <main>
        <BlogHero />
        
        {/* Debug toggle button - remove this after testing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => setShowDebug(!showDebug)}
            className="bg-red-500 text-white px-4 py-2 rounded text-sm"
          >
            {showDebug ? 'Hide Debug' : 'Show Debug'}
          </button>
        </div>

        {showDebug && <BlogDebug />}
        
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogCategories 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <BlogGrid selectedCategory={selectedCategory} />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
