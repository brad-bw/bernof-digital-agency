
import { useBlogCategories } from "@/hooks/useBlogData";
import { useState } from "react";

const BlogCategories = () => {
  const { data: categories, isLoading } = useBlogCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (isLoading) {
    return (
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-2 justify-center">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-8 w-20 bg-gray-100 rounded-full animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {/* All Articles - Clean button like Whimsical */}
          <button
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              selectedCategory === null 
                ? "bg-gray-900 text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          
          {/* Category buttons with clean styling */}
          {categories?.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                selectedCategory === category.slug 
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(
                selectedCategory === category.slug ? null : category.slug
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;
