import { jsxs, jsx } from 'react/jsx-runtime';
import { H as Helmet, B as Button } from '../main.js';
import { ArrowRight, ChevronRight, TrendingUp, CheckCircle, ExternalLink, Shield, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { H as Header, F as Footer } from './Footer-DAqTR1lz.js';
import { u as useSitemapGenerator } from './useSitemapGenerator-BK71fS_v.js';
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

const SwitzerlandHub = () => {
  useSitemapGenerator();
  const services = [
    {
      title: "Web Development",
      challenge: "€15,000-€35,000 local cost",
      solution: "€6,000-€14,000 delivery",
      savings: "60% savings",
      link: "/ch/web-development",
      description: "Custom websites with Swiss compliance built-in"
    },
    {
      title: "Software Development",
      challenge: "€200,000+ annual talent cost",
      solution: "€80,000-€100,000 delivery",
      savings: "60% savings",
      link: "/ch/software-development",
      description: "Enterprise software with FINMA compliance"
    },
    {
      title: "Startup Development",
      challenge: "€100,000+ MVP costs",
      solution: "€32,000-€60,000 delivery",
      savings: "60% savings",
      link: "/ch/startup-development",
      description: "Launch your Swiss startup faster and cheaper"
    }
  ];
  const blogArticles = [
    {
      title: "Swiss Startup Funding: How to Maximize Your Runway in 2024",
      excerpt: "Learn how Swiss startups can extend their funding runway by 8+ months through smart development partnerships.",
      readTime: "8 min read",
      category: "Startup Strategy"
    },
    {
      title: "GDPR vs Swiss DSG: Development Compliance Guide",
      excerpt: "Complete guide to navigating Swiss data protection laws and GDPR compliance in software development.",
      readTime: "12 min read",
      category: "Compliance"
    },
    {
      title: "Zurich vs Geneva: Where to Launch Your Tech Startup",
      excerpt: "Comprehensive analysis of Switzerland's top tech hubs and their advantages for different types of startups.",
      readTime: "10 min read",
      category: "Market Analysis"
    },
    {
      title: "Swiss Fintech Regulations: FINMA-Compliant Development",
      excerpt: "Essential guide for fintech startups navigating FINMA regulations and compliance requirements.",
      readTime: "15 min read",
      category: "Fintech"
    }
  ];
  const caseStudies = [
    {
      type: "Zurich FinTech Startup",
      result: "Reduced MVP development from €120,000 to €45,000",
      industry: "Financial Technology"
    },
    {
      type: "Geneva E-commerce Company",
      result: "Saved €30,000 on platform development",
      industry: "E-commerce"
    },
    {
      type: "Basel Manufacturing Software",
      result: "Cut annual development costs by 65%",
      industry: "Manufacturing"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Switzerland Digital Services Hub | Swiss Web Development & Software Solutions | Bernof Co" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Switzerland's premier digital development partner. Save 60% on web development, software solutions, and startup services. GDPR-compliant, serving Zurich, Geneva, Basel with European excellence." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "Switzerland digital services, Swiss web development, Zurich software development, Geneva startup development, Swiss GDPR compliance, Switzerland tech solutions" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://bernofco.com/global-services/ch" }),
      /* @__PURE__ */ jsx("link", { rel: "hreflang", hrefLang: "en-ch", href: "https://bernofco.com/global-services/ch" }),
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
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent", children: "Switzerland's Premier" }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-accent", children: "Digital Development Partner" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed", children: "Save 60% on development costs while accessing Europe's top talent. Serving Swiss businesses from Zurich to Geneva with GDPR-compliant, cost-effective digital solutions." }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20", children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "€15,000+" }),
            /* @__PURE__ */ jsx("div", { className: "text-white/80 text-sm", children: "Project Savings" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20", children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "50+" }),
            /* @__PURE__ */ jsx("div", { className: "text-white/80 text-sm", children: "Swiss Businesses" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20", children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "100%" }),
            /* @__PURE__ */ jsx("div", { className: "text-white/80 text-sm", children: "GDPR & DSG Compliant" })
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
              "Get Your Swiss Market Quote",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-6 h-6 ml-3" })
            ]
          }
        )
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6", children: "Complete Digital Solutions for Swiss Businesses" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto", children: "Comprehensive services tailored for the Swiss market with local expertise and European excellence." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-8", children: services.map((service, index) => /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-8 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: service.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: service.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500 mb-1", children: "Swiss Market Challenge" }),
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
        /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6", children: "Understanding the Swiss Digital Landscape" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto", children: "Market research and insights that drive our Swiss-focused solutions." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 shadow-lg border border-gray-100", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Market Reality" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
            "Switzerland faces a 15,000 IT specialist shortage (Swiss ICT Report 2024)",
            "Swiss development costs are 3.2x higher than EU average",
            "67% of Swiss startups struggle with funding due to high development costs",
            "Average project delays of 4-6 months due to talent shortage"
          ].map((stat, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3 p-4 bg-blue-50 rounded-lg", children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: stat })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 shadow-lg border border-gray-100", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Our Swiss Expertise" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
            "Multi-language support (German, French, Italian)",
            "Swiss payment integration (Twint, PostFinance)",
            "FINMA compliance for fintech startups",
            "Zurich and Geneva market understanding"
          ].map((expertise, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3 p-4 bg-primary/5 rounded-lg", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: expertise })
          ] }, index)) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6", children: "Latest Insights for Swiss Businesses" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto", children: "Expert analysis, market insights, and strategic guidance for Swiss companies." })
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
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6", children: "Swiss Businesses We've Helped Succeed" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto", children: "Real results from Swiss companies who chose Bernof Co for their digital transformation." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16", children: caseStudies.map((study, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: "🏆" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: study.type }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: study.industry }),
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 border border-primary/20 rounded-xl p-4", children: /* @__PURE__ */ jsx("p", { className: "text-primary font-bold", children: study.result }) })
      ] }, index)) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 shadow-lg border border-gray-100", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6 text-center", children: "Swiss Compliance Credentials" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: [
          { icon: Shield, text: "GDPR Certified Development" },
          { icon: CheckCircle, text: "Swiss DSG Compliance" },
          { icon: Users, text: "FINMA Regulatory Understanding" },
          { icon: Clock, text: "Swiss Hosting Options Available" }
        ].map((credential, index) => {
          const IconComponent = credential.icon;
          return /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(IconComponent, { className: "w-8 h-8 text-primary" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 font-medium", children: credential.text })
          ] }, index);
        }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold mb-6", children: "Ready to Save €15,000+ on Your Next Project?" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl mb-12 opacity-90", children: "Join successful Swiss businesses who chose Bernof Co over expensive local agencies. Start your project in 48 hours." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => window.open("https://calendly.com/bernof-co", "_blank"),
            className: "bg-accent hover:bg-accent/90 text-white font-bold px-10 py-5 rounded-xl text-xl h-auto",
            children: "Get Swiss Market Quote"
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

export { SwitzerlandHub as default };
