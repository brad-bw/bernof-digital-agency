
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MessageSquare, ArrowRight } from "lucide-react";

const DiscoveryCallSection = () => {
  const handleBookCall = () => {
    // This would typically integrate with a scheduling tool like Calendly
    window.open('https://calendly.com/bernoff-co/discovery-call', '_blank');
  };

  const callBenefits = [
    {
      icon: <MessageSquare className="w-6 h-6 text-accent" />,
      title: "Strategic Consultation",
      description: "Discuss your business goals and digital challenges with our experts"
    },
    {
      icon: <Calendar className="w-6 h-6 text-accent" />,
      title: "Custom Roadmap",
      description: "Receive a tailored strategy roadmap for your project"
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Quick Turnaround",
      description: "Get your detailed proposal within 24-48 hours"
    }
  ];

  return (
    <section id="discovery-call" className="py-20 bg-gradient-to-br from-primary to-primary/90">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Book Your Free Discovery Call
          </h2>
          <p className="text-xl opacity-90 mb-12 leading-relaxed">
            Let's explore how Bernoff Co can transform your digital presence and drive your business growth. 
            No commitment, just valuable insights.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {callBenefits.map((benefit, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-3 p-3 bg-white/20 rounded-full w-fit">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-white/80 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">30</div>
                <div className="text-white/80">Minutes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">Free</div>
                <div className="text-white/80">No Cost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">24h</div>
                <div className="text-white/80">Proposal Delivery</div>
              </div>
            </div>
          </div>

          <Button 
            onClick={handleBookCall}
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-12 py-4 rounded-lg transition-all duration-300 hover:scale-105 text-xl flex items-center gap-3 mx-auto"
          >
            Schedule Your Call Now
            <ArrowRight size={24} />
          </Button>

          <p className="text-sm text-white/70 mt-6">
            Available Monday - Friday, 9:00 AM - 6:00 PM CET
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryCallSection;
