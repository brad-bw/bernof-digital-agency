import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const handleBookCall = () => {
    // This would typically integrate with a scheduling tool like Calendly
    window.open('https://calendly.com/bernof-co', '_blank');
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: '',
    subService: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const serviceOptions = {
    "web-development": {
      label: "Web Development & Tech Solutions",
      subServices: [
        "Custom Website Development",
        "E-commerce Platform Development",
        "Web Application Development",
        "Mobile App Development", 
        "API Development & Integration",
        "Database Design & Management",
        "Cloud Solutions & Migration",
        "Technical Consulting",
        "Other"
      ]
    },
    "creative-design": {
      label: "Creative Design & Branding",
      subServices: [
        "Brand Identity Design",
        "Logo Design & Visual Identity",
        "UI/UX Design",
        "Website Design & Prototyping",
        "Graphic Design & Marketing Materials",
        "Print Design",
        "Packaging Design",
        "Design System Development",
        "Other"
      ]
    },
    "strategic-marketing": {
      label: "Strategic Marketing & Growth",
      subServices: [
        "Digital Marketing Strategy",
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Content Marketing & Creation",
        "Email Marketing Campaigns",
        "Pay-Per-Click (PPC) Advertising",
        "Marketing Analytics & Reporting",
        "Growth Hacking & Optimization",
        "Other"
      ]
    },
    "other": {
      label: "Other",
      subServices: []
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Submitting form data:', formData);
      
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company || null,
            service_interest: formData.serviceInterest,
            sub_service: formData.subService || null,
            message: formData.message
          }
        ]);

      console.log('Supabase response:', { data, error });

      if (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Error",
          description: "There was an error submitting your message. Please try again.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. One of our consultants will be in touch within 1 business day.",
      });
      
      setFormData({ name: '', email: '', company: '', serviceInterest: '', subService: '', message: '' });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "There was an unexpected error. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (value: string) => {
    setFormData({
      ...formData,
      serviceInterest: value,
      subService: '' // Reset sub-service when main service changes
    });
  };

  const handleSubServiceChange = (value: string) => {
    setFormData({
      ...formData,
      subService: value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "Email Us",
      content: "info@bernofco.com",
      action: "mailto:info@bernofco.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      title: "Call Us",
      content: "+44 20 80 580 773",
      action: "tel:+442080580773"
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Location",
      content: "United Kingdom",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your project? Have questions about our services? 
              We'd love to hear from you and discuss how we can help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Whether you need a complete digital transformation or a specific service, 
                  we're here to help you achieve your goals with professional expertise and personalized attention.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-accent/10 rounded-lg">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h4>
                          {info.action ? (
                            <a 
                              href={info.action}
                              className="text-primary hover:text-primary/80 transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <span className="text-gray-600">{info.content}</span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary to-primary/90 rounded-xl p-6 text-white">
                <h4 className="text-xl font-semibold mb-3">
                  Prefer to schedule a call?
                </h4>
                <p className="text-white/90 mb-4">
                  Book a free 30-minute discovery call to discuss your project in detail.
                </p>
                <p className="text-white/80 text-sm mb-4">
                  Available Monday - Friday, 9:00 AM - 6:00 PM GMT
                </p>
                <Button 
                  onClick={handleBookCall}
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  Schedule Discovery Call
                </Button>
              </div>
            </div>

            {/* Contact Form or Confirmation */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {isSubmitted ? "Message Sent" : "Send Us a Message"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="w-12 h-12 text-accent" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                      Thank You!
                    </h3>
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">
                      Your message has been sent successfully!
                    </h4>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-md mx-auto">
                      Thank you for reaching out to us. One of our consultants will review your inquiry and get back to you within 1 business day.
                    </p>
                    <p className="text-gray-500 text-base mb-8 max-w-md mx-auto">
                      We'll contact you at the email address you provided to discuss your project requirements in detail.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="text-primary border-primary hover:bg-primary hover:text-white font-semibold px-8 py-3"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interest *
                        </label>
                        <Select onValueChange={handleServiceChange} value={formData.serviceInterest}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(serviceOptions).map(([key, service]) => (
                              <SelectItem key={key} value={key}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      {formData.serviceInterest && formData.serviceInterest !== 'other' && (
                        <div>
                          <label htmlFor="subService" className="block text-sm font-medium text-gray-700 mb-2">
                            Specific Service
                          </label>
                          <Select onValueChange={handleSubServiceChange} value={formData.subService}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select specific service" />
                            </SelectTrigger>
                            <SelectContent>
                              {serviceOptions[formData.serviceInterest as keyof typeof serviceOptions]?.subServices.map((subService) => (
                                <SelectItem key={subService} value={subService}>
                                  {subService}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full"
                        placeholder="Tell us about your project, goals, and how we can help..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send size={18} />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
