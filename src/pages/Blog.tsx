
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogHero from '@/components/blog/BlogHero';
import BlogCategories from '@/components/blog/BlogCategories';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogAutoPopulate from '@/components/blog/BlogAutoPopulate';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Blog - Digital Insights & Industry Trends | Bernof Co</title>
        <meta name="description" content="Explore the latest insights on web development, startup growth, and digital innovation. Expert analysis and practical tips from Bernof Co's team." />
        <meta name="keywords" content="web development blog, startup insights, digital marketing, tech trends, business strategy" />
      </Helmet>
      
      <Header />
      <BlogAutoPopulate />
      
      <main className="pt-24">
        <BlogHero />
        
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
