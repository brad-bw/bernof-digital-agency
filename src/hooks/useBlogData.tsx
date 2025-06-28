
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useBlogPosts = (publishedOnly: boolean = true) => {
  return useQuery({
    queryKey: ['blog-posts', publishedOnly],
    queryFn: async () => {
      let query = supabase
        .from('blog_posts')
        .select(`
          *,
          blog_categories (
            id,
            name,
            slug,
            color
          )
        `)
        .order('published_at', { ascending: false });

      if (publishedOnly) {
        query = query.eq('is_published', true);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
      }

      return data;
    },
  });
};

export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          blog_categories (
            id,
            name,
            slug,
            color
          )
        `)
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (error) {
        console.error('Error fetching blog post:', error);
        throw error;
      }

      return data;
    },
    enabled: !!slug,
  });
};

export const useBlogCategories = () => {
  return useQuery({
    queryKey: ['blog-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_categories')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error fetching blog categories:', error);
        throw error;
      }

      return data;
    },
  });
};

export const useBlogTags = () => {
  return useQuery({
    queryKey: ['blog-tags'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_tags')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error fetching blog tags:', error);
        throw error;
      }

      return data;
    },
  });
};

export const useCreateBlogPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (postData: any) => {
      const { data, error } = await supabase
        .from('blog_posts')
        .insert([postData])
        .select()
        .single();

      if (error) {
        console.error('Error creating blog post:', error);
        throw error;
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
    },
  });
};

export const useUpdateBlogPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...postData }: any) => {
      const { data, error } = await supabase
        .from('blog_posts')
        .update(postData)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Error updating blog post:', error);
        throw error;
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
    },
  });
};

export const useDeleteBlogPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting blog post:', error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
    },
  });
};
