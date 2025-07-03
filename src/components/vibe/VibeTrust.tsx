import { Star, Users, Clock, Shield } from "lucide-react";
const VibeTrust = () => {
  const testimonials = [{
    name: "Sarah",
    role: "Startup Founder",
    content: "Bernofco saved our Lovable-built MVP when we hit scaling issues. They migrated us to production in just 2 weeks!",
    rating: 5
  }, {
    name: "Mike",
    role: "Solo Developer",
    content: "My Cursor-generated app had mysterious bugs. Bernofco debugged it in hours, not days of burning credits.",
    rating: 5
  }, {
    name: "Emma",
    role: "Product Manager",
    content: "Perfect bridge between AI tools and production reality. They understand both worlds perfectly.",
    rating: 5
  }];
  const stats = [{
    icon: Users,
    number: "150+",
    label: "Projects Rescued"
  }, {
    icon: Clock,
    number: "2.5hrs",
    label: "Average Response Time"
  }, {
    icon: Shield,
    number: "99.9%",
    label: "Success Rate"
  }, {
    icon: Star,
    number: "4.9/5",
    label: "Client Rating"
  }];
  return <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join hundreds of developers who've successfully transformed their AI prototypes 
            into production-ready applications with our help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>)}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              
              <p className="text-gray-700 mb-6 italic text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>)}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-green-200 rounded-2xl p-6 text-center bg-slate-50">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Security Certified</h3>
            <p className="text-sm text-gray-600">SOC 2 compliant with enterprise-grade security practices</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Response Guarantee</h3>
            <p className="text-sm text-gray-600">Emergency issues get response within 2 hours, guaranteed</p>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Expert Team</h3>
            <p className="text-sm text-gray-600">Senior developers with 10+ years of production experience</p>
          </div>
        </div>
      </div>
    </section>;
};
export default VibeTrust;