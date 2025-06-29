import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoSection from "./LogoSection";

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
            <div className="text-2xl font-bold text-[#1F5F5B]">Bernof Co</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#1F5F5B] font-medium transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#1F5F5B] font-medium transition-colors flex items-center">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/global-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Global Services
                </Link>
                <Link to="/startup-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Startup Development
                </Link>
              </div>
            </div>
            <Link to="/blog" className="text-gray-700 hover:text-[#1F5F5B] font-medium transition-colors">
              Blog
            </Link>
            <Link to="/#contact" className="text-gray-700 hover:text-[#1F5F5B] font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} className="text-gray-900" />}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent/40 rounded-full"></div>
          </button>
        </div>
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
              Global Coverage
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
    </header>
  );
};

export default Header;
