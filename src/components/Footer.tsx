
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
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
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Logo and CTA */}
          <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
            <div className="mb-8 lg:mb-0">
              <img 
                src="/lovable-uploads/b64adfc6-ccf9-4fa1-9cbb-583928ae96ec.png"
                alt="Bernof Co."
                width="240"
                height="60"
                className="mb-4 transition-transform duration-300 hover:scale-105"
              />
              <p className="text-lg text-gray-600 max-w-md">
                Managing the future through comprehensive digital solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('discovery-call')}
                className="bg-[#2D8F86] hover:bg-[#1F5F5B] text-white font-semibold px-8 py-3 rounded-lg"
              >
                Start Your Project
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-3 rounded-lg"
              >
                Book a Call
              </Button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
            {/* Services */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Web Development
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Software Development
                  </button>
                </li>
                <li>
                  <Link 
                    to="/startup-development"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Startup Development
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Creative Design
                  </button>
                </li>
              </ul>
            </div>

            {/* Global Services */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Global</h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/global-services"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    All Countries
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/global-services/ch"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Switzerland
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/global-services/uk"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    United Kingdom
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/global-services/us"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    United States
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <Link 
                    to="/privacy-policy"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/terms-of-service"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/blog"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('discovery-call')}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Discovery Call
                  </button>
                </li>
                <li>
                  <Link 
                    to="/cookie-policy"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-2">
              <h4 className="font-semibold text-gray-900 mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:info@bernofco.com"
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@bernofco.com
                </a>
                <a 
                  href="tel:+442080580773"
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +44 20 80 580 773
                </a>
                <div className="flex items-start text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  Newcastle Upon Tyne, UK
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                © 2025 Bernof Co. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://www.linkedin.com/company/bernof-co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
