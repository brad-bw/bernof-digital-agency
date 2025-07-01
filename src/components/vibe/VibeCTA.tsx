
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";

const VibeCTA = () => {
  return (
    <section id="vibe-cta" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to{" "}
            <span className="text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text">
              Unblock Your Vision?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Don't let AI tool limitations stop your progress. Get expert help and transform 
            your prototype into a production-ready success story.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors duration-300">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Free Consultation</h3>
            <p className="text-gray-300 mb-6">
              15-minute call to understand your challenges and recommend the best solution.
            </p>
            <Button 
              size="lg"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl"
              onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
            >
              Book Free Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors duration-300">
            <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Emergency Support</h3>
            <p className="text-gray-300 mb-6">
              Critical issue blocking your launch? Get immediate help from our emergency team.
            </p>
            <Button 
              size="lg"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl"
              onClick={() => window.location.href = 'tel:+442080580773'}
            >
              Call Now: +44 20 80 580 773
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors duration-300">
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Service Packages</h3>
            <p className="text-gray-300 mb-6">
              Explore our comprehensive service packages designed for different needs and budgets.
            </p>
            <Button 
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 rounded-xl"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="bg-accent/20 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            💡 Pro Tip: Don't Wait Until It's Too Late
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            The longer you wait to fix architectural issues, the more expensive they become. 
            Book a consultation today and save yourself weeks of frustration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-2xl"
              onClick={() => window.open('https://calendly.com/bernof-co', '_blank')}
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white/30 bg-transparent text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-2xl"
              onClick={() => window.location.href = 'mailto:info@bernofco.com?subject=Vibe Coding Support Inquiry'}
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
