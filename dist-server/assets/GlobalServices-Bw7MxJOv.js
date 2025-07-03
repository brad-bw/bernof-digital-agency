import { jsxs, jsx } from 'react/jsx-runtime';
import { H as Helmet, B as Button } from '../index.js';
import { ArrowRight, TrendingUp, Users, Clock, Award, CheckCircle, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { H as Header, F as Footer } from './Footer-Dopl2bL3.js';
import '@wroud/vite-plugin-ssg/react/server';
import 'react-dom/client';
import 'react';
import '@radix-ui/react-toast';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import 'next-themes';
import 'sonner';
import '@radix-ui/react-tooltip';
import '@tanstack/react-query';
import 'react-fast-compare';
import 'invariant';
import 'shallowequal';
import '@radix-ui/react-slot';

const GlobalServices = () => {
  const countries = [
    {
      code: "ch",
      name: "Switzerland",
      flag: "🇨🇭",
      status: "Live",
      savings: "€15,000+",
      description: "Save 60% vs Swiss agencies with GDPR-compliant solutions",
      link: "/global-services/ch",
      services: ["Web Development", "Software Development", "Startup Development"]
    },
    {
      code: "uk",
      name: "United Kingdom",
      flag: "🇬🇧",
      status: "Live",
      savings: "£12,000+",
      description: "Post-Brexit digital advantage with European talent",
      link: "/global-services/uk",
      services: ["Web Development", "Software Development", "Startup Development"]
    },
    {
      code: "us",
      name: "United States",
      flag: "🇺🇸",
      status: "Live",
      savings: "$15,000+",
      description: "Silicon Valley quality at European prices",
      link: "/global-services/us",
      services: ["Web Development", "Software Development", "Startup Development"]
    },
    {
      code: "it",
      name: "Italy",
      flag: "🇮🇹",
      status: "Live",
      savings: "€10,000+",
      description: "Bridge Italy's digital transformation gap",
      link: "/global-services/it",
      services: ["Web Development", "Software Development", "Startup Development"]
    }
  ];
  const features = [
    {
      icon: /* @__PURE__ */ jsx(Zap, { className: "w-8 h-8 text-accent" }),
      title: "Lightning Fast Delivery",
      description: "Projects delivered 3x faster than industry standard"
    },
    {
      icon: /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 text-primary" }),
      title: "European Quality Standards",
      description: "ISO-certified processes with military-grade security"
    },
    {
      icon: /* @__PURE__ */ jsx(Award, { className: "w-8 h-8 text-accent" }),
      title: "Award-Winning Results",
      description: "Recognition from leading industry publications"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Global Digital Services | European Excellence, Worldwide Reach | Bernof Co" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Premium digital development services across Europe and beyond. 60% cost savings on web development, software solutions, and startup services. Choose your market and start saving today." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "global digital services, international web development, European software development, multi-country digital agency, cost-effective development services" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://bernofco.com/global-services" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-accent/15 to-transparent rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 relative z-10 py-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("h1", { className: "text-5xl lg:text-6xl font-bold leading-tight", children: [
              /* @__PURE__ */ jsx("span", { className: "block text-white mb-2", children: "European" }),
              /* @__PURE__ */ jsx("span", { className: "block text-white mb-2", children: "Excellence," }),
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent", children: "Global Reach" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl", children: "Serving businesses across Europe and beyond with 60% cost savings on premium digital development services. Choose your market and unlock European expertise at unmatched value." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                onClick: () => window.open("https://calendly.com/bernof-co", "_blank"),
                className: "bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-white font-bold px-8 py-5 rounded-2xl text-lg h-auto transition-all duration-300 hover:scale-105 shadow-xl",
                children: [
                  "Start Your Global Project",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "outline",
                className: "border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 font-bold px-8 py-5 rounded-2xl text-lg h-auto",
                onClick: () => {
                  document.getElementById("countries")?.scrollIntoView({ behavior: "smooth" });
                },
                children: "Explore Markets"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: [
          { value: "60%", label: "Average Savings", icon: /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6" }) },
          { value: "50+", label: "Expert Developers", icon: /* @__PURE__ */ jsx(Users, { className: "w-6 h-6" }) },
          { value: "48h", label: "Project Start", icon: /* @__PURE__ */ jsx(Clock, { className: "w-6 h-6" }) },
          { value: "100%", label: "Success Rate", icon: /* @__PURE__ */ jsx(Award, { className: "w-6 h-6" }) }
        ].map((stat, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300", children: [
          /* @__PURE__ */ jsx("div", { className: "text-accent mb-3", children: stat.icon }),
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-1", children: stat.value }),
          /* @__PURE__ */ jsx("div", { className: "text-gray-300 text-sm", children: stat.label })
        ] }, index)) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Why Choose Global Excellence?" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Experience the perfect blend of European craftsmanship and global accessibility" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: features.map((feature, index) => /* @__PURE__ */ jsxs("div", { className: "group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-6 p-3 bg-gray-50 rounded-2xl w-fit group-hover:bg-primary/10 transition-colors", children: feature.icon }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: feature.title }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: feature.description })
      ] }, index)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { id: "countries", className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Choose Your Market" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto", children: "Select your country to discover market-specific solutions, local insights, and tailored pricing for your region." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: countries.map((country, index) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: country.link,
          className: "group bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-1",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-4xl", children: country.flag }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors", children: country.name }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 mt-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-green-600", children: country.status })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-lg font-bold text-primary mb-1", children: [
                  "Save ",
                  country.savings
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: "per project" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6 leading-relaxed", children: country.description }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3 mb-6", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900", children: "Available Services:" }),
              country.services.map((service, serviceIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-green-500" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: service })
              ] }, serviceIndex))
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-primary font-semibold", children: [
                "Explore ",
                country.name,
                " Services"
              ] }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" })
            ] })
          ]
        },
        country.code
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-8", children: "Expanding Soon" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto", children: [
          { flag: "🇩🇪", name: "Germany", quarter: "Q2 2025" },
          { flag: "🇫🇷", name: "France", quarter: "Q3 2025" },
          { flag: "🇪🇸", name: "Spain", quarter: "Q3 2025" },
          { flag: "🇳🇱", name: "Netherlands", quarter: "Q4 2025" }
        ].map((country, index) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-4 text-center border border-gray-200", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl mb-2 block", children: country.flag }),
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-900", children: country.name }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 mt-1", children: country.quarter })
        ] }, index)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold mb-6", children: "Ready to Go Global?" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl mb-12 opacity-90", children: "Choose your market and discover how we can help your business succeed with European excellence and local expertise." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => window.open("https://calendly.com/bernof-co", "_blank"),
            className: "bg-accent hover:bg-accent/90 text-white font-bold px-10 py-5 rounded-xl text-xl h-auto",
            children: "Book Global Consultation"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            className: "border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-bold px-10 py-5 rounded-xl text-xl h-auto",
            onClick: () => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            },
            children: "Contact Us"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};

export { GlobalServices as default };
