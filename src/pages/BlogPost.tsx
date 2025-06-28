
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useBlogPost } from "@/hooks/useBlogData";
import { formatDistanceToNow } from "date-fns";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading } = useBlogPost(slug!);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="h-8 w-24 bg-gray-100 rounded mb-8 animate-pulse"></div>
            <div className="h-12 w-full bg-gray-100 rounded mb-4 animate-pulse"></div>
            <div className="h-12 w-3/4 bg-gray-100 rounded mb-8 animate-pulse"></div>
            <div className="h-64 w-full bg-gray-100 rounded mb-8 animate-pulse"></div>
            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-6 py-16 text-center">
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
    <div className="min-h-screen bg-white">
      <SEO {...seoData} />
      <Header />
      
      <main className="pt-20">
        {/* Clean article header like Whimsical */}
        <article>
          <div className="max-w-4xl mx-auto px-6 py-16">
            {/* Back Button - Clean, minimal */}
            <Button 
              variant="ghost" 
              asChild 
              className="mb-12 text-gray-600 hover:text-gray-900 -ml-3 font-medium"
            >
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Link>
            </Button>

            {/* Category - Clean tag */}
            {post.blog_categories && (
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full mb-8">
                {post.blog_categories.name}
              </span>
            )}

            {/* Title - Bold, clean typography like Whimsical */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              {post.title}
            </h1>

            {/* Subtitle - Clean, readable */}
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>

            {/* Author & Meta - Clean, minimal layout */}
            <div className="flex items-center gap-8 text-gray-600 mb-16 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
                <span className="font-medium text-gray-900">{post.author_name}</span>
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
            </div>
          </div>

          {/* Featured Image - Clean, wide layout */}
          <div className="max-w-5xl mx-auto px-6 mb-16">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={post.featured_image || "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=675&fit=crop"}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Article Content - Clean, readable typography like Whimsical */}
          <div className="max-w-4xl mx-auto px-6 pb-24">
            <div className="grid lg:grid-cols-4 gap-16">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div 
                  className="prose prose-lg max-w-none
                            prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
                            prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12
                            prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-10
                            prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8
                            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-gray-900 prose-strong:font-semibold
                            prose-ul:text-gray-700 prose-ul:mb-6
                            prose-ol:text-gray-700 prose-ol:mb-6
                            prose-li:text-gray-700 prose-li:mb-1 prose-li:leading-relaxed
                            prose-blockquote:border-l-4 prose-blockquote:border-blue-200 prose-blockquote:bg-blue-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-6 prose-blockquote:italic prose-blockquote:text-gray-800"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              {/* Sidebar - Clean, minimal like Whimsical */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Table of Contents */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Contents</h3>
                    <nav className="space-y-2 text-sm">
                      <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">
                        Introduction
                      </a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">
                        Key Insights
                      </a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">
                        Implementation
                      </a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">
                        Conclusion
                      </a>
                    </nav>
                  </div>

                  {/* CTA - Clean, minimal */}
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Work with us</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Ready to accelerate your business growth?
                    </p>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Link to="/startup-development">
                        Get started
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
