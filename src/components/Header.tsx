
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoSection from "./LogoSection";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGlobalServicesOpen, setIsGlobalServicesOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
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
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 relative">
      {/* Subtle logo-inspired decorative elements */}
      <div className="absolute top-0 right-20 w-2 h-2 bg-accent/20 rounded-full"></div>
      <div className="absolute bottom-0 left-1/3 w-1 h-1 bg-primary/20 transform rotate-45"></div>
      
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="relative">
            <Link to="/">
              <LogoSection />
            </Link>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent/30 rounded-full animate-pulse"></div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-primary transition-colors font-medium relative group"
            >
              Services
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </button>
            
            {/* Global Services Dropdown */}
            <div className="relative group">
              <Link
                to="/global-services"
                className="flex items-center text-gray-600 hover:text-primary transition-colors font-medium relative group"
                onMouseEnter={() => setIsGlobalServicesOpen(true)}
                onMouseLeave={() => setIsGlobalServicesOpen(false)}
              >
                Global Services
                <ChevronDown className="w-4 h-4 ml-1" />
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
              </Link>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-4 transition-all duration-200 ${
                  isGlobalServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsGlobalServicesOpen(true)}
                onMouseLeave={() => setIsGlobalServicesOpen(false)}
              >
                <Link
                  to="/global-services/ch"
                  className="flex items-center px-6 py-3 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl mr-3">🇨🇭</span>
                  <span className="text-gray-700 hover:text-primary">Switzerland</span>
                </Link>
                <Link
                  to="/global-services/uk"
                  className="flex items-center px-6 py-3 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl mr-3">🇬🇧</span>
                  <span className="text-gray-700 hover:text-primary">United Kingdom</span>
                </Link>
                <Link
                  to="/global-services/us"
                  className="flex items-center px-6 py-3 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl mr-3">🇺🇸</span>
                  <span className="text-gray-700 hover:text-primary">United States</span>
                </Link>
                <Link
                  to="/global-services/it"
                  className="flex items-center px-6 py-3 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl mr-3">🇮🇹</span>
                  <span className="text-gray-700 hover:text-primary">Italy</span>
                </Link>
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <Link
                    to="/global-services"
                    className="flex items-center px-6 py-3 hover:bg-gray-50 transition-colors text-sm text-gray-500"
                  >
                    View All Countries →
                  </Link>
                </div>
              </div>
            </div>
            
            <Link
              to="/startup-development"
              className="text-gray-600 hover:text-primary transition-colors font-medium relative group"
            >
              For Startups
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-primary transition-colors font-medium relative group"
            >
              About
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-primary transition-colors font-medium relative group"
            >
              Contact
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </button>
            <Button 
              onClick={() => scrollToSection('discovery-call')}
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">Book Discovery Call</span>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent/40 rounded-full"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4 relative">
            <div className="absolute top-0 right-0 w-8 h-8 bg-primary/3 rounded-full blur-lg"></div>
            <div className="flex flex-col space-y-3 relative z-10">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:text-primary transition-colors font-medium text-left relative group"
              >
                Services
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
              </button>
              <Link
                to="/global-services"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-primary transition-colors font-medium text-left relative group"
              >
                Global Services
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
              </Link>
              <Link
                to="/startup-development"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-primary transition-colors font-medium text-left relative group"
              >
                For Startups
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
              </Link>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-primary transition-colors font-medium text-left relative group"
              >
                About
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-primary transition-colors font-medium text-left relative group"
              >
                Contact
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
              </button>
              <Button 
                onClick={() => scrollToSection('discovery-call')}
                className="bg-accent hover:bg-accent/90 text-white font-semibold w-full mt-4 rounded-xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Book Discovery Call</span>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
