import React from 'react';
import { BookOpen, TrendingUp, Users } from 'lucide-react';

export const BlogHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rotate-45 rounded-lg"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-40 h-2 bg-gradient-to-r from-white/30 to-transparent"></div>
        <div className="absolute top-60 right-20 w-16 h-16 border border-white/30 rounded-full"></div>
        
        {/* Floating elements */}
        <div className="absolute top-80 left-1/4 w-6 h-6 bg-white/20 rotate-45"></div>
        <div className="absolute bottom-60 right-1/3 w-8 h-8 border border-white/20 rounded-full"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-40 w-72 h-72 bg-white/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <BookOpen className="w-5 h-5" />
            <span className="font-medium">Digital Insights & Industry Trends</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Expert Analysis for
            <span className="block text-accent">Digital Growth</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Explore the latest insights on web development, startup growth, and digital innovation. 
            Expert analysis and practical tips from industry professionals.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold mb-1">50+</div>
              <div className="text-sm text-gray-300">Expert Articles</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold mb-1">10K+</div>
              <div className="text-sm text-gray-300">Monthly Readers</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-sm text-gray-300">Actionable Insights</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 