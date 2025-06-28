
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogCategories from "@/components/blog/BlogCategories";
import { useBlogPosts } from "@/hooks/useBlogData";

const Blog = () => {
  const { data: posts, isLoading } = useBlogPosts();

  const seoData = {
    title: "Blog | Bernof Co - Digital Strategy & Startup Insights",
    description: "Expert insights on digital strategy, startup development, and business growth. Clean, modern blog with the latest trends in technology and entrepreneurship.",
    keywords: "digital strategy blog, startup insights, business development, technology trends, clean design",
    canonical: "https://bernofco.com/blog"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData} />
      <Header />
      <main>
        <BlogHero />
        <BlogCategories />
        <BlogGrid posts={posts} isLoading={isLoading} />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
