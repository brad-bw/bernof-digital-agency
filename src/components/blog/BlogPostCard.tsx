
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

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
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop'
    ];
    return images[id.charCodeAt(0) % 3];
  };

  return (
    <Card className="group overflow-hidden border border-gray-200 shadow-none hover:shadow-lg hover:border-gray-300 transition-all duration-300 bg-white">
      <Link to={`/blog/${post.slug}`}>
        {/* Image - Clean, consistent aspect ratio */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.featured_image || getPlaceholderImage(post.id)}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Content - Clean spacing like Whimsical */}
        <div className="p-6">
          {/* Category - Simple tag */}
          {post.blog_categories && (
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full mb-3">
              {post.blog_categories.name}
            </span>
          )}
          
          {/* Title - Bold, clean */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
          
          {/* Excerpt - Clean, readable */}
          <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>
          
          {/* Meta - Clean, minimal */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span className="font-medium text-gray-700">{post.author_name}</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.read_time}m</span>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default BlogPostCard;
