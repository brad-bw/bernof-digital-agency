
import { useBlogCategories } from '@/hooks/useBlogCategories';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface BlogCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const BlogCategories = ({ selectedCategory, onCategoryChange }: BlogCategoriesProps) => {
  const { data: categories, isLoading } = useBlogCategories();

  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      <Button
        variant={selectedCategory === 'all' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onCategoryChange('all')}
        className={`rounded-full px-6 py-2 font-medium transition-all duration-200 ${
          selectedCategory === 'all'
            ? 'bg-[#1F5F5B] text-white hover:bg-[#2D5A56] shadow-lg'
            : 'text-gray-600 hover:text-[#1F5F5B] hover:border-[#1F5F5B] hover:bg-gray-50'
        }`}
      >
        All Articles
      </Button>
      
      {categories?.map((category) => (
        <Button
          key={category.slug}
          variant={selectedCategory === category.slug ? 'default' : 'outline'}
          size="sm"
          onClick={() => onCategoryChange(category.slug)}
          className={`rounded-full px-6 py-2 font-medium transition-all duration-200 ${
            selectedCategory === category.slug
              ? 'bg-[#1F5F5B] text-white hover:bg-[#2D5A56] shadow-lg'
              : 'text-gray-600 hover:text-[#1F5F5B] hover:border-[#1F5F5B] hover:bg-gray-50'
          }`}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default BlogCategories;
