import { jsxs, jsx } from 'react/jsx-runtime';
import { H as Header, F as Footer } from './Footer-Dopl2bL3.js';
import { u as useSEO, S as SEO, g as getCountryConfig } from './useSEO-CVpIl9nc.js';
import { B as Breadcrumb } from './Breadcrumb-DDkSxO34.js';
import { C as CountryHero } from './CountryHero-DZr3_Esw.js';
import { C as CountryPainPoints } from './CountryPainPoints-C_U1cwK7.js';
import { C as CountryServices, a as CountryCTA } from './CountryCTA-DStySXju.js';
import { e as ContactSection } from './ContactSection-DgR8PDHV.js';
import '../index.js';
import '@wroud/vite-plugin-ssg/react/server';
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

const ItalySoftwareDevelopment = () => {
  const seoData = useSEO("it/software-development");
  const country = getCountryConfig("it");
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Italy", url: "/global-services/it" },
    { name: "Software Development Services", url: "/it/software-development" }
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
          title: "Custom Software Development Services in Italy",
          subtitle: "Transform Italy's traditional industries with modern software solutions. Custom applications, mobile apps, and digital transformation services for the Italian market.",
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

export { ItalySoftwareDevelopment as default };
