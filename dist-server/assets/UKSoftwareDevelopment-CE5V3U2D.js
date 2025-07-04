import { jsxs, jsx } from 'react/jsx-runtime';
import { H as Header, F as Footer } from './Footer-DAqTR1lz.js';
import { u as useSEO, S as SEO, g as getCountryConfig } from './useSEO-BDE-cQJ4.js';
import { B as Breadcrumb } from './Breadcrumb-DDkSxO34.js';
import { C as CountryHero } from './CountryHero-tgkpZL8Z.js';
import { C as CountryPainPoints } from './CountryPainPoints-C_U1cwK7.js';
import { C as CountryServices, a as CountryCTA } from './CountryCTA-2Ybs-rki.js';
import { e as ContactSection } from './ContactSection-Cl8aRXHL.js';
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
import '@radix-ui/react-select';
import './client-YlveBlFV.js';
import '@supabase/supabase-js';

const UKSoftwareDevelopment = () => {
  const seoData = useSEO("uk/software-development");
  const country = getCountryConfig("uk");
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "United Kingdom", url: "/global-services/uk" },
    { name: "Software Development Services", url: "/uk/software-development" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen font-inter", children: [
    /* @__PURE__ */ jsx(SEO, { ...seoData }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsx(Breadcrumb, { items: breadcrumbItems }) }),
      /* @__PURE__ */ jsx(
        CountryHero,
        {
          country,
          service: "software",
          title: "Custom Software Development Services in the UK",
          subtitle: "Strengthen your position in the competitive UK market with enterprise-grade software solutions, fintech applications, and innovative digital products.",
          ctaPrimary: "Discuss Your Software Project",
          ctaSecondary: "Get Technical Assessment"
        }
      ),
      /* @__PURE__ */ jsx(CountryPainPoints, { country, serviceType: "software" }),
      /* @__PURE__ */ jsx(CountryServices, { country, serviceType: "software" }),
      /* @__PURE__ */ jsx(CountryCTA, { country, serviceType: "software" }),
      /* @__PURE__ */ jsx(ContactSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};

export { UKSoftwareDevelopment as default };
