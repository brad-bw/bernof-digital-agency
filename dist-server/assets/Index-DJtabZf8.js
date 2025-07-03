import { jsxs, jsx } from 'react/jsx-runtime';
import { H as Header, F as Footer } from './Footer-Dopl2bL3.js';
import { B as Button } from '../index.js';
import { ArrowRight, Play, CheckCircle, Code, Palette, TrendingUp, Award, Users, Zap, Clock, Gift, Shield, MessageSquare, Calendar } from 'lucide-react';
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as ContactSection } from './ContactSection-DgR8PDHV.js';
import { B as Badge } from './badge-DEQ2LrWH.js';
import { P as PaymentMethodsSection } from './PaymentMethodsSection-DoCDtvAH.js';
import { u as useSEO, S as SEO } from './useSEO-CVpIl9nc.js';
import 'react';
import 'react-router-dom';
import '@wroud/vite-plugin-ssg/react/server';
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
import '@radix-ui/react-select';
import './client-YlveBlFV.js';
import '@supabase/supabase-js';

const HeroSection = () => {
  const scrollToDiscoveryCall = () => {
    const element = document.getElementById("discovery-call");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "pt-32 pb-20 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 geometric-bg-primary opacity-60" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85" }),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-20 right-10 w-40 h-40 opacity-10 animate-geometric-float", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-br from-primary to-accent rounded-full" }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 left-10 w-32 h-32 opacity-10 animate-fluid-motion", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-tr from-accent to-primary organic-shape" }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 right-1/4 w-24 h-24 opacity-15 animate-geometric-float", style: { animationDelay: "5s" }, children: /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-primary/20 curved-element" }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-full flowing-curves" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxs("h1", { className: "font-inter text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight relative", children: [
        "Managing the",
        /* @__PURE__ */ jsxs("span", { className: "text-primary block relative", children: [
          "Future",
          /* @__PURE__ */ jsx("div", { className: "absolute -right-12 top-4 w-8 h-8 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full animate-geometric-float" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -left-8 -top-2 w-6 h-6 bg-accent/20 curved-element animate-fluid-motion", style: { animationDelay: "3s" } })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-inter relative", children: [
        "Transform your digital presence with comprehensive development solutions, creative design services, and strategic marketing that drives measurable growth.",
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 right-1/4 w-16 h-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center mb-12", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            onClick: scrollToDiscoveryCall,
            className: "bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-xl text-lg flex items-center gap-2 relative overflow-hidden group font-inter",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center gap-2", children: [
                "Book Discovery Call",
                /* @__PURE__ */ jsx(ArrowRight, { size: 20 })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "outline",
            className: "border-2 border-primary/30 text-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary/90 hover:text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-500 text-lg flex items-center gap-2 relative overflow-hidden group backdrop-blur-sm font-inter",
            onClick: () => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }),
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary to-primary/90 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Play, { size: 18 }),
                "View Our Services"
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mt-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center animate-fade-in relative group", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -left-4 w-6 h-6 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-geometric-float" }),
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 font-inter", children: "50+" }),
          /* @__PURE__ */ jsx("div", { className: "text-gray-600 font-medium font-inter", children: "Projects Delivered" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center animate-fade-in relative group", style: { animationDelay: "0.2s" }, children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-3 -right-3 w-5 h-5 bg-gradient-to-tr from-primary/20 to-accent/20 curved-element opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-fluid-motion" }),
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2 font-inter", children: "3" }),
          /* @__PURE__ */ jsx("div", { className: "text-gray-600 font-medium font-inter", children: "Core Service Pillars" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center animate-fade-in relative group", style: { animationDelay: "0.4s" }, children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-bl from-accent/20 to-primary/20 organic-shape opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-geometric-float" }),
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 font-inter", children: "100%" }),
          /* @__PURE__ */ jsx("div", { className: "text-gray-600 font-medium font-inter", children: "Client Satisfaction" })
        ] })
      ] })
    ] }) })
  ] });
};

