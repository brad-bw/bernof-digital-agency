import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Globe, TrendingUp, Users, Clock, Zap, Shield, Award } from "lucide-react";
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

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Lightning Fast Delivery",
      description: "Projects delivered 3x faster than industry standard"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "European Quality Standards",
      description: "ISO-certified processes with military-grade security"
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Award-Winning Results",
      description: "Recognition from leading industry publications"
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

      {/* Hero Section - Fixed spacing */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-accent/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="block text-white mb-2">European</span>
                    <span className="block text-white mb-2">Excellence,</span>
                    <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                      Global Reach
                    </span>
                  </h1>

                  <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
                    Serving businesses across Europe and beyond with 60% cost savings on premium digital development services. Choose your market and unlock European expertise at unmatched value.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
                    className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-white font-bold px-8 py-5 rounded-2xl text-lg h-auto transition-all duration-300 hover:scale-105 shadow-xl"
                  >
                    Start Your Global Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 font-bold px-8 py-5 rounded-2xl text-lg h-auto"
                    onClick={() => {
                      document.getElementById('countries')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Explore Markets
                  </Button>
                </div>
              </div>

              {/* Right Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "60%", label: "Average Savings", icon: <TrendingUp className="w-6 h-6" /> },
                  { value: "50+", label: "Expert Developers", icon: <Users className="w-6 h-6" /> },
                  { value: "48h", label: "Project Start", icon: <Clock className="w-6 h-6" /> },
                  { value: "100%", label: "Success Rate", icon: <Award className="w-6 h-6" /> }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="text-accent mb-3">{stat.icon}</div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Global Excellence?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the perfect blend of European craftsmanship and global accessibility
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="mb-6 p-3 bg-gray-50 rounded-2xl w-fit group-hover:bg-primary/10 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Country Selection Section */}
      <section id="countries" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
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
                  className="group bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
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
