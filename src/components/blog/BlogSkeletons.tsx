
import { Card, CardContent } from "@/components/ui/card";

export const FeaturedPostSkeleton = () => (
  <div className="mb-16">
    <Card className="overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="h-80 bg-gray-200 animate-pulse"></div>
        <CardContent className="p-8 lg:p-12">
          <div className="h-6 w-20 bg-gray-200 rounded mb-4 animate-pulse"></div>
          <div className="h-8 w-full bg-gray-200 rounded mb-3 animate-pulse"></div>
          <div className="h-8 w-3/4 bg-gray-200 rounded mb-6 animate-pulse"></div>
          <div className="h-4 w-full bg-gray-200 rounded mb-2 animate-pulse"></div>
          <div className="h-4 w-2/3 bg-gray-200 rounded mb-8 animate-pulse"></div>
          <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
        </CardContent>
      </div>
    </Card>
  </div>
);

export const BlogPostCardSkeleton = () => (
  <Card className="overflow-hidden">
    <div className="h-56 bg-gray-200 animate-pulse"></div>
    <CardContent className="p-6">
      <div className="h-4 w-16 bg-gray-200 rounded mb-3 animate-pulse"></div>
      <div className="h-6 w-full bg-gray-200 rounded mb-2 animate-pulse"></div>
      <div className="h-6 w-3/4 bg-gray-200 rounded mb-4 animate-pulse"></div>
      <div className="h-4 w-full bg-gray-200 rounded mb-2 animate-pulse"></div>
      <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
    </CardContent>
  </Card>
);
