
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageSquare, Calendar } from "lucide-react";

const VibeCTA = () => {
  const scrollToHomepageServices = () => {
    window.location.href = '/#services';
  };

  const openEmailClient = () => {
    window.open('mailto:info@bernofco.com?subject=Vibe Coding Support Inquiry', '_blank');
  };

  return (
    <section id="vibe-cta" className="py-16 bg-white relative overflow-hidden">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('/lovable-uploads/87978c55-5497-4099-bba4-4a5affd48d0b.png')`,
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
            Ready to{" "}
            <span className="text-primary">
              Unblock Your Vision?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't let AI tool limitations stop your progress. Get expert help and transform 
            your prototype into a production-ready success story.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 bg-primary">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Free Consultation</h3>
            <p className="text-gray-600 mb-6 text-sm">
              15-minute call to understand your challenges and recommend the best solution.
            </p>
            <Button 
              size="lg" 
              onClick={() => window.open('https://calendly.com/bernof-co', '_blank')} 
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl"
            >
              Book Free Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-red-200">
            <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Emergency Support</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Critical issue blocking your launch? Get immediate help from our emergency team.
            </p>
            <Button 
              size="lg" 
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl" 
              onClick={() => window.location.href = 'tel:+442080580773'}
            >
              Call Now
            </Button>
          </div>
          
          <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-accent/20">
            <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-6">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">View All Services</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Explore our comprehensive service packages designed for different needs and budgets.
            </p>
            <Button 
              size="lg" 
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 rounded-xl" 
              onClick={scrollToHomepageServices}
            >
              View Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            💡 Pro Tip: Don't Wait Until It's Too Late
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            The longer you wait to fix architectural issues, the more expensive they become. 
            Book a consultation today and save yourself weeks of frustration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-white hover:bg-primary/90 font-semibold px-8 py-4 rounded-xl" 
              onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/30 bg-white text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl" 
              onClick={openEmailClient}
            >
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibeCTA;
