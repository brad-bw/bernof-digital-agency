import { jsxs, jsx } from 'react/jsx-runtime';
import { Calendar, TrendingDown, DollarSign, Clock, Users, Sparkles, Code, Rocket, Zap } from 'lucide-react';
import { B as Button } from '../main.js';

const CountryHeroHeader = ({
  countryFlag,
  countryName,
  title,
  subtitle,
  ctaPrimary,
  onPrimaryAction
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl lg:text-6xl font-bold leading-tight", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-red-400", children: [
          countryName,
          " Businesses"
        ] }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent", children: "Are Overpaying" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-xl lg:text-2xl text-gray-300 leading-relaxed", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: subtitle }),
        /* @__PURE__ */ jsx("p", { className: "text-accent font-semibold", children: "Here's how Bernof Co solves this →" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxs(
      Button,
      {
        onClick: onPrimaryAction,
        className: "bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-5 rounded-xl text-xl h-auto transition-all duration-300 hover:scale-105 shadow-lg",
        children: [
          /* @__PURE__ */ jsx(Calendar, { className: "w-6 h-6 mr-3" }),
          ctaPrimary
        ]
      }
    ) })
  ] });
};

const CountryHeroPainPoints = ({ countryName, painPoints }) => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-gray-300 mb-4", children: [
      "The Reality in ",
      countryName,
      ":"
    ] }),
    painPoints.slice(0, 2).map((point, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3 p-4 bg-red-900/20 rounded-xl border border-red-800/30 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-1 h-full bg-red-400" }),
      /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-200 leading-relaxed", children: point })
    ] }, index))
  ] });
};

const CountryHeroCostComparison = ({
  localCost,
  bernofCost,
  iconBg,
  IconComponent
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-white/20 rounded-tl-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-tr-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 relative z-10", children: [
        /* @__PURE__ */ jsx("div", { className: `w-20 h-20 mx-auto mb-4 ${iconBg} rounded-2xl flex items-center justify-center shadow-lg`, children: /* @__PURE__ */ jsx(IconComponent, { className: "w-10 h-10 text-white" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-2", children: "Cost Comparison" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "See how much you can save" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-red-900/30 rounded-xl p-6 border border-red-800/50 relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-16 h-16 bg-red-500/10 rounded-bl-xl" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-1", children: "Local Market Agencies" }),
              /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-red-400", children: localCost })
            ] }),
            /* @__PURE__ */ jsx(TrendingDown, { className: "w-8 h-8 text-red-400" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsx("div", { className: "w-full border-t border-white/20" }) }),
          /* @__PURE__ */ jsx("span", { className: "bg-primary px-4 text-white font-bold text-xl", children: "VS" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-primary/20 rounded-xl p-6 border border-primary/30 relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-xl" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-1", children: "Bernof Co" }),
              /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-white", children: bernofCost })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-accent text-white px-4 py-2 rounded-lg font-bold text-lg mb-1 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(DollarSign, { className: "w-5 h-5" }),
                "60% LESS"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "You Save" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-accent" }),
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-accent" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-white mb-1", children: "48h" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-300", children: "Project Start" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-primary" }),
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-primary" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-white mb-1", children: "50+" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-300", children: "Expert Devs" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-green-400" }),
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-green-400/20 rounded-xl flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5 text-green-400" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-white mb-1", children: "60%" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-300", children: "Cost Savings" })
      ] })
    ] })
  ] });
};

const CountryHeroActions = ({ ctaSecondary, onSecondaryAction }) => {
  return /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-8 border-t border-white/20", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-8", children: /* @__PURE__ */ jsx(
      Button,
      {
        onClick: onSecondaryAction,
        variant: "outline",
        className: "border-2 border-white/30 text-white bg-transparent hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-xl text-lg h-auto transition-all duration-300",
        children: ctaSecondary
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-gray-300", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-green-400 rounded-full" }),
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Free consultation & quote" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-green-400 rounded-full" }),
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "No upfront payment required" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-green-400 rounded-full" }),
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "100% money-back guarantee" })
      ] })
    ] })
  ] });
};

const CountryHero = ({ country, service, title, subtitle, ctaPrimary, ctaSecondary }) => {
  const handlePrimaryAction = () => {
    window.open("https://calendly.com/bernof-co", "_blank");
  };
  const handleSecondaryAction = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const getServiceStats = () => {
    switch (service) {
      case "web":
        return {
          localCost: country.marketContext.heroStats.localCost,
          bernofCost: country.marketContext.heroStats.bernofCost,
          savings: country.marketContext.heroStats.savings,
          icon: Code,
          iconBg: "bg-primary"
        };
      case "software":
        return {
          localCost: `${country.currencySymbol}${(country.pricing.software.localMin / 1e3).toFixed(0)}k-${(country.pricing.software.localMax / 1e3).toFixed(0)}k`,
          bernofCost: `${country.currencySymbol}${(country.pricing.software.min / 1e3).toFixed(0)}k-${(country.pricing.software.max / 1e3).toFixed(0)}k`,
          savings: "60% less",
          icon: Zap,
          iconBg: "bg-accent"
        };
      case "startup":
        return {
          localCost: `${country.currencySymbol}${(country.pricing.startup.localMin / 1e3).toFixed(0)}k-${(country.pricing.startup.localMax / 1e3).toFixed(0)}k`,
          bernofCost: `${country.currencySymbol}${(country.pricing.startup.min / 1e3).toFixed(0)}k-${(country.pricing.startup.max / 1e3).toFixed(0)}k`,
          savings: "60% less",
          icon: Rocket,
          iconBg: "bg-accent"
        };
      default:
        return {
          localCost: country.marketContext.heroStats.localCost,
          bernofCost: country.marketContext.heroStats.bernofCost,
          savings: country.marketContext.heroStats.savings,
          icon: Code,
          iconBg: "bg-primary"
        };
    }
  };
  const stats = getServiceStats();
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-[80vh] bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rotate-45 rounded-lg" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-32 left-40 w-40 h-2 bg-gradient-to-r from-white/30 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-60 right-20 w-16 h-16 border border-white/30 rounded-full" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-80 left-1/4 w-6 h-6 bg-white/20 rotate-45" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-60 right-1/3 w-8 h-8 border border-white/20 rounded-full" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-40 right-20 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-20 left-40 w-72 h-72 bg-white/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 relative z-10 py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx(
            CountryHeroHeader,
            {
              countryFlag: country.flag,
              countryName: country.name,
              title,
              subtitle,
              ctaPrimary,
              onPrimaryAction: handlePrimaryAction
            }
          ),
          /* @__PURE__ */ jsx(
            CountryHeroPainPoints,
            {
              countryName: country.name,
              painPoints: country.marketContext.painPoints
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          CountryHeroCostComparison,
          {
            localCost: stats.localCost,
            bernofCost: stats.bernofCost,
            iconBg: stats.iconBg,
            IconComponent: stats.icon
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        CountryHeroActions,
        {
          ctaSecondary,
          onSecondaryAction: handleSecondaryAction
        }
      )
    ] }) })
  ] });
};

export { CountryHero as C };
