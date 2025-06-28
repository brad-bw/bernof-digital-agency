
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
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
  const getPlaceholderImage = () => {
    return 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop';
  };

  return (
    <Card className="group overflow-hidden border border-gray-200 shadow-none hover:shadow-lg hover:border-gray-300 transition-all duration-300 bg-white">
      <Link to={`/blog/${post.slug}`}>
        <div className="grid lg:grid-cols-2">
          {/* Image Side - Clean Whimsical style */}
          <div className="relative h-80 lg:h-96 overflow-hidden">
            <img 
              src={post.featured_image || getPlaceholderImage()} 
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Content Side - Clean typography */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            {/* Category - Clean tag */}
            {post.blog_categories && (
              <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full mb-4 w-fit">
                {post.blog_categories.name}
              </span>
            )}
            
            {/* Title - Bold, clean typography like Whimsical */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-200">
              {post.title}
            </h2>
            
            {/* Excerpt - Clean, readable */}
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            {/* Meta info - Clean, minimal */}
            <div className="flex items-center text-sm text-gray-500 gap-6">
              <span className="font-medium text-gray-700">{post.author_name}</span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDistanceToNow(new Date(post.custom_published_date || post.published_at))} ago</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.read_time} min</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default FeaturedBlogPost;
