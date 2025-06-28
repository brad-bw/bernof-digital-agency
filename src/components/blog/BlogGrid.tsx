
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowUpRight, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image?: string;
  author_name: string;
  read_time: number;
  published_at: string;
  custom_published_date?: string;
  is_featured: boolean;
  blog_categories?: {
    name: string;
    color: string;
    slug: string;
  };
}

interface BlogGridProps {
  posts?: BlogPost[];
  isLoading: boolean;
}

const BlogGrid = ({ posts, isLoading }: BlogGridProps) => {
  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Featured post skeleton */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="h-80 bg-gray-200 animate-pulse"></div>
                <CardContent className="p-8 lg:p-12">
                  <div className="h-6 w-20 bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="h-8 w-full bg-gray-200 rounded mb-3 animate-pulse"></div>
                  <div className="h-8 w-3/4 bg-gray-200 rounded mb-6 animate-pulse"></div>
                  <div className="h-4 w-full bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 w-2/3 bg-gray-200 rounded mb-8 animate-pulse"></div>
                  <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Regular posts skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-56 bg-gray-200 animate-pulse"></div>
                <CardContent className="p-6">
                  <div className="h-4 w-16 bg-gray-200 rounded mb-3 animate-pulse"></div>
                  <div className="h-6 w-full bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-6 w-3/4 bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="h-4 w-full bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const featuredPost = posts?.find(post => post.is_featured);
  const regularPosts = posts?.filter(post => !post.is_featured).slice(0, 9) || [];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Featured Post - Large Hero Style like Whimsical */}
        {featuredPost && (
          <div className="mb-20">
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <Link to={`/blog/${featuredPost.slug}`} className="block group">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-80 lg:h-auto bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    {featuredPost.featured_image ? (
                      <img 
                        src={featuredPost.featured_image} 
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                        <img 
                          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&crop=faces"
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content Side */}
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    {/* Category badge */}
                    {featuredPost.blog_categories && (
                      <Badge 
                        className="w-fit mb-6 px-3 py-1 text-xs font-semibold tracking-wide uppercase"
                        style={{ 
                          backgroundColor: `${featuredPost.blog_categories.color}15`,
                          color: featuredPost.blog_categories.color,
                          border: `1px solid ${featuredPost.blog_categories.color}25`
                        }}
                      >
                        {featuredPost.blog_categories.name}
                      </Badge>
                    )}
                    
                    {/* Title */}
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors duration-200">
                      {featuredPost.title}
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    
                    {/* Meta info */}
                    <div className="flex items-center text-sm text-gray-500 mb-8 gap-6">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-700">{featuredPost.author_name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {formatDistanceToNow(new Date(featuredPost.custom_published_date || featuredPost.published_at))} ago
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.read_time} min read</span>
                      </div>
                    </div>
                    
                    {/* Read more */}
                    <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all duration-200">
                      <span>Read article</span>
                      <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </div>
                  </CardContent>
                </div>
              </Link>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid - Clean 3-column like Whimsical */}
        {regularPosts.length > 0 && (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card 
                  key={post.id} 
                  className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    {/* Image */}
                    <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                      {post.featured_image ? (
                        <img 
                          src={post.featured_image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <img 
                          src={`https://images.unsplash.com/photo-${
                            ['1461749280684-dccba630e2f6', '1581091226825-a6a2a5aee158', '1498050108023-c5249f4df085'][post.id.charCodeAt(0) % 3]
                          }?w=600&h=400&fit=crop`}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                    </div>
                    
                    {/* Content */}
                    <CardContent className="p-6">
                      {/* Category */}
                      {post.blog_categories && (
                        <Badge 
                          className="mb-4 px-2 py-1 text-xs font-semibold tracking-wide uppercase"
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-200">
                        {post.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <span className="font-medium text-gray-700">{post.author_name}</span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.read_time}m</span>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-16">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary px-8 py-3 text-base font-semibold rounded-lg transition-all duration-300"
              >
                Load more articles
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
