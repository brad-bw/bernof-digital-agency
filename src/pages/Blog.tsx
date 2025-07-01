
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogHero from '@/components/blog/BlogHero';
import BlogCategories from '@/components/blog/BlogCategories';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogDebug from '@/components/blog/BlogDebug';
import BlogAutoPopulate from '@/components/blog/BlogAutoPopulate';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showDebug, setShowDebug] = useState(false);
  const [isPopulating, setIsPopulating] = useState(false);

  // Only show debug in development
  const isDevelopment = import.meta.env.DEV;

  const populateArticles = async () => {
    setIsPopulating(true);
    try {
      console.log('Calling add-sample-articles function...');
      const { data, error } = await supabase.functions.invoke('add-sample-articles');
      
      if (error) {
        console.error('Error populating articles:', error);
        alert('Error populating articles: ' + error.message);
      } else {
        console.log('Articles populated successfully:', data);
        alert('Articles populated successfully! ' + data.message);
        // Refresh the page to show new articles
        window.location.reload();
      }
    } catch (error) {
      console.error('Error calling function:', error);
      alert('Error calling function: ' + error);
    } finally {
      setIsPopulating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Blog - Digital Insights & Industry Trends | Bernof Co</title>
        <meta name="description" content="Explore the latest insights on web development, startup growth, and digital innovation. Expert analysis and practical tips from Bernof Co's team." />
        <meta name="keywords" content="web development blog, startup insights, digital marketing, tech trends, business strategy" />
      </Helmet>
      
      <Header />
      <BlogAutoPopulate />
      
      <main>
        <BlogHero />
        
        {/* Debug and populate buttons - only shown in development */}
        {isDevelopment && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex gap-4">
            <button 
              onClick={() => setShowDebug(!showDebug)}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm"
            >
              {showDebug ? 'Hide Debug' : 'Show Debug'}
            </button>
            <Button 
              onClick={populateArticles}
              disabled={isPopulating}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm"
            >
              {isPopulating ? 'Populating...' : 'Populate Sample Articles'}
            </Button>
          </div>
        )}

        {showDebug && isDevelopment && <BlogDebug />}
        
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
