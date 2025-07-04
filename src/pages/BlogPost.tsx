import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useWordPressPost } from '@/hooks/useWordPressPosts';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useWordPressPost(slug || '');

  if (!slug) return <Navigate to="/blog" replace />;
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="animate-pulse">
                <div className="h-8 bg-white/20 rounded mb-4"></div>
                <div className="h-12 bg-white/20 rounded mb-8"></div>
                <div className="h-4 bg-white/20 rounded w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto py-16 px-6">
          <div className="animate-pulse space-y-6">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <a 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <a 
              href="/blog" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </a>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-white/80 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
            
            <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/20 transition-colors">
              <Share2 className="w-4 h-4" />
              Share Article
            </button>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        {post.featuredImage && (
          <div className="mb-12">
            <img 
              src={post.featuredImage} 
              alt={post.title} 
              className="w-full h-96 object-cover rounded-2xl shadow-lg" 
            />
          </div>
        )}
        
        <article className="prose prose-lg max-w-none">
          <div 
            className="text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        
        {/* Call to Action */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how Bernof Co can help you achieve your digital goals with our expert development and growth services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('discovery-call');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Book Discovery Call
              </button>
              <a 
                href="/startup-development"
                className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 