
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useBlogPost } from '@/hooks/useBlogPost';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useBlogPost(slug || '');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="h-96 bg-gray-200 rounded-2xl mb-8"></div>
            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt || '',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const placeholderImages = [
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
  ];
  
  const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
  const imageUrl = post.featured_image || randomImage;

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{post.title} | Bernof Co Blog</title>
        <meta name="description" content={post.excerpt || `Read ${post.title} on Bernof Co blog`} />
        {post.featured_image && <meta property="og:image" content={post.featured_image} />}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || ''} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={post.author_name} />
        {post.published_at && (
          <meta property="article:published_time" content={post.published_at} />
        )}
      </Helmet>
      
      <Header />
      
      <main>
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-[#1F5F5B] hover:text-[#2D5A56] transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">Back to Blog</span>
            </Link>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories?.map((category) => (
                <Badge 
                  key={category} 
                  className="bg-[#1F5F5B] text-white hover:bg-[#2D5A56]"
                >
                  {category}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  {post.author_image && (
                    <img 
                      src={post.author_image} 
                      alt={post.author_name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span className="font-medium text-gray-900">{post.author_name}</span>
                    </div>
                    {post.author_bio && (
                      <p className="text-sm text-gray-500">{post.author_bio}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm">
                  {post.published_at && (
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>{format(new Date(post.published_at), 'MMMM dd, yyyy')}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.reading_time} min read</span>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleShare}
                className="gap-2"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </header>
          
          <div className="mb-12">
            <img
              src={imageUrl}
              alt={post.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#1F5F5B] prose-strong:text-gray-900">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                Welcome to the world of modern web development! This comprehensive guide will walk you through the essential concepts, tools, and best practices that every developer should know in 2025.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What is Modern Web Development?</h2>
              <p className="leading-relaxed text-gray-700">
                Modern web development encompasses a wide range of technologies, frameworks, and methodologies that have evolved to meet the demands of today's web applications. From responsive design to progressive web apps, developers now have access to powerful tools that make building robust, scalable applications easier than ever.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Technologies to Master</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>React & Next.js:</strong> Modern JavaScript frameworks for building interactive user interfaces</li>
                <li><strong>TypeScript:</strong> Adding type safety to JavaScript for better development experience</li>
                <li><strong>Tailwind CSS:</strong> Utility-first CSS framework for rapid UI development</li>
                <li><strong>Node.js:</strong> JavaScript runtime for server-side development</li>
                <li><strong>GraphQL:</strong> Query language for APIs that gives clients exactly what they need</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Best Practices for Success</h2>
              <p className="leading-relaxed text-gray-700">
                To excel in modern web development, focus on writing clean, maintainable code, staying updated with the latest trends, and continuously learning new technologies. Remember that the web development landscape is constantly evolving, so adaptability is key.
              </p>
              
              <blockquote className="border-l-4 border-[#1F5F5B] pl-6 italic text-gray-600 my-8">
                "The best way to learn web development is by building real projects and solving actual problems. Don't just follow tutorials – create something meaningful."
              </blockquote>
            </div>
          </div>
          
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="outline"
                    className="text-gray-600 hover:text-[#1F5F5B] hover:border-[#1F5F5B]"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
