import React from 'react';
import { Code, Palette, TrendingUp } from "lucide-react";

export interface ServiceFeature {
  name: string;
  description: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  detailedDescription: string;
  features: ServiceFeature[];
  technologies: string[];
  priceRange: string;
  timeline: string;
  deliverables: string;
  pattern: string;
}

export const servicesData: Service[] = [
  {
    icon: <Code className="w-12 h-12 text-primary" />,
    title: "Web Development & Tech Solutions",
    description: "From concept to launch, we build high-performance websites and applications that drive results.",
    detailedDescription: "We specialize in modern web technologies including React, Next.js, and full-stack development. Our solutions are built for scale, performance, and user experience.",
    features: [
      { name: "Custom Website Development", description: "Tailored solutions built from scratch" },
      { name: "E-Commerce Platforms", description: "Shopify, WooCommerce, custom stores" },
      { name: "Web Applications", description: "SaaS platforms, dashboards, tools" },
      { name: "API Integration", description: "Third-party services, payment gateways" },
      { name: "Performance Optimization", description: "Speed, SEO, mobile responsiveness" },
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    priceRange: "From €700",
    timeline: "2-8 weeks",
    deliverables: "Full website, mobile-responsive design, admin panel, documentation",
    pattern: "angular"
  },
  {
    icon: <Palette className="w-12 h-12 text-primary" />,
    title: "Brand Design & Visual Identity",
    description: "Create a memorable brand presence that resonates with your audience and stands out in the market.",
    detailedDescription: "We craft comprehensive visual identities that tell your brand story through strategic design, from logo creation to complete brand guidelines.",
    features: [
      { name: "Logo & Brand Identity", description: "Complete visual identity systems" },
      { name: "Motion Graphics", description: "Animated logos, social media content" },
      { name: "Video Production", description: "Promotional videos, explainer content" },
      { name: "Print & Digital Design", description: "Business cards, brochures, web graphics" },
      { name: "Brand Guidelines", description: "Comprehensive style guides" },
    ],
    technologies: ["Adobe Creative Suite", "Figma", "After Effects", "Cinema 4D"],
    priceRange: "From €200",
    timeline: "1-6 weeks",
    deliverables: "Brand identity package, style guide, source files, usage guidelines",
    pattern: "curved"
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-primary" />,
    title: "Digital Marketing & Growth",
    description: "Data-driven strategies that increase visibility, drive traffic, and convert visitors into customers.",
    detailedDescription: "We combine technical SEO expertise with creative marketing campaigns to deliver measurable growth for your business.",
    features: [
      { name: "SEO Optimization", description: "Technical & content SEO audits" },
      { name: "Social Media Strategy", description: "Content planning, community management" },
      { name: "PPC Advertising", description: "Google Ads, Facebook Ads optimization" },
      { name: "Analytics & Reporting", description: "Performance tracking, insights" },
      { name: "Conversion Optimization", description: "Landing pages, A/B testing" },
    ],
    technologies: ["Google Analytics", "SEMrush", "Google Ads", "Facebook Business"],
    priceRange: "From €300/month",
    timeline: "Ongoing",
    deliverables: "Monthly reports, strategy documents, campaign assets, performance dashboards",
    pattern: "geometric"
  }
];
