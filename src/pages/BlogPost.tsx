
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, ChevronRight } from "lucide-react";
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
      <div className="min-h-screen font-inter bg-white">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-12">
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
      <div className="min-h-screen font-inter bg-white">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-12 text-center">
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
    <div className="min-h-screen font-inter bg-white">
      <SEO {...seoData} />
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb Navigation */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-6 py-4">
            <div className="max-w-4xl mx-auto">
              <nav className="flex items-center text-sm text-gray-600 space-x-2">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-gray-900 font-medium">{post.title}</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Article Header */}
        <article className="bg-white">
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Button 
                variant="ghost" 
                asChild 
                className="mb-8 text-gray-600 hover:text-primary -ml-3"
              >
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>

              {/* Category Badge */}
              {post.blog_categories && (
                <Badge 
                  className="mb-6 px-3 py-1 text-xs font-semibold tracking-wide uppercase"
                  style={{ 
                    backgroundColor: `${post.blog_categories.color}15`,
                    color: post.blog_categories.color,
                    border: `1px solid ${post.blog_categories.color}25`
                  }}
                >
                  {post.blog_categories.name}
                </Badge>
              )}

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                {post.title}
              </h1>

              {/* Subtitle/Excerpt */}
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-normal max-w-3xl">
                {post.excerpt}
              </p>

              {/* Author & Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-12 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{post.author_name}</p>
                    <p className="text-sm text-gray-500">Author</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">
                    {formatDistanceToNow(new Date(post.custom_published_date || post.published_at))} ago
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{post.read_time} min read</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-gray-500 hover:text-primary hover:bg-primary/5 ml-auto"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="container mx-auto px-6 mb-12">
            <div className="max-w-5xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden">
                <img 
                  src={post.featured_image || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=675&fit=crop"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Article Content with Sidebar Layout */}
          <div className="container mx-auto px-6 pb-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <div 
                    className="prose prose-lg prose-gray max-w-none 
                              prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
                              prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12
                              prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:text-gray-900
                              prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-gray-900
                              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                              prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                              prose-strong:text-gray-900 prose-strong:font-semibold
                              prose-ul:text-gray-700 prose-ul:mb-6 prose-ul:text-lg
                              prose-ol:text-gray-700 prose-ol:mb-6 prose-ol:text-lg
                              prose-li:text-gray-700 prose-li:mb-2 prose-li:text-lg prose-li:leading-relaxed
                              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8 prose-blockquote:font-medium prose-blockquote:text-gray-800"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* Article Footer */}
                  <div className="mt-16 pt-8 border-t border-gray-200">
                    <div className="bg-gray-50 rounded-xl p-8">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <User className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-lg">Written by {post.author_name}</p>
                            <p className="text-gray-600">Expert insights on digital strategy and business growth</p>
                          </div>
                        </div>
                        
                        <Button 
                          asChild 
                          size="lg"
                          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold"
                        >
                          <Link to="/startup-development">
                            Work with us
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-8">
                    {/* Table of Contents */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-bold text-gray-900 mb-4 text-lg">In this article</h3>
                      <nav className="space-y-2">
                        <a href="#" className="block text-sm text-gray-600 hover:text-primary transition-colors py-1">
                          The Post-Brexit Talent Challenge
                        </a>
                        <a href="#" className="block text-sm text-gray-600 hover:text-primary transition-colors py-1">
                          The Digital Solution
                        </a>
                        <a href="#" className="block text-sm text-gray-600 hover:text-primary transition-colors py-1">
                          Case Study: UK Fintech Success
                        </a>
                        <a href="#" className="block text-sm text-gray-600 hover:text-primary transition-colors py-1">
                          Best Practices
                        </a>
                        <a href="#" className="block text-sm text-gray-600 hover:text-primary transition-colors py-1">
                          Getting Started
                        </a>
                      </nav>
                    </div>

                    {/* CTA Card */}
                    <div className="bg-primary/5 border-2 border-primary/10 rounded-xl p-6">
                      <h3 className="font-bold text-gray-900 mb-3 text-lg">Ready to get started?</h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        Let's discuss how we can help accelerate your business growth with European expertise.
                      </p>
                      <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                        <Link to="/startup-development">
                          Get in touch
                        </Link>
                      </Button>
                    </div>

                    {/* Share */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-bold text-gray-900 mb-4 text-lg">Share this article</h3>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="flex-1">
                          Twitter
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          LinkedIn
                        </Button>
                      </div>
                    </div>
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
