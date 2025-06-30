
import { BlogPost } from '@/types/blog';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const placeholderImages = [
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
  ];
  
  const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
  const imageUrl = post.featured_image || randomImage;

  if (featured) {
    return (
      <Link 
        to={`/blog/${post.slug}`} 
        className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-[#1F5F5B] hover:border-[#20B2AA] lg:col-span-2 h-96"
      >
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-[#1F5F5B]/90 group-hover:via-[#1F5F5B]/40 transition-all duration-500"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.slice(0, 2).map((category) => (
              <Badge 
                key={category} 
                className="bg-white/20 text-white backdrop-blur-sm border-white/20 group-hover:bg-[#20B2AA] group-hover:text-white transition-all duration-300"
              >
                {category}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
            {post.title}
          </h3>
          
          {post.excerpt && (
            <p className="text-white/90 mb-4 text-lg leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author_name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.reading_time} min read</span>
              </div>
            </div>
            
            <ArrowRight className="h-5 w-5 text-white/80 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={`/blog/${post.slug}`} 
      className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-[#1F5F5B] hover:border-[#20B2AA] h-full"
    >
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.slice(0, 2).map((category) => (
            <Badge 
              key={category} 
              className="bg-[#1F5F5B]/10 text-[#1F5F5B] group-hover:bg-[#20B2AA] group-hover:text-white transition-all duration-300"
            >
              {category}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300 leading-snug">
          {post.title}
        </h3>
        
        {post.excerpt && (
          <p className="text-gray-600 group-hover:text-white/90 mb-4 line-clamp-2 transition-colors duration-300">
            {post.excerpt}
          </p>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-gray-500 group-hover:text-white/80 text-sm transition-colors duration-300">
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
            <div className="flex items-center gap-1 text-gray-500 group-hover:text-white/80 text-sm transition-colors duration-300">
              <CalendarDays className="h-4 w-4" />
              <span>{format(new Date(post.published_at), 'MMM dd')}</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-end mt-4">
          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
