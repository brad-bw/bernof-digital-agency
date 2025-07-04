import { useQuery } from '@tanstack/react-query';

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
}

import { WORDPRESS_CONFIG } from '@/config/wordpress';

const WORDPRESS_API_BASE = WORDPRESS_CONFIG.API_BASE;

const fetchWordPressPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch(`${WORDPRESS_API_BASE}/posts?per_page=10&_embed`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts: WordPressPost[] = await response.json();
    
    // Transform WordPress posts to our format
    const transformedPosts: BlogPost[] = await Promise.all(
      posts.map(async (post) => {
        // Fetch author information
        let authorName = 'Unknown Author';
        try {
          const authorResponse = await fetch(`${WORDPRESS_API_BASE}/users/${post.author}`);
          if (authorResponse.ok) {
            const author: WordPressAuthor = await authorResponse.json();
            authorName = author.name;
          }
        } catch (error) {
          console.warn('Failed to fetch author:', error);
        }
        
        // Extract featured image
        let featuredImage: string | undefined;
        if (post.featured_media) {
          try {
            const mediaResponse = await fetch(`${WORDPRESS_API_BASE}/media/${post.featured_media}`);
            if (mediaResponse.ok) {
              const media = await mediaResponse.json();
              featuredImage = media.source_url;
            }
          } catch (error) {
            console.warn('Failed to fetch featured image:', error);
          }
        }
        
        return {
          id: post.id,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, ''), // Strip HTML
          content: post.content.rendered,
          slug: post.slug,
          date: new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          author: authorName,
          authorId: post.author,
          featuredImage,
          link: post.link
        };
      })
    );
    
    return transformedPosts;
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    throw error;
  }
};

const fetchWordPressPost = async (slug: string): Promise<BlogPost | null> => {
  try {
    const response = await fetch(`${WORDPRESS_API_BASE}/posts?slug=${slug}&_embed`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts: WordPressPost[] = await response.json();
    
    if (posts.length === 0) {
      return null;
    }
    
    const post = posts[0];
    
    // Fetch author information
    let authorName = 'Unknown Author';
    try {
      const authorResponse = await fetch(`${WORDPRESS_API_BASE}/users/${post.author}`);
      if (authorResponse.ok) {
        const author: WordPressAuthor = await authorResponse.json();
        authorName = author.name;
      }
    } catch (error) {
      console.warn('Failed to fetch author:', error);
    }
    
    // Extract featured image
    let featuredImage: string | undefined;
    if (post.featured_media) {
      try {
        const mediaResponse = await fetch(`${WORDPRESS_API_BASE}/media/${post.featured_media}`);
        if (mediaResponse.ok) {
          const media = await mediaResponse.json();
          featuredImage = media.source_url;
        }
      } catch (error) {
        console.warn('Failed to fetch featured image:', error);
      }
    }
    
    return {
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, ''),
      content: post.content.rendered,
      slug: post.slug,
      date: new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      author: authorName,
      authorId: post.author,
      featuredImage,
      link: post.link
    };
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    throw error;
  }
};

export const useWordPressPosts = () => {
  return useQuery({
    queryKey: ['wordpress-posts'],
    queryFn: fetchWordPressPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });
};

export const useWordPressPost = (slug: string) => {
  return useQuery({
    queryKey: ['wordpress-post', slug],
    queryFn: () => fetchWordPressPost(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });
}; 