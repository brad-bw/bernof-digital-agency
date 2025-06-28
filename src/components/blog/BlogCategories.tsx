
import { useBlogCategories } from "@/hooks/useBlogData";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const BlogCategories = () => {
  const { data: categories, isLoading } = useBlogCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (isLoading) {
    return (
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 justify-center">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          <Badge
            variant={selectedCategory === null ? "default" : "outline"}
            className={`px-6 py-3 text-sm font-medium cursor-pointer transition-all duration-200 rounded-full ${
              selectedCategory === null 
                ? "bg-primary text-white hover:bg-primary/90" 
                : "hover:bg-gray-100"
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All Articles
          </Badge>
          
          {categories?.map((category) => (
            <Badge
              key={category.id}
              variant={selectedCategory === category.slug ? "default" : "outline"}
              className={`px-6 py-3 text-sm font-medium cursor-pointer transition-all duration-200 rounded-full ${
                selectedCategory === category.slug 
                  ? "text-white hover:opacity-90" 
                  : "hover:bg-gray-100"
              }`}
              style={{
                backgroundColor: selectedCategory === category.slug ? category.color : undefined,
                borderColor: category.color,
                color: selectedCategory === category.slug ? 'white' : category.color
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
