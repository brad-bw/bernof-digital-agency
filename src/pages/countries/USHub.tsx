
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Shield, Clock, Users, ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { getCountryConfig } from "@/config/countries";

const USHub = () => {
  const seoData = useSEO('global-services/us');
  const country = getCountryConfig('us')!;

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Global Services", url: "/global-services" },
    { name: "United States", url: "/global-services/us" }
  ];

  const services = [
    {
      title: 'Web Development',
      challenge: '$15,000-$40,000 local cost',
      solution: '$5,000-$15,000 delivery',
      savings: '60% savings',
      link: '/us/web-development',
      description: 'Custom websites with American market focus'
    },
    {
      title: 'Software Development',
      challenge: '$150,000+ annual talent cost',
      solution: '$60,000-$100,000 delivery',
      savings: '60% savings',
      link: '/us/software-development',
      description: 'Enterprise software with US compliance'
    },
    {
      title: 'Startup Development',
      challenge: '$100,000+ MVP costs',
      solution: '$30,000-$60,000 delivery',
      savings: '65% savings',
      link: '/us/startup-development',
      description: 'Launch your American startup with European talent'
    }
  ];

  const blogArticles = [
    {
      title: 'US Digital Transformation: Post-Pandemic Growth Strategies',
      excerpt: 'How American businesses are leveraging cost-effective European talent for digital innovation.',
      readTime: '8 min read',
      category: 'Digital Strategy'
    },
    {
      title: 'Silicon Valley vs European Development: Cost Analysis 2024',
      excerpt: 'Comprehensive breakdown of development costs and quality comparison between US and European markets.',
      readTime: '12 min read',
      category: 'Market Analysis'
    },
    {
      title: 'American Startup Ecosystem: Leveraging Global Talent',
      excerpt: 'How US startups are scaling efficiently by partnering with European development teams.',
      readTime: '10 min read',
      category: 'Startup Strategy'
    },
    {
      title: 'US E-commerce Boom: Development Strategies That Work',
      excerpt: 'Proven approaches for American e-commerce businesses to build scalable platforms cost-effectively.',
      readTime: '15 min read',
      category: 'E-commerce'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData} />
      <Header />
      
      <main>
        <div className="container mx-auto px-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-[85vh] bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rotate-45 rounded-lg"></div>
            <div className="absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full"></div>
            <div className="absolute bottom-32 left-40 w-40 h-2 bg-gradient-to-r from-white/30 to-transparent"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
                  <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    America's Premier
                  </span>
                  <br />
                  <span className="text-accent">Digital Development Partner</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Compete in America's demanding digital marketplace with European expertise and Silicon Valley quality at 60% cost savings. Serving US businesses from coast to coast.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">$50,000+</div>
                    <div className="text-white/80 text-sm">Project Savings</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">200+</div>
                    <div className="text-white/80 text-sm">US Businesses</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">100%</div>
                    <div className="text-white/80 text-sm">US Compliant</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">24h</div>
                    <div className="text-white/80 text-sm">Project Start</div>
                  </div>
                </div>

                <Button 
                  onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
                  className="bg-accent hover:bg-accent/90 text-white font-bold px-10 py-5 rounded-xl text-xl h-auto transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Get Your US Market Quote
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Complete Digital Solutions for US Businesses
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Comprehensive services tailored for the American market with European expertise and local understanding.
                </p>
              </div>

              <div className="space-y-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-500 mb-1">US Market Challenge</div>
                        <div className="text-lg font-semibold text-red-600">{service.challenge}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-500 mb-1">Bernof Co Solution</div>
                        <div className="text-lg font-semibold text-primary">{service.solution}</div>
                      </div>
                      <div className="text-center">
                        <div className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-lg mb-4">
                          {service.savings}
                        </div>
                        <Link
                          to={service.link}
                          className="inline-flex items-center text-accent hover:text-accent/80 font-semibold transition-colors"
                        >
                          Explore Service <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* US Market Insights */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Understanding the American Digital Landscape
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Market insights and opportunities that drive our US-focused solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Reality</h3>
                  <div className="space-y-4">
                    {[
                      'US development costs have increased 45% since 2020',
                      'Talent shortage affects 87% of American tech companies',
                      'Silicon Valley rates now average $200+ per hour',
                      'Remote work has opened global talent opportunities'
                    ].map((stat, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our US Expertise</h3>
                  <div className="space-y-4">
                    {[
                      'US market understanding and business culture',
                      'American timezone coverage and communication',
                      'US compliance and security standards',
                      'Silicon Valley quality at European rates'
                    ].map((expertise, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{expertise}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* US Blog Articles */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Latest Insights for American Businesses
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Market analysis, digital transformation strategies, and growth insights for US companies.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogArticles.map((article, index) => (
                  <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-accent hover:text-accent/80 font-semibold transition-colors">
                      Read Article <ExternalLink className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Save $50,000+ on Your Next Project?
              </h2>
              <p className="text-xl mb-12 opacity-90">
                Join successful American businesses leveraging European talent for digital transformation. Start your project in 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
                  className="bg-accent hover:bg-accent/90 text-white font-bold px-10 py-5 rounded-xl text-xl h-auto"
                >
                  Get US Market Quote
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-bold px-10 py-5 rounded-xl text-xl h-auto"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default USHub;
