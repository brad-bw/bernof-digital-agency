
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ServicesCallToAction = () => {
  return (
    <div className="text-center">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Transform Your Digital Presence?</h3>
        <p className="text-gray-600">Let's discuss how we can help you achieve your business goals</p>
      </div>
      <Button 
        onClick={() => document.getElementById('discovery-call')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 text-lg flex items-center gap-3 mx-auto relative overflow-hidden group shadow-lg"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        <div className="relative z-10 flex items-center gap-3">
          Schedule Free Consultation
          <ArrowRight size={20} />
        </div>
      </Button>
    </div>
  );
};
