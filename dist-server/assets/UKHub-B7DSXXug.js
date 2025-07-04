import { jsxs, jsx } from 'react/jsx-runtime';
import { H as Helmet, B as Button } from '../index.js';
import { ArrowRight, ChevronRight, TrendingUp, CheckCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { H as Header, F as Footer } from './Footer-Dopl2bL3.js';
import { u as useSitemapGenerator } from './useSitemapGenerator-BK71fS_v.js';
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

const UKHub = () => {
  useSitemapGenerator();
  const services = [
    {
      title: "Web Development",
      challenge: "£12,000-£28,000 local cost",
      solution: "£4,800-£11,200 delivery",
      savings: "60% savings",
      link: "/uk/web-development",
      description: "Post-Brexit compliant websites with UK standards"
    },
    {
      title: "Software Development",
      challenge: "£150,000+ annual talent cost",
      solution: "£64,000-£120,000 delivery",
      savings: "60% savings",
      link: "/uk/software-development",
      description: "Enterprise software with UK regulatory compliance"
    },
    {
      title: "Startup Development",
      challenge: "£80,000+ MVP costs",
      solution: "£25,600-£48,000 delivery",
      savings: "60% savings",
      link: "/uk/startup-development",
      description: "Launch your UK startup with European talent"
    }
  ];
  const blogArticles = [
    {
      title: "Post-Brexit Digital Strategy: Accessing European Talent",
      excerpt: "How UK businesses can leverage European expertise without visa complications post-Brexit.",
      readTime: "10 min read",
      category: "Brexit Strategy"
    },
    {
      title: "London vs Manchester: Tech Hub Cost Analysis 2024",
      excerpt: "Comprehensive comparison of development costs and opportunities across major UK tech cities.",
      readTime: "8 min read",
      category: "Market Analysis"
    },
    {
      title: "UK Fintech Regulations: FCA Compliance in Development",
      excerpt: "Essential guide for fintech startups navigating FCA regulations and compliance requirements.",
      readTime: "12 min read",
      category: "Fintech"
    },
    {
      title: "UK Startup Ecosystem: £1T+ Value, High Development Costs",
      excerpt: "Analysis of the UK's trillion-pound startup ecosystem and strategies for cost-effective development.",
      readTime: "15 min read",
      category: "Startup Strategy"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "UK Digital Services Hub | British Web Development & Software Solutions | Bernof Co" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "UK's premier digital development partner. Save 60% on web development, software solutions, and startup services. Post-Brexit European talent access, serving London, Manchester, Edinburgh." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "UK digital services, British web development, London software development, Manchester startup development, post-Brexit tech solutions, UK European talent" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://bernofco.com/global-services/uk" }),
      /* @__PURE__ */ jsx("link", { rel: "hreflang", hrefLang: "en-gb", href: "https://bernofco.com/global-services/uk" }),
      /* @__PURE__ */ jsx("link", { rel: "hreflang", hrefLang: "x-default", href: "https://bernofco.com/global-services" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[85vh] bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rotate-45 rounded-lg" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-32 left-40 w-40 h-2 bg-gradient-to-r from-white/30 to-transparent" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 relative z-10 pt-24 pb-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl lg:text-7xl font-bold leading-tight mb-8", children: [
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent", children: "UK's Premier" }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-accent", children: "Digital Development Partner" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed", children: "Post-Brexit digital advantage with European talent access. Save 60% on development costs while serving UK businesses from London to Edinburgh with world-class solutions." }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20", children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "£12,000+" }),
            /* @__PURE__ */ jsx("div", { className: "text-white/80 text-sm", children: "Project Savings" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20", children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "£1T+" }),
            /* @__PURE__ */ jsx("div", { className: "text-white/80 text-sm", children: "UK Startup Value" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20", children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "100%" }),
            /* @__PURE__ */ jsx("div", { className: "text-white/80 text-sm", children: "UK Compliant" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20", children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "48h" }),
            /* @__PURE__ */ jsx("div", { className: "text-white/80 text-sm", children: "Project Start" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            onClick: () => window.open("https://calendly.com/bernof-co", "_blank"),
            className: "bg-accent hover:bg-accent/90 text-white font-bold px-10 py-5 rounded-xl text-xl h-auto transition-all duration-300 hover:scale-105 shadow-lg",
            children: [
              "Get Your UK Market Quote",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-6 h-6 ml-3" })
            ]
          }
        )
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6", children: "Complete Digital Solutions for UK Businesses" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto", children: "Comprehensive services tailored for the UK market with European excellence and British business understanding." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-8", children: services.map((service, index) => /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-8 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: service.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: service.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500 mb-1", children: "UK Market Challenge" }),
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
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6", children: "Understanding the UK Digital Landscape" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto", children: "Post-Brexit opportunities and market insights that drive our UK-focused solutions." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 shadow-lg border border-gray-100", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Market Reality" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
            "Digital skills gap: 2.6M unfilled roles by 2030 affecting timelines",
            "Post-Brexit talent costs rising 40% above EU average",
            "London development costs drive national premium pricing",
            "Tech sector contributes £149B to UK economy annually"
          ].map((stat, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3 p-4 bg-blue-50 rounded-lg", children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: stat })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 shadow-lg border border-gray-100", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Our UK Expertise" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
            "Same business hours and cultural alignment",
            "Native English communication and documentation",
            "UK regulatory compliance and data protection",
            "London, Manchester, Edinburgh market understanding"
          ].map((expertise, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3 p-4 bg-primary/5 rounded-lg", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: expertise })
          ] }, index)) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6", children: "Latest Insights for UK Businesses" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto", children: "Post-Brexit strategies, market analysis, and growth insights for British companies." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: blogArticles.map((article, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 group cursor-pointer", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium", children: article.category }),
          /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-sm", children: article.readTime })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors", children: article.title }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6 leading-relaxed", children: article.excerpt }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center text-accent hover:text-accent/80 font-semibold transition-colors", children: [
          "Read Article ",
          /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4 ml-2" })
        ] })
      ] }, index)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold mb-6", children: "Ready to Save £12,000+ on Your Next Project?" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl mb-12 opacity-90", children: "Join UK businesses leveraging European talent for cost-effective digital solutions. Post-Brexit advantage starts here." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => window.open("https://calendly.com/bernof-co", "_blank"),
            className: "bg-accent hover:bg-accent/90 text-white font-bold px-10 py-5 rounded-xl text-xl h-auto",
            children: "Get UK Market Quote"
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
            children: "Schedule Consultation"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};

export { UKHub as default };
