
import React from 'react';
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2">
            <img 
              src="/images/1ae84dd7-47db-491c-9099-013be249fce1.png" 
              alt="Bernof Co Logo" 
              className="h-8 w-auto"
            />
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/blog" className="text-gray-700 hover:text-primary">Blog</a>
            <a href="/startup-development" className="text-gray-700 hover:text-primary">Startup</a>
            <a href="/global-services" className="text-gray-700 hover:text-primary">Services</a>
            <Button asChild>
              <a href="/#contact">Get Started</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
