import { jsxs, jsx } from 'react/jsx-runtime';
import { H as Header, F as Footer } from './Footer-DAqTR1lz.js';
import { u as useSEO, S as SEO, g as getCountryConfig } from './useSEO-BDE-cQJ4.js';
import { B as Breadcrumb } from './Breadcrumb-DDkSxO34.js';
import { S as StartupValueProps, a as StartupProcess, b as StartupPricing, c as StartupFAQ, d as StartupCTA } from './StartupCTA-D7W9NhEF.js';
import { e as ContactSection } from './ContactSection-Cl8aRXHL.js';
import { C as CountryHero } from './CountryHero-tgkpZL8Z.js';
import { C as CountryPainPoints } from './CountryPainPoints-C_U1cwK7.js';
import '../main.js';
import 'react-dom/client';
import 'react';
import '@radix-ui/react-toast';
import 'class-variance-authority';
import 'lucide-react';
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
import './PaymentMethodsSection-CCcCSALj.js';
import './badge-DlvEopxR.js';
import '@radix-ui/react-select';
import './client-YlveBlFV.js';
import '@supabase/supabase-js';

const ItalyStartupDevelopment = () => {
  const seoData = useSEO("it/startup-development");
  const country = getCountryConfig("it");
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Italy", url: "/global-services/it" },
    { name: "Startup Development Services", url: "/it/startup-development" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen font-inter", children: [
    /* @__PURE__ */ jsx(SEO, { ...seoData }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsx(Breadcrumb, { items: breadcrumbItems }) }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h1", { className: "sr-only", children: "Expert Italy Startup Development Services - From MVP to Scale" }),
        /* @__PURE__ */ jsx(
          CountryHero,
          {
            country,
            service: "startup",
            title: "Startup Development Services in Italy",
            subtitle: "Build the next generation of Italian startups. MVP development, technical consulting, and growth strategies tailored for Italy's emerging tech ecosystem.",
            ctaPrimary: "Get Your Italian MVP Quote",
            ctaSecondary: "Book Startup Strategy Call"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(CountryPainPoints, { country, serviceType: "startup" }),
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

export { ItalyStartupDevelopment as default };
