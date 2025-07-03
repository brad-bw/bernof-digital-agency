import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  // In a real implementation, you'd fetch blog post data here
  const { slug } = params;
  
  return {
    title: `Blog Post - ${slug} | Bernof Co`,
    description: `Read our latest insights about ${slug}`,
    alternates: {
      canonical: `https://bernofco.com/blog/${slug}`,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  
  // In a real implementation, you'd fetch blog post data here
  // For now, we'll show a placeholder
  
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Blog Post: {slug}
            </h1>
            <div className="prose prose-lg max-w-none">
              <p>Blog post content for {slug} would go here.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}