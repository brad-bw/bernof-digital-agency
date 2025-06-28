
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogHero = () => {
  return (
    <section className="relative pt-24 pb-16 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small badge like Whimsical */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-8">
            <span>Latest insights</span>
          </div>
          
          {/* Main heading - clean and bold like Whimsical */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
            The Bernof Co{" "}
            <span className="text-primary">Blog</span>
          </h1>
          
          {/* Subtitle - clean and readable */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-normal">
            Insights on digital strategy, startup development, and building great products in the post-Brexit world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
