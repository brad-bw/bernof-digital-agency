
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
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
      <section className="py-20 bg-gradient-to-b from-white to-slate-50" id="latest">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-8 w-48 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 w-96 bg-gray-200 rounded mx-auto animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="h-96 animate-pulse">
                <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                <CardContent className="p-6">
                  <div className="h-4 w-20 bg-gray-200 rounded mb-3"></div>
                  <div className="h-6 w-full bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const featuredPost = posts?.find(post => post.is_featured);
  const regularPosts = posts?.filter(post => !post.is_featured) || [];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50" id="latest">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest thoughts on technology, business strategy, and digital transformation.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <Badge className="bg-primary/10 text-primary px-4 py-2 text-sm font-semibold">
                Featured Article
              </Badge>
            </div>
            
            <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 bg-white">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full bg-gradient-to-br from-primary/10 to-accent/10">
                  {featuredPost.featured_image ? (
                    <img 
                      src={featuredPost.featured_image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary/20">
                        {featuredPost.title.charAt(0)}
                      </div>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  {featuredPost.blog_categories && (
                    <Badge 
                      className="w-fit mb-4 text-white font-medium"
                      style={{ backgroundColor: featuredPost.blog_categories.color }}
                    >
                      {featuredPost.blog_categories.name}
                    </Badge>
                  )}
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-6 gap-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author_name}</span>
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
                  
                  <Button 
                    asChild
                    className="w-fit bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold"
                  >
                    <Link to={`/blog/${featuredPost.slug}`}>
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card 
              key={post.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white cursor-pointer"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                  {post.featured_image ? (
                    <img 
                      src={post.featured_image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <div className="text-4xl font-bold text-primary/30">
                        {post.title.charAt(0)}
                      </div>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  {post.blog_categories && (
                    <Badge 
                      className="mb-3 text-white font-medium text-xs"
                      style={{ backgroundColor: post.blog_categories.color }}
                    >
                      {post.blog_categories.name}
                    </Badge>
                  )}
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author_name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.read_time}m</span>
                      </div>
                    </div>
                    <span className="text-xs">
                      {formatDistanceToNow(new Date(post.custom_published_date || post.published_at))} ago
                    </span>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {regularPosts.length > 0 && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Load More Articles
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
