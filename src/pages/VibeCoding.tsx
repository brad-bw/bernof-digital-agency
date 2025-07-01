
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VibeHero from '@/components/vibe/VibeHero';
import VibeProblem from '@/components/vibe/VibeProblem';
import VibeSolution from '@/components/vibe/VibeSolution';
import VibeServices from '@/components/vibe/VibeServices';
import VibeTrust from '@/components/vibe/VibeTrust';
import VibeCTA from '@/components/vibe/VibeCTA';

const VibeCoding = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Coding Help & Vibe Coding Support | Fix Cursor, Lovable, Bubble Issues | Bernof Co</title>
        <meta name="description" content="When your AI-built app hits a wall, we break through. Expert help for Cursor crashes, Lovable scaling issues, Bubble debugging, and production-ready optimization." />
        <meta name="keywords" content="AI coding help, vibe coding support, Cursor debugging, Bubble troubleshooting, Lovable app deployment, no-code development issues, AI app production scaling" />
        <meta property="og:title" content="AI Coding Help & Vibe Coding Support | Bernof Co" />
        <meta property="og:description" content="From Cursor crashes to Bubble breakdowns - get expert help to scale your vibe-coded dreams into production-ready reality." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://bernofco.com/vibe-coding" />
      </Helmet>
      
      <Header />
      
      <main className="pt-24">
        <VibeHero />
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
