import { jsxs, jsx } from 'react/jsx-runtime';
import { B as Button, H as Helmet } from '../index.js';
import { H as Header, F as Footer } from './Footer-Dopl2bL3.js';
import { AlertTriangle, ArrowRight, CheckCircle, Zap, Shield, Wrench, Users, Rocket, Link, Gauge, HeadphonesIcon, Clock, Star, MessageSquare, Phone, TrendingUp } from 'lucide-react';
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
import 'react-router-dom';
import 'react-fast-compare';
import 'invariant';
import 'shallowequal';
import '@radix-ui/react-slot';

const VibeHero = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById("vibe-cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative bg-white overflow-hidden pt-16 pb-12", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-5", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
      backgroundImage: `url('/images/87978c55-5497-4099-bba4-4a5affd48d0b.png')`,
      backgroundSize: "400px 400px",
      backgroundRepeat: "repeat"
    } }) }),
    /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center justify-center gap-2 bg-red-50 rounded-full px-4 py-2 mb-6", children: [
        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-500" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-red-700", children: "AI Development Crisis?" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl lg:text-6xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight", children: [
        "When Your",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "AI-Built App" }),
        " ",
        "Hits a Wall, We Break Through"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed", children: "From Cursor crashes to Bubble breakdowns - get expert help to scale your vibe-coded dreams into production-ready reality." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-12", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            onClick: scrollToConsultation,
            size: "lg",
            className: "bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-2xl text-lg group",
            children: [
              "Get Emergency Help",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            size: "lg",
            onClick: scrollToConsultation,
            className: "border-primary/30 text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-2xl text-lg font-medium",
            children: "Free Consultation"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-accent" }),
          /* @__PURE__ */ jsx("span", { children: "24/7 Emergency Support" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-accent" }),
          /* @__PURE__ */ jsx("span", { children: "Production-Ready Solutions" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-accent" }),
          /* @__PURE__ */ jsx("span", { children: "Expert AI Tool Knowledge" })
        ] })
      ] })
    ] }) })
  ] });
};

const VibeProblem = () => {
  const tools = [
    {
      name: "Cursor AI",
      logo: "https://cursor.sh/favicon.ico",
      issues: ["Version inconsistencies", "Prompt credit burning", "Context limitations"],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Lovable",
      logo: "https://lovable.dev/favicon.ico",
      issues: ["Limited backend control", "Scaling issues", "Deployment challenges"],
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Bolt.new",
      logo: "https://bolt.new/favicon.ico",
      issues: ["Security vulnerabilities", "Production gaps", "Performance issues"],
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Bubble",
      logo: "https://bubble.io/favicon.ico",
      issues: ["Complex workflow debugging", "Performance bottlenecks", "Scaling limitations"],
      color: "from-blue-400 to-blue-500"
    },
    {
      name: "v0.dev",
      logo: "https://v0.dev/favicon.ico",
      issues: ["CSS consistency problems", "Limited customization", "Integration challenges"],
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Webflow",
      logo: "https://webflow.com/favicon.ico",
      issues: ["Complex interactions debugging", "CMS limitations", "Code export issues"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Framer",
      logo: "https://framer.com/favicon.ico",
      issues: ["Code export complications", "Performance issues", "Responsive problems"],
      color: "from-pink-500 to-pink-600"
    },
    {
      name: "Claude Artifacts",
      logo: "https://claude.ai/favicon.ico",
      issues: ["Context limitations", "Integration challenges", "Scaling difficulties"],
      color: "from-amber-500 to-amber-600"
    },
    {
      name: "Windsurf",
      logo: "https://codeium.com/favicon.ico",
      issues: ["Environment configuration", "Dependency management", "Deployment issues"],
      color: "from-teal-500 to-teal-600"
    },
    {
      name: "Replit",
      logo: "https://replit.com/favicon.ico",
      issues: ["Deployment challenges", "Scaling limitations", "Performance constraints"],
      color: "from-green-500 to-green-600"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-6", children: [
        "The Vibe Coding",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "Reality Check" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "AI coding tools promise quick prototypes, but reality hits hard when you need production-ready applications. Here's what developers are really experiencing across the most popular platforms." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16", children: tools.map((tool, index) => /* @__PURE__ */ jsxs("div", { className: "group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: tool.logo,
            alt: `${tool.name} logo`,
            onError: (e) => {
              e.currentTarget.style.display = "none";
              const fallbackDiv = document.createElement("div");
              fallbackDiv.className = "w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 font-bold text-xs";
              fallbackDiv.textContent = tool.name.charAt(0);
              e.currentTarget.parentElement.insertBefore(fallbackDiv, e.currentTarget);
            },
            className: "w-8 h-8 object-contain rounded"
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 text-sm", children: tool.name })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: tool.issues.map((issue, issueIndex) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-xs text-gray-600", children: [
        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsx("span", { children: issue })
      ] }, issueIndex)) })
    ] }, index)) }),
    /* @__PURE__ */ jsx("div", { className: "border border-0 rounded-2xl p-8 max-w-4xl mx-auto bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold mb-4 text-primary text-4xl", children: "Sound Familiar?" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg mb-8 text-gray-700", children: "You're not alone. Thousands of developers hit these walls every day. The good news? We've been solving these exact problems for years." }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-6 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-primary mb-2", children: "73%" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Of AI-generated apps fail in production" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-6 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-primary mb-2", children: "48hrs" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Average time stuck on deployment issues" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-6 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-primary mb-2", children: "$12K" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Average cost of starting over" })
        ] })
      ] })
    ] }) })
  ] }) });
};

