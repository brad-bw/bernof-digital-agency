
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Shield, Clock, Users, ChevronRight, Code, Rocket, Zap, Euro, Globe, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSitemapGenerator } from "@/hooks/useSitemapGenerator";

const ItalyHub = () => {
  useSitemapGenerator();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'Web Development',
      challenge: '€10,000-€25,000 local cost',
      solution: '€4,000-€10,000 delivery',
      savings: '60% savings',
      link: '/it/web-development',
      description: 'EU-compliant websites with Italian market focus',
      icon: Code,
      features: ['Responsive Design', 'E-commerce Ready', 'SEO Optimized', 'GDPR Compliant']
    },
    {
      title: 'Software Development',
      challenge: '€120,000+ annual talent cost',
      solution: '€48,000-€80,000 delivery',
      savings: '60% savings',
      link: '/it/software-development',
      description: 'Enterprise software with European compliance',
      icon: Zap,
      features: ['Custom Solutions', 'API Integration', 'Cloud Deploy', 'Maintenance']
    },
    {
      title: 'Startup Development',
      challenge: '€80,000+ MVP costs',
      solution: '€25,000-€45,000 delivery',
      savings: '60% savings',
      link: '/it/startup-development',
      description: 'Launch your Italian startup with European talent',
      icon: Rocket,
      features: ['MVP Development', 'Market Validation', 'User Testing', 'Scale Ready']
    }
  ];

  const testimonials = [
    {
      quote: "Bernof Co ha trasformato la nostra presenza digitale, risparmiando €18,000 sul nostro progetto e-commerce mantenendo la qualità eccezionale.",
      author: "Marco Rossi",
      role: "CEO, Milano Fashion Brand",
      location: "Milano"
    },
    {
      quote: "Their understanding of Italian business culture and EU regulations was impressive. Launched our fintech platform 4 months ahead of schedule.",
      author: "Giulia Bianchi",
      role: "CTO, Startup Romana",
      location: "Roma"
    },
    {
      quote: "Come startup napoletana, avevamo bisogno di sviluppo efficace senza compromettere la qualità. Bernof Co ha consegnato perfettamente.",
      author: "Antonio Esposito",
      role: "Founder, Napoli Tech Hub",
      location: "Napoli"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Italian Market Analysis",
      description: "We analyze your target market, competitors, and Italy-specific requirements including EU regulations.",
      icon: TrendingUp
    },
    {
      step: "2",
      title: "EU Compliance & Planning",
      description: "Ensure GDPR compliance, Italian regulations adherence, and create a detailed development roadmap.",
      icon: Shield
    },
    {
      step: "3",
      title: "European Development",
      description: "Our European team develops your solution with Italian market focus and business understanding.",
      icon: Users
    },
    {
      step: "4",
      title: "Italian Launch & Support",
      description: "Launch in the Italian market with ongoing support and optimization for Italian users.",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      <Helmet>
        <title>Italy Digital Services Hub | Italian Web Development & Software Solutions | Bernof Co</title>
        <meta name="description" content="Italy's premier digital development partner. Save 60% on web development, software solutions, and startup services. EU-compliant, serving Milan, Rome, Florence with European excellence." />
        <meta name="keywords" content="Italy digital services, Italian web development, Milan software development, Rome startup development, Italian EU compliance, Italy tech solutions" />
        <link rel="canonical" href="https://bernofco.com/global-services/it" />
        <link rel="hreflang" hrefLang="en-it" href="https://bernofco.com/global-services/it" />
        <link rel="hreflang" hrefLang="x-default" href="https://bernofco.com/global-services" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-sage-light via-white to-brand-sage-light relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-brand-teal-dark/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Italy Flag accent */}
          <div className="absolute top-20 right-20 w-16 h-16 opacity-10">
            <div className="text-4xl">🇮🇹</div>
          </div>
          
          {/* Geometric elements */}
          <div className="absolute top-1/3 left-10 w-8 h-8 bg-brand-teal/20 rotate-45 rounded-lg animate-pulse"></div>
          <div className="absolute bottom-1/3 right-16 w-12 h-12 border-2 border-brand-teal/20 rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-brand-sage-light/50 rounded-full text-brand-teal-dark font-semibold text-sm">
                    <span className="text-xl mr-2">🇮🇹</span>
                    Italy's Premier Digital Partner
                  </div>
                  
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Transform Your{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-teal-light">
                      Italian Business
                    </span>{" "}
                    Digitally
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Bridge Italy's digital transformation gap with cutting-edge solutions and European excellence. 
                    Save 60% on development costs while serving Italian businesses from Milan to Rome.
                  </p>
                </div>

                {/* Italy Market Stats */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-brand-sage/30">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Italian Digital Landscape 2024</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Euro className="w-5 h-5 text-brand-teal" />
                      <span className="text-sm text-gray-700">€89B Tech Sector Value</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-brand-teal" />
                      <span className="text-sm text-gray-700">Digital Skills Gap: 65%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-brand-teal" />
                      <span className="text-sm text-gray-700">Milan Costs 40% Above EU</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-brand-teal" />
                      <span className="text-sm text-gray-700">European Talent Access</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
                    className="bg-gradient-to-r from-brand-teal to-brand-teal-light hover:from-brand-teal-dark hover:to-brand-teal text-white font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Get Your Italy Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => scrollToSection('italy-process')}
                    className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300"
                  >
                    How It Works
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-teal">€15k+</div>
                    <div className="text-sm text-gray-600">Project Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-teal">48hrs</div>
                    <div className="text-sm text-gray-600">Project Start</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-teal">100%</div>
                    <div className="text-sm text-gray-600">EU Compliant</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Enhanced Visual */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-brand-sage/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-sage-light/30 to-transparent rounded-full -translate-y-8 translate-x-8"></div>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-semibold text-gray-900">Italy Success Story</h3>
                        <span className="text-2xl">🇮🇹</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-brand-teal rounded-full animate-pulse"></div>
                        <span className="text-sm text-brand-teal font-medium">Live</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {process.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-brand-sage-light/30 to-brand-sage-light/10 rounded-xl border border-brand-sage/20">
                          <div className="w-10 h-10 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-sm font-bold">{item.step}</span>
                          </div>
                          <div>
                            <span className="text-gray-900 font-medium">{item.title}</span>
                            <div className="text-sm text-gray-600">{item.description.split('.')[0]}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Success Indicator */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-xl text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm opacity-90">Italy Client Success Rate</div>
                          <div className="text-2xl font-bold">94%</div>
                        </div>
                        <Star className="w-8 h-8 opacity-80" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center animate-float shadow-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-brand-teal-light to-brand-teal rounded-full flex items-center justify-center animate-float delay-1000 shadow-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white" id="italy-services">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Complete Digital Solutions for Italian Businesses
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive services tailored for the Italian market with European expertise and local understanding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-brand-teal hover:shadow-xl transition-all duration-300 group">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-bold">
                        {service.savings}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="text-center">
                        <div className="text-sm text-gray-500">Italian Market Challenge</div>
                        <div className="text-lg font-semibold text-red-600">{service.challenge}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-500">Bernof Co Solution</div>
                        <div className="text-lg font-semibold text-brand-teal">{service.solution}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={service.link}
                      className="inline-flex items-center justify-center w-full bg-brand-teal text-white py-3 px-6 rounded-xl font-semibold hover:bg-brand-teal-dark transition-all duration-300 group"
                    >
                      Explore {service.title}
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="italy-process">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Italy-Focused Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                A proven approach that combines European expertise with deep Italian market understanding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="space-y-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center shadow-lg">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div>
                        <div className="text-sm text-brand-teal font-bold mb-2">STEP {step.step}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connection line for desktop */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-brand-teal to-brand-teal-light transform translate-x-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Trusted by Italian Businesses
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                From Milan startups to Rome enterprises, see how we've helped Italian businesses thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-brand-teal hover:shadow-xl transition-all duration-300">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-brand-teal">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-teal via-brand-teal/90 to-brand-teal-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Save €15,000+ on Your Next Project?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Join Italian businesses leveraging European talent for digital transformation. 
              Start your project in 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
                className="bg-white text-brand-teal hover:bg-gray-100 font-bold px-10 py-5 rounded-xl text-xl h-auto transition-all duration-300 hover:scale-105"
              >
                Get Italy Market Quote
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-brand-teal font-bold px-10 py-5 rounded-xl text-xl h-auto transition-all duration-300"
                onClick={() => scrollToSection('contact')}
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

export default ItalyHub;
