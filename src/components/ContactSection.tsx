
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', company: '', serviceInterest: '', subService: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
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
      content: "hello@bernof.co",
      action: "mailto:hello@bernof.co"
    },
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Location",
      content: "European Union",
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
                <Button 
                  onClick={() => document.getElementById('discovery-call')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  Schedule Discovery Call
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
