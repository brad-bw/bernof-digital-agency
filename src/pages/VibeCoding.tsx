
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { useSEO } from '@/hooks/useSEO';
import Breadcrumb from '@/components/Breadcrumb'; // Assuming you might want a visual breadcrumb too
import VibeHero from '@/components/vibe/VibeHero';
import VibeProblem from '@/components/vibe/VibeProblem';
import VibeSolution from '@/components/vibe/VibeSolution';
import VibeServices from '@/components/vibe/VibeServices';
import VibeTrust from '@/components/vibe/VibeTrust';
import VibeCTA from '@/components/vibe/VibeCTA';
import VibeMarketInsights from '@/components/vibe/VibeMarketInsights';

const VibeCoding = () => {
  const seoData = useSEO('vibe-coding');
  const breadcrumbItems = seoData.breadcrumbs || [
    { name: "Home", url: "/" },
    { name: "Vibe Coding Support", url: "/vibe-coding" }
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      <SEO {...seoData} />
      <Header />
      
      {/* Optional: Visual Breadcrumb if desired, matching the schema */}
      <div className="container mx-auto px-6 py-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

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
