import { jsx, jsxs } from 'react/jsx-runtime';
import { DollarSign, Clock, Zap, Shield, Code, Users, Search, Palette, Rocket, CheckCircle, ArrowRight, Star, Check, ChevronUp, ChevronDown, Calendar, Phone, Mail } from 'lucide-react';
import { B as Button, H as Helmet } from '../index.js';
import { P as PaymentMethodsSection } from './PaymentMethodsSection-DoCDtvAH.js';
import { useState } from 'react';

const StartupValueProps = () => {
  const valueProps = [
    {
      icon: DollarSign,
      title: "No Massive Upfront Investment",
      description: "Launch your MVP for a fraction of traditional development costs. Pay only for what you need, when you need it.",
      highlight: "70% less than hiring a dev team"
    },
    {
      icon: Clock,
      title: "Rapid Prototyping",
      description: "From idea to working prototype in weeks, not months. Get to market faster and start validating with real users.",
      highlight: "2-4 weeks to MVP"
    },
    {
      icon: Zap,
      title: "Built to Scale",
      description: "Your MVP is built with growth in mind. Add features, users, and functionality as your startup evolves.",
      highlight: "Future-proof architecture"
    },
    {
      icon: Shield,
      title: "Maintenance Freedom",
      description: "Project-based maintenance means no ongoing contracts. Update when you want, how you want, without breaking the bank.",
      highlight: "Pay per project only"
    },
    {
      icon: Code,
      title: "Modern Tech Stack",
      description: "We use the latest, most reliable technologies that ensure your app is fast, secure, and maintainable.",
      highlight: "Enterprise-grade quality"
    },
    {
      icon: Users,
      title: "Founder-Focused Support",
      description: "We understand startup challenges. Direct communication with our team, no account managers or middlemen.",
      highlight: "Direct founder support"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", id: "startup-value", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl lg:text-5xl font-bold text-gray-900 mb-6", children: [
        "Why Founders Choose",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent", children: "Bernof Co." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "We've helped over 100 startups go from idea to launch without breaking their budget or timeline." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: valueProps.map((prop, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-accent/20 hover:bg-white hover:shadow-xl transition-all duration-300",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300", children: /* @__PURE__ */ jsx(prop.icon, { className: "w-6 h-6 text-accent group-hover:text-white" }) }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-3", children: prop.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4 leading-relaxed", children: prop.description }),
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold", children: prop.highlight })
        ]
      },
      index
    )) })
  ] }) }) });
};

const StartupProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Market Validation",
      description: "We conduct comprehensive market research and validate your startup idea to ensure product-market fit before development begins.",
      fullDeliverables: [
        "Competitive landscape analysis",
        "Target audience research",
        "Market size evaluation",
        "Technical feasibility assessment",
        "Revenue model validation",
        "Risk assessment report",
        "Detailed project roadmap",
        "Accurate cost estimation"
      ],
      duration: "3-5 days",
      icon: Search,
      colorScheme: {
        bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
        border: "border-blue-200",
        iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
        numberBg: "bg-blue-100",
        numberText: "text-blue-700",
        titleText: "text-blue-900",
        hover: "hover:shadow-blue-100"
      }
    },
    {
      step: "02",
      title: "UX/UI Design & Architecture Planning",
      description: "We design intuitive user experiences and plan the technical architecture that will scale with your startup's growth.",
      fullDeliverables: [
        "User journey mapping",
        "Interactive wireframes",
        "High-fidelity UI mockups",
        "Design system creation",
        "Scalable technical architecture",
        "Database schema design",
        "API endpoint planning",
        "Security framework setup"
      ],
      duration: "1-2 weeks",
      icon: Palette,
      colorScheme: {
        bg: "bg-gradient-to-br from-purple-50 to-pink-50",
        border: "border-purple-200",
        iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
        numberBg: "bg-purple-100",
        numberText: "text-purple-700",
        titleText: "text-purple-900",
        hover: "hover:shadow-purple-100"
      }
    },
    {
      step: "03",
      title: "Agile Development & Testing",
      description: "We build your MVP using agile methodology with continuous testing to ensure high-quality, bug-free software delivery.",
      fullDeliverables: [
        "Core MVP feature development",
        "Responsive web application",
        "Cross-browser compatibility",
        "Performance optimization",
        "Security implementation",
        "Automated testing suite",
        "Quality assurance testing",
        "Code documentation"
      ],
      duration: "2-4 weeks",
      icon: Code,
      colorScheme: {
        bg: "bg-gradient-to-br from-green-50 to-emerald-50",
        border: "border-green-200",
        iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
        numberBg: "bg-green-100",
        numberText: "text-green-700",
        titleText: "text-green-900",
        hover: "hover:shadow-green-100"
      }
    },
    {
      step: "04",
      title: "Launch & Growth Support",
      description: "We deploy your startup to production and provide ongoing support to help you iterate based on real user feedback.",
      fullDeliverables: [
        "Production deployment setup",
        "Domain and hosting configuration",
        "Analytics implementation",
        "Performance monitoring",
        "Launch strategy consultation",
        "User feedback collection tools",
        "Iteration planning sessions",
        "30-day post-launch support"
      ],
      duration: "Ongoing",
      icon: Rocket,
      colorScheme: {
        bg: "bg-gradient-to-br from-orange-50 to-red-50",
        border: "border-orange-200",
        iconBg: "bg-gradient-to-br from-orange-500 to-red-600",
        numberBg: "bg-orange-100",
        numberText: "text-orange-700",
        titleText: "text-orange-900",
        hover: "hover:shadow-orange-100"
      }
    }
  ];
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden", id: "startup-process", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6", children: [
          "From Startup Idea to Market Launch in",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent", children: "4 Proven Steps" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed", children: "Our battle-tested startup development process has helped over 100 founders transform their ideas into successful businesses. Here's exactly how we'll bring your vision to life." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16", children: processSteps.map((step, index) => {
        const Icon = step.icon;
        return /* @__PURE__ */ jsx("div", { className: "relative group", children: /* @__PURE__ */ jsxs("div", { className: `${step.colorScheme.bg} ${step.colorScheme.border} ${step.colorScheme.hover} rounded-2xl border-2 p-8 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`, children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ jsx("div", { className: `${step.colorScheme.iconBg} w-16 h-16 rounded-xl flex items-center justify-center shadow-lg`, children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8 text-white" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: `${step.colorScheme.numberBg} ${step.colorScheme.numberText} px-3 py-1 rounded-full text-sm font-bold mb-2 inline-block`, children: [
                  "Step ",
                  step.step
                ] }),
                /* @__PURE__ */ jsx("h3", { className: `text-xl font-bold ${step.colorScheme.titleText}`, children: step.title })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-right", children: /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-gray-600 bg-white px-3 py-1 rounded-full", children: step.duration }) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-6 leading-relaxed", children: step.description }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-sm font-bold text-gray-900 uppercase tracking-wide mb-4", children: "What You'll Receive:" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: step.fullDeliverables.map((deliverable, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700 leading-relaxed", children: deliverable })
            ] }, idx)) })
          ] }),
          index < processSteps.length - 1 && index % 2 === 0 && /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10", children: /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-sm", children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-gray-400" }) }) })
        ] }) }, index);
      }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:hidden mb-12", children: /* @__PURE__ */ jsx("div", { className: "text-center text-sm text-gray-500", children: "Complete startup development process • Proven methodology • 100+ successful launches" }) }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            onClick: () => scrollToSection("startup-pricing"),
            className: "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg",
            children: [
              "Start Your Startup Journey Today",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mt-4", children: "Free consultation • No upfront payment • Money-back guarantee" })
      ] })
    ] }) })
  ] });
};

