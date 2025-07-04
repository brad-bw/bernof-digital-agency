import { jsxs, jsx } from 'react/jsx-runtime';
import { H as Header, F as Footer } from './Footer-DAqTR1lz.js';
import { u as useSEO, S as SEO, g as getCountryConfig } from './useSEO-BDE-cQJ4.js';
import { B as Breadcrumb } from './Breadcrumb-DDkSxO34.js';
import { B as Button } from '../main.js';
import { PoundSterling, TrendingUp, Clock, Users, ArrowRight, Code, Rocket } from 'lucide-react';
import { S as StartupValueProps, a as StartupProcess, b as StartupPricing, c as StartupFAQ, d as StartupCTA } from './StartupCTA-D7W9NhEF.js';
import { e as ContactSection } from './ContactSection-Cl8aRXHL.js';
import { C as CountryPainPoints } from './CountryPainPoints-C_U1cwK7.js';
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
import '@radix-ui/react-select';
import './client-YlveBlFV.js';
import '@supabase/supabase-js';

const UKStartupHero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "pt-24 pb-16 bg-gradient-to-br from-brand-sage-light via-white to-brand-sage-light relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-32 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -left-40 w-80 h-80 bg-brand-teal-dark/5 rounded-full blur-3xl animate-pulse delay-1000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-20 right-20 w-16 h-16 opacity-10", children: /* @__PURE__ */ jsx("div", { className: "text-4xl", children: "🇬🇧" }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/3 left-10 w-8 h-8 bg-brand-teal/20 rotate-45 rounded-lg animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/3 right-16 w-12 h-12 border-2 border-brand-teal/20 rounded-full animate-pulse delay-2000" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center px-4 py-2 bg-brand-sage-light/50 rounded-full text-brand-teal-dark font-semibold text-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xl mr-2", children: "🇬🇧" }),
            "UK Startup Development Experts"
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl lg:text-6xl font-bold text-gray-900 leading-tight font-inter", children: [
            "Launch Your",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-teal-light", children: "UK Startup" }),
            " ",
            "Successfully"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 leading-relaxed font-inter", children: "Join the UK's thriving startup ecosystem. From concept to launch - we handle the tech so you can focus on conquering the British market and scaling globally. Save 60% compared to London agencies." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-6 shadow-lg border border-brand-sage/30", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4 font-inter", children: "Why Choose UK for Your Startup?" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsx(PoundSterling, { className: "w-5 h-5 text-brand-teal" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700 font-inter", children: "£2.3B VC Investment (2024)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsx(TrendingUp, { className: "w-5 h-5 text-brand-teal" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700 font-inter", children: "Europe's Fintech Capital" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-brand-teal" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700 font-inter", children: "48hrs Company Setup" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-brand-teal" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700 font-inter", children: "Global Market Access" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: () => scrollToSection("startup-pricing"),
              className: "bg-gradient-to-r from-brand-teal to-brand-teal-light hover:from-brand-teal-dark hover:to-brand-teal text-white font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-inter",
              children: [
                "Get Your UK MVP Quote",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              onClick: () => scrollToSection("startup-process"),
              className: "border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300 font-inter",
              children: "How It Works"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-6 pt-8 border-t border-gray-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-brand-teal font-inter", children: "2-4" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 font-inter", children: "Weeks to UK MVP" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-brand-teal font-inter", children: "60%" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 font-inter", children: "vs London Costs" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-brand-teal font-inter", children: "50+" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 font-inter", children: "UK Startups Launched" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-2xl p-8 border border-brand-sage/30 relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-sage-light/30 to-transparent rounded-full -translate-y-8 translate-x-8" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6 relative z-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 font-inter", children: "Your UK Startup Journey" }),
                /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "🇬🇧" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-brand-teal rounded-full animate-pulse" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-brand-teal font-medium font-inter", children: "Live" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 p-4 bg-gradient-to-r from-brand-sage-light/30 to-brand-sage-light/10 rounded-xl border border-brand-sage/20", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx("span", { className: "text-white text-sm font-bold font-inter", children: "1" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("span", { className: "text-gray-900 font-medium font-inter", children: "UK Market Analysis & Validation" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 font-inter", children: "Competitive landscape + regulations" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 p-4 bg-gradient-to-r from-brand-sage-light/30 to-brand-sage-light/10 rounded-xl border border-brand-sage/20", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx("span", { className: "text-white text-sm font-bold font-inter", children: "2" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("span", { className: "text-gray-900 font-medium font-inter", children: "GDPR-Compliant MVP Development" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 font-inter", children: "Built for UK/EU regulations" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 p-4 bg-gradient-to-r from-brand-sage-light/30 to-brand-sage-light/10 rounded-xl border border-brand-sage/20", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx("span", { className: "text-white text-sm font-bold font-inter", children: "3" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("span", { className: "text-gray-900 font-medium font-inter", children: "UK User Testing & Feedback" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 font-inter", children: "British user preferences focus" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 p-4 bg-gradient-to-r from-brand-sage-light/30 to-brand-sage-light/10 rounded-xl border border-brand-sage/20", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx("span", { className: "text-white text-sm font-bold font-inter", children: "4" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("span", { className: "text-gray-900 font-medium font-inter", children: "Launch & Scale Globally" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 font-inter", children: "UK base, worldwide reach" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 p-4 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-xl text-white", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm opacity-90 font-inter", children: "Success Rate in UK Market" }),
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold font-inter", children: "94%" })
              ] }),
              /* @__PURE__ */ jsx(TrendingUp, { className: "w-8 h-8 opacity-80" })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full flex items-center justify-center animate-float shadow-lg", children: /* @__PURE__ */ jsx(Code, { className: "w-6 h-6 text-white" }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-brand-teal-light to-brand-teal rounded-full flex items-center justify-center animate-float delay-1000 shadow-lg", children: /* @__PURE__ */ jsx(Rocket, { className: "w-6 h-6 text-white" }) })
      ] })
    ] }) }) })
  ] });
};

const UKStartupDevelopment = () => {
  const seoData = useSEO("uk/startup-development");
  const ukCountry = getCountryConfig("uk");
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "United Kingdom", url: "/global-services/uk" },
    { name: "Startup Development Services", url: "/uk/startup-development" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen font-inter", children: [
    /* @__PURE__ */ jsx(SEO, { ...seoData }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsx(Breadcrumb, { items: breadcrumbItems }) }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h1", { className: "sr-only", children: "Expert UK Startup Development Services - From MVP to Scale" }),
        /* @__PURE__ */ jsx(UKStartupHero, {})
      ] }),
      /* @__PURE__ */ jsx(CountryPainPoints, { country: ukCountry, serviceType: "startup" }),
      /* @__PURE__ */ jsx(StartupValueProps, {}),
      /* @__PURE__ */ jsx(StartupProcess, {}),
      /* @__PURE__ */ jsx(StartupPricing, {}),
      /* @__PURE__ */ jsx(StartupFAQ, {}),
      /* @__PURE__ */ jsx(StartupCTA, {}),
      /* @__PURE__ */ jsx(ContactSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};

export { UKStartupDevelopment as default };
