
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useBlogPost } from "@/hooks/useBlogData";
import { formatDistanceToNow } from "date-fns";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading } = useBlogPost(slug!);

  if (isLoading) {
    return (
      <div className="min-h-screen font-inter">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="h-8 w-24 bg-gray-200 rounded mb-8 animate-pulse"></div>
              <div className="h-12 w-full bg-gray-200 rounded mb-4 animate-pulse"></div>
              <div className="h-12 w-3/4 bg-gray-200 rounded mb-8 animate-pulse"></div>
              <div className="h-64 w-full bg-gray-200 rounded mb-8 animate-pulse"></div>
              <div className="space-y-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen font-inter">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const seoData = {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt,
    keywords: post.seo_keywords || '',
    canonical: `https://bernofco.com/blog/${post.slug}`
  };

  return (
    <div className="min-h-screen font-inter">
      <SEO {...seoData} />
      <Header />
      <main className="pt-20">
        {/* Article Header */}
        <article className="relative">
          <div className="bg-gradient-to-b from-slate-50 to-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Button 
                  variant="ghost" 
                  asChild 
                  className="mb-8 text-primary hover:text-primary/80 -ml-4"
                >
                  <Link to="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                  </Link>
                </Button>

                {post.blog_categories && (
                  <Badge 
                    className="mb-6 text-white font-medium"
                    style={{ backgroundColor: post.blog_categories.color }}
                  >
                    {post.blog_categories.name}
                  </Badge>
                )}

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-[1.1]">
                  {post.title}
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span className="font-medium">{post.author_name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>
                      {formatDistanceToNow(new Date(post.custom_published_date || post.published_at))} ago
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{post.read_time} min read</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary/80 hover:bg-primary/10"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div 
                  className="prose prose-lg prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Article Footer */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Written by {post.author_name}</p>
                        <p className="text-gray-600 text-sm">Expert insights on digital strategy</p>
                      </div>
                    </div>
                    
                    <Button 
                      asChild 
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold"
                    >
                      <Link to="/startup-development">
                        Work With Us
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