const StartupPricing = () => {
  const pricingPlans = [
    {
      name: "MVP Validation",
      price: "from £2,999",
      description: "Perfect for testing your idea with a basic working prototype",
      features: [
        "Market research & validation",
        "Basic MVP with core features",
        "Mobile responsive design",
        "Basic testing & bug fixes",
        "1 month support",
        "Source code delivery"
      ],
      popular: false,
      cta: "Start Validation",
      timeline: "2-3 weeks"
    },
    {
      name: "Full MVP Launch",
      price: "starts at £7,999",
      description: "Complete MVP ready for real users and investor presentations",
      features: [
        "Everything in MVP Validation",
        "Advanced features & integrations",
        "User authentication & profiles",
        "Admin dashboard",
        "Performance optimization",
        "SEO optimization",
        "3 months support",
        "Launch assistance"
      ],
      popular: true,
      cta: "Launch Your MVP",
      timeline: "4-6 weeks"
    },
    {
      name: "Scale-Ready Platform",
      price: "from £14,999",
      description: "Enterprise-ready solution built to handle growth and scaling",
      features: [
        "Everything in Full MVP Launch",
        "Advanced integrations",
        "Multi-user roles & permissions",
        "Analytics & reporting",
        "API development",
        "Security audit",
        "6 months support",
        "Scaling consultation"
      ],
      popular: false,
      cta: "Build to Scale",
      timeline: "6-8 weeks"
    }
  ];
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", id: "startup-pricing", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl lg:text-5xl font-bold text-gray-900 mb-6", children: [
        "Transparent Pricing for",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent", children: "Every Stage" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto mb-8", children: "No hidden fees, no ongoing contracts. Final pricing based on project scope and requirements. Optional maintenance available per project basis." }),
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 font-semibold", children: [
        /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 mr-2" }),
        "Custom pricing based on your specific needs"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16", children: pricingPlans.map((plan, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${plan.popular ? "border-accent shadow-2xl bg-gradient-to-b from-white to-accent/5" : "border-gray-200 hover:border-accent/30 hover:shadow-xl bg-white"}`,
        children: [
          plan.popular && /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-1/2 transform -translate-x-1/2", children: /* @__PURE__ */ jsx("div", { className: "bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold", children: "Most Popular" }) }),
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: plan.name }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: plan.description }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center space-x-2", children: /* @__PURE__ */ jsx("span", { className: "text-4xl font-bold text-gray-900", children: plan.price }) }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 mt-1", children: "Custom quote based on requirements" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-accent font-semibold", children: plan.timeline })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-8", children: plan.features.map((feature, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsx(Check, { className: "w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: feature })
          ] }, idx)) }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: () => scrollToSection("startup-cta"),
              className: `w-full font-semibold py-3 rounded-xl transition-all duration-300 ${plan.popular ? "bg-accent hover:bg-accent/90 text-white" : "bg-gray-900 hover:bg-gray-800 text-white"}`,
              children: [
                plan.cta,
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
              ]
            }
          )
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsx(PaymentMethodsSection, {}),
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-2xl p-8 text-center mt-8", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Maintenance Made Simple" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6 max-w-3xl mx-auto", children: "Need updates or new features? Our project-based maintenance means you only pay when you need changes. No monthly fees, no contracts - just transparent pricing for each project." }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-primary", children: "from £99" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Minor updates" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-primary", children: "from £499" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "New features" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-primary", children: "from £999" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Major upgrades" })
        ] })
      ] })
    ] })
  ] }) }) });
};

