
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { BlogCategory } from '@/types/blog';

export const useBlogCategories = () => {
  return useQuery({
    queryKey: ['blog-categories'],
    queryFn: async () => {
      // First, get all unique categories from blog posts
      const { data: posts, error: postsError } = await supabase
        .from('blog_posts')
        .select('categories')
        .not('published_at', 'is', null)
        .lte('published_at', new Date().toISOString());

      if (postsError) {
        console.error('Error fetching blog posts for categories:', postsError);
        throw postsError;
      }

      // Extract unique categories
      const allCategories = posts?.flatMap(post => post.categories || []) || [];
      const uniqueCategories = [...new Set(allCategories)];

      // Try to get categories from the blog_categories table
      const { data: categoryData, error: categoryError } = await supabase
        .from('blog_categories')
        .select('*')
        .order('name');

      if (categoryError) {
        console.log('No categories table data, using post categories:', categoryError);
      }

      // Create category objects, preferring database data when available
      const categories: BlogCategory[] = uniqueCategories.map(categoryName => {
        const dbCategory = categoryData?.find(cat => cat.name === categoryName);
        return {
          id: dbCategory?.id || `temp-${categoryName}`,
          name: categoryName,
          slug: dbCategory?.slug || categoryName.toLowerCase().replace(/\s+/g, '-'),
          description: dbCategory?.description || null,
          color: dbCategory?.color || '#1F5F5B',
          created_at: dbCategory?.created_at || new Date().toISOString(),
        };
      });

      return categories;
    },
  });
};
