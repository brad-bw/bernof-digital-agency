import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VibeHero from "@/components/vibe/VibeHero";
import VibeProblem from "@/components/vibe/VibeProblem";
import VibeSolution from "@/components/vibe/VibeSolution";
import VibeServices from "@/components/vibe/VibeServices";
import VibeMarketInsights from "@/components/vibe/VibeMarketInsights";
import VibeTrust from "@/components/vibe/VibeTrust";
import VibeCTA from "@/components/vibe/VibeCTA";

export const metadata: Metadata = {
  title: 'Vibe Coding - Premium Development Services | Bernof Co',
  description: 'Experience the future of web development with Vibe Coding. Premium development services that combine creativity with cutting-edge technology.',
  keywords: 'vibe coding, premium development, creative development, modern web development, innovative solutions',
  openGraph: {
    title: 'Vibe Coding - Premium Development Services | Bernof Co',
    description: 'Experience the future of web development with Vibe Coding. Premium development services that combine creativity with cutting-edge technology.',
    url: 'https://bernofco.com/vibe-coding',
    siteName: 'Bernof Co',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bernofco.com/vibe-coding',
  },
};

export default function VibeCodingPage() {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <VibeHero />
        <VibeProblem />
        <VibeSolution />
        <VibeServices />
        <VibeMarketInsights />
        <VibeTrust />
        <VibeCTA />
      </main>
      <Footer />
    </div>
  );
}