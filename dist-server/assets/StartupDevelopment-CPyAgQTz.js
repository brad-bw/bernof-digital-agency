import { jsxs, jsx } from 'react/jsx-runtime';
import { H as Header, F as Footer } from './Footer-DAqTR1lz.js';
import { B as Button } from '../main.js';
import { Rocket, ArrowRight, Code, Users } from 'lucide-react';
import { S as StartupValueProps, a as StartupProcess, b as StartupPricing, c as StartupFAQ, d as StartupCTA } from './StartupCTA-D7W9NhEF.js';
import { u as useSEO, S as SEO } from './useSEO-BDE-cQJ4.js';
import { B as Breadcrumb } from './Breadcrumb-DDkSxO34.js';
import 'react';
import 'react-router-dom';
import 'react-dom/client';
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
import './PaymentMethodsSection-CCcCSALj.js';
import './badge-DlvEopxR.js';

const StartupHero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "pt-24 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm font-inter", children: [
            /* @__PURE__ */ jsx(Rocket, { className: "w-4 h-4 mr-2" }),
            "Startup Development Experts"
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl lg:text-6xl font-bold text-gray-900 leading-tight font-inter", children: [
            "Turn Your",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent", children: "Startup Idea" }),
            " ",
            "Into Reality"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 leading-relaxed font-inter", children: "From concept to launch - we handle the tech so you can focus on growth. No massive upfront investment, no ongoing contracts. Just results." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: () => scrollToSection("startup-pricing"),
              className: "bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105 font-inter",
              children: [
                "Get Your MVP Quote",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              onClick: () => scrollToSection("startup-process"),
              className: "border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300 font-inter",
              children: "How It Works"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-6 pt-8 border-t border-gray-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-primary font-inter", children: "2-4" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 font-inter", children: "Weeks to MVP" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-primary font-inter", children: "70%" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 font-inter", children: "Cost Savings" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-primary font-inter", children: "100+" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 font-inter", children: "Startups Launched" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-2xl shadow-2xl p-8 border border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 font-inter", children: "Your Startup Journey" }),
            /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-green-500 rounded-full animate-pulse" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 p-3 bg-gray-50 rounded-lg", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-accent rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white text-sm font-bold font-inter", children: "1" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700 font-inter", children: "Idea Validation & Planning" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 p-3 bg-gray-50 rounded-lg", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-accent rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white text-sm font-bold font-inter", children: "2" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700 font-inter", children: "MVP Development" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 p-3 bg-gray-50 rounded-lg", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-accent rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white text-sm font-bold font-inter", children: "3" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700 font-inter", children: "Testing & Refinement" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 p-3 bg-gray-50 rounded-lg", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-accent rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white text-sm font-bold font-inter", children: "4" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700 font-inter", children: "Launch & Scale" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-float", children: /* @__PURE__ */ jsx(Code, { className: "w-6 h-6 text-white" }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-float delay-1000", children: /* @__PURE__ */ jsx(Users, { className: "w-6 h-6 text-white" }) })
      ] })
    ] }) }) })
  ] });
};

const StartupDevelopment = () => {
  const seoData = useSEO("startup-development");
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Startup Development Services", url: "/startup-development" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen font-inter", children: [
    /* @__PURE__ */ jsx(SEO, { ...seoData }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsx(Breadcrumb, { items: breadcrumbItems }) }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h1", { className: "sr-only", children: "Expert Startup Development Services - From MVP to Scale" }),
        /* @__PURE__ */ jsx(StartupHero, {})
      ] }),
      /* @__PURE__ */ jsx(StartupValueProps, {}),
      /* @__PURE__ */ jsx(StartupProcess, {}),
      /* @__PURE__ */ jsx(StartupPricing, {}),
      /* @__PURE__ */ jsx(StartupFAQ, {}),
      /* @__PURE__ */ jsx(StartupCTA, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};

export { StartupDevelopment as default };