const VibeSolution = () => {
  const solutions = [{
    icon: Zap,
    title: "Emergency Fixes",
    description: "Critical issues resolved in hours, not days"
  }, {
    icon: Shield,
    title: "Production Migration",
    description: "Scale from prototype to enterprise-ready"
  }, {
    icon: Wrench,
    title: "Custom Integrations",
    description: "Connect APIs, databases, and services seamlessly"
  }, {
    icon: Users,
    title: "Ongoing Support",
    description: "Expert monitoring and maintenance"
  }];
  const benefits = ["Deep AI Tool Knowledge - We know every quirk and workaround", "Production Experience - 150+ successful migrations completed", "24/7 Emergency Support - Critical issues don't wait for business hours", "Technology Agnostic - React, Vue, Python, Node.js - we've got you covered", "Security First - We fix vulnerabilities that AI tools often introduce", "Scalable Solutions - Architecture designed to grow with your success"];
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-primary to-accent text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl lg:text-4xl font-bold mb-6", children: [
        "Your AI Development",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-emerald-300", children: "Lifeline" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-white/90 max-w-3xl mx-auto", children: "Don't let AI tool limitations kill your vision. We bridge the gap between rapid prototyping and production-ready applications." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16", children: solutions.map((solution, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-emerald-300", children: /* @__PURE__ */ jsx(solution.icon, { className: "w-6 h-6 text-gray-900" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: solution.title }),
      /* @__PURE__ */ jsx("p", { className: "text-white/80 text-sm", children: solution.description })
    ] }, index)) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-center mb-8", children: "Why Choose Our Vibe Coding Support?" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: benefits.map((benefit, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-white/90 text-sm", children: benefit })
      ] }, index)) })
    ] })
  ] }) });
};

