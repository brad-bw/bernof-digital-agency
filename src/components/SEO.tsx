
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  schemaData?: object;
}

const SEO = ({
  title = "Bernof Co - Managing the Future | Digital Solutions & Growth Services",
  description = "Transform your digital presence with Bernof Co's comprehensive development, design, and marketing services. Book your discovery call today.",
  keywords = "startup development, MVP development, outsource app development, startup tech partner, idea to production, development company, web development, mobile app development, digital agency, digital transformation",
  canonical,
  ogType = "website",
  ogImage = "https://bernofco.com/public/bernofco-social-share.png",
  schemaData
}: SEOProps) => {
  const currentUrl = canonical || window.location.href;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Bernof Co" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bernof_co" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Structured Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
