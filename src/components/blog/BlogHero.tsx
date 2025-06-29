
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1F5F5B] via-[#2D5A56] to-[#1A4A47] text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-[#20B2AA] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Fresh insights weekly</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            Digital
            <span className="block text-transparent bg-gradient-to-r from-[#20B2AA] to-[#4FD1C7] bg-clip-text">
              Insights
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Explore the latest trends in web development, startup growth, and digital innovation. 
            Your guide to building better digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-[#20B2AA] hover:bg-[#1A9B95] text-white font-semibold px-8 py-3 rounded-full group"
            >
              Explore Articles
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full backdrop-blur-sm"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#20B2AA]/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-[#4FD1C7]/20 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
};

export default BlogHero;
