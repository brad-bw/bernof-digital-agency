import { jsx, jsxs } from 'react/jsx-runtime';
import { ChevronRight, CheckCircle, Calendar, ArrowRight, Phone, Mail, TrendingDown, Clock, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { B as Button } from '../index.js';

const getServicesForType = (country, serviceType) => {
  const baseServices = [
    {
      title: "Web Development",
      challenge: "High local costs",
      solution: "60% cost savings",
      savings: "Save 60%",
      link: `/${country.code}/web-development`,
      description: "Professional websites and e-commerce solutions"
    },
    {
      title: "Software Development",
      challenge: "Talent shortage",
      solution: "Expert team ready",
      savings: "Save 65%",
      link: `/${country.code}/software-development`,
      description: "Custom applications and enterprise solutions"
    },
    {
      title: "Startup Development",
      challenge: "High MVP costs",
      solution: "Affordable MVPs",
      savings: "Save 70%",
      link: `/${country.code}/startup-development`,
      description: "MVP development and technical consulting"
    }
  ];
  return baseServices.filter((service) => {
    if (serviceType === "web") return service.title !== "Web Development";
    if (serviceType === "software") return service.title !== "Software Development";
    if (serviceType === "startup") return service.title !== "Startup Development";
    return true;
  });
};
const CountryServices = ({ country, serviceType }) => {
  const services = getServicesForType(country, serviceType);
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6", children: [
        "Complete Digital Solutions for ",
        country.name,
        " Businesses"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto", children: [
        "Comprehensive services tailored for the ",
        country.name,
        " market with local expertise and European excellence."
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-8", children: services.map((service, index) => /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-8 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: service.title }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: service.description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-500 mb-1", children: [
          country.name,
          " Market Challenge"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-lg font-semibold text-red-600", children: service.challenge })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500 mb-1", children: "Bernof Co Solution" }),
        /* @__PURE__ */ jsx("div", { className: "text-lg font-semibold text-primary", children: service.solution })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary text-white px-4 py-2 rounded-lg font-bold text-lg mb-4", children: service.savings }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: service.link,
            className: "inline-flex items-center text-accent hover:text-accent/80 font-semibold transition-colors",
            children: [
              "Explore Service ",
              /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 ml-1" })
            ]
          }
        )
      ] })
    ] }) }, index)) })
  ] }) }) });
};

