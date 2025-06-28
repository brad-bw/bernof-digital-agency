
import { Link } from "react-router-dom";
import { Clock, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image?: string;
  author_name: string;
  read_time: number;
  blog_categories?: {
    name: string;
    color: string;
    slug: string;
  };
}

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const getPlaceholderImage = (id: string) => {
    const images = [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'
    ];
    return images[id.charCodeAt(0) % 3];
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
      <Link to={`/blog/${post.slug}`} className="block">
        {/* Image */}
        <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <img 
            src={post.featured_image || getPlaceholderImage(post.id)}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
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
  );
};

export default BlogPostCard;
