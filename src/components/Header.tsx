
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGlobalCoverageOpen, setIsGlobalCoverageOpen] = useState(false);
  const navigate = useNavigate();

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
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 relative">
      <div className="absolute top-0 right-20 w-2 h-2 bg-accent/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 left-1/3 w-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="relative">
            <Link to="/" className="group">
              <div className="flex items-center space-x-4">
                <img 
                  src="/images/1ae84dd7-47db-491c-9099-013be249fce1.png"
                  alt="Bernof Co. Logo"
                  width="240"
                  height="60"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Link>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent/40 rounded-full animate-pulse"></div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-primary transition-colors font-medium relative group"
            >
              Services
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </button>
            
            <div className="relative group">
              <Link 
                to="/global-services"
                className="flex items-center text-gray-600 hover:text-primary transition-colors font-medium relative group"
              >
                Global Coverage
                <ChevronDown className="w-4 h-4 ml-1" />
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-4 transition-all duration-200 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <Link to="/global-services/ch" className="flex items-center px-6 py-3 hover:bg-gray-50 transition-colors">
                  <span className="text-2xl mr-3">🇨🇭</span>
                  <span className="text-gray-700 hover:text-primary">Switzerland</span>
                </Link>
                <Link to="/global-services/uk" className="flex items-center px-6 py-3 hover:bg-gray-50 transition-colors">
                  <span className="text-2xl mr-3">🇬🇧</span>
                  <span className="text-gray-700 hover:text-primary">United Kingdom</span>
                </Link>
                <Link to="/global-services/us" className="flex items-center px-6 py-3 hover:bg-gray-50 transition-colors">
                  <span className="text-2xl mr-3">🇺🇸</span>
                  <span className="text-gray-700 hover:text-primary">United States</span>
                </Link>
                <Link to="/global-services/it" className="flex items-center px-6 py-3 hover:bg-gray-50 transition-colors">
                  <span className="text-2xl mr-3">🇮🇹</span>
                  <span className="text-gray-700 hover:text-primary">Italy</span>
                </Link>
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <Link to="/global-services" className="flex items-center px-6 py-3 hover:bg-gray-50 transition-colors text-sm text-gray-500">
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
            
            <Link 
              to="/blog"
              className="text-gray-600 hover:text-primary transition-colors font-medium relative group"
            >
              Blog
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </Link>
            
            <button 
              onClick={() => scrollToSection('discovery-call')}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">Book Discovery Call</span>
            </button>
          </nav>

          <button
            className="md:hidden p-2 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} className="text-gray-900" />}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent/40 rounded-full"></div>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Services
            </button>
            <div>
              <button 
                onClick={() => setIsGlobalCoverageOpen(!isGlobalCoverageOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-primary font-medium transition-colors"
              >
                Global Coverage
                <ChevronDown className={`h-4 w-4 transition-transform ${isGlobalCoverageOpen ? 'rotate-180' : ''}`} />
              </button>
              {isGlobalCoverageOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link to="/global-services/ch" onClick={() => setIsMenuOpen(false)} className="flex items-center text-sm text-gray-600 hover:text-primary">
                    <span className="mr-2">🇨🇭</span>
                    Switzerland
                  </Link>
                  <Link to="/global-services/uk" onClick={() => setIsMenuOpen(false)} className="flex items-center text-sm text-gray-600 hover:text-primary">
                    <span className="mr-2">🇬🇧</span>
                    United Kingdom
                  </Link>
                  <Link to="/global-services/us" onClick={() => setIsMenuOpen(false)} className="flex items-center text-sm text-gray-600 hover:text-primary">
                    <span className="mr-2">🇺🇸</span>
                    United States
                  </Link>
                  <Link to="/global-services/it" onClick={() => setIsMenuOpen(false)} className="flex items-center text-sm text-gray-600 hover:text-primary">
                    <span className="mr-2">🇮🇹</span>
                    Italy
                  </Link>
                  <Link to="/global-services" onClick={() => setIsMenuOpen(false)} className="block text-sm text-primary font-medium">
                    View All Countries →
                  </Link>
                </div>
              )}
            </div>
            <Link 
              to="/startup-development" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-primary font-medium transition-colors"
            >
              For Startups
            </Link>
            <Link 
              to="/blog" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Blog
            </Link>
            <Button 
              onClick={() => scrollToSection('discovery-call')}
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200"
            >
              Book Discovery Call
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