const CountryCTA = ({ country, serviceType }) => {
  const getServiceContent = () => {
    switch (serviceType) {
      case "web":
        return {
          title: `Ready to Save 60% on Your ${country.name} Web Development?`,
          subtitle: `Join successful ${country.name} businesses who chose Bernof Co over expensive local agencies`,
          primaryCta: "Get Your Web Development Quote",
          secondaryCta: "Schedule Free Consultation",
          benefits: [
            "Professional website delivered in 4-6 weeks",
            "60% cost savings vs local agencies",
            "GDPR compliant & mobile-optimized",
            "Free consultation & project planning"
          ]
        };
      case "software":
        return {
          title: `Stop Overpaying for Software Development in ${country.name}`,
          subtitle: `Get enterprise-grade software at 60% less cost than local development teams`,
          primaryCta: "Discuss Your Software Project",
          secondaryCta: "Get Technical Assessment",
          benefits: [
            "Senior developers at 60% lower cost",
            "Scalable architecture & modern tech stack",
            "No recruitment delays or employment costs",
            "European standards & compliance included"
          ]
        };
      case "startup":
        return {
          title: `Launch Your ${country.name} Startup Without Burning Your Budget`,
          subtitle: `Build your MVP for 60% less and extend your runway by 8+ months`,
          primaryCta: "Validate Your Startup Idea",
          secondaryCta: "Book Strategy Session",
          benefits: [
            "MVP ready in 8-12 weeks, not 6+ months",
            "60% cost savings = 8+ months extra runway",
            "Investor-ready documentation included",
            "Technical co-founder expertise without equity"
          ]
        };
      default:
        return {
          title: "Ready to Get Started?",
          subtitle: "Let's discuss your project",
          primaryCta: "Get Started",
          secondaryCta: "Schedule Call",
          benefits: []
        };
    }
  };
  const content = getServiceContent();
  const handlePrimaryAction = () => {
    window.open("https://calendly.com/bernof-co", "_blank");
  };
  const handleSecondaryAction = () => {
    if (serviceType === "software") {
      window.open("https://calendly.com/bernof-co", "_blank");
    } else {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white relative overflow-hidden", id: "cta", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-10 left-10 w-40 h-40 border border-white/10 rotate-12 rounded-lg" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-20 w-32 h-32 bg-accent/5 rounded-full" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/4 w-64 h-2 bg-gradient-to-r from-white/20 to-transparent rotate-45" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-32 right-1/4 w-20 h-20 border-2 border-white/15 rounded-full" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-40 left-1/3 w-12 h-12 bg-white/10 rotate-45" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 mb-8 border border-white/20", children: [
          /* @__PURE__ */ jsx("span", { className: "text-3xl", children: country.flag }),
          /* @__PURE__ */ jsxs("span", { className: "text-white font-semibold text-lg", children: [
            "Serving ",
            country.name
          ] })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-6xl font-bold mb-6 leading-tight", children: content.title }),
        /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed", children: content.subtitle }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto", children: content.benefits.map((benefit, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-1 h-full bg-green-400" }),
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-green-400 flex-shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: benefit })
        ] }, index)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center mb-16", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: handlePrimaryAction,
              className: "bg-accent hover:bg-accent/90 text-white font-bold px-10 py-5 rounded-2xl text-xl h-auto transition-all duration-300 hover:scale-105 shadow-lg",
              children: [
                /* @__PURE__ */ jsx(Calendar, { className: "w-6 h-6 mr-3" }),
                content.primaryCta
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: handleSecondaryAction,
              variant: "outline",
              className: "border-2 border-white/30 text-white bg-transparent hover:bg-white hover:text-primary font-bold px-10 py-5 rounded-2xl text-xl h-auto transition-all duration-300",
              children: [
                content.secondaryCta,
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-6 h-6 ml-3" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center group", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 border border-white/20 relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-8 h-8 bg-white/10 rounded-bl-3xl" }),
            /* @__PURE__ */ jsx(Phone, { className: "w-10 h-10 text-white" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: "Direct Call" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/80 mb-4", children: "Speak with our team immediately" }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "tel:+442080580773",
              className: "text-accent hover:text-accent/80 font-bold text-lg transition-colors",
              children: "+44 20 80 580 773"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center group", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 border border-white/20 relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-8 h-8 bg-accent/10 rounded-bl-3xl" }),
            /* @__PURE__ */ jsx(Mail, { className: "w-10 h-10 text-white" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: "Email Us" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/80 mb-4", children: "Detailed response within 1 business day" }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "mailto:info@bernofco.com",
              className: "text-accent hover:text-accent/80 font-bold text-lg transition-colors",
              children: "info@bernofco.com"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center group", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 border border-white/20 relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-8 h-8 bg-green-400/10 rounded-bl-3xl" }),
            /* @__PURE__ */ jsx(Calendar, { className: "w-10 h-10 text-white" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: "Book Meeting" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/80 mb-4", children: "Free 30-minute consultation" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handlePrimaryAction,
              className: "text-accent hover:text-accent/80 font-bold text-lg transition-colors",
              children: "Available Now"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-primary to-green-400" }),
        /* @__PURE__ */ jsx("div", { className: "text-center mb-8", children: /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-white mb-4", children: [
          "Why ",
          country.name,
          " Businesses Choose Bernof Co"
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white/5 rounded-xl p-6 border border-white/10 relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-accent" }),
            /* @__PURE__ */ jsx(TrendingDown, { className: "w-8 h-8 mx-auto mb-3 text-accent" }),
            /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-white mb-2", children: "60%" }),
            /* @__PURE__ */ jsx("div", { className: "text-white/80 font-medium", children: "Cost Savings" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/5 rounded-xl p-6 border border-white/10 relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-primary" }),
            /* @__PURE__ */ jsx(Clock, { className: "w-8 h-8 mx-auto mb-3 text-primary" }),
            /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-white mb-2", children: "48h" }),
            /* @__PURE__ */ jsx("div", { className: "text-white/80 font-medium", children: "Project Start" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/5 rounded-xl p-6 border border-white/10 relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-green-400" }),
            /* @__PURE__ */ jsx(Users, { className: "w-8 h-8 mx-auto mb-3 text-green-400" }),
            /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-white mb-2", children: "50+" }),
            /* @__PURE__ */ jsx("div", { className: "text-white/80 font-medium", children: "Expert Developers" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/5 rounded-xl p-6 border border-white/10 relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-blue-400" }),
            /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 mx-auto mb-3 text-blue-400" }),
            /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-white mb-2", children: "100%" }),
            /* @__PURE__ */ jsx("div", { className: "text-white/80 font-medium", children: "Money-Back Guarantee" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};

export { CountryServices as C, CountryCTA as a };
