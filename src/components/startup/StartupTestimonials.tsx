
import { Star, Quote } from "lucide-react";

const StartupTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, HealthTech Startup",
      company: "WellnessTracker",
      content: "Bernof Co. took our idea from concept to a working MVP in just 3 weeks. What would have cost us £50k+ with a dev team, they delivered for under £8k. Now we're raising our Series A!",
      rating: 5,
      image: "/api/placeholder/64/64"
    },
    {
      name: "Marcus Johnson",
      role: "CEO, EdTech Platform",
      company: "LearnLoop",
      content: "The project-based maintenance model is genius. We've added 5 major features over 8 months and only paid when we needed updates. No contracts, no monthly fees - just results.",
      rating: 5,
      image: "/api/placeholder/64/64"
    },
    {
      name: "Elena Rodriguez",
      role: "Founder, E-commerce Startup",
      company: "EcoMarket",
      content: "From market validation to launch in 5 weeks. The team understood our vision and delivered exactly what we needed to start generating revenue immediately.",
      rating: 5,
      image: "/api/placeholder/64/64"
    }
  ];

  const stats = [
    { number: "100+", label: "Startups Launched" },
    { number: "£2.3M+", label: "Funding Raised by Clients" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "94%", label: "Client Retention Rate" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Successful Founders
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clients have raised millions and built thriving businesses. 
              Here's what they say about working with us.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-accent/30 mb-4" />
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-accent font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Social Proof */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-8">Featured in:</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">TechCrunch</div>
              <div className="text-2xl font-bold text-gray-400">ProductHunt</div>
              <div className="text-2xl font-bold text-gray-400">Startup Grind</div>
              <div className="text-2xl font-bold text-gray-400">Y Combinator</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupTestimonials;
