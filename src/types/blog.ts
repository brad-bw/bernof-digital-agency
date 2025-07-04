export interface BlogPostMeta {
  title: string;
  date: string;
  excerpt?: string;
  slug: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color: string;
  created_at: string;
}
