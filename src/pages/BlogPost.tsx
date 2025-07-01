
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
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

  const renderContent = () => {
    if (!post.content) {
      return (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-gray-700">
            Welcome to our comprehensive guide on {post.title.toLowerCase()}. This article covers the essential concepts and best practices you need to know.
          </p>
        </div>
      );
    }

    if (typeof post.content === 'string') {
      return (
        <div 
          className="prose prose-lg max-w-none" 
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      );
    }

    if (typeof post.content === 'object' && post.content !== null) {
      if (Array.isArray(post.content)) {
        return (
          <div className="space-y-6">
            {post.content.map((block: any, index: number) => {
              if (block._type === 'block') {
                const text = block.children?.map((child: any) => child.text).join('') || '';
                
                if (block.style === 'h1') {
                  return <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6">{text}</h1>;
                }
                if (block.style === 'h2') {
                  return <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4">{text}</h2>;
                }
                if (block.style === 'h3') {
                  return <h3 key={index} className="text-xl font-bold text-gray-900 mb-3">{text}</h3>;
                }
                
                return (
                  <p key={index} className="text-lg leading-relaxed text-gray-700 mb-4">
                    {text}
                  </p>
                );
              }
              return null;
            })}
          </div>
        );
      }

      if (post.content.children && Array.isArray(post.content.children)) {
        const text = post.content.children.map((child: any) => child.text || '').join('');
        return (
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">{text}</p>
          </div>
        );
      }

      const extractText = (obj: any): string => {
        if (typeof obj === 'string') return obj;
        if (typeof obj === 'object' && obj !== null) {
          if (obj.text) return obj.text;
          if (Array.isArray(obj)) {
            return obj.map(extractText).join(' ');
          }
          return Object.values(obj).map(extractText).join(' ');
        }
        return '';
      };
      
      const extractedText = extractText(post.content).trim();
      if (extractedText) {
        return (
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">{extractedText}</p>
          </div>
        );
      }
    }

    return (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-gray-700">
          Welcome to our comprehensive guide on {post.title.toLowerCase()}. This article covers the essential concepts and best practices you need to know.
        </p>
      </div>
    );
  };

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
      
      <main className="pt-24">
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200"
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
                  className="bg-primary text-white hover:bg-primary/90"
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
                  <User className="h-4 w-4" />
                  <span className="font-medium text-gray-900">{post.author_name}</span>
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
          
          {post.featured_image && (
            <div className="mb-12">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          )}
          
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700">
            {renderContent()}
          </div>
          
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="outline"
                    className="text-gray-600 hover:text-primary hover:border-primary"
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