const StartupFAQ = () => {
  const [openItems, setOpenItems] = useState([0]);
  const toggleItem = (index) => {
    setOpenItems(
      (prev) => prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  const faqs = [
    {
      question: "How is this different from hiring a development team?",
      answer: "Hiring a development team typically costs £80k-150k+ annually, plus recruitment time and management overhead. Our model gives you the same quality results for a fraction of the cost, with no long-term commitments or management headaches."
    },
    {
      question: "What if I need changes after my MVP is delivered?",
      answer: "Our project-based maintenance model means you only pay when you need updates. Minor changes start at £99, new features from £499, and major upgrades from £999. No monthly fees or contracts required."
    },
    {
      question: "How do you ensure the quality without breaking my budget?",
      answer: "We use proven frameworks, reusable components, and efficient development processes. Our team has built 100+ startups, so we know exactly what works and what doesn't, eliminating costly trial-and-error."
    },
    {
      question: "Can my MVP scale as my startup grows?",
      answer: "Absolutely. Every MVP we build uses scalable architecture and modern technologies. We plan for growth from day one, so your platform can handle increased users and features as you scale."
    },
    {
      question: "What technologies do you use?",
      answer: "We use React, Node.js, TypeScript, and other modern technologies that ensure your app is fast, reliable, and maintainable. All code is delivered to you, so you're never locked in."
    },
    {
      question: "How involved will I be in the development process?",
      answer: "Very involved, but not overwhelmed. We provide weekly updates, demos, and gather your feedback at key milestones. You focus on your business while we handle the technical execution."
    },
    {
      question: "What if I'm not technical - will I understand what's being built?",
      answer: "Absolutely. We explain everything in business terms, provide regular demos, and ensure you understand exactly what you're getting. No technical jargon, just clear communication."
    },
    {
      question: "Do you help with getting investment?",
      answer: "While we're not investors, we've helped many clients create impressive demos and MVPs that have secured funding. We can provide technical documentation and support materials for investor presentations."
    }
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return /* @__PURE__ */ jsxs("section", { className: "py-20 bg-white", children: [
    /* @__PURE__ */ jsx(Helmet, { children: /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(faqSchema) }) }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl lg:text-5xl font-bold text-gray-900 mb-6", children: [
          "Frequently Asked",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent", children: "Questions" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Everything you need to know about building your startup with Bernof Co." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "border border-gray-200 rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => toggleItem(index),
                className: "w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between",
                children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 pr-4", children: faq.question }),
                  openItems.includes(index) ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-5 h-5 text-accent flex-shrink-0" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 text-gray-400 flex-shrink-0" })
                ]
              }
            ),
            openItems.includes(index) && /* @__PURE__ */ jsx("div", { className: "px-6 pb-4", children: /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: faq.answer }) })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Still have questions? We're here to help." }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "mailto:info@bernofco.com",
            className: "inline-flex items-center text-accent hover:text-accent/80 font-semibold transition-colors",
            children: "Email us at info@bernofco.com"
          }
        )
      ] })
    ] }) })
  ] });
};

const StartupCTA = () => {
  const handleBookCall = () => {
    window.open("https://calendly.com/bernof-co", "_blank");
  };
  return /* @__PURE__ */ jsxs("section", { className: "py-20 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden", id: "startup-cta", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl lg:text-5xl font-bold mb-6", children: "Ready to Turn Your Idea Into Reality?" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-white/90 mb-8 max-w-3xl mx-auto", children: "Join 100+ successful founders who chose Bernof Co. to build their startups. Get started today with a free consultation and project estimate." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: handleBookCall,
              className: "bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105",
              children: [
                /* @__PURE__ */ jsx(Calendar, { className: "w-5 h-5 mr-2" }),
                "Book Free Consultation"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              className: "border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300",
              children: [
                "Get Project Estimate",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Phone, { className: "w-8 h-8 text-white" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: "Call Us" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/80 mb-2", children: "Speak directly with our team" }),
          /* @__PURE__ */ jsx("a", { href: "tel:+442080580773", className: "text-white hover:text-white/80 font-semibold", children: "+44 20 80 580 773" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Mail, { className: "w-8 h-8 text-white" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: "Email Us" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/80 mb-2", children: "Get a detailed response within 24h" }),
          /* @__PURE__ */ jsx("a", { href: "mailto:info@bernofco.com", className: "text-white hover:text-white/80 font-semibold", children: "info@bernofco.com" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Calendar, { className: "w-8 h-8 text-white" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: "Schedule Call" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/80 mb-2", children: "Free 30-min consultation" }),
          /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "Available GMT" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 pt-8 border-t border-white/20", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-white/80", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-green-400 rounded-full" }),
          /* @__PURE__ */ jsx("span", { children: "Free consultation" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-green-400 rounded-full" }),
          /* @__PURE__ */ jsx("span", { children: "No upfront payment" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-green-400 rounded-full" }),
          /* @__PURE__ */ jsx("span", { children: "Money-back guarantee" })
        ] })
      ] }) })
    ] }) })
  ] });
};

export { StartupValueProps as S, StartupProcess as a, StartupPricing as b, StartupFAQ as c, StartupCTA as d };
