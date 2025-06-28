
import { useBlogCategories } from "@/hooks/useBlogData";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const BlogCategories = () => {
  const { data: categories, isLoading } = useBlogCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (isLoading) {
    return (
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex gap-3 justify-center">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-9 w-24 bg-gray-200 rounded-full animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-white border-b border-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap gap-3 justify-center">
          {/* All Articles */}
          <Badge
            variant="outline"
            className={`px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-200 rounded-full border-2 ${
              selectedCategory === null 
                ? "bg-gray-900 text-white border-gray-900 hover:bg-gray-800" 
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-800"
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All articles
          </Badge>
          
          {/* Category badges */}
          {categories?.map((category) => (
            <Badge
              key={category.id}
              variant="outline"
              className={`px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-200 rounded-full border-2 ${
                selectedCategory === category.slug 
                  ? "text-white border-transparent"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-800"
              }`}
              style={{
                backgroundColor: selectedCategory === category.slug ? category.color : undefined,
                borderColor: selectedCategory === category.slug ? category.color : undefined,
              }}
              onClick={() => setSelectedCategory(
                selectedCategory === category.slug ? null : category.slug
              )}
            >
              {category.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;
