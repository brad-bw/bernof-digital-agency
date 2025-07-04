import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface BlogPostMeta {
  title: string;
  date: string;
  excerpt?: string;
  slug: string;
}

// Blog posts are available at /blog/[slug], not /content/blog/ in the public URL.
// Markdown files live in /content/blog/ but are routed as /blog/[slug].

const getBlogPosts = (): BlogPostMeta[] => {
  const postsDir = path.join(import.meta.env.BASE_URL || '/', 'content/blog');
  let posts: BlogPostMeta[] = [];
  try {
    const files = fs.readdirSync(postsDir);
    posts = files
      .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
      .map((file) => {
        const filePath = path.join(postsDir, file);
        const raw = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(raw);
        return {
          title: data.title || file.replace(/\.(md|mdx)$/, ''),
          date: data.date || '',
          excerpt: data.excerpt || '',
          slug: file.replace(/\.(md|mdx)$/, ''),
        };
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (e) {
    // No posts yet
  }
  return posts;
};

const Blog: React.FC = () => {
  const posts = getBlogPosts();
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      {posts.length === 0 && <p>No blog posts yet. Check back soon!</p>}
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-6">
            <a href={`/blog/${post.slug}`} className="text-2xl font-semibold text-primary hover:underline">
              {post.title}
            </a>
            <div className="text-gray-500 text-sm mb-2">{post.date}</div>
            {post.excerpt && <p className="text-gray-700 mb-2">{post.excerpt}</p>}
            <a href={`/blog/${post.slug}`} className="text-blue-500 hover:underline text-sm">Read more →</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;