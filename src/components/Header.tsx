
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
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/1ae84dd7-47db-491c-9099-013be249fce1.png"
              alt="Bernof Co."
              width="180"
              height="45"
              className="transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#1F5F5B] font-medium transition-colors"
            >
              Services
            </button>
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#1F5F5B] font-medium transition-colors flex items-center">
                Global Coverage
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <div className="py-2">
                  <Link to="/global-services/ch" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <span className="mr-3">🇨🇭</span>
                    Switzerland
                  </Link>
                  <Link to="/global-services/uk" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <span className="mr-3">🇬🇧</span>
                    United Kingdom
                  </Link>
                  <Link to="/global-services/us" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <span className="mr-3">🇺🇸</span>
                    United States
                  </Link>
                  <Link to="/global-services/it" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <span className="mr-3">🇮🇹</span>
                    Italy
                  </Link>
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link to="/global-services" className="block px-4 py-2 text-sm text-[#1F5F5B] hover:bg-gray-50 font-medium">
                      View All Countries →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/startup-development" className="text-gray-700 hover:text-[#1F5F5B] font-medium transition-colors">
              For Startups
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-[#1F5F5B] font-medium transition-colors">
              Blog
            </Link>
            <Button 
              onClick={() => scrollToSection('discovery-call')}
              className="bg-[#2D8F86] hover:bg-[#1F5F5B] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200"
            >
              Book Discovery Call
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} className="text-gray-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-700 hover:text-[#1F5F5B] font-medium transition-colors"
            >
              Services
            </button>
            <div>
              <button 
                onClick={() => setIsGlobalCoverageOpen(!isGlobalCoverageOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-[#1F5F5B] font-medium transition-colors"
              >
                Global Coverage
                <ChevronDown className={`h-4 w-4 transition-transform ${isGlobalCoverageOpen ? 'rotate-180' : ''}`} />
              </button>
              {isGlobalCoverageOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link to="/global-services/ch" onClick={() => setIsMenuOpen(false)} className="flex items-center text-sm text-gray-600 hover:text-[#1F5F5B]">
                    <span className="mr-2">🇨🇭</span>
                    Switzerland
                  </Link>
                  <Link to="/global-services/uk" onClick={() => setIsMenuOpen(false)} className="flex items-center text-sm text-gray-600 hover:text-[#1F5F5B]">
                    <span className="mr-2">🇬🇧</span>
                    United Kingdom
                  </Link>
                  <Link to="/global-services/us" onClick={() => setIsMenuOpen(false)} className="flex items-center text-sm text-gray-600 hover:text-[#1F5F5B]">
                    <span className="mr-2">🇺🇸</span>
                    United States
                  </Link>
                  <Link to="/global-services/it" onClick={() => setIsMenuOpen(false)} className="flex items-center text-sm text-gray-600 hover:text-[#1F5F5B]">
                    <span className="mr-2">🇮🇹</span>
                    Italy
                  </Link>
                  <Link to="/global-services" onClick={() => setIsMenuOpen(false)} className="block text-sm text-[#1F5F5B] font-medium">
                    View All Countries →
                  </Link>
                </div>
              )}
            </div>
            <Link 
              to="/startup-development" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-[#1F5F5B] font-medium transition-colors"
            >
              For Startups
            </Link>
            <Link 
              to="/blog" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-[#1F5F5B] font-medium transition-colors"
            >
              Blog
            </Link>
            <Button 
              onClick={() => scrollToSection('discovery-call')}
              className="w-full bg-[#2D8F86] hover:bg-[#1F5F5B] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200"
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
