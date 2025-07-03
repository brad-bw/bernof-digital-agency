import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Home, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  if (!items || items.length === 0) return null;
  return /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "py-4", children: /* @__PURE__ */ jsx("ol", { className: "flex items-center space-x-2 text-sm text-gray-600", children: items.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
    index === 0 && /* @__PURE__ */ jsx(Home, { className: "w-4 h-4 mr-1" }),
    index < items.length - 1 ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          to: item.url,
          className: "hover:text-brand-teal transition-colors font-inter",
          children: item.name
        }
      ),
      /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 mx-2 text-gray-400" })
    ] }) : /* @__PURE__ */ jsx("span", { className: "text-gray-900 font-medium font-inter", children: item.name })
  ] }, index)) }) });
};

export { Breadcrumb as B };
