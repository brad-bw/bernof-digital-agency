import { jsxs, jsx } from 'react/jsx-runtime';
import { useParams, Navigate, Link } from 'react-router-dom';
import { H as Helmet, B as Button } from '../index.js';
import { useQuery } from '@tanstack/react-query';
import { s as supabase } from './client-YlveBlFV.js';
import { H as Header, F as Footer } from './Footer-Dopl2bL3.js';
import { B as Badge } from './badge-DEQ2LrWH.js';
import { ArrowLeft, User, CalendarDays, Clock, Share2 } from 'lucide-react';
import { format } from 'date-fns';
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
import 'react-fast-compare';
import 'invariant';
import 'shallowequal';
import '@radix-ui/react-slot';
import '@supabase/supabase-js';

const useBlogPost = (slug) => {
  return useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase.from("blog_posts").select("*").eq("slug", slug).not("published_at", "is", null).lte("published_at", (/* @__PURE__ */ new Date()).toISOString()).single();
      if (error) {
        console.error("Error fetching blog post:", error);
        throw error;
      }
      return data;
    }
  });
};

const BlogPost = () => {
  const {
    slug
  } = useParams();
  const {
    data: post,
    isLoading,
    error
  } = useBlogPost(slug || "");
  if (isLoading) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24", children: /* @__PURE__ */ jsxs("div", { className: "animate-pulse", children: [
        /* @__PURE__ */ jsx("div", { className: "h-8 bg-gray-200 rounded w-3/4 mb-4" }),
        /* @__PURE__ */ jsx("div", { className: "h-6 bg-gray-200 rounded w-1/2 mb-8" }),
        /* @__PURE__ */ jsx("div", { className: "h-96 bg-gray-200 rounded-2xl mb-8" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [...Array(8)].map((_, i) => /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-200 rounded" }, i)) })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] });
  }
  if (error || !post) {
    return /* @__PURE__ */ jsx(Navigate, { to: "/blog", replace: true });
  }
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt || "",
          url: window.location.href
        });
      } catch (error2) {
        console.log("Error sharing:", error2);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };
  const renderContent = () => {
    if (!post.content) {
      return /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("p", { className: "text-lg leading-relaxed text-gray-700", children: [
        "Welcome to our comprehensive guide on ",
        post.title.toLowerCase(),
        ". This article covers the essential concepts and best practices you need to know."
      ] }) });
    }
    if (typeof post.content === "string") {
      return /* @__PURE__ */ jsx("div", { className: "prose prose-lg max-w-none", dangerouslySetInnerHTML: {
        __html: post.content
      } });
    }
    if (typeof post.content === "object" && post.content !== null) {
      if (Array.isArray(post.content)) {
        return /* @__PURE__ */ jsx("div", { className: "space-y-6", children: post.content.map((block, index) => {
          if (block._type === "block") {
            const text = block.children?.map((child) => child.text).join("") || "";
            if (block.style === "h1") {
              return /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-6", children: text }, index);
            }
            if (block.style === "h2") {
              return /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: text }, index);
            }
            if (block.style === "h3") {
              return /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: text }, index);
            }
            return /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-gray-700 mb-4", children: text }, index);
          }
          return null;
        }) });
      }
      if (post.content.children && Array.isArray(post.content.children)) {
        const text = post.content.children.map((child) => child.text || "").join("");
        return /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-gray-700", children: text }) });
      }
      const extractText = (obj) => {
        if (typeof obj === "string") return obj;
        if (typeof obj === "object" && obj !== null) {
          if (obj.text) return obj.text;
          if (Array.isArray(obj)) {
            return obj.map(extractText).join(" ");
          }
          return Object.values(obj).map(extractText).join(" ");
        }
        return "";
      };
      const extractedText = extractText(post.content).trim();
      if (extractedText) {
        return /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-gray-700", children: extractedText }) });
      }
    }
    return /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("p", { className: "text-lg leading-relaxed text-gray-700", children: [
      "Welcome to our comprehensive guide on ",
      post.title.toLowerCase(),
      ". This article covers the essential concepts and best practices you need to know."
    ] }) });
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        post.title,
        " | Bernof Co Blog"
      ] }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: post.excerpt || `Read ${post.title} on Bernof Co blog` }),
      post.featured_image && /* @__PURE__ */ jsx("meta", { property: "og:image", content: post.featured_image }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: post.title }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: post.excerpt || "" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "article:author", content: post.author_name }),
      post.published_at && /* @__PURE__ */ jsx("meta", { property: "article:published_time", content: post.published_at })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "pt-24 py-0", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-white border-b", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4", children: /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Back to Blog" })
      ] }) }) }),
      /* @__PURE__ */ jsxs("article", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
        /* @__PURE__ */ jsxs("header", { className: "mb-12", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: post.categories?.map((category) => /* @__PURE__ */ jsx(Badge, { className: "bg-primary text-white hover:bg-primary/90", children: category }, category)) }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight", children: post.title }),
          post.excerpt && /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-8 leading-relaxed", children: post.excerpt }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 border-b border-gray-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 text-gray-600", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(User, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: post.author_name })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm", children: [
                post.published_at && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(CalendarDays, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { children: format(new Date(post.published_at), "MMMM dd, yyyy") })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    post.reading_time,
                    " min read"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: handleShare, className: "gap-2", children: [
              /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4" }),
              "Share"
            ] })
          ] })
        ] }),
        post.featured_image && /* @__PURE__ */ jsx("div", { className: "mb-12", children: /* @__PURE__ */ jsx("img", { src: post.featured_image, alt: post.title, className: "w-full h-96 object-cover rounded-2xl shadow-lg" }) }),
        /* @__PURE__ */ jsx("div", { className: "prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700", children: renderContent() }),
        post.tags && post.tags.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-8 border-t border-gray-200", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Tags" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: post.tags.map((tag) => /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-gray-600 hover:text-primary hover:border-primary", children: [
            "#",
            tag
          ] }, tag)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};

export { BlogPost as default };