const ServiceCard = ({
  icon,
  title,
  description,
  detailedDescription,
  features,
  technologies,
  priceRange,
  timeline,
  deliverables,
  index
}) => {
  return /* @__PURE__ */ jsxs(Card, { className: "group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 bg-white h-full", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "text-center pb-6", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 p-4 bg-primary/10 rounded-2xl w-fit", children: icon }),
      /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-bold text-gray-900 mb-4", children: title }),
      /* @__PURE__ */ jsx(CardDescription, { className: "text-gray-600 text-base leading-relaxed mb-4", children: description }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 leading-relaxed", children: detailedDescription })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { className: "pt-0 flex flex-col flex-grow", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-3", children: "What We Deliver" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: features.map((feature, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-800", children: feature.name }),
            /* @__PURE__ */ jsx("div", { className: "text-gray-600 text-sm", children: feature.description })
          ] })
        ] }, idx)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-3", children: "Technologies" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: technologies.map((tech, idx) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: tech }, idx)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 mb-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-sm block", children: "Investment" }),
            /* @__PURE__ */ jsx("span", { className: "font-bold text-lg text-primary", children: priceRange })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-sm block", children: "Timeline" }),
            /* @__PURE__ */ jsx("span", { className: "font-bold text-lg text-accent", children: timeline })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-3 border-t border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-sm block", children: "Includes:" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700 font-medium", children: deliverables })
          ] }),
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-primary" })
        ] }) })
      ] }) })
    ] })
  ] });
};

const ServicesHeader = () => {
  return /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
    /* @__PURE__ */ jsxs("h2", { className: "font-inter text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block", children: [
      "Our Expertise Areas",
      /* @__PURE__ */ jsx("div", { className: "absolute -top-3 -right-3 w-4 h-4 bg-accent rounded-full opacity-30" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter", children: "Comprehensive digital solutions that combine technical expertise with creative excellence to help your business thrive in the digital landscape." })
  ] });
};

const ServicesCallToAction = () => {
  return /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: "Ready to Transform Your Digital Presence?" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Let's discuss how we can help you achieve your business goals" })
    ] }),
    /* @__PURE__ */ jsxs(
      Button,
      {
        onClick: () => document.getElementById("discovery-call")?.scrollIntoView({ behavior: "smooth" }),
        className: "bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 text-lg flex items-center gap-3 mx-auto relative overflow-hidden group shadow-lg",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center gap-3", children: [
            "Schedule Free Consultation",
            /* @__PURE__ */ jsx(ArrowRight, { size: 20 })
          ] })
        ]
      }
    )
  ] });
};

const ServicesBackground = () => {
  return /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 w-full h-full", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-10 left-1/4 w-2 h-2 bg-primary/5 rounded-full" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-1/3 w-3 h-3 bg-accent/5 rounded-full" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-10 w-4 h-4 bg-primary/5 transform rotate-45" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 right-10 w-6 h-6 bg-accent/5 rounded-tl-full" })
  ] }) });
};

