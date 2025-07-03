
import { Helmet } from 'react-helmet-async';
import { useAnalytics } from '@/components/AnalyticsProvider';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  schemaData?: object;
  url?: string;
  type?: 'website' | 'article' | 'service';
}

const SEO = ({
  title = "Bernof Co - Managing the Future | Digital Solutions & Growth Services",
  description = "Transform your digital presence with Bernof Co's comprehensive development, design, and marketing services. Book your discovery call today.",
  keywords = "startup development, MVP development, outsource app development, startup tech partner, idea to production, development company, web development, mobile app development, digital agency, digital transformation",
  canonical,
  ogType = "website",
  ogImage = "https://bernofco.com/bernofco-social-share.png",
  schemaData,
  url = "https://bernofco.com",
  type = "website"
}: SEOProps) => {
  const analytics = useAnalytics();
  const currentUrl = canonical || (typeof window !== 'undefined' ? window.location.href : url);
  const fullTitle = title.includes('Bernof Co') ? title : `${title} | Bernof Co`;

  // Default structured data
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": fullTitle,
    "description": description,
    "url": currentUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Bernof Co",
      "url": "https://bernofco.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bernof Co",
      "url": "https://bernofco.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bernofco.com/favicon.ico"
      }
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Bernof Co" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Bernof Co" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bernof_co" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData || defaultSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
