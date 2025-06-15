
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApiKeySetup from "@/components/ApiKeySetup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FirecrawlService } from '@/utils/FirecrawlService';
import { ExternalLink, Eye, Heart, Loader2, RefreshCw } from 'lucide-react';

const Portfolio = () => {
  const [hasApiKey, setHasApiKey] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const apiKey = FirecrawlService.getApiKey();
    setHasApiKey(!!apiKey);
  }, []);

  const { data: portfolioData, isLoading, error, refetch } = useQuery({
    queryKey: ['behance-portfolio'],
    queryFn: () => FirecrawlService.scrapeBehancePortfolio('https://www.behance.net/selected_ltd'),
    enabled: hasApiKey,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  const handleRefresh = () => {
    refetch();
    toast({
      title: "Refreshing",
      description: "Updating portfolio data...",
    });
  };

  if (!hasApiKey) {
    return (
      <div className="min-h-screen font-inter bg-gradient-to-br from-secondary to-white">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Portfolio
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                View our creative work and projects
              </p>
            </div>
            <ApiKeySetup onKeySet={() => setHasApiKey(true)} />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen font-inter bg-gradient-to-br from-secondary to-white">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Loading portfolio data...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !portfolioData?.success) {
    return (
      <div className="min-h-screen font-inter bg-gradient-to-br from-secondary to-white">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <p className="text-red-600 mb-4">Failed to load portfolio data</p>
              <Button onClick={handleRefresh} variant="outline">
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { projects, profileInfo } = portfolioData.data!;

  return (
    <div className="min-h-screen font-inter bg-gradient-to-br from-secondary to-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Portfolio
              </h1>
              <div className="max-w-3xl mx-auto mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{profileInfo.name}</h2>
                <p className="text-lg text-gray-600 mb-4">{profileInfo.bio}</p>
                <div className="flex justify-center items-center gap-6 text-sm text-gray-500">
                  <span>{profileInfo.location}</span>
                  <span>{profileInfo.followers} followers</span>
                </div>
              </div>
              <Button onClick={handleRefresh} variant="outline" className="mb-8">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Portfolio
              </Button>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button 
                        variant="outline" 
                        className="bg-white text-primary hover:bg-primary hover:text-white border-white"
                        onClick={() => window.open(project.projectUrl, '_blank')}
                      >
                        <Eye size={18} className="mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Eye size={14} />
                          {project.stats.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart size={14} />
                          {project.stats.likes}
                        </span>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary hover:text-accent p-0 h-auto font-semibold group/btn"
                        onClick={() => window.open(project.projectUrl, '_blank')}
                      >
                        View on Behance
                        <ExternalLink size={14} className="ml-1 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
