
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const benefits = [
  "Free 30-minute consultation",
  "Project roadmap & timeline",
  "Technology recommendations",
  "Cost estimation",
  "No obligation quote"
];

export default function DiscoveryCallSection() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Book a free discovery call to discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center mb-4 last:mb-0">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/#contact">Book Discovery Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Link href="/global-services">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
