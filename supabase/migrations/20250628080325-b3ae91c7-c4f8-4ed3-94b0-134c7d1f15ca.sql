
-- Create categories table for blog organization
CREATE TABLE public.blog_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  color TEXT DEFAULT '#20B2AA',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert default categories
INSERT INTO public.blog_categories (name, slug, description, color) VALUES
('Brexit Strategy', 'brexit-strategy', 'Post-Brexit business strategies and insights', '#1F5F5B'),
('Market Analysis', 'market-analysis', 'Market trends and business analysis', '#20B2AA'),
('Startup Strategy', 'startup-strategy', 'Startup development and growth strategies', '#4A7C78'),
('Tech Insights', 'tech-insights', 'Technology trends and insights', '#8FB3AE');

-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  featured_image TEXT,
  author_name TEXT NOT NULL DEFAULT 'Kylie',
  author_avatar TEXT,
  category_id UUID REFERENCES public.blog_categories(id),
  read_time INTEGER DEFAULT 5,
  seo_title TEXT,
  seo_description TEXT,
  seo_keywords TEXT,
  published_at TIMESTAMP WITH TIME ZONE,
  custom_published_date TIMESTAMP WITH TIME ZONE,
  is_published BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog_tags table for better SEO and organization
CREATE TABLE public.blog_tags (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create junction table for blog posts and tags (many-to-many)
CREATE TABLE public.blog_post_tags (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES public.blog_tags(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(post_id, tag_id)
);

-- Insert some default tags
INSERT INTO public.blog_tags (name, slug) VALUES
('Brexit', 'brexit'),
('European Talent', 'european-talent'),
('UK Business', 'uk-business'),
('Digital Strategy', 'digital-strategy'),
('Cost Savings', 'cost-savings'),
('Remote Work', 'remote-work'),
('Startup Development', 'startup-development'),
('Web Development', 'web-development'),
('Software Development', 'software-development');

-- Insert the first blog post based on the uploaded image
INSERT INTO public.blog_posts (
  title, 
  slug, 
  excerpt, 
  content, 
  category_id, 
  read_time, 
  seo_title,
  seo_description,
  seo_keywords,
  is_published,
  is_featured,
  published_at,
  custom_published_date
) VALUES (
  'Post-Brexit Digital Strategy: Accessing European Talent',
  'post-brexit-digital-strategy-accessing-european-talent',
  'How UK businesses can leverage European expertise without visa complications post-Brexit.',
  '<h2>The Post-Brexit Talent Challenge</h2>

<p>Since Brexit, UK businesses have faced unprecedented challenges in accessing European talent. Traditional hiring models that once seamlessly connected British companies with EU expertise now involve complex visa processes, increased costs, and lengthy bureaucratic procedures.</p>

<h2>The Digital Solution: Remote European Partnerships</h2>

<p>Smart UK businesses are pivoting to remote-first partnerships with European talent. This approach offers several compelling advantages:</p>

<ul>
<li><strong>Cost Efficiency:</strong> Save 60-70% compared to local UK development costs</li>
<li><strong>No Visa Complications:</strong> Work with EU talent without immigration paperwork</li>
<li><strong>Access to Premium Skills:</strong> Tap into Europe''s thriving tech ecosystems</li>
<li><strong>Time Zone Alignment:</strong> Seamless collaboration within European business hours</li>
</ul>

<h2>Case Study: UK Fintech Success</h2>

<p>A London-based fintech startup reduced their development costs from £150,000 to £60,000 annually by partnering with a European development team. The result? They launched their MVP 40% faster and secured Series A funding six months ahead of schedule.</p>

<h2>Best Practices for UK-European Partnerships</h2>

<h3>1. Choose the Right Partner</h3>
<p>Look for European partners who understand UK business culture, regulatory requirements, and market dynamics. Cultural alignment is as important as technical expertise.</p>

<h3>2. Establish Clear Communication Protocols</h3>
<p>Set up regular stand-ups, use collaborative tools like Slack or Microsoft Teams, and maintain transparency in project management.</p>

<h3>3. Ensure Regulatory Compliance</h3>
<p>Your European partners should understand UK-specific requirements like GDPR implementation, FCA regulations for fintech, and industry-specific compliance needs.</p>

<h2>The Bernof Co Advantage</h2>

<p>At Bernof Co, we specialize in bridging the gap between UK businesses and European talent. Our unique positioning allows us to:</p>

<ul>
<li>Understand both UK business requirements and European development capabilities</li>
<li>Provide native English communication and documentation</li>
<li>Ensure UK regulatory compliance in all deliverables</li>
<li>Offer significant cost savings without compromising quality</li>
</ul>

<h2>Getting Started</h2>

<p>Ready to explore how European talent can accelerate your UK business growth? Here''s how to begin:</p>

<ol>
<li><strong>Assess Your Needs:</strong> Identify specific skills and project requirements</li>
<li><strong>Set Clear Objectives:</strong> Define project timelines, budgets, and success metrics</li>
<li><strong>Choose Your Partner:</strong> Select a European partner with proven UK market experience</li>
<li><strong>Start Small:</strong> Begin with a pilot project to test the partnership dynamics</li>
</ol>

<h2>Conclusion</h2>

<p>Post-Brexit doesn''t mean post-European collaboration. Smart UK businesses are finding innovative ways to access European talent, reduce costs, and accelerate growth. The key is choosing the right partnership model and the right European partner who understands your unique UK market needs.</p>

<p>Contact Bernof Co today to discover how European talent can transform your digital strategy and drive your business forward in the post-Brexit landscape.</p>',
  (SELECT id FROM public.blog_categories WHERE slug = 'brexit-strategy'),
  10,
  'Post-Brexit Digital Strategy: Access European Talent | UK Business Guide | Bernof Co',
  'Discover how UK businesses can leverage European talent post-Brexit without visa complications. Save 60-70% on development costs while accessing premium EU expertise. Expert strategies for UK companies.',
  'post-brexit strategy, UK European talent, brexit business solutions, UK remote development, european partnerships UK, post-brexit hiring, uk startup development, cost-effective development UK, european talent access, brexit digital transformation',
  true,
  true,
  NOW(),
  NOW()
);

-- Link the blog post with relevant tags
INSERT INTO public.blog_post_tags (post_id, tag_id)
SELECT 
  (SELECT id FROM public.blog_posts WHERE slug = 'post-brexit-digital-strategy-accessing-european-talent'),
  id
FROM public.blog_tags 
WHERE slug IN ('brexit', 'european-talent', 'uk-business', 'digital-strategy', 'cost-savings', 'remote-work');

-- Enable RLS for all blog tables
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_post_tags ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read access for published content
CREATE POLICY "Anyone can view published blog categories" ON public.blog_categories
  FOR SELECT USING (true);

CREATE POLICY "Anyone can view published blog posts" ON public.blog_posts
  FOR SELECT USING (is_published = true);

CREATE POLICY "Anyone can view blog tags" ON public.blog_tags
  FOR SELECT USING (true);

CREATE POLICY "Anyone can view blog post tags" ON public.blog_post_tags
  FOR SELECT USING (true);

-- Create indexes for better performance
CREATE INDEX idx_blog_posts_published ON public.blog_posts(is_published, published_at DESC);
CREATE INDEX idx_blog_posts_featured ON public.blog_posts(is_featured, published_at DESC);
CREATE INDEX idx_blog_posts_category ON public.blog_posts(category_id);
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_blog_categories_slug ON public.blog_categories(slug);
CREATE INDEX idx_blog_tags_slug ON public.blog_tags(slug);
