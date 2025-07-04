import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState } from 'react';
import { c as cn, u as useToast, B as Button } from '../main.js';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown, Check, ChevronUp, CheckCircle, Send, Mail, Phone, MapPin } from 'lucide-react';
import { s as supabase } from './client-YlveBlFV.js';

const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

const ContactSection = () => {
  const handleBookCall = () => {
    window.open("https://calendly.com/bernof-co", "_blank");
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceInterest: "",
    subService: "",
    message: ""
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      console.log("Submitting form data:", formData);
      const { data, error } = await supabase.from("contact_submissions").insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          service_interest: formData.serviceInterest,
          sub_service: formData.subService || null,
          message: formData.message
        }
      ]);
      console.log("Supabase response:", { data, error });
      if (error) {
        console.error("Error submitting form:", error);
        toast({
          title: "Error",
          description: "There was an error submitting your message. Please try again.",
          variant: "destructive"
        });
        return;
      }
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. One of our consultants will be in touch within 1 business day."
      });
      setFormData({ name: "", email: "", company: "", serviceInterest: "", subService: "", message: "" });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Unexpected error:", error);
      toast({
        title: "Error",
        description: "There was an unexpected error. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleServiceChange = (value) => {
    setFormData({
      ...formData,
      serviceInterest: value,
      subService: ""
      // Reset sub-service when main service changes
    });
  };
  const handleSubServiceChange = (value) => {
    setFormData({
      ...formData,
      subService: value
    });
  };
  const contactInfo = [
    {
      icon: /* @__PURE__ */ jsx(Mail, { className: "w-6 h-6 text-accent" }),
      title: "Email Us",
      content: "info@bernofco.com",
      action: "mailto:info@bernofco.com"
    },
    {
      icon: /* @__PURE__ */ jsx(Phone, { className: "w-6 h-6 text-accent" }),
      title: "Call Us",
      content: "+44 20 80 580 773",
      action: "tel:+442080580773"
    },
    {
      icon: /* @__PURE__ */ jsx(MapPin, { className: "w-6 h-6 text-accent" }),
      title: "Location",
      content: "United Kingdom",
      action: null
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6", children: "Get In Touch" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed", children: "Ready to start your project? Have questions about our services? We'd love to hear from you and discuss how we can help." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Let's Start a Conversation" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-lg leading-relaxed mb-8", children: "Whether you need a complete digital transformation or a specific service, we're here to help you achieve your goals with professional expertise and personalized attention." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: contactInfo.map((info, index) => /* @__PURE__ */ jsx(Card, { className: "border-0 shadow-md hover:shadow-lg transition-shadow duration-300", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-accent/10 rounded-lg", children: info.icon }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-1", children: info.title }),
            info.action ? /* @__PURE__ */ jsx(
              "a",
              {
                href: info.action,
                className: "text-primary hover:text-primary/80 transition-colors",
                children: info.content
              }
            ) : /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: info.content })
          ] })
        ] }) }) }, index)) }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-primary to-primary/90 rounded-xl p-6 text-white", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-semibold mb-3", children: "Prefer to schedule a call?" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/90 mb-4", children: "Book a free 30-minute discovery call to discuss your project in detail." }),
          /* @__PURE__ */ jsx("p", { className: "text-white/80 text-sm mb-4", children: "Available Monday - Friday, 9:00 AM - 6:00 PM GMT" }),
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: handleBookCall,
              className: "bg-accent hover:bg-accent/90 text-white",
              children: "Schedule Discovery Call"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "border-0 shadow-lg", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-bold text-gray-900", children: isSubmitted ? "Message Sent" : "Send Us a Message" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: isSubmitted ? /* @__PURE__ */ jsxs("div", { className: "text-center py-12", children: [
          /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-12 h-12 text-accent" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-playfair text-2xl font-bold text-gray-900 mb-4", children: "Thank You!" }),
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-semibold text-gray-900 mb-6", children: "Your message has been sent successfully!" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-lg leading-relaxed mb-6 max-w-md mx-auto", children: "Thank you for reaching out to us. One of our consultants will review your inquiry and get back to you within 1 business day." }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-base mb-8 max-w-md mx-auto", children: "We'll contact you at the email address you provided to discuss your project requirements in detail." }),
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: () => setIsSubmitted(false),
              variant: "outline",
              className: "text-primary border-primary hover:bg-primary hover:text-white font-semibold px-8 py-3",
              children: "Send Another Message"
            }
          )
        ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 mb-2", children: "Full Name *" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "name",
                  name: "name",
                  type: "text",
                  required: true,
                  value: formData.name,
                  onChange: handleChange,
                  className: "w-full",
                  placeholder: "Your full name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Address *" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "email",
                  name: "email",
                  type: "email",
                  required: true,
                  value: formData.email,
                  onChange: handleChange,
                  className: "w-full",
                  placeholder: "your@email.com"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "company", className: "block text-sm font-medium text-gray-700 mb-2", children: "Company Name" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "company",
                name: "company",
                type: "text",
                value: formData.company,
                onChange: handleChange,
                className: "w-full",
                placeholder: "Your company name"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "serviceInterest", className: "block text-sm font-medium text-gray-700 mb-2", children: "Service Interest *" }),
              /* @__PURE__ */ jsxs(Select, { onValueChange: handleServiceChange, value: formData.serviceInterest, children: [
                /* @__PURE__ */ jsx(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a service" }) }),
                /* @__PURE__ */ jsx(SelectContent, { children: Object.entries(serviceOptions).map(([key, service]) => /* @__PURE__ */ jsx(SelectItem, { value: key, children: service.label }, key)) })
              ] })
            ] }),
            formData.serviceInterest && formData.serviceInterest !== "other" && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "subService", className: "block text-sm font-medium text-gray-700 mb-2", children: "Specific Service" }),
              /* @__PURE__ */ jsxs(Select, { onValueChange: handleSubServiceChange, value: formData.subService, children: [
                /* @__PURE__ */ jsx(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select specific service" }) }),
                /* @__PURE__ */ jsx(SelectContent, { children: serviceOptions[formData.serviceInterest]?.subServices.map((subService) => /* @__PURE__ */ jsx(SelectItem, { value: subService, children: subService }, subService)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 mb-2", children: "Message *" }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                id: "message",
                name: "message",
                required: true,
                value: formData.message,
                onChange: handleChange,
                rows: 5,
                className: "w-full",
                placeholder: "Tell us about your project, goals, and how we can help..."
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              type: "submit",
              disabled: isSubmitting,
              className: "w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 flex items-center justify-center gap-2",
              children: [
                isSubmitting ? "Sending..." : "Send Message",
                /* @__PURE__ */ jsx(Send, { size: 18 })
              ]
            }
          )
        ] }) })
      ] })
    ] })
  ] }) }) });
};

export { Card as C, CardHeader as a, CardTitle as b, CardDescription as c, CardContent as d, ContactSection as e };
