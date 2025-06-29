
export interface BlogPost {
  id: string;
  sanity_id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: any; // JSONB content from Sanity
  author_name: string;
  author_image?: string;
  author_bio?: string;
  featured_image?: string;
  categories: string[];
  tags: string[];
  reading_time: number;
  is_featured: boolean;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color: string;
  created_at: string;
}
