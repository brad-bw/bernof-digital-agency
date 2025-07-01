import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MessageSquare, ArrowRight } from "lucide-react";
const DiscoveryCallSection = () => {
  const handleBookCall = () => {
    // This would typically integrate with a scheduling tool like Calendly
    window.open('https://calendly.com/bernof-co', '_blank');
  };
  const callBenefits = [{
    icon: <MessageSquare className="w-6 h-6 text-accent" />,
    title: "Strategic Consultation",
    description: "Discuss your business goals and digital challenges with our experts",
    pattern: "curved"
  }, {
    icon: <Calendar className="w-6 h-6 text-accent" />,
    title: "Custom Roadmap",
    description: "Receive a tailored strategy roadmap for your project",
    pattern: "angular"
  }, {
    icon: <Clock className="w-6 h-6 text-accent" />,
    title: "Quick Turnaround",
    description: "Get your detailed proposal within 24-48 hours",
    pattern: "geometric"
  }];
  const getPatternElement = (pattern: string) => {
    switch (pattern) {
      case 'curved':
        return <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/10 rounded-full"></div>;
      case 'angular':
        return <div className="absolute -top-3 -left-3 w-6 h-6 bg-accent/20 transform rotate-45 rounded-tl-lg"></div>;
      case 'geometric':
        return <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white/10 clip-path-polygon-[0_0,100%_0,50%_100%]"></div>;
      default:
        return null;
    }
  };
  return <section id="discovery-call" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
      {/* Logo-inspired background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/10 transform rotate-45 rounded-tl-3xl blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-accent/20 transform rotate-45"></div>
        <div className="absolute top-1/4 left-1/2 w-8 h-8 bg-white/5 rounded-tl-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            Book Your Free Discovery Call
            <div className="absolute -top-4 -right-4 w-5 h-5 bg-accent rounded-full opacity-40"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white/20 transform rotate-45"></div>
          </h2>
          <p className="text-xl opacity-90 mb-12 leading-relaxed">Let's explore how Bernof Co can transform your digital presence and drive your business growth. No commitment, just valuable insights.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {callBenefits.map((benefit, index) => <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white relative overflow-hidden group hover:bg-white/15 transition-all duration-300">
                {getPatternElement(benefit.pattern)}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="mx-auto mb-3 p-3 bg-white/20 rounded-2xl w-fit relative group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-accent/40 rounded-full"></div>
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 relative z-10">
                  <p className="text-white/80 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-12 h-12 bg-accent/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 bg-white/5 transform rotate-45 rounded-tl-lg"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center relative z-10">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-accent/30 rounded-full"></div>
                <div className="text-3xl font-bold text-accent mb-2">30</div>
                <div className="text-white/80">Minutes</div>
              </div>
              <div className="relative">
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/20 transform rotate-45"></div>
                <div className="text-3xl font-bold text-accent mb-2">Free</div>
                <div className="text-white/80">No Cost</div>
              </div>
              <div className="relative">
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-accent/20 rounded-tl-full"></div>
                <div className="text-3xl font-bold text-accent mb-2">24h</div>
                <div className="text-white/80">Proposal Delivery</div>
              </div>
            </div>
          </div>

          <Button onClick={handleBookCall} className="bg-accent hover:bg-accent/90 text-white font-semibold px-12 py-4 rounded-2xl transition-all duration-300 hover:scale-105 text-xl flex items-center gap-3 mx-auto relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="relative z-10 flex items-center gap-3">
              Schedule Your Call Now
              <ArrowRight size={24} />
            </div>
          </Button>

          <p className="text-sm text-white/70 mt-6">
            Available Monday - Friday, 9:00 AM - 6:00 PM CET
          </p>
        </div>
      </div>
    </section>;
};
export default DiscoveryCallSection;