const servicesData = [
  {
    icon: /* @__PURE__ */ jsx(Code, { className: "w-12 h-12 text-primary" }),
    title: "Web Development & Tech Solutions",
    description: "From concept to launch, we build high-performance websites and applications that drive results.",
    detailedDescription: "We specialize in modern web technologies including React, Next.js, and full-stack development. Our solutions are built for scale, performance, and user experience.",
    features: [
      { name: "Custom Website Development", description: "Tailored solutions built from scratch" },
      { name: "E-Commerce Platforms", description: "Shopify, WooCommerce, custom stores" },
      { name: "Web Applications", description: "SaaS platforms, dashboards, tools" },
      { name: "API Integration", description: "Third-party services, payment gateways" },
      { name: "Performance Optimization", description: "Speed, SEO, mobile responsiveness" }
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    priceRange: "From €700",
    timeline: "2-8 weeks",
    deliverables: "Full website, mobile-responsive design, admin panel, documentation",
    pattern: "angular"
  },
  {
    icon: /* @__PURE__ */ jsx(Palette, { className: "w-12 h-12 text-primary" }),
    title: "Brand Design & Visual Identity",
    description: "Create a memorable brand presence that resonates with your audience and stands out in the market.",
    detailedDescription: "We craft comprehensive visual identities that tell your brand story through strategic design, from logo creation to complete brand guidelines.",
    features: [
      { name: "Logo & Brand Identity", description: "Complete visual identity systems" },
      { name: "Motion Graphics", description: "Animated logos, social media content" },
      { name: "Video Production", description: "Promotional videos, explainer content" },
      { name: "Print & Digital Design", description: "Business cards, brochures, web graphics" },
      { name: "Brand Guidelines", description: "Comprehensive style guides" }
    ],
    technologies: ["Adobe Creative Suite", "Figma", "After Effects", "Cinema 4D"],
    priceRange: "From €200",
    timeline: "1-6 weeks",
    deliverables: "Brand identity package, style guide, source files, usage guidelines",
    pattern: "curved"
  },
  {
    icon: /* @__PURE__ */ jsx(TrendingUp, { className: "w-12 h-12 text-primary" }),
    title: "Digital Marketing & Growth",
    description: "Data-driven strategies that increase visibility, drive traffic, and convert visitors into customers.",
    detailedDescription: "We combine technical SEO expertise with creative marketing campaigns to deliver measurable growth for your business.",
    features: [
      { name: "SEO Optimization", description: "Technical & content SEO audits" },
      { name: "Social Media Strategy", description: "Content planning, community management" },
      { name: "PPC Advertising", description: "Google Ads, Facebook Ads optimization" },
      { name: "Analytics & Reporting", description: "Performance tracking, insights" },
      { name: "Conversion Optimization", description: "Landing pages, A/B testing" }
    ],
    technologies: ["Google Analytics", "SEMrush", "Google Ads", "Facebook Business"],
    priceRange: "From €300/month",
    timeline: "Ongoing",
    deliverables: "Monthly reports, strategy documents, campaign assets, performance dashboards",
    pattern: "geometric"
  }
];

const ServicesSection = () => {
  return /* @__PURE__ */ jsxs("section", { id: "services", className: "py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsx(ServicesBackground, {}),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 relative z-10", children: [
      /* @__PURE__ */ jsx(ServicesHeader, {}),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: servicesData.map((service, index) => /* @__PURE__ */ jsx(
        ServiceCard,
        {
          icon: service.icon,
          title: service.title,
          description: service.description,
          detailedDescription: service.detailedDescription,
          features: service.features,
          technologies: service.technologies,
          priceRange: service.priceRange,
          timeline: service.timeline,
          deliverables: service.deliverables,
          pattern: service.pattern,
          index
        },
        index
      )) }),
      /* @__PURE__ */ jsx(PaymentMethodsSection, {}),
      /* @__PURE__ */ jsx(ServicesCallToAction, {})
    ] })
  ] });
};

