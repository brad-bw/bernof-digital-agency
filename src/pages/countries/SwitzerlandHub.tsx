import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Shield, Clock, Users, ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSitemapGenerator } from "@/hooks/useSitemapGenerator";

const SwitzerlandHub = () => {
  useSitemapGenerator();

  const services = [
    {
      title: 'Web Development',
      challenge: '€15,000-€35,000 local cost',
      solution: '€6,000-€14,000 delivery',
      savings: '60% savings',
      link: '/ch/web-development',
      description: 'Custom websites with Swiss compliance built-in'
    },
    {
      title: 'Software Development',
      challenge: '€200,000+ annual talent cost',
      solution: '€80,000-€100,000 delivery',
      savings: '60% savings',
      link: '/ch/software-development',
      description: 'Enterprise software with FINMA compliance'
    },
    {
      title: 'Startup Development',
      challenge: '€100,000+ MVP costs',
      solution: '€32,000-€60,000 delivery',
      savings: '60% savings',
      link: '/ch/startup-development',
      description: 'Launch your Swiss startup faster and cheaper'
    }
  ];

  const blogArticles = [
    {
      title: 'Swiss Startup Funding: How to Maximize Your Runway in 2024',
      excerpt: 'Learn how Swiss startups can extend their funding runway by 8+ months through smart development partnerships.',
      readTime: '8 min read',
      category: 'Startup Strategy'
    },
    {
      title: 'GDPR vs Swiss DSG: Development Compliance Guide',
      excerpt: 'Complete guide to navigating Swiss data protection laws and GDPR compliance in software development.',
      readTime: '12 min read',
      category: 'Compliance'
    },
    {
      title: 'Zurich vs Geneva: Where to Launch Your Tech Startup',
      excerpt: 'Comprehensive analysis of Switzerland\'s top tech hubs and their advantages for different types of startups.',
      readTime: '10 min read',
      category: 'Market Analysis'
    },
    {
      title: 'Swiss Fintech Regulations: FINMA-Compliant Development',
      excerpt: 'Essential guide for fintech startups navigating FINMA regulations and compliance requirements.',
      readTime: '15 min read',
      category: 'Fintech'
    }
  ];

  const caseStudies = [
    {
      type: 'Zurich FinTech Startup',
      result: 'Reduced MVP development from €120,000 to €45,000',
      industry: 'Financial Technology'
    },
    {
      type: 'Geneva E-commerce Company',
      result: 'Saved €30,000 on platform development',
      industry: 'E-commerce'
    },
    {
      type: 'Basel Manufacturing Software',
      result: 'Cut annual development costs by 65%',
      industry: 'Manufacturing'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Switzerland Digital Services Hub | Swiss Web Development & Software Solutions | Bernof Co</title>
        <meta name="description" content="Switzerland's premier digital development partner. Save 60% on web development, software solutions, and startup services. GDPR-compliant, serving Zurich, Geneva, Basel with European excellence." />
        <meta name="keywords" content="Switzerland digital services, Swiss web development, Zurich software development, Geneva startup development, Swiss GDPR compliance, Switzerland tech solutions" />
        <link rel="canonical" href="https://bernofco.com/global-services/ch" />
        <link rel="hreflang" hrefLang="en-ch" href="https://bernofco.com/global-services/ch" />
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
                  Switzerland's Premier
                </span>
                <br />
                <span className="text-accent">Digital Development Partner</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                Save 60% on development costs while accessing Europe's top talent. Serving Swiss businesses from Zurich to Geneva with GDPR-compliant, cost-effective digital solutions.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">€15,000+</div>
                  <div className="text-white/80 text-sm">Project Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/80 text-sm">Swiss Businesses</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-white/80 text-sm">GDPR & DSG Compliant</div>
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
                Get Your Swiss Market Quote
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
                Complete Digital Solutions for Swiss Businesses
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive services tailored for the Swiss market with local expertise and European excellence.
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
                      <div className="text-sm text-gray-500 mb-1">Swiss Market Challenge</div>
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

      {/* Swiss Market Insights */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Understanding the Swiss Digital Landscape
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Market research and insights that drive our Swiss-focused solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Reality</h3>
                <div className="space-y-4">
                  {[
                    'Switzerland faces a 15,000 IT specialist shortage (Swiss ICT Report 2024)',
                    'Swiss development costs are 3.2x higher than EU average',
                    '67% of Swiss startups struggle with funding due to high development costs',
                    'Average project delays of 4-6 months due to talent shortage'
                  ].map((stat, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Swiss Expertise</h3>
                <div className="space-y-4">
                  {[
                    'Multi-language support (German, French, Italian)',
                    'Swiss payment integration (Twint, PostFinance)',
                    'FINMA compliance for fintech startups',
                    'Zurich and Geneva market understanding'
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

      {/* Swiss Blog Articles */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Latest Insights for Swiss Businesses
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Expert analysis, market insights, and strategic guidance for Swiss companies.
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

      {/* Success Stories */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Swiss Businesses We've Helped Succeed
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Real results from Swiss companies who chose Bernof Co for their digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.type}</h3>
                  <p className="text-gray-600 mb-4">{study.industry}</p>
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                    <p className="text-primary font-bold">{study.result}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Swiss Compliance Credentials */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Swiss Compliance Credentials</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Shield, text: 'GDPR Certified Development' },
                  { icon: CheckCircle, text: 'Swiss DSG Compliance' },
                  { icon: Users, text: 'FINMA Regulatory Understanding' },
                  { icon: Clock, text: 'Swiss Hosting Options Available' }
                ].map((credential, index) => {
                  const IconComponent = credential.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-gray-700 font-medium">{credential.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Save €15,000+ on Your Next Project?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Join successful Swiss businesses who chose Bernof Co over expensive local agencies. Start your project in 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
                className="bg-accent hover:bg-accent/90 text-white font-bold px-10 py-5 rounded-xl text-xl h-auto"
              >
                Get Swiss Market Quote
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

export default SwitzerlandHub;
