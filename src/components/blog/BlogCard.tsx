
import { BlogPost } from '@/types/blog';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const cardClasses = featured
    ? "group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 lg:col-span-2"
    : "group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1";

  const imageClasses = featured
    ? "w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
    : "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500";

  return (
    <Link to={`/blog/${post.slug}`} className={cardClasses}>
      <div className="relative overflow-hidden">
        <img
          src={post.featured_image || '/placeholder.svg'}
          alt={post.title}
          className={imageClasses}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {post.is_featured && (
          <Badge className="absolute top-4 left-4 bg-[#20B2AA] text-white px-3 py-1 text-xs font-semibold">
            Featured
          </Badge>
        )}
      </div>
      
      <div className={`p-6 ${featured ? 'lg:p-8' : ''}`}>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.slice(0, 2).map((category) => (
            <Badge 
              key={category} 
              variant="secondary" 
              className="bg-[#1F5F5B]/10 text-[#1F5F5B] hover:bg-[#1F5F5B]/20 transition-colors duration-200"
            >
              {category}
            </Badge>
          ))}
        </div>
        
        <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-[#1F5F5B] transition-colors duration-200 ${
          featured ? 'text-2xl lg:text-3xl leading-tight' : 'text-xl'
        }`}>
          {post.title}
        </h3>
        
        {post.excerpt && (
          <p className={`text-gray-600 mb-4 line-clamp-2 ${
            featured ? 'text-lg leading-relaxed' : 'text-base'
          }`}>
            {post.excerpt}
          </p>
        )}
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{post.author_name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.reading_time} min read</span>
            </div>
          </div>
          
          {post.published_at && (
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <span>{format(new Date(post.published_at), 'MMM dd, yyyy')}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
