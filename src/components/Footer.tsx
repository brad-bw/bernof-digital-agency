
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
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
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Bernof Co.</h4>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Managing the future through comprehensive digital solutions. 
                We transform businesses with cutting-edge technology and strategic expertise.
              </p>
              <Button 
                onClick={() => scrollToSection('discovery-call')}
                className="bg-accent hover:bg-accent/90 text-white font-semibold"
              >
                Start Your Project
              </Button>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-accent transition-colors"
                  >
                    Development Solutions
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-accent transition-colors"
                  >
                    Creative Design
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-accent transition-colors"
                  >
                    Strategic Marketing
                  </button>
                </li>
                <li>
                  <Link 
                    to="/portfolio"
                    className="hover:text-accent transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a 
                    href="mailto:hello@bernof.co"
                    className="hover:text-accent transition-colors"
                  >
                    hello@bernof.co
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+15551234567"
                    className="hover:text-accent transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className="text-gray-400">
                  European Union
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="hover:text-accent transition-colors"
                  >
                    Get In Touch
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Bernof Co. All rights reserved. Managing the future of digital excellence.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link to="/privacy-policy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="hover:text-accent transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookie-policy" className="hover:text-accent transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
