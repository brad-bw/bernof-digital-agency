import { jsxs, jsx } from 'react/jsx-runtime';
import { B as Button } from '../main.js';
import { ChevronDown, X, Menu, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGlobalCoverageOpen, setIsGlobalCoverageOpen] = useState(false);
  const navigate = useNavigate();
  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };
  return /* @__PURE__ */ jsxs("header", { className: "fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-20 w-2 h-2 bg-accent/30 rounded-full animate-pulse" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/3 w-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "group", children: /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/1ae84dd7-47db-491c-9099-013be249fce1.png",
            alt: "Bernof Co. Logo",
            width: "240",
            height: "60",
            className: "transition-transform duration-300 hover:scale-105"
          }
        ) }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute -top-1 -right-1 w-2 h-2 bg-accent/40 rounded-full animate-pulse" })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center space-x-8", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => scrollToSection("services"),
            className: "text-gray-600 hover:text-primary transition-colors font-medium relative group",
            children: [
              "Services",
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/global-services",
              className: "flex items-center text-gray-600 hover:text-primary transition-colors font-medium relative group",
              children: [
                "Global Coverage",
                /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 ml-1" }),
                /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-4 transition-all duration-200 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/global-services/ch", className: "flex items-center px-6 py-3 hover:bg-gray-50 transition-colors", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl mr-3", children: "🇨🇭" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700 hover:text-primary", children: "Switzerland" })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/global-services/uk", className: "flex items-center px-6 py-3 hover:bg-gray-50 transition-colors", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl mr-3", children: "🇬🇧" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700 hover:text-primary", children: "United Kingdom" })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/global-services/us", className: "flex items-center px-6 py-3 hover:bg-gray-50 transition-colors", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl mr-3", children: "🇺🇸" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700 hover:text-primary", children: "United States" })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/global-services/it", className: "flex items-center px-6 py-3 hover:bg-gray-50 transition-colors", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl mr-3", children: "🇮🇹" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700 hover:text-primary", children: "Italy" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "border-t border-gray-200 mt-2 pt-2", children: /* @__PURE__ */ jsx(Link, { to: "/global-services", className: "flex items-center px-6 py-3 hover:bg-gray-50 transition-colors text-sm text-gray-500", children: "View All Countries →" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/startup-development",
            className: "text-gray-600 hover:text-primary transition-colors font-medium relative group",
            children: [
              "For Startups",
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/blog",
            className: "text-gray-600 hover:text-primary transition-colors font-medium relative group",
            children: [
              "Blog",
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => scrollToSection("discovery-call"),
            className: "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" }),
              /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Book Discovery Call" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "md:hidden p-2 relative",
          onClick: () => setIsMenuOpen(!isMenuOpen),
          children: [
            isMenuOpen ? /* @__PURE__ */ jsx(X, { size: 24, className: "text-gray-900" }) : /* @__PURE__ */ jsx(Menu, { size: 24, className: "text-gray-900" }),
            /* @__PURE__ */ jsx("div", { className: "absolute -top-1 -right-1 w-2 h-2 bg-accent/40 rounded-full" })
          ]
        }
      )
    ] }) }),
    isMenuOpen && /* @__PURE__ */ jsx("nav", { className: "md:hidden bg-white border-t border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-4 space-y-4", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => scrollToSection("services"),
          className: "block w-full text-left text-gray-700 hover:text-primary font-medium transition-colors",
          children: "Services"
        }
      ),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setIsGlobalCoverageOpen(!isGlobalCoverageOpen),
            className: "flex items-center justify-between w-full text-gray-700 hover:text-primary font-medium transition-colors",
            children: [
              "Global Coverage",
              /* @__PURE__ */ jsx(ChevronDown, { className: `h-4 w-4 transition-transform ${isGlobalCoverageOpen ? "rotate-180" : ""}` })
            ]
          }
        ),
        isGlobalCoverageOpen && /* @__PURE__ */ jsxs("div", { className: "mt-2 ml-4 space-y-2", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/global-services/ch", onClick: () => setIsMenuOpen(false), className: "flex items-center text-sm text-gray-600 hover:text-primary", children: [
            /* @__PURE__ */ jsx("span", { className: "mr-2", children: "🇨🇭" }),
            "Switzerland"
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/global-services/uk", onClick: () => setIsMenuOpen(false), className: "flex items-center text-sm text-gray-600 hover:text-primary", children: [
            /* @__PURE__ */ jsx("span", { className: "mr-2", children: "🇬🇧" }),
            "United Kingdom"
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/global-services/us", onClick: () => setIsMenuOpen(false), className: "flex items-center text-sm text-gray-600 hover:text-primary", children: [
            /* @__PURE__ */ jsx("span", { className: "mr-2", children: "🇺🇸" }),
            "United States"
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/global-services/it", onClick: () => setIsMenuOpen(false), className: "flex items-center text-sm text-gray-600 hover:text-primary", children: [
            /* @__PURE__ */ jsx("span", { className: "mr-2", children: "🇮🇹" }),
            "Italy"
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/global-services", onClick: () => setIsMenuOpen(false), className: "block text-sm text-primary font-medium", children: "View All Countries →" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/startup-development",
          onClick: () => setIsMenuOpen(false),
          className: "block text-gray-700 hover:text-primary font-medium transition-colors",
          children: "For Startups"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/blog",
          onClick: () => setIsMenuOpen(false),
          className: "block text-gray-700 hover:text-primary font-medium transition-colors",
          children: "Blog"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: () => scrollToSection("discovery-call"),
          className: "w-full bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200",
          children: "Book Discovery Call"
        }
      )
    ] }) })
  ] });
};

