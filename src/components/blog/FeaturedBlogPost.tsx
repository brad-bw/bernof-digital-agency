
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
  blog_categories?: {
    name: string;
    color: string;
    slug: string;
  };
}

interface FeaturedBlogPostProps {
  post: BlogPost;
}

const FeaturedBlogPost = ({ post }: FeaturedBlogPostProps) => {
  return (
    <div className="mb-20">
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
        <Link to={`/blog/${post.slug}`} className="block group">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-96 lg:h-auto bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
              {post.featured_image ? (
                <img 
                  src={post.featured_image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&crop=faces"
                    alt={post.title}
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
              {post.blog_categories && (
                <Badge 
                  className="w-fit mb-6 px-3 py-1 text-xs font-semibold tracking-wide uppercase"
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors duration-200">
                {post.title}
              </h2>
              
              {/* Excerpt */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              
              {/* Meta info */}
              <div className="flex items-center text-sm text-gray-500 mb-8 gap-6">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-700">{post.author_name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {formatDistanceToNow(new Date(post.custom_published_date || post.published_at))} ago
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.read_time} min read</span>
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
  );
};

export default FeaturedBlogPost;
