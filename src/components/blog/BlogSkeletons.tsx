
import { Card } from "@/components/ui/card";

export const FeaturedPostSkeleton = () => (
  <Card className="overflow-hidden border border-gray-200 mb-16">
    <div className="grid lg:grid-cols-2">
      <div className="h-80 lg:h-96 bg-gray-100 animate-pulse"></div>
      <div className="p-8 lg:p-12">
        <div className="h-6 w-20 bg-gray-100 rounded-full mb-4 animate-pulse"></div>
        <div className="h-8 w-full bg-gray-100 rounded mb-2 animate-pulse"></div>
        <div className="h-8 w-3/4 bg-gray-100 rounded mb-4 animate-pulse"></div>
        <div className="h-4 w-full bg-gray-100 rounded mb-2 animate-pulse"></div>
        <div className="h-4 w-2/3 bg-gray-100 rounded mb-6 animate-pulse"></div>
        <div className="h-4 w-40 bg-gray-100 rounded animate-pulse"></div>
      </div>
    </div>
  </Card>
);

export const BlogPostCardSkeleton = () => (
  <Card className="overflow-hidden border border-gray-200">
    <div className="h-48 bg-gray-100 animate-pulse"></div>
    <div className="p-6">
      <div className="h-6 w-16 bg-gray-100 rounded-full mb-3 animate-pulse"></div>
      <div className="h-6 w-full bg-gray-100 rounded mb-2 animate-pulse"></div>
      <div className="h-6 w-3/4 bg-gray-100 rounded mb-4 animate-pulse"></div>
      <div className="h-4 w-full bg-gray-100 rounded mb-2 animate-pulse"></div>
      <div className="h-4 w-1/2 bg-gray-100 rounded mb-4 animate-pulse"></div>
      <div className="h-4 w-32 bg-gray-100 rounded animate-pulse"></div>
    </div>
  </Card>
);
