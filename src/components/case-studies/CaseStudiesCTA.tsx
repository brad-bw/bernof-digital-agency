
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

const CaseStudiesCTA = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/bernof-co', '_blank');
  };

  const handleGetQuote = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-brand-sage-light via-white to-brand-sage-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight font-inter">
              Ready to Create Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-teal-light">
                Success Story?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed font-inter max-w-3xl mx-auto">
              Join our portfolio of successful clients. Let's discuss your project 
              and create something amazing together. Get started with a free consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleBookCall}
                className="bg-gradient-to-r from-brand-teal to-brand-teal-light hover:from-brand-teal-dark hover:to-brand-teal text-white font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-inter"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Button>
              <Button 
                variant="outline"
                onClick={handleGetQuote}
                className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300 font-inter"
              >
                Get Project Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-inter">Free Consultation</h3>
                <p className="text-gray-600 font-inter">Discuss your project with our experts</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-inter">Quick Turnaround</h3>
                <p className="text-gray-600 font-inter">From concept to launch in weeks</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-inter">Ongoing Support</h3>
                <p className="text-gray-600 font-inter">Continuous maintenance and updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesCTA;