const Footer = () => {
  const navigate = useNavigate();
  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return /* @__PURE__ */ jsx("footer", { className: "bg-white border-t border-gray-200", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row justify-between items-start mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8 lg:mb-0", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Bernof Co." }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-md", children: "Managing the future through comprehensive digital solutions." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => scrollToSection("discovery-call"),
            className: "bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg",
            children: "Start Your Project"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            onClick: () => window.open("https://calendly.com/bernof-co", "_blank"),
            className: "border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-3 rounded-lg",
            children: "Book a Call"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-4", children: "Services" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollToSection("services"),
              className: "text-gray-600 hover:text-gray-900 transition-colors text-sm",
              children: "Web Development"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollToSection("services"),
              className: "text-gray-600 hover:text-gray-900 transition-colors text-sm",
              children: "Software Development"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/startup-development",
              className: "text-gray-600 hover:text-gray-900 transition-colors text-sm",
              children: "Startup Development"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/vibe-coding",
              className: "text-gray-600 hover:text-gray-900 transition-colors text-sm",
              children: "Vibe Coding"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollToSection("services"),
              className: "text-gray-600 hover:text-gray-900 transition-colors text-sm",
              children: "Creative Design"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-4", children: "Global" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/global-services",
              className: "text-gray-600 hover:text-gray-900 transition-colors text-sm",
              children: "All Countries"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/global-services/ch",
              className: "text-gray-600 hover:text-gray-900 transition-colors text-sm",
              children: "Switzerland"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/global-services/uk",
              className: "text-gray-600 hover:text-gray-900 transition-colors text-sm",
              children: "United Kingdom"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/global-services/us",
              className: "text-gray-600 hover:text-gray-900 transition-colors text-sm",
              children: "United States"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-4", children: "Company" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollToSection("about"),
              className: "text-gray-600 hover:text-gray-900 transition-colors text-sm",
              children: "About Us"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollToSection("contact"),
              className: "text-gray-600 hover:text-gray-900 transition-colors text-sm",
              children: "Contact"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/privacy-policy",
              className: "text-gray-600 hover:text-gray-900 transition-colors text-sm",
              children: "Privacy Policy"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/terms-of-service",
              className: "text-gray-600 hover:text-gray-900 transition-colors text-sm",
              children: "Terms of Service"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-4", children: "Resources" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/blog",
              className: "text-gray-600 hover:text-gray-900 transition-colors text-sm",
              children: "Blog"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollToSection("discovery-call"),
              className: "text-gray-600 hover:text-gray-900 transition-colors text-sm",
              children: "Discovery Call"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/cookie-policy",
              className: "text-gray-600 hover:text-gray-900 transition-colors text-sm",
              children: "Cookie Policy"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-4", children: "Get in Touch" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "mailto:info@bernofco.com",
              className: "flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm",
              children: [
                /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 mr-2" }),
                "info@bernofco.com"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "tel:+442080580773",
              className: "flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm",
              children: [
                /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 mr-2" }),
                "+44 20 80 580 773"
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start text-gray-600 text-sm", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 mr-2 mt-0.5 flex-shrink-0" }),
            "Newcastle Upon Tyne, UK"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-6 mb-4 md:mb-0", children: [
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "© 2025 Bernof Co. All rights reserved." }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.linkedin.com/company/bernof-co/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-gray-500 hover:text-gray-900 transition-colors",
          children: /* @__PURE__ */ jsx(Linkedin, { className: "w-5 h-5" })
        }
      ) })
    ] }) })
  ] }) }) });
};

export { Footer as F, Header as H };
