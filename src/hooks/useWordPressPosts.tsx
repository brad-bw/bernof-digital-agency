import { useQuery } from '@tanstack/react-query';
import { WORDPRESS_CONFIG, MANUAL_AUTHOR_OVERRIDE } from '@/config/wordpress';

interface WordPressPost {
  ID: number;
  site_ID: number;
  author: {
    ID: number;
    login: string;
    email: boolean;
    name: string;
    first_name: string;
    last_name: string;
    nice_name: string;
    URL: string;
    avatar_URL: string;
    profile_URL: string;
    site_ID: number;
  };
  date: string;
  modified: string;
  title: string;
  URL: string;
  short_URL: string;
  content: string;
  excerpt: string;
  slug: string;
  guid: string;
  status: string;
  sticky: boolean;
  password: string;
  parent: boolean;
  type: string;
  discussion: {
    comments_open: boolean;
    comment_status: string;
    pings_open: boolean;
    ping_status: string;
    comment_count: number;
  };
  likes_enabled: boolean;
  sharing_enabled: boolean;
  like_count: number;
  i_like: boolean;
  is_reblogged: boolean;
  is_following: boolean;
  global_ID: string;
  featured_image?: string;
  post_thumbnail?: {
    ID: number;
    URL: string;
    guid: string;
    mime_type: string;
    width: number;
    height: number;
  };
  format: string;
  geo: boolean;
  menu_order: number;
  page_template: string;
  publicize_URLs: any[];
  terms: {
    category: Record<string, any>;
    post_tag: Record<string, any>;
  };
  tags: Record<string, any>;
  categories: Record<string, any>;
  attachments: Record<string, any>;
  attachment_count: number;
  metadata: Array<{
    id: string;
    key: string;
    value: string;
  }>;
  meta: {
    links: {
      self: string;
      help: string;
      site: string;
      replies: string;
      likes: string;
    };
  };
  capabilities: {
    publish_post: boolean;
    delete_post: boolean;
    edit_post: boolean;
  };
  other_URLs: Record<string, any>;
}

interface BlogPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
}

// Update API base to self-hosted WordPress
const WP_API_BASE = 'https://blog.bernofco.com/wp-json/wp/v2';

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await fetch(`${WP_API_BASE}/posts?_embed`);
  if (!response.ok) throw new Error('Failed to fetch blog posts');
  return response.json();
};

const fetchBlogPost = async (slug: string): Promise<BlogPost | null> => {
  const response = await fetch(`${WP_API_BASE}/posts?slug=${slug}&_embed`);
  if (!response.ok) return null;
  const posts = await response.json();
  return posts.length > 0 ? posts[0] : null;
};

export const useWordPressPosts = () => {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts,
    staleTime: 5 * 60 * 1000,
    retry: 3,
  });
};

export const useWordPressPost = (slug: string) => {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => fetchBlogPost(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
    retry: 3,
  });
}; 