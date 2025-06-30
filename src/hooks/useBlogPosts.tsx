
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
        // Convert category slug back to category name for filtering
        const categoryName = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        console.log('Filtering by category name:', categoryName);
        query = query.contains('categories', [categoryName]);
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

export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .not('published_at', 'is', null)
        .lte('published_at', new Date().toISOString())
        .single();

      if (error) {
        console.error('Error fetching blog post:', error);
        throw error;
      }

      return data as BlogPost;
    },
  });
};
