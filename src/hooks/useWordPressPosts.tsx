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
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  date: string;
  author: string;
  authorId: number;
  featuredImage?: string;
  link: string;
  category?: string;
  authorImage?: string;
  authorBio?: string;
  tags?: string[];
}

// Real WordPress.com API integration
const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch(`${WORDPRESS_CONFIG.API_BASE}/posts/?number=${WORDPRESS_CONFIG.POSTS_PER_PAGE}&status=publish`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.posts || !Array.isArray(data.posts)) {
      throw new Error('Invalid response format from WordPress API');
    }
    
    return data.posts.map((post: WordPressPost) => {
      const manualOverride = MANUAL_AUTHOR_OVERRIDE[post.slug as keyof typeof MANUAL_AUTHOR_OVERRIDE];
      
      // Extract categories from WordPress response
      const categories = post.categories ? Object.keys(post.categories).filter(cat => cat !== 'Uncategorized') : [];
      const category = categories.length > 0 ? categories[0] : undefined;
      
      // Extract tags
      const tags = post.tags ? Object.keys(post.tags) : [];
      
      return {
        id: post.ID,
        title: post.title,
        excerpt: post.excerpt.replace(/<[^>]*>/g, ''), // Strip HTML from excerpt
        content: post.content,
        slug: post.slug,
        date: manualOverride?.date || new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        author: manualOverride?.author || post.author.name,
        authorId: post.author.ID,
        featuredImage: post.featured_image || post.post_thumbnail?.URL,
        link: post.URL,
        category: category,
        authorImage: manualOverride?.authorImage || post.author.avatar_URL,
        authorBio: manualOverride?.authorBio,
        tags: tags
      };
    });
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    throw error;
  }
};

const fetchBlogPost = async (slug: string): Promise<BlogPost | null> => {
  try {
    const response = await fetch(`${WORDPRESS_CONFIG.API_BASE}/posts/slug:${slug}/`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const post: WordPressPost = await response.json();
    
    if (!post || post.status !== 'publish') {
      return null;
    }
    
    const manualOverride = MANUAL_AUTHOR_OVERRIDE[slug as keyof typeof MANUAL_AUTHOR_OVERRIDE];
    
    // Extract categories from WordPress response
    const categories = post.categories ? Object.keys(post.categories).filter(cat => cat !== 'Uncategorized') : [];
    const category = categories.length > 0 ? categories[0] : undefined;
    
    // Extract tags
    const tags = post.tags ? Object.keys(post.tags) : [];
    
    return {
      id: post.ID,
      title: post.title,
      excerpt: post.excerpt.replace(/<[^>]*>/g, ''), // Strip HTML from excerpt
      content: post.content,
      slug: post.slug,
      date: manualOverride?.date || new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      author: manualOverride?.author || post.author.name,
      authorId: post.author.ID,
      featuredImage: post.featured_image || post.post_thumbnail?.URL,
      link: post.URL,
      category: category,
      authorImage: manualOverride?.authorImage || post.author.avatar_URL,
      authorBio: manualOverride?.authorBio,
      tags: tags
    };
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    throw error;
  }
};

export const useWordPressPosts = () => {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts,
    staleTime: WORDPRESS_CONFIG.CACHE_TIME,
    retry: WORDPRESS_CONFIG.RETRY_ATTEMPTS,
  });
};

export const useWordPressPost = (slug: string) => {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => fetchBlogPost(slug),
    enabled: !!slug,
    staleTime: WORDPRESS_CONFIG.CACHE_TIME,
    retry: WORDPRESS_CONFIG.RETRY_ATTEMPTS,
  });
}; 