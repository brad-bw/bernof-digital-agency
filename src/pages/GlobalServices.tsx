
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Globe, TrendingUp, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GlobalServices = () => {
  const countries = [
    {
      code: 'ch',
      name: 'Switzerland',
      flag: '🇨🇭',
      status: 'Live',
      savings: '€15,000+',
      description: 'Save 60% vs Swiss agencies with GDPR-compliant solutions',
      link: '/global-services/ch',
      services: ['Web Development', 'Software Development', 'Startup Development']
    },
    {
      code: 'uk',
      name: 'United Kingdom',
      flag: '🇬🇧',
      status: 'Live',
      savings: '£12,000+',
      description: 'Post-Brexit digital advantage with European talent',
      link: '/global-services/uk',
      services: ['Web Development', 'Software Development', 'Startup Development']
    },
    {
      code: 'us',
      name: 'United States',
      flag: '🇺🇸',
      status: 'Live',
      savings: '$15,000+',
      description: 'Silicon Valley quality at European prices',
      link: '/global-services/us',
      services: ['Web Development', 'Software Development', 'Startup Development']
    },
    {
      code: 'it',
      name: 'Italy',
      flag: '🇮🇹',
      status: 'Live',
      savings: '€10,000+',
      description: 'Bridge Italy\'s digital transformation gap',
      link: '/global-services/it',
      services: ['Web Development', 'Software Development', 'Startup Development']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Global Digital Services | European Excellence, Worldwide Reach | Bernof Co</title>
        <meta name="description" content="Premium digital development services across Europe and beyond. 60% cost savings on web development, software solutions, and startup services. Choose your market and start saving today." />
        <meta name="keywords" content="global digital services, international web development, European software development, multi-country digital agency, cost-effective development services" />
        <link rel="canonical" href="https://bernofco.com/global-services" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rotate-45 rounded-lg"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full"></div>
          <div className="absolute bottom-32 left-40 w-40 h-2 bg-gradient-to-r from-white/30 to-transparent"></div>
          <div className="absolute top-60 right-20 w-16 h-16 border border-white/30 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20 pb-32">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 mb-8 border border-white/20">
              <Globe className="w-6 h-6 text-white" />
              <span className="text-white font-semibold text-lg">Global Services</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                European Excellence,
              </span>
              <br />
              <span className="text-accent">Global Reach</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Serving businesses across Europe and beyond with 60% cost savings on premium digital development services. Choose your market and unlock European expertise at unmatched value.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <TrendingUp className="w-8 h-8 text-accent mb-4 mx-auto" />
                <div className="text-3xl font-bold text-white mb-2">60%</div>
                <div className="text-white/80">Average Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Users className="w-8 h-8 text-accent mb-4 mx-auto" />
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-white/80">Expert Developers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Clock className="w-8 h-8 text-accent mb-4 mx-auto" />
                <div className="text-3xl font-bold text-white mb-2">48h</div>
                <div className="text-white/80">Project Start</div>
              </div>
            </div>

            <Button 
              onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
              className="bg-accent hover:bg-accent/90 text-white font-bold px-10 py-5 rounded-xl text-xl h-auto transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Your Global Project
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Country Selection Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Choose Your Market
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Select your country to discover market-specific solutions, local insights, and tailored pricing for your region.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {countries.map((country, index) => (
                <Link
                  key={country.code}
                  to={country.link}
                  className="group bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl">{country.flag}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                          {country.name}
                        </h3>
                        <div className="flex items-center space-x-2 mt-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-medium text-green-600">{country.status}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary mb-1">Save {country.savings}</div>
                      <div className="text-sm text-gray-500">per project</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {country.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">Available Services:</h4>
                    {country.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">Explore {country.name} Services</span>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Coming Soon Countries */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Expanding Soon</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {[
                  { flag: '🇩🇪', name: 'Germany', quarter: 'Q2 2025' },
                  { flag: '🇫🇷', name: 'France', quarter: 'Q3 2025' },
                  { flag: '🇪🇸', name: 'Spain', quarter: 'Q3 2025' },
                  { flag: '🇳🇱', name: 'Netherlands', quarter: 'Q4 2025' }
                ].map((country, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                    <span className="text-2xl mb-2 block">{country.flag}</span>
                    <div className="text-sm font-medium text-gray-900">{country.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{country.quarter}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Advantages Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Global Approach?
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                We combine European excellence with local market understanding to deliver unmatched value worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Local Market Expertise',
                  description: 'Deep understanding of local regulations, payment systems, and business cultures in each country we serve.',
                  benefits: ['GDPR & Local Compliance', 'Native Payment Integration', 'Cultural Adaptation', 'Local Language Support']
                },
                {
                  title: 'European Quality Standards',
                  description: 'Rigorous development processes, security standards, and quality assurance that meet the highest European requirements.',
                  benefits: ['ISO Certified Processes', 'Advanced Security', 'Quality Assurance', 'European Data Protection']
                },
                {
                  title: 'Global Cost Efficiency',
                  description: 'Leverage our European operations to deliver premium services at 60% less cost than local alternatives.',
                  benefits: ['60% Cost Savings', 'No Hidden Fees', 'Transparent Pricing', 'Fixed-Price Projects']
                }
              ].map((advantage, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{advantage.description}</p>
                  <div className="space-y-3">
                    {advantage.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
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
              Ready to Go Global?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Choose your market and discover how we can help your business succeed with European excellence and local expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
                className="bg-accent hover:bg-accent/90 text-white font-bold px-10 py-5 rounded-xl text-xl h-auto"
              >
                Book Global Consultation
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
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GlobalServices;
