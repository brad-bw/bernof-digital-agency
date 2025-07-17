
import React from 'react';

const NewFooter = () => {
  return (
    <footer className="bg-charcoal text-gray-400">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="h-10 mb-4 flex items-center">
              <h3 className="text-white font-bold text-xl">Bernof Co.</h3>
            </div>
            <p className="text-gray-300">Building Your Digital Future.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Custom Software
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Platform Rescue
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
          <p>
            &copy; 2025 Bernof Co. All Rights Reserved.{' '}
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
