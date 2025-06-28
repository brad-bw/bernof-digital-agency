
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
    title: "Insights & Strategies | Business Blog | Bernof Co",
    description: "Discover expert insights on digital strategy, startup development, and business growth. Stay ahead with the latest trends in technology and entrepreneurship.",
    keywords: "business blog, digital strategy insights, startup development blog, technology trends, entrepreneurship advice, business growth strategies",
    canonical: "https://bernofco.com/blog"
  };

  return (
    <div className="min-h-screen font-inter bg-white">
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