const VibeServices = () => {
  const services = [
    {
      icon: AlertTriangle,
      title: "Emergency Debugging",
      description: "Fix critical issues fast",
      details: [
        "Cursor AI crashes and version conflicts",
        "Lovable deployment failures",
        "Bubble workflow breakdowns",
        "Security vulnerability patches",
        "Performance bottleneck resolution"
      ],
      price: "From $297",
      timeframe: "2-4 hours",
      popular: true
    },
    {
      icon: Rocket,
      title: "Production Migration",
      description: "Scale from prototype to production",
      details: [
        "Code architecture review and optimization",
        "Database design and implementation",
        "Security hardening and compliance",
        "CI/CD pipeline setup",
        "Load testing and optimization"
      ],
      price: "From $1,997",
      timeframe: "1-2 weeks"
    },
    {
      icon: Link,
      title: "Integration Solutions",
      description: "Connect APIs, databases, third-party services",
      details: [
        "Payment gateway integration",
        "Authentication system setup",
        "Third-party API connections",
        "Database migration and optimization",
        "Real-time features implementation"
      ],
      price: "From $797",
      timeframe: "3-7 days"
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description: "Speed up and stabilize your app",
      details: [
        "Code splitting and lazy loading",
        "Database query optimization",
        "CDN setup and caching strategies",
        "Image and asset optimization",
        "Mobile performance tuning"
      ],
      price: "From $597",
      timeframe: "2-5 days"
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Maintenance",
      description: "Keep your creation running smoothly",
      details: [
        "24/7 monitoring and alerts",
        "Regular security updates",
        "Performance monitoring",
        "Bug fixes and improvements",
        "Feature updates and enhancements"
      ],
      price: "From $497/month",
      timeframe: "Ongoing"
    }
  ];
  const scrollToCTA = () => {
    const element = document.getElementById("vibe-cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-6", children: "Service Packages" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "Choose the right level of support for your AI-generated project. From emergency fixes to complete production overhauls." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8", children: services.map((service, index) => /* @__PURE__ */ jsxs("div", { className: `relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border ${service.popular ? "border-primary shadow-lg" : "border-gray-100"}`, children: [
      service.popular && /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-1/2 transform -translate-x-1/2", children: /* @__PURE__ */ jsx("div", { className: "bg-primary text-white px-4 py-1 rounded-full text-sm font-medium", children: "Most Popular" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-xl flex items-center justify-center ${service.popular ? "bg-primary text-white" : "bg-gray-100 text-gray-600"}`, children: /* @__PURE__ */ jsx(service.icon, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900", children: service.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: service.description })
        ] })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-8", children: service.details.map((detail, detailIndex) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm text-gray-600", children: [
        /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" }),
        /* @__PURE__ */ jsx("span", { children: detail })
      ] }, detailIndex)) }),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-100 pt-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-primary", children: service.price }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: service.timeframe })
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: scrollToCTA,
            className: `w-full font-semibold py-3 rounded-xl ${service.popular ? "bg-primary hover:bg-primary/90 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900"}`,
            children: "Get Started"
          }
        )
      ] })
    ] }, index)) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 bg-primary/5 rounded-2xl p-8 text-center border border-primary/20", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Not Sure Which Service You Need?" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-6", children: "Book a free 15-minute consultation and we'll recommend the best approach for your specific situation." }),
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: scrollToCTA,
          size: "lg",
          className: "bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-2xl",
          children: "Free Consultation"
        }
      )
    ] })
  ] }) });
};

const VibeTrust = () => {
  const testimonials = [{
    name: "Sarah",
    role: "Startup Founder",
    content: "Bernofco saved our Lovable-built MVP when we hit scaling issues. They migrated us to production in just 2 weeks!",
    rating: 5
  }, {
    name: "Mike",
    role: "Solo Developer",
    content: "My Cursor-generated app had mysterious bugs. Bernofco debugged it in hours, not days of burning credits.",
    rating: 5
  }, {
    name: "Emma",
    role: "Product Manager",
    content: "Perfect bridge between AI tools and production reality. They understand both worlds perfectly.",
    rating: 5
  }];
  const stats = [{
    icon: Users,
    number: "150+",
    label: "Projects Rescued"
  }, {
    icon: Clock,
    number: "2.5hrs",
    label: "Average Response Time"
  }, {
    icon: Shield,
    number: "99.9%",
    label: "Success Rate"
  }, {
    icon: Star,
    number: "4.9/5",
    label: "Client Rating"
  }];
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-6", children: "Success Stories" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "Join hundreds of developers who've successfully transformed their AI prototypes into production-ready applications with our help." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16", children: stats.map((stat, index) => /* @__PURE__ */ jsxs("div", { className: "text-center bg-white rounded-2xl p-6 shadow-sm", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(stat.icon, { className: "w-6 h-6 text-white" }) }),
      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-900 mb-2", children: stat.number }),
      /* @__PURE__ */ jsx("div", { className: "text-gray-600 text-sm", children: stat.label })
    ] }, index)) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 mb-4", children: [...Array(testimonial.rating)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-yellow-400 text-yellow-400" }, i)) }),
      /* @__PURE__ */ jsxs("p", { className: "text-gray-700 mb-6 italic text-sm leading-relaxed", children: [
        '"',
        testimonial.content,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-200 pt-4", children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900", children: testimonial.name }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: testimonial.role })
      ] })
    ] }, index)) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "border border-green-200 rounded-2xl p-6 text-center bg-slate-50", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 text-white" }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 mb-2", children: "Security Certified" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "SOC 2 compliant with enterprise-grade security practices" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Clock, { className: "w-6 h-6 text-white" }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 mb-2", children: "Response Guarantee" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Emergency issues get response within 2 hours, guaranteed" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 border border-purple-200 rounded-2xl p-6 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Users, { className: "w-6 h-6 text-white" }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 mb-2", children: "Expert Team" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Senior developers with 10+ years of production experience" })
      ] })
    ] })
  ] }) });
};

