import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogCategories from "@/components/blog/BlogCategories";

export const metadata: Metadata = {
  title: 'Blog - Digital Insights & Industry Trends | Bernof Co',
  description: 'Explore the latest insights on web development, startup growth, and digital innovation. Expert analysis and practical tips from industry professionals.',
  keywords: 'web development blog, startup insights, digital marketing trends, tech innovation, business strategy, software development tips, digital transformation',
  openGraph: {
    title: 'Blog - Digital Insights & Industry Trends | Bernof Co',
    description: 'Explore the latest insights on web development, startup growth, and digital innovation. Expert analysis and practical tips from industry professionals.',
    url: 'https://bernofco.com/blog',
    siteName: 'Bernof Co',
    images: [
      {
        url: 'https://bernofco.com/bernofco-social-share.png',
        width: 1200,
        height: 630,
        alt: 'Bernof Co Blog - Digital Insights',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://bernofco.com/blog',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://bernofco.com/blog#blog",
  "name": "Bernof Co Blog",
  "description": "Digital insights and industry trends from Bernof Co - covering web development, startup growth, and digital innovation",
  "url": "https://bernofco.com/blog",
  "publisher": {
    "@id": "https://bernofco.com/#organization"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://bernofco.com/blog"
  }
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen font-inter">
        <Header />
        <main>
          <BlogHero />
          <BlogCategories />
          <BlogGrid />
        </main>
        <Footer />
      </div>
    </>
  );
}