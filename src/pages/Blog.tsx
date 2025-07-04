import React from 'react';
import { useWordPressPosts } from '@/hooks/useWordPressPosts';
import { BlogHero } from '@/components/blog/BlogHero';
import { BlogCard } from '@/components/blog/BlogCard';

const Blog: React.FC = () => {
  const { data: posts, isLoading, error } = useWordPressPosts();

  return (
    <div className="min-h-screen bg-white">
      <BlogHero />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                    <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {error && (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Unable to Load Blog Posts</h3>
                  <p className="text-gray-600 mb-4">We're having trouble loading the latest articles. Please try again later.</p>
                  <button 
                    onClick={() => window.location.reload()}
                    className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}

            {!isLoading && !error && (
              <>
                {(!posts || posts.length === 0) ? (
                  <div className="text-center py-16">
                    <div className="max-w-md mx-auto">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">No Blog Posts Yet</h3>
                      <p className="text-gray-600">We're working on some great content. Check back soon!</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover insights, strategies, and expert analysis to help your business grow in the digital landscape.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                      ))}
                    </div>
                    
                    <div className="text-center mt-12">
                      <p className="text-gray-600 mb-4">Stay updated with our latest insights</p>
                      <div className="flex justify-center gap-4">
                        <a 
                          href="/startup-development"
                          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                        >
                          Explore Our Services
                        </a>
                        <button 
                          onClick={() => {
                            const element = document.getElementById('discovery-call');
                            element?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold"
                        >
                          Book Discovery Call
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;