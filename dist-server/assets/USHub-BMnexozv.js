import { jsxs, jsx } from 'react/jsx-runtime';
import { H as Header, F as Footer } from './Footer-DAqTR1lz.js';
import { u as useSEO, S as SEO } from './useSEO-BDE-cQJ4.js';
import { B as Breadcrumb } from './Breadcrumb-DDkSxO34.js';
import { B as Button } from '../main.js';
import { ArrowRight, ChevronRight, TrendingUp, CheckCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'react';
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

const USHub = () => {
  const seoData = useSEO("global-services/us");
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Global Services", url: "/global-services" },
    { name: "United States", url: "/global-services/us" }
  ];
  const services = [
    {
      title: "Web Development",
      challenge: "$15,000-$40,000 local cost",
      solution: "$5,000-$15,000 delivery",
      savings: "60% savings",
      link: "/us/web-development",
      description: "Custom websites with American market focus"
    },
    {
      title: "Software Development",
      challenge: "$150,000+ annual talent cost",
      solution: "$60,000-$100,000 delivery",
      savings: "60% savings",
      link: "/us/software-development",
      description: "Enterprise software with US compliance"
    },
    {
      title: "Startup Development",
      challenge: "$100,000+ MVP costs",
      solution: "$30,000-$60,000 delivery",
      savings: "65% savings",
      link: "/us/startup-development",
      description: "Launch your American startup with European talent"
    }
  ];
  const blogArticles = [
    {
      title: "US Digital Transformation: Post-Pandemic Growth Strategies",
      excerpt: "How American businesses are leveraging cost-effective European talent for digital innovation.",
      readTime: "8 min read",
      category: "Digital Strategy"
    },
    {
      title: "Silicon Valley vs European Development: Cost Analysis 2024",
      excerpt: "Comprehensive breakdown of development costs and quality comparison between US and European markets.",
      readTime: "12 min read",
      category: "Market Analysis"
    },
    {
      title: "American Startup Ecosystem: Leveraging Global Talent",
      excerpt: "How US startups are scaling efficiently by partnering with European development teams.",
      readTime: "10 min read",
      category: "Startup Strategy"
    },
    {
      title: "US E-commerce Boom: Development Strategies That Work",
      excerpt: "Proven approaches for American e-commerce businesses to build scalable platforms cost-effectively.",
      readTime: "15 min read",
      category: "E-commerce"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(SEO, { ...seoData }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsx(Breadcrumb, { items: breadcrumbItems }) }),
      /* @__PURE__ */ jsxs("section", { className: "relative min-h-[85vh] bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rotate-45 rounded-lg" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-32 left-40 w-40 h-2 bg-gradient-to-r from-white/30 to-transparent" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 relative z-10 pt-24 pb-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxs("h1", { className: "text-5xl lg:text-7xl font-bold leading-tight mb-8", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent", children: "America's Premier" }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-accent", children: "Digital Development Partner" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed", children: "Compete in America's demanding digital marketplace with European expertise and Silicon Valley quality at 60% cost savings. Serving US businesses from coast to coast." }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20", children: [
              /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "$50,000+" }),
              /* @__PURE__ */ jsx("div", { className: "text-white/80 text-sm", children: "Project Savings" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20", children: [
              /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "200+" }),
              /* @__PURE__ */ jsx("div", { className: "text-white/80 text-sm", children: "US Businesses" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20", children: [
              /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "100%" }),
              /* @__PURE__ */ jsx("div", { className: "text-white/80 text-sm", children: "US Compliant" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20", children: [
              /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "24h" }),
              /* @__PURE__ */ jsx("div", { className: "text-white/80 text-sm", children: "Project Start" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: () => window.open("https://calendly.com/bernof-co", "_blank"),
              className: "bg-accent hover:bg-accent/90 text-white font-bold px-10 py-5 rounded-xl text-xl h-auto transition-all duration-300 hover:scale-105 shadow-lg",
              children: [
                "Get Your US Market Quote",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-6 h-6 ml-3" })
              ]
            }
          )
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6", children: "Complete Digital Solutions for US Businesses" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto", children: "Comprehensive services tailored for the American market with European expertise and local understanding." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-8", children: services.map((service, index) => /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-8 items-center", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: service.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: service.description })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500 mb-1", children: "US Market Challenge" }),
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
          /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6", children: "Understanding the American Digital Landscape" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto", children: "Market insights and opportunities that drive our US-focused solutions." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 shadow-lg border border-gray-100", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Market Reality" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
              "US development costs have increased 45% since 2020",
              "Talent shortage affects 87% of American tech companies",
              "Silicon Valley rates now average $200+ per hour",
              "Remote work has opened global talent opportunities"
            ].map((stat, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3 p-4 bg-blue-50 rounded-lg", children: [
              /* @__PURE__ */ jsx(TrendingUp, { className: "w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: stat })
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 shadow-lg border border-gray-100", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Our US Expertise" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
              "US market understanding and business culture",
              "American timezone coverage and communication",
              "US compliance and security standards",
              "Silicon Valley quality at European rates"
            ].map((expertise, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3 p-4 bg-primary/5 rounded-lg", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: expertise })
            ] }, index)) })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6", children: "Latest Insights for American Businesses" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto", children: "Market analysis, digital transformation strategies, and growth insights for US companies." })
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
        /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-bold mb-6", children: "Ready to Save $50,000+ on Your Next Project?" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl mb-12 opacity-90", children: "Join successful American businesses leveraging European talent for digital transformation. Start your project in 24 hours." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: () => window.open("https://calendly.com/bernof-co", "_blank"),
              className: "bg-accent hover:bg-accent/90 text-white font-bold px-10 py-5 rounded-xl text-xl h-auto",
              children: "Get US Market Quote"
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
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};

export { USHub as default };
