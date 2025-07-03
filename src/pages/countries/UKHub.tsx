import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Shield, Clock, Users, ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSitemapGenerator } from "@/hooks/useSitemapGenerator";

const UKHub = () => {
  useSitemapGenerator();

  const services = [
    {
      title: 'Web Development',
      challenge: '£12,000-£28,000 local cost',
      solution: '£4,800-£11,200 delivery',
      savings: '60% savings',
      link: '/uk/web-development',
      description: 'Post-Brexit compliant websites with UK standards'
    },
    {
      title: 'Software Development',
      challenge: '£150,000+ annual talent cost',
      solution: '£64,000-£120,000 delivery',
      savings: '60% savings',
      link: '/uk/software-development',
      description: 'Enterprise software with UK regulatory compliance'
    },
    {
      title: 'Startup Development',
      challenge: '£80,000+ MVP costs',
      solution: '£25,600-£48,000 delivery',
      savings: '60% savings',
      link: '/uk/startup-development',
      description: 'Launch your UK startup with European talent'
    }
  ];

  const blogArticles = [
    {
      title: 'Post-Brexit Digital Strategy: Accessing European Talent',
      excerpt: 'How UK businesses can leverage European expertise without visa complications post-Brexit.',
      readTime: '10 min read',
      category: 'Brexit Strategy'
    },
    {
      title: 'London vs Manchester: Tech Hub Cost Analysis 2024',
      excerpt: 'Comprehensive comparison of development costs and opportunities across major UK tech cities.',
      readTime: '8 min read',
      category: 'Market Analysis'
    },
    {
      title: 'UK Fintech Regulations: FCA Compliance in Development',
      excerpt: 'Essential guide for fintech startups navigating FCA regulations and compliance requirements.',
      readTime: '12 min read',
      category: 'Fintech'
    },
    {
      title: 'UK Startup Ecosystem: £1T+ Value, High Development Costs',
      excerpt: 'Analysis of the UK\'s trillion-pound startup ecosystem and strategies for cost-effective development.',
      readTime: '15 min read',
      category: 'Startup Strategy'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>UK Digital Services Hub | British Web Development & Software Solutions | Bernof Co</title>
        <meta name="description" content="UK's premier digital development partner. Save 60% on web development, software solutions, and startup services. Post-Brexit European talent access, serving London, Manchester, Edinburgh." />
        <meta name="keywords" content="UK digital services, British web development, London software development, Manchester startup development, post-Brexit tech solutions, UK European talent" />
        <link rel="canonical" href="https://bernofco.com/global-services/uk" />
        <link rel="hreflang" hrefLang="en-gb" href="https://bernofco.com/global-services/uk" />
        <link rel="hreflang" hrefLang="x-default" href="https://bernofco.com/global-services" />
      </Helmet>

      <Header />

      {/* Hero Section - Optimized spacing and removed badge */}
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
                  UK's Premier
                </span>
                <br />
                <span className="text-accent">Digital Development Partner</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                Post-Brexit digital advantage with European talent access. Save 60% on development costs while serving UK businesses from London to Edinburgh with world-class solutions.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">£12,000+</div>
                  <div className="text-white/80 text-sm">Project Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">£1T+</div>
                  <div className="text-white/80 text-sm">UK Startup Value</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-white/80 text-sm">UK Compliant</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">48h</div>
                  <div className="text-white/80 text-sm">Project Start</div>
                </div>
              </div>

              <Button 
                onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
                className="bg-accent hover:bg-accent/90 text-white font-bold px-10 py-5 rounded-xl text-xl h-auto transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Your UK Market Quote
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
                Complete Digital Solutions for UK Businesses
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive services tailored for the UK market with European excellence and British business understanding.
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
                      <div className="text-sm text-gray-500 mb-1">UK Market Challenge</div>
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

      {/* UK Market Insights */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Understanding the UK Digital Landscape
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Post-Brexit opportunities and market insights that drive our UK-focused solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Reality</h3>
                <div className="space-y-4">
                  {[
                    'Digital skills gap: 2.6M unfilled roles by 2030 affecting timelines',
                    'Post-Brexit talent costs rising 40% above EU average',
                    'London development costs drive national premium pricing',
                    'Tech sector contributes £149B to UK economy annually'
                  ].map((stat, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our UK Expertise</h3>
                <div className="space-y-4">
                  {[
                    'Same business hours and cultural alignment',
                    'Native English communication and documentation',
                    'UK regulatory compliance and data protection',
                    'London, Manchester, Edinburgh market understanding'
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

      {/* UK Blog Articles */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Latest Insights for UK Businesses
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Post-Brexit strategies, market analysis, and growth insights for British companies.
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
              Ready to Save £12,000+ on Your Next Project?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Join UK businesses leveraging European talent for cost-effective digital solutions. Post-Brexit advantage starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
                className="bg-accent hover:bg-accent/90 text-white font-bold px-10 py-5 rounded-xl text-xl h-auto"
              >
                Get UK Market Quote
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

      <Footer />
    </div>
  );
};

export default UKHub;
