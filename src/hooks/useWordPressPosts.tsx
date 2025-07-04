import { useQuery } from '@tanstack/react-query';
import { SAMPLE_BLOG_POSTS } from '@/config/wordpress';

interface WordPressPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  _links: {
    self: Array<{ href: string }>;
    collection: Array<{ href: string }>;
    about: Array<{ href: string }>;
    author: Array<{ embeddable: boolean; href: string }>;
    replies: Array<{ embeddable: boolean; href: string }>;
    'version-history': Array<{ count: number; href: string }>;
    'predecessor-version': Array<{ id: number; href: string }>;
    'wp:featuredmedia': Array<{ embeddable: boolean; href: string }>;
    'wp:attachment': Array<{ href: string }>;
    'wp:term': Array<{ taxonomy: string; embeddable: boolean; href: string }>;
    curies: Array<{ name: string; href: string; templated: boolean }>;
  };
}

interface WordPressAuthor {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {
    '24': string;
    '48': string;
    '96': string;
  };
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
}

// Since WordPress.com doesn't expose REST API for free sites,
// we'll use sample data that matches your actual blog content
const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return SAMPLE_BLOG_POSTS.map((post, index) => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    slug: post.slug,
    date: post.date,
    author: post.author,
    authorId: index + 1,
    featuredImage: post.featuredImage,
    link: `https://bernofco.wordpress.com/${post.slug}`,
    category: post.category
  }));
};

const fetchBlogPost = async (slug: string): Promise<BlogPost | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const post = SAMPLE_BLOG_POSTS.find(p => p.slug === slug);
  
  if (!post) {
    return null;
  }
  
  return {
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    slug: post.slug,
    date: post.date,
    author: post.author,
    authorId: post.id,
    featuredImage: post.featuredImage,
    link: `https://bernofco.wordpress.com/${post.slug}`,
    category: post.category
  };
};

export const useWordPressPosts = () => {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });
};

export const useWordPressPost = (slug: string) => {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => fetchBlogPost(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });
}; 