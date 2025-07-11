import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    author: string;
    featuredImage?: string;
  };
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  // Format date as 'April 8, 2025'
  const formattedDate = post.date ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '';
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 bg-white h-full overflow-hidden blog-card font-satoshi">
      {post.featuredImage && (
        <div className="relative overflow-hidden aspect-[16/9] bg-gray-100">
          {/* Recommended size: 1200x630px (16:9) */}
          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width={1200}
            height={630}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      
      <CardContent className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 blog-meta">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p 
          className="text-gray-600 mb-4 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
        
        <a 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group-hover:gap-3"
        >
          Read More
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </CardContent>
    </Card>
  );
}; 