const VibeCTA = () => {
  return /* @__PURE__ */ jsxs("section", { id: "vibe-cta", className: "py-20 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl lg:text-5xl font-bold mb-6", children: [
          "Ready to",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-gradient-to-r from-white to-gray-200 bg-clip-text", children: "Unblock Your Vision?" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-white/90 max-w-3xl mx-auto mb-8", children: "Don't let AI tool limitations stop your progress. Get expert help and transform your prototype into a production-ready success story." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors duration-300 border border-white/20", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-white/20", children: /* @__PURE__ */ jsx(MessageSquare, { className: "w-8 h-8 text-white" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "Free Consultation" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/80 mb-6 text-sm", children: "15-minute call to understand your challenges and recommend the best solution." }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              size: "lg",
              onClick: () => window.open("https://calendly.com/bernof-co", "_blank"),
              className: "w-full text-primary font-semibold py-3 rounded-xl bg-white hover:bg-gray-100",
              children: [
                "Book Free Call",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors duration-300 border border-white/20", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(Phone, { className: "w-8 h-8 text-white" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "Emergency Support" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/80 mb-6 text-sm", children: "Critical issue blocking your launch? Get immediate help from our emergency team." }),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "lg",
              className: "w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl",
              onClick: () => window.location.href = "tel:+442080580773",
              children: "Call Now"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors duration-300 border border-white/20", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-8 h-8 text-white" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "View All Services" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/80 mb-6 text-sm", children: "Explore our comprehensive service packages designed for different needs and budgets." }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              size: "lg",
              className: "w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 rounded-xl border border-white/30",
              onClick: () => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }),
              children: [
                "View Packages",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "💡 Pro Tip: Don't Wait Until It's Too Late" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/90 mb-6", children: "The longer you wait to fix architectural issues, the more expensive they become. Book a consultation today and save yourself weeks of frustration." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              size: "lg",
              className: "bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-2xl",
              onClick: () => window.open("https://calendly.com/bernof-co", "_blank"),
              children: [
                "Get Started Now",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              size: "lg",
              className: "border-white/30 bg-transparent text-white hover:bg-white/10 px-8 py-4 rounded-2xl",
              onClick: () => window.location.href = "mailto:info@bernofco.com?subject=Vibe Coding Support Inquiry",
              children: "Email Us"
            }
          )
        ] })
      ] })
    ] })
  ] });
};

const VibeMarketInsights = () => {
  const insights = [
    {
      icon: TrendingUp,
      stat: "400%",
      label: "Growth in AI coding tools",
      description: "Vibe coding has stormed the market with tools like Cursor, Lovable, and Claude"
    },
    {
      icon: Users,
      stat: "73%",
      label: "Developers comparing options",
      description: "Users actively comparing traditional no-code tools like Bubble with AI alternatives"
    },
    {
      icon: MessageSquare,
      stat: "MVP Ready",
      label: "But not production-ready",
      description: "Research shows vibe coding is 'great for MVP but not ready for production'"
    },
    {
      icon: CheckCircle,
      stat: "Security First",
      label: "Common pain points",
      description: "Issues include security, CSS consistency, limited control, and network dependency"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-4", children: "The AI Coding Revolution: Market Reality" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "Independent research reveals the explosive growth and critical challenges facing AI-powered development tools in today's market." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: insights.map((insight, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx(insight.icon, { className: "w-6 h-6 text-primary" }) }),
      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-primary mb-2", children: insight.stat }),
      /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900 mb-3", children: insight.label }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: insight.description })
    ] }, index)) })
  ] }) });
};

const VibeCoding = () => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white font-inter", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "AI Coding Help & Vibe Coding Support | Fix Cursor, Lovable, Bubble Issues | Bernof Co" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "When your AI-built app hits a wall, we break through. Expert help for Cursor crashes, Lovable scaling issues, Bubble debugging, and production-ready optimization." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "AI coding help, vibe coding support, Cursor debugging, Bubble troubleshooting, Lovable app deployment, no-code development issues, AI app production scaling" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "AI Coding Help & Vibe Coding Support | Bernof Co" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "From Cursor crashes to Bubble breakdowns - get expert help to scale your vibe-coded dreams into production-ready reality." }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://bernofco.com/vibe-coding" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(VibeHero, {}),
      /* @__PURE__ */ jsx(VibeMarketInsights, {}),
      /* @__PURE__ */ jsx(VibeProblem, {}),
      /* @__PURE__ */ jsx(VibeSolution, {}),
      /* @__PURE__ */ jsx(VibeServices, {}),
      /* @__PURE__ */ jsx(VibeTrust, {}),
      /* @__PURE__ */ jsx(VibeCTA, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};

export { VibeCoding as default };