const AboutSection = () => {
  const values = [{
    icon: /* @__PURE__ */ jsx(Award, { className: "w-8 h-8 text-accent" }),
    title: "Premium Quality",
    description: "We deliver exceptional results that exceed expectations and drive real business value.",
    pattern: "curved"
  }, {
    icon: /* @__PURE__ */ jsx(Users, { className: "w-8 h-8 text-accent" }),
    title: "Client Partnership",
    description: "Your success is our success. We build lasting relationships through transparent collaboration.",
    pattern: "angular"
  }, {
    icon: /* @__PURE__ */ jsx(Zap, { className: "w-8 h-8 text-accent" }),
    title: "Innovation Focus",
    description: "Cutting-edge technology and creative solutions that keep you ahead of the competition.",
    pattern: "geometric"
  }];
  const achievements = ["Industry best practices and coding standards", "Cross-browser and device compatibility", "Performance optimization and security", "Accessibility compliance (WCAG 2.1 AA)", "Satisfaction guarantee on all projects", "Post-launch support included"];
  const ctaFeatures = [{
    icon: /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-white" }),
    title: "Free",
    subtitle: "30-minute consultation",
    description: "No strings attached strategy session"
  }, {
    icon: /* @__PURE__ */ jsx(Gift, { className: "w-5 h-5 text-white" }),
    title: "Custom",
    subtitle: "Tailored proposals",
    description: "Solutions designed for your needs"
  }, {
    icon: /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 text-white" }),
    title: "Guaranteed",
    subtitle: "Satisfaction promise",
    description: "100% commitment to your success"
  }];
  const getPatternElement = (pattern) => {
    switch (pattern) {
      case "curved":
        return /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full animate-geometric-float" });
      case "angular":
        return /* @__PURE__ */ jsx("div", { className: "absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-tr from-primary/20 to-accent/20 curved-element animate-fluid-motion" });
      case "geometric":
        return /* @__PURE__ */ jsx("div", { className: "absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-bl from-accent/20 to-primary/20 organic-shape animate-geometric-float" });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsxs("section", { id: "about", className: "py-20 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-gray-50/60" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 geometric-pattern" }),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl animate-fluid-motion" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-tr from-accent/5 to-primary/5 curved-element blur-3xl animate-geometric-float" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-primary/3 to-accent/3 organic-shape blur-2xl animate-fluid-motion", style: {
        animationDelay: "10s"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 right-1/3 w-6 h-6 bg-accent/10 rounded-full animate-geometric-float", style: {
        animationDelay: "5s"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 left-1/4 w-8 h-8 bg-primary/10 curved-element animate-fluid-motion", style: {
        animationDelay: "7s"
      } })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block", children: [
          "Managing the Future, Today",
          /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 w-5 h-5 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full animate-geometric-float" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-bl from-primary/30 to-accent/30 curved-element animate-fluid-motion" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed", children: "At Bernof Co, we combine strategic thinking with technical excellence to deliver digital solutions that transform businesses and drive sustainable growth." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-6 -left-6 w-12 h-12 bg-accent/5 rounded-tl-3xl" }),
          /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-gray-900 mb-6 relative", children: "Our Commitment to Excellence" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-lg leading-relaxed mb-6", children: "We believe in delivering more than just services – we deliver results. Our comprehensive approach ensures every project meets the highest standards of quality, performance, and user experience." }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: achievements.map((achievement, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 relative", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-accent mt-1 flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: achievement }),
            index % 3 === 0 && /* @__PURE__ */ jsx("div", { className: "absolute -left-8 top-0 w-2 h-2 bg-primary/10 rounded-full" })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: values.map((value, index) => /* @__PURE__ */ jsxs(Card, { className: "border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group", children: [
          getPatternElement(value.pattern),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/2 to-accent/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
          /* @__PURE__ */ jsx(CardContent, { className: "p-6 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl relative", children: [
              value.icon,
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-2 h-2 bg-accent/30 rounded-full" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-xl font-semibold text-gray-900 mb-2", children: value.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: value.description })
            ] })
          ] }) })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90 rounded-3xl overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-white/10 to-accent/20 rounded-full blur-3xl animate-fluid-motion" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-accent/20 to-white/10 curved-element blur-2xl animate-geometric-float" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 right-1/3 w-24 h-24 bg-white/5 organic-shape blur-xl animate-fluid-motion", style: {
            animationDelay: "8s"
          } })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 p-8 md:p-12 text-center text-white", children: [
          /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto mb-12", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-3xl md:text-4xl font-bold mb-4 font-playfair relative", children: [
              "Ready to Transform Your Digital Presence?",
              /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -right-8 w-4 h-4 bg-accent/40 rounded-full animate-geometric-float" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xl opacity-90 leading-relaxed", children: "Join successful businesses who trust Bernof Co to manage their digital future. Let's discuss how we can drive your growth together." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", children: ctaFeatures.map((feature, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 group relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-accent/30 to-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-geometric-float" }),
            /* @__PURE__ */ jsx("div", { className: "absolute -bottom-2 -left-2 w-6 h-6 bg-white/10 curved-element opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-fluid-motion" }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gradient-to-br from-white/20 to-accent/20 rounded-xl relative", children: [
              feature.icon,
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-2 h-2 bg-accent/50 rounded-full animate-geometric-float" })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-accent", children: feature.title }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-white", children: feature.subtitle }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-white/80", children: feature.description })
            ] })
          ] }, index)) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
            /* @__PURE__ */ jsxs(Button, { onClick: () => document.getElementById("discovery-call")?.scrollIntoView({
              behavior: "smooth"
            }), className: "bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-500 hover:scale-105 text-lg flex items-center gap-3 relative overflow-hidden group shadow-xl", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center gap-3", children: [
                "Start Your Transformation",
                /* @__PURE__ */ jsx(ArrowRight, { size: 20 })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-white/70", children: "Book your free consultation • No commitment required" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};

const DiscoveryCallSection = () => {
  const handleBookCall = () => {
    window.open("https://calendly.com/bernof-co", "_blank");
  };
  const callBenefits = [{
    icon: /* @__PURE__ */ jsx(MessageSquare, { className: "w-6 h-6 text-accent" }),
    title: "Strategic Consultation",
    description: "Discuss your business goals and digital challenges with our experts",
    pattern: "curved"
  }, {
    icon: /* @__PURE__ */ jsx(Calendar, { className: "w-6 h-6 text-accent" }),
    title: "Custom Roadmap",
    description: "Receive a tailored strategy roadmap for your project",
    pattern: "angular"
  }, {
    icon: /* @__PURE__ */ jsx(Clock, { className: "w-6 h-6 text-accent" }),
    title: "Quick Turnaround",
    description: "Get your detailed proposal within 24-48 hours",
    pattern: "geometric"
  }];
  const getPatternElement = (pattern) => {
    switch (pattern) {
      case "curved":
        return /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -right-2 w-6 h-6 bg-white/10 rounded-full" });
      case "angular":
        return /* @__PURE__ */ jsx("div", { className: "absolute -top-3 -left-3 w-6 h-6 bg-accent/20 transform rotate-45 rounded-tl-lg" });
      case "geometric":
        return /* @__PURE__ */ jsx("div", { className: "absolute -bottom-2 -right-2 w-6 h-6 bg-white/10 clip-path-polygon-[0_0,100%_0,50%_100%]" });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsxs("section", { id: "discovery-call", className: "py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-10 left-10 w-40 h-40 bg-white/3 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-20 w-32 h-32 bg-accent/10 transform rotate-45 rounded-tl-3xl blur-2xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 right-1/4 w-6 h-6 bg-white/5 rounded-full" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/3 left-1/3 w-4 h-4 bg-accent/20 transform rotate-45" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/2 w-8 h-8 bg-white/5 rounded-tl-full" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center text-white", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-playfair text-4xl md:text-5xl font-bold mb-6 relative inline-block", children: [
        "Book Your Free Discovery Call",
        /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 w-5 h-5 bg-accent rounded-full opacity-40" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-2 -left-2 w-3 h-3 bg-white/20 transform rotate-45" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl opacity-90 mb-12 leading-relaxed", children: "Let's explore how Bernof Co can transform your digital presence and drive your business growth. No commitment, just valuable insights." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", children: callBenefits.map((benefit, index) => /* @__PURE__ */ jsxs(Card, { className: "bg-white/10 backdrop-blur-sm border-white/20 text-white relative overflow-hidden group hover:bg-white/15 transition-all duration-300", children: [
        getPatternElement(benefit.pattern),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
        /* @__PURE__ */ jsxs(CardHeader, { className: "text-center pb-4 relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-3 p-3 bg-white/20 rounded-2xl w-fit relative group-hover:scale-110 transition-transform duration-300", children: [
            benefit.icon,
            /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-2 h-2 bg-accent/40 rounded-full" })
          ] }),
          /* @__PURE__ */ jsx(CardTitle, { className: "text-lg font-semibold", children: benefit.title })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { className: "pt-0 relative z-10", children: /* @__PURE__ */ jsx("p", { className: "text-white/80 text-sm leading-relaxed", children: benefit.description }) })
      ] }, index)) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-12 h-12 bg-accent/10 rounded-full blur-xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-8 h-8 bg-white/5 transform rotate-45 rounded-tl-lg" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 text-center relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -left-2 w-3 h-3 bg-accent/30 rounded-full" }),
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-accent mb-2", children: "30" }),
            /* @__PURE__ */ jsx("div", { className: "text-white/80", children: "Minutes" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-1 -right-1 w-2 h-2 bg-white/20 transform rotate-45" }),
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-accent mb-2", children: "Free" }),
            /* @__PURE__ */ jsx("div", { className: "text-white/80", children: "No Cost" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -bottom-2 -right-2 w-4 h-4 bg-accent/20 rounded-tl-full" }),
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-accent mb-2", children: "24h" }),
            /* @__PURE__ */ jsx("div", { className: "text-white/80", children: "Proposal Delivery" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Button, { onClick: handleBookCall, className: "bg-accent hover:bg-accent/90 text-white font-semibold px-12 py-4 rounded-2xl transition-all duration-300 hover:scale-105 text-xl flex items-center gap-3 mx-auto relative overflow-hidden group", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center gap-3", children: [
          "Schedule Your Call Now",
          /* @__PURE__ */ jsx(ArrowRight, { size: 24 })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-white/70 mt-6", children: "Available Monday - Friday, 9:00 AM - 6:00 PM CET" })
    ] }) })
  ] });
};

const Index = () => {
  const seoData = useSEO("home");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen font-inter", children: [
    /* @__PURE__ */ jsx(SEO, { ...seoData }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h1", { className: "sr-only", children: "Bernof Co - Premier Digital Solutions & Growth Services" }),
        /* @__PURE__ */ jsx(HeroSection, {})
      ] }),
      /* @__PURE__ */ jsx(ServicesSection, {}),
      /* @__PURE__ */ jsx(AboutSection, {}),
      /* @__PURE__ */ jsx(DiscoveryCallSection, {}),
      /* @__PURE__ */ jsx(ContactSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};

export { Index as default };
