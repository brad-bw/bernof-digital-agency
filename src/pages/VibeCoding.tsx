
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VibeHero from '@/components/vibe/VibeHero';
import VibeProblem from '@/components/vibe/VibeProblem';
import VibeSolution from '@/components/vibe/VibeSolution';
import VibeServices from '@/components/vibe/VibeServices';
import VibeTrust from '@/components/vibe/VibeTrust';
import VibeCTA from '@/components/vibe/VibeCTA';
import VibeMarketInsights from '@/components/vibe/VibeMarketInsights';

const VibeCoding = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Coding Help & Vibe Coding Support",
    "provider": {
      "@type": "Organization",
      "name": "Bernof Co",
      "url": "https://bernofco.com",
      "telephone": "+442080580773",
      "email": "info@bernofco.com"
    },
    "serviceType": "AI Development Support",
    "description": "Expert help for AI-built applications facing production challenges. From Cursor crashes to Lovable scaling issues, we provide 24/7 emergency support and production-ready solutions.",
    "areaServed": "Global",
    "offers": [
      {
        "@type": "Offer",
        "name": "Emergency Debugging",
        "price": "297",
        "priceCurrency": "GBP",
        "description": "Fix critical AI coding issues in 2-4 hours"
      },
      {
        "@type": "Offer", 
        "name": "Production Migration",
        "price": "1997",
        "priceCurrency": "GBP",
        "description": "Scale from prototype to production in 1-2 weeks"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Helmet>
        <title>AI Coding Help & Vibe Coding Support | Fix Cursor, Lovable, Bubble Issues | Bernof Co</title>
        <meta name="description" content="When your AI-built app hits a wall, we break through. Expert 24/7 emergency support for Cursor crashes, Lovable scaling issues, Bubble debugging, and production-ready optimization. 150+ projects rescued with 99.9% success rate." />
        <meta name="keywords" content="AI coding help, vibe coding support, Cursor debugging, Bubble troubleshooting, Lovable app deployment, no-code development issues, AI app production scaling, emergency coding support, Bolt.new fixes, v0.dev problems, Framer export issues, Replit deployment help, Windsurf configuration, Claude Artifacts scaling" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:title" content="AI Coding Help & Vibe Coding Support | Fix Production Issues | Bernof Co" />
        <meta property="og:description" content="From Cursor crashes to Bubble breakdowns - get expert help to scale your vibe-coded dreams into production-ready reality. 24/7 emergency support available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bernofco.com/vibe-coding" />
        <meta property="og:image" content="https://bernofco.com/public/bernofco-social-share.png" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="Bernof Co" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bernof_co" />
        <meta name="twitter:title" content="AI Coding Help & Vibe Coding Support | Bernof Co" />
        <meta name="twitter:description" content="Expert help for AI-built apps hitting production walls. 24/7 emergency support for Cursor, Lovable, Bubble & more." />
        <meta name="twitter:image" content="https://bernofco.com/public/bernofco-social-share.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Bernof Co" />
        <meta name="publisher" content="Bernof Co" />
        <meta name="language" content="en" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="geo.placename" content="London, UK" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://bernofco.com/vibe-coding" />
        
        {/* Alternate URLs for different regions */}
        <link rel="alternate" hrefLang="en-gb" href="https://bernofco.com/vibe-coding" />
        <link rel="alternate" hrefLang="en-us" href="https://bernofco.com/vibe-coding" />
        <link rel="alternate" hrefLang="en" href="https://bernofco.com/vibe-coding" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What AI coding tools do you support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide expert support for all major AI coding tools including Cursor AI, Lovable, Bolt.new, Bubble, v0.dev, Framer, Claude Artifacts, Windsurf, Replit, and Webflow."
                }
              },
              {
                "@type": "Question", 
                "name": "How quickly can you fix critical issues?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We guarantee emergency response within 2 hours for critical issues, with most problems resolved within 2-4 hours."
                }
              },
              {
                "@type": "Question",
                "name": "Do you help with production deployment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in migrating AI-generated prototypes to production-ready applications, typically completed within 1-2 weeks."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main>
        <VibeHero />
        <VibeMarketInsights />
        <VibeProblem />
        <VibeSolution />
        <VibeServices />
        <VibeTrust />
        <VibeCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default VibeCoding;
