
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail, Phone } from "lucide-react";

const StartupCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden" id="startup-cta">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Turn Your Idea Into Reality?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join 100+ successful founders who chose Bernof Co. to build their startups. 
              Get started today with a free consultation and project estimate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300"
              >
                Get Project Estimate
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-white/80 mb-2">Speak directly with our team</p>
              <a href="tel:+442030000000" className="text-white hover:text-white/80 font-semibold">
                +44 20 3000 0000
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-white/80 mb-2">Get a detailed response within 24h</p>
              <a href="mailto:info@bernofco.com" className="text-white hover:text-white/80 font-semibold">
                info@bernofco.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule Call</h3>
              <p className="text-white/80 mb-2">Free 30-min consultation</p>
              <span className="text-white font-semibold">
                Available GMT
              </span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <span>No upfront payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <span>Money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupCTA;
