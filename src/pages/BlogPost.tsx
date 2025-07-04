import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface BlogPostMeta {
  title: string;
  date: string;
  excerpt?: string;
  image?: string;
  slug: string;
}

const getBlogPost = (slug: string): { meta: BlogPostMeta; content: string } | null => {
  const filePathMd = path.join(import.meta.env.BASE_URL || '/', 'content/blog', `${slug}.md`);
  const filePathMdx = path.join(import.meta.env.BASE_URL || '/', 'content/blog', `${slug}.mdx`);
  let filePath = '';
  if (fs.existsSync(filePathMd)) filePath = filePathMd;
  else if (fs.existsSync(filePathMdx)) filePath = filePathMdx;
  else return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return {
    meta: {
      title: data.title || slug,
      date: data.date || '',
      excerpt: data.excerpt || '',
      image: data.image || '',
      slug,
    },
    content,
  };
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/blog" replace />;
  const post = getBlogPost(slug);
  if (!post) return <div className="max-w-2xl mx-auto py-16 px-4"><h1 className="text-3xl font-bold mb-4">404 - Blog Post Not Found</h1><a href="/blog" className="text-blue-500 hover:underline">Back to Blog</a></div>;
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.meta.title}</h1>
      <div className="text-gray-500 text-sm mb-4">{post.meta.date}</div>
      {post.meta.image && <img src={post.meta.image} alt={post.meta.title} className="w-full h-64 object-cover rounded-xl mb-8" />}
      <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content.split('\n').map(line => line.trim()).join('<br/>') }} />
      <a href="/blog" className="block mt-8 text-blue-500 hover:underline">← Back to Blog</a>
    </div>
  );
};

export default BlogPost; 