import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { B as Button, H as Helmet } from '../index.js';
import { H as Header, F as Footer } from './Footer-Dopl2bL3.js';
import { ArrowRight, User, Clock, CalendarDays } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { s as supabase } from './client-YlveBlFV.js';
import { B as Badge } from './badge-DEQ2LrWH.js';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import '@wroud/vite-plugin-ssg/react/server';
import 'react-dom/client';
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

const BlogHero = () => {
  return /* @__PURE__ */ jsxs("section", { className: "relative bg-gradient-to-br from-[#1F5F5B] via-[#2D5A56] to-[#1A4A47] text-white overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/5" }),
    /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:px-[17px] lg:py-[36px]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-[#20B2AA] rounded-full animate-pulse" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Fresh insights weekly" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-5xl lg:text-7xl font-bold tracking-tight mb-6", children: [
        "Digital",
        /* @__PURE__ */ jsx("span", { className: "block text-transparent bg-gradient-to-r from-[#20B2AA] to-[#4FD1C7] bg-clip-text px-0 mx-0 my-0 py-[12px]", children: "Insights" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed", children: "Explore the latest trends in web development, startup growth, and digital innovation. Your guide to building better digital experiences." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
        /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-[#20B2AA] hover:bg-[#1A9B95] text-white font-semibold px-8 py-3 rounded-full group text-base", children: [
          "Explore Articles",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", size: "lg", className: "border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#1F5F5B] px-8 py-3 rounded-full text-base font-medium transition-all duration-300", children: "Subscribe to Newsletter" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#20B2AA]/20 to-transparent rounded-full blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-[#4FD1C7]/20 to-transparent rounded-full blur-3xl" })
  ] });
};

const useBlogCategories = () => {
  return useQuery({
    queryKey: ["blog-categories"],
    queryFn: async () => {
      console.log("Fetching blog categories...");
      const { data: posts, error: postsError } = await supabase.from("blog_posts").select("categories").not("published_at", "is", null).lte("published_at", (/* @__PURE__ */ new Date()).toISOString());
      if (postsError) {
        console.error("Error fetching blog posts for categories:", postsError);
        throw postsError;
      }
      console.log("Blog posts data:", posts);
      const allCategories = posts?.flatMap((post) => post.categories || []) || [];
      const uniqueCategories = [...new Set(allCategories)];
      console.log("Unique categories found:", uniqueCategories);
      const { data: categoryData, error: categoryError } = await supabase.from("blog_categories").select("*").order("name");
      if (categoryError) {
        console.log("No categories table data, using post categories:", categoryError);
      }
      console.log("Category data from table:", categoryData);
      const categories = uniqueCategories.map((categoryName) => {
        const dbCategory = categoryData?.find((cat) => cat.name === categoryName);
        return {
          id: dbCategory?.id || `temp-${categoryName}`,
          name: categoryName,
          slug: dbCategory?.slug || categoryName.toLowerCase().replace(/\s+/g, "-"),
          description: dbCategory?.description || null,
          color: dbCategory?.color || "#1F5F5B",
          created_at: dbCategory?.created_at || (/* @__PURE__ */ new Date()).toISOString()
        };
      });
      console.log("Final categories:", categories);
      return categories;
    }
  });
};

const BlogCategories = ({ selectedCategory, onCategoryChange }) => {
  const { data: categories, isLoading } = useBlogCategories();
  if (isLoading) {
    return /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 justify-center mb-12", children: [...Array(6)].map((_, i) => /* @__PURE__ */ jsx("div", { className: "h-10 w-24 bg-gray-200 rounded-full animate-pulse" }, i)) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 justify-center mb-12", children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: selectedCategory === "all" ? "default" : "outline",
        size: "sm",
        onClick: () => onCategoryChange("all"),
        className: `rounded-full px-6 py-2 font-medium transition-all duration-200 ${selectedCategory === "all" ? "bg-[#1F5F5B] text-white hover:bg-[#2D5A56] shadow-lg" : "text-gray-600 hover:text-[#1F5F5B] hover:border-[#1F5F5B] hover:bg-gray-50"}`,
        children: "All Articles"
      }
    ),
    categories?.map((category) => /* @__PURE__ */ jsx(
      Button,
      {
        variant: selectedCategory === category.slug ? "default" : "outline",
        size: "sm",
        onClick: () => {
          console.log("Category clicked:", category.slug);
          onCategoryChange(category.slug);
        },
        className: `rounded-full px-6 py-2 font-medium transition-all duration-200 ${selectedCategory === category.slug ? "bg-[#1F5F5B] text-white hover:bg-[#2D5A56] shadow-lg" : "text-gray-600 hover:text-[#1F5F5B] hover:border-[#1F5F5B] hover:bg-gray-50"}`,
        children: category.name
      },
      category.slug
    ))
  ] });
};

const useBlogPosts = (category, featured) => {
  return useQuery({
    queryKey: ["blog-posts", category, featured],
    queryFn: async () => {
      console.log("Fetching blog posts with category:", category, "featured:", featured);
      let query = supabase.from("blog_posts").select("*").not("published_at", "is", null).lte("published_at", (/* @__PURE__ */ new Date()).toISOString()).order("published_at", { ascending: false });
      if (category && category !== "all") {
        console.log("Filtering by category:", category);
        const categoryVariations = [
          category,
          category.replace(/-/g, " "),
          category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
          category.charAt(0).toUpperCase() + category.slice(1)
        ];
        query = query.or(categoryVariations.map((cat) => `categories.cs.{${cat}}`).join(","));
      }
      const { data, error } = await query;
      if (error) {
        console.error("Error fetching blog posts:", error);
        throw error;
      }
      console.log("Blog posts fetched:", data?.length, "posts");
      return data;
    }
  });
};

const BlogCard = ({ post, featured = false }) => {
  const placeholderImages = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
  ];
  const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
  const imageUrl = post.featured_image || randomImage;
  if (featured) {
    return /* @__PURE__ */ jsxs(
      Link,
      {
        to: `/blog/${post.slug}`,
        className: "group relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-[#1F5F5B] hover:border-[#20B2AA] lg:col-span-2 h-96",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: imageUrl,
                alt: post.title,
                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-[#1F5F5B]/90 group-hover:via-[#1F5F5B]/40 transition-all duration-500" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-8", children: [
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: post.categories.slice(0, 2).map((category) => /* @__PURE__ */ jsx(
              Badge,
              {
                className: "bg-white/20 text-white backdrop-blur-sm border-white/20 group-hover:bg-[#20B2AA] group-hover:text-white transition-all duration-300",
                children: category
              },
              category
            )) }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight", children: post.title }),
            post.excerpt && /* @__PURE__ */ jsx("p", { className: "text-white/90 mb-4 text-lg leading-relaxed line-clamp-2", children: post.excerpt }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-white/80 text-sm", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(User, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { children: post.author_name })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    post.reading_time,
                    " min read"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-white/80 group-hover:translate-x-1 transition-transform duration-300" })
            ] })
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to: `/blog/${post.slug}`,
      className: "group relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-[#1F5F5B] hover:border-[#20B2AA] h-full",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: imageUrl,
              alt: post.title,
              className: "w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: post.categories.slice(0, 2).map((category) => /* @__PURE__ */ jsx(
            Badge,
            {
              className: "bg-[#1F5F5B]/10 text-[#1F5F5B] group-hover:bg-[#20B2AA] group-hover:text-white transition-all duration-300",
              children: category
            },
            category
          )) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300 leading-snug", children: post.title }),
          post.excerpt && /* @__PURE__ */ jsx("p", { className: "text-gray-600 group-hover:text-white/90 mb-4 line-clamp-2 transition-colors duration-300", children: post.excerpt }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-gray-500 group-hover:text-white/80 text-sm transition-colors duration-300", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(User, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { children: post.author_name })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  post.reading_time,
                  " min read"
                ] })
              ] })
            ] }),
            post.published_at && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-gray-500 group-hover:text-white/80 text-sm transition-colors duration-300", children: [
              /* @__PURE__ */ jsx(CalendarDays, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: format(new Date(post.published_at), "MMM dd") })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" }) })
        ] })
      ]
    }
  );
};

const BlogGrid = ({ selectedCategory }) => {
  const { data: posts, isLoading, error } = useBlogPosts(selectedCategory);
  if (isLoading) {
    return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [...Array(6)].map((_, i) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl shadow-lg overflow-hidden animate-pulse", children: [
      /* @__PURE__ */ jsx("div", { className: "h-48 bg-gray-200" }),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex gap-2 mb-4", children: /* @__PURE__ */ jsx("div", { className: "h-6 w-20 bg-gray-200 rounded-full" }) }),
        /* @__PURE__ */ jsx("div", { className: "h-6 bg-gray-200 rounded mb-3" }),
        /* @__PURE__ */ jsx("div", { className: "h-6 bg-gray-200 rounded mb-3 w-3/4" }),
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-200 rounded mb-2" }),
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-200 rounded w-2/3" })
      ] })
    ] }, i)) });
  }
  if (error) {
    return /* @__PURE__ */ jsxs("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Unable to load articles" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Please try again later." })
    ] });
  }
  if (!posts || posts.length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "No articles found" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: selectedCategory === "all" ? "Check back soon for new content!" : "Try selecting a different category." })
    ] });
  }
  const featuredPosts = posts.filter((post) => post.is_featured);
  const regularPosts = posts.filter((post) => !post.is_featured);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-16", children: [
    featuredPosts.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Featured Articles" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: featuredPosts.map((post) => /* @__PURE__ */ jsx(BlogCard, { post, featured: true }, post.id)) })
    ] }),
    regularPosts.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
      featuredPosts.length > 0 && /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Latest Articles" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: regularPosts.map((post) => /* @__PURE__ */ jsx(BlogCard, { post }, post.id)) })
    ] })
  ] });
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Blog - Digital Insights & Industry Trends | Bernof Co" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Explore the latest insights on web development, startup growth, and digital innovation. Expert analysis and practical tips from Bernof Co's team." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "web development blog, startup insights, digital marketing, tech trends, business strategy" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "pt-24 py-0", children: [
      /* @__PURE__ */ jsx(BlogHero, {}),
      /* @__PURE__ */ jsx("section", { className: "py-16 lg:py-[37px]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx(BlogCategories, { selectedCategory, onCategoryChange: setSelectedCategory }),
        /* @__PURE__ */ jsx(BlogGrid, { selectedCategory })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};

export { Blog as default };
