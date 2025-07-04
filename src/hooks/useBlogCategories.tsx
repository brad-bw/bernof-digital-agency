
import { useQuery } from '@tanstack/react-query';

export const useBlogCategories = () => {
  return useQuery({
    queryKey: ['blog-categories'],
    queryFn: async () => {
      console.log('Blog categories hook called - returning empty array as no blog tables exist');
      
      // Since we don't have blog_posts or blog_categories tables in the database,
      // return an empty array for now
      return [];
    },
  });
};
