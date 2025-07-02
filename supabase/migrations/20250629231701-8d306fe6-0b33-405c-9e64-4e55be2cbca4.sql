
-- Create blog_posts table to store content synced from Sanity
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  sanity_id TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content JSONB NOT NULL,
  author_name TEXT NOT NULL,
  author_image TEXT,
  author_bio TEXT,
  featured_image TEXT,
  categories TEXT[] DEFAULT '{}',
  tags TEXT[] DEFAULT '{}',
  reading_time INTEGER DEFAULT 5,
  is_featured BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog_categories table
CREATE TABLE public.blog_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  color TEXT DEFAULT '#1F5F5B',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_blog_posts_published_at ON public.blog_posts(published_at DESC);
CREATE INDEX idx_blog_posts_categories ON public.blog_posts USING GIN(categories);
CREATE INDEX idx_blog_posts_is_featured ON public.blog_posts(is_featured);
CREATE INDEX idx_blog_categories_slug ON public.blog_categories(slug);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (blog content should be publicly accessible)
CREATE POLICY "Anyone can read published blog posts" 
  ON public.blog_posts 
  FOR SELECT 
  USING (published_at IS NOT NULL AND published_at <= now());

CREATE POLICY "Anyone can read blog categories" 
  ON public.blog_categories 
  FOR SELECT 
  USING (true);

-- Insert some default categories
INSERT INTO public.blog_categories (name, slug, description, color) VALUES
('Web Development', 'web-development', 'Latest trends and techniques in web development', '#1F5F5B'),
('Startup Growth', 'startup-growth', 'Tips and strategies for scaling your startup', '#20B2AA'),
('Digital Marketing', 'digital-marketing', 'Effective digital marketing strategies', '#2D5A56'),
('Tech Innovation', 'tech-innovation', 'Cutting-edge technology and innovation', '#4A7C78'),
('Business Strategy', 'business-strategy', 'Strategic insights for business success', '#8FB3AE');

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_blog_posts_updated_at 
    BEFORE UPDATE ON public.blog_posts 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
