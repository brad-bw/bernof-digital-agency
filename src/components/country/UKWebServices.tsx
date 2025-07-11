
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Search, ShoppingCart, Smartphone, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description: "Bespoke websites built with React, Vue.js, and modern frameworks",
    features: ["Responsive Design", "Fast Loading", "SEO Optimized"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Full-featured online stores with UK payment gateway integration",
    features: ["Stripe & PayPal", "Inventory Management", "Order Tracking"],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Websites optimized for mobile devices and touch interactions",
    features: ["Touch Optimized", "App-like Feel", "Offline Support"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description: "Built for search engines with sub-2 second loading times",
    features: ["Core Web Vitals", "Local SEO", "Analytics Setup"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that convert visitors to customers",
    features: ["User Research", "Conversion Focused", "Brand Alignment"],
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast websites that rank higher on Google",
    features: ["CDN Setup", "Image Optimization", "Caching Strategy"],
    gradient: "from-yellow-500 to-orange-500"
  }
];

export const UKWebServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-brand-sage-light/20 text-brand-teal text-sm font-satoshi font-medium px-4 py-2 rounded-full mb-6">
              Our Web Development Services
            </div>
            <h2 className="text-4xl lg:text-6xl font-satoshi font-bold text-gray-900 mb-6">
              Everything you need to
              <span className="block text-brand-teal">succeed online</span>
            </h2>
            <p className="text-xl text-gray-600 font-satoshi max-w-3xl mx-auto leading-relaxed">
              From simple business websites to complex e-commerce platforms, we deliver solutions that drive growth for UK businesses.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group relative bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-satoshi font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-satoshi mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-brand-teal rounded-full"></div>
                        <span className="text-sm font-satoshi text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover Arrow */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-brand-teal" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-satoshi font-bold mb-4">
                Ready to transform your online presence?
              </h3>
              <p className="text-xl font-satoshi mb-8 opacity-90">
                Join 100+ UK businesses who chose smart web development partnerships
              </p>
              <Button 
                size="lg"
                className="bg-white text-brand-teal hover:bg-gray-100 font-satoshi font-semibold px-8 py-4 rounded-xl text-lg group"
                onClick={() => window.open("https://calendly.com/bernof-co", "_blank")}
              >
                Start Your Project Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
