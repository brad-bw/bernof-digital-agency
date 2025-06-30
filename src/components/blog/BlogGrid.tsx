
import { useBlogPosts } from '@/hooks/useBlogPosts';
import BlogCard from './BlogCard';
import { BlogPost } from '@/types/blog';

interface BlogGridProps {
  selectedCategory: string;
}

const BlogGrid = ({ selectedCategory }: BlogGridProps) => {
  const { data: posts, isLoading, error } = useBlogPosts(selectedCategory);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-3xl shadow-lg overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <div className="flex gap-2 mb-4">
                <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
              </div>
              <div className="h-6 bg-gray-200 rounded mb-3"></div>
              <div className="h-6 bg-gray-200 rounded mb-3 w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Unable to load articles</h3>
        <p className="text-gray-600">Please try again later.</p>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
        <p className="text-gray-600">
          {selectedCategory === 'all' 
            ? "Check back soon for new content!" 
            : "Try selecting a different category."}
        </p>
      </div>
    );
  }

  const featuredPosts = posts.filter(post => post.is_featured);
  const regularPosts = posts.filter(post => !post.is_featured);

  return (
    <div className="space-y-16">
      {featuredPosts.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} featured={true} />
            ))}
          </div>
        </div>
      )}

      {regularPosts.length > 0 && (
        <div>
          {featuredPosts.length > 0 && (
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
