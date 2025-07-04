import { jsxs, jsx } from 'react/jsx-runtime';
import { B as Badge } from './badge-DlvEopxR.js';

const PaymentMethodsSection = () => {
  const paymentMethods = [
    { currency: "GBP", symbol: "£", label: "British Pound" },
    { currency: "USD", symbol: "$", label: "US Dollar" },
    { currency: "EUR", symbol: "€", label: "Euro" },
    { currency: "AUD", symbol: "A$", label: "Australian Dollar" },
    { currency: "BTC", symbol: "₿", label: "Bitcoin" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "mt-8 mb-4 relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden rounded-xl", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -left-4 w-16 h-16 bg-primary/3 rounded-full opacity-40" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-3 -right-6 w-20 h-20 bg-accent/3 rounded-full opacity-30" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative bg-gradient-to-r from-gray-50/60 to-white/80 rounded-xl border border-gray-200/40 py-4 px-5", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-6 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" }),
        /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-gray-900", children: "Global Payment Support" }),
        /* @__PURE__ */ jsx("div", { className: "w-6 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center items-center gap-3", children: paymentMethods.map((method) => /* @__PURE__ */ jsxs(
        Badge,
        {
          variant: "outline",
          className: "flex items-center gap-2 px-3 py-1.5 bg-white/80 border-gray-200/60 hover:bg-white hover:border-primary/20 transition-all duration-200 text-gray-700 hover:text-primary",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-primary", children: method.symbol }),
            /* @__PURE__ */ jsx("div", { className: "text-left", children: /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold text-gray-900", children: method.currency }) })
          ]
        },
        method.currency
      )) }),
      /* @__PURE__ */ jsx("div", { className: "mt-3 text-xs text-gray-500", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
        /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-green-500 rounded-full" }),
        "Secure payments processed globally"
      ] }) })
    ] }) })
  ] });
};

export { PaymentMethodsSection as P };
