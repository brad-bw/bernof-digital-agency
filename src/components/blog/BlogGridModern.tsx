import React from 'react';
import { BlogCardModern } from './BlogCardModern';

interface BlogGridModernProps {
  posts: Array<{
    id: number;
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    author: string;
    authorAvatar?: string;
    category?: string;
    featuredImage?: string;
  }>;
}

export const BlogGridModern: React.FC<BlogGridModernProps> = ({ posts }) => {
  if (!posts || posts.length === 0) return null;
  const [hero, ...rest] = posts;
  return (
    <div className="w-full flex flex-col lg:flex-row gap-12 font-inter">
      {/* Main grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Hero card (spans 2 rows on desktop) */}
        <div className="md:col-span-2 lg:col-span-2 row-span-2">
          <BlogCardModern post={hero} hero />
        </div>
        {/* Other cards */}
        {rest.map((post) => (
          <BlogCardModern key={post.id} post={post} />
        ))}
      </div>
      {/* Sidebar CTA */}
      <aside className="w-full lg:w-80 flex-shrink-0">
        <div className="sticky top-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 shadow-xl border border-primary/10 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">Build Better Products</h3>
          <p className="text-gray-700 mb-8">Book a free discovery call to see how Bernof Co can help you grow your business with digital solutions.</p>
          <a
            href="/startup-development"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors mb-3 w-full"
          >
            Explore Our Services
          </a>
          <button
            onClick={() => {
              const el = document.getElementById('discovery-call');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors w-full"
          >
            Book Discovery Call
          </button>
        </div>
      </aside>
    </div>
  );
}; 