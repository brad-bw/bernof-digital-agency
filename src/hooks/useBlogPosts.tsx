
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/blog';

export const useBlogPosts = (category?: string, featured?: boolean) => {
  return useQuery({
    queryKey: ['blog-posts', category, featured],
    queryFn: async () => {
      console.log('Fetching blog posts with category:', category, 'featured:', featured);
      
      let query = supabase
        .from('blog_posts')
        .select('*')
        .not('published_at', 'is', null)
        .lte('published_at', new Date().toISOString())
        .order('published_at', { ascending: false });

      if (category && category !== 'all') {
        console.log('Filtering by category:', category);
        // Handle different category formats
        const categoryVariations = [
          category,
          category.replace(/-/g, ' '),
          category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          category.charAt(0).toUpperCase() + category.slice(1)
        ];
        
        // Use overlaps operator for array contains search
        query = query.or(categoryVariations.map(cat => `categories.cs.{${cat}}`).join(','));
      }

      if (featured) {
        query = query.eq('is_featured', true);
      }

      const { data, error } = await query;
      
      if (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
      }

      console.log('Blog posts fetched:', data?.length, 'posts');
      return data as BlogPost[];
    },
  });
};
