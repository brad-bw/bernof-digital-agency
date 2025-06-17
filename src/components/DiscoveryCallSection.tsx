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

  // FIXED: Simple Calendly opener function - same as DiscoveryCallSection
  const openCalendly = () => {
    window.open('https://calendly.com/bernof-co', '_blank');
  };

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
      subService: ''
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
      content: "+44 20 3000 0000",
      action: "tel:+442030000000"
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
                  onClick={openCalendly}
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  Schedule Discovery Call
                </Button>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {isSubmitted ? "Message Sent" : "Send Us a Message"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest *
                      </label>
                      <Select value={formData.serviceInterest} onValueChange={handleServiceChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service category" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(serviceOptions).map(([key, option]) => (
                            <SelectItem key={key} value={key}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.serviceInterest && serviceOptions[formData.serviceInterest].subServices.length > 0 && (
                      <div>
                        <label htmlFor="subService" className="block text-sm font-medium text-gray-700 mb-2">
                          Specific Service
                        </label>
                        <Select value={formData.subService} onValueChange={handleSubServiceChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a specific service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions[formData.serviceInterest].subServices.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

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
                        placeholder="Tell us about your project requirements..."
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <Send className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
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
