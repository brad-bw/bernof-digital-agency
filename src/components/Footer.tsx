import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Linkedin, Mail, Phone, MapPin, ArrowUpRight, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const Footer = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const services = [
    { name: 'Web Development', action: () => scrollToSection('services') },
    { name: 'Software Development', action: () => scrollToSection('services') },
    { name: 'Startup Development', to: '/startup-development' },
    { name: 'Creative Design', action: () => scrollToSection('services') },
    { name: 'Strategic Marketing', action: () => scrollToSection('services') }
  ];

  const globalServices = [
    { name: 'Switzerland', to: '/global-services/ch' },
    { name: 'United Kingdom', to: '/global-services/uk' },
    { name: 'All Countries', to: '/global-services' }
  ];

  const company = [
    { name: 'Privacy Policy', to: '/privacy-policy' },
    { name: 'Terms of Service', to: '/terms-of-service' },
    { name: 'Cookie Policy', to: '/cookie-policy' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-40 w-32 h-32 border border-accent/20 rotate-45"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 pt-20 pb-12">
          <div className="max-w-7xl mx-auto">
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              {/* Company Info */}
              <div className="lg:col-span-4">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                    Bernof Co.
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Managing the future through comprehensive digital solutions. 
                    We transform businesses with cutting-edge technology and strategic expertise.
                  </p>
                  <Button 
                    onClick={() => scrollToSection('discovery-call')}
                    className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Start Your Project
                    <ArrowUpRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                {/* Social Links & Theme Toggle */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Connect With Us
                  </h4>
                  <div className="flex items-center space-x-4">
                    <a 
                      href="https://www.linkedin.com/company/bernof-co/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
                    >
                      <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-primary transition-colors" />
                    </a>
                    
                    {/* Dark Mode Toggle */}
                    <button
                      onClick={toggleTheme}
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-accent/20 transition-all duration-300 group"
                      title="Toggle theme"
                    >
                      {theme === "light" ? (
                        <Moon className="w-6 h-6 text-gray-300 group-hover:text-accent transition-colors" />
                      ) : (
                        <Sun className="w-6 h-6 text-gray-300 group-hover:text-accent transition-colors" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="lg:col-span-3">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                  Services
                </h4>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <li key={index}>
                      {service.to ? (
                        <Link 
                          to={service.to}
                          className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center group"
                        >
                          {service.name}
                          <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ) : (
                        <button 
                          onClick={service.action}
                          className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center group text-left"
                        >
                          {service.name}
                          <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Global Coverage */}
              <div className="lg:col-span-2">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                  Global Coverage
                </h4>
                <ul className="space-y-4">
                  {globalServices.map((service, index) => (
                    <li key={index}>
                      <Link 
                        to={service.to}
                        className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center group"
                      >
                        {service.name}
                        <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact & Company */}
              <div className="lg:col-span-3">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                  Contact & Company
                </h4>
                <div className="space-y-6">
                  {/* Contact Info */}
                  <div className="space-y-4">
                    <a 
                      href="mailto:info@bernofco.com"
                      className="flex items-center text-gray-300 hover:text-accent transition-colors group"
                    >
                      <Mail className="w-5 h-5 mr-3 text-gray-400 group-hover:text-accent transition-colors" />
                      info@bernofco.com
                    </a>
                    <a 
                      href="tel:+442030000000"
                      className="flex items-center text-gray-300 hover:text-accent transition-colors group"
                    >
                      <Phone className="w-5 h-5 mr-3 text-gray-400 group-hover:text-accent transition-colors" />
                      +44 20 3000 0000
                    </a>
                    <div className="flex items-start text-gray-400">
                      <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      Newcastle Upon Tyne, United Kingdom
                    </div>
                  </div>

                  {/* Company Links */}
                  <div>
                    <ul className="space-y-3">
                      {company.map((item, index) => (
                        <li key={index}>
                          <Link 
                            to={item.to}
                            className="text-gray-400 hover:text-gray-300 transition-colors text-sm"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
                  <p className="text-gray-400 text-sm">
                    © 2025 Bernof Co. All rights reserved.
                  </p>
                  <p className="text-gray-500 text-sm">
                    Managing the future of digital excellence.
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>Built with</span>
                  <span className="text-red-400">♥</span>
                  <span>by Bernof Co</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Line */}
        <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
      </div>
    </footer>
  );
};

export default Footer;
