
import { Button } from "@/components/ui/button";
import FeaturedBlogPost from "./FeaturedBlogPost";
import BlogPostCard from "./BlogPostCard";
import { FeaturedPostSkeleton, BlogPostCardSkeleton } from "./BlogSkeletons";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image?: string;
  author_name: string;
  read_time: number;
  published_at: string;
  custom_published_date?: string;
  is_featured: boolean;
  blog_categories?: {
    name: string;
    color: string;
    slug: string;
  };
}

interface BlogGridProps {
  posts?: BlogPost[];
  isLoading: boolean;
}

const BlogGrid = ({ posts, isLoading }: BlogGridProps) => {
  if (isLoading) {
    return (
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Featured post skeleton */}
          <FeaturedPostSkeleton />

          {/* Regular posts skeleton - Clean grid like Whimsical */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <BlogPostCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const featuredPost = posts?.find(post => post.is_featured);
  const regularPosts = posts?.filter(post => !post.is_featured).slice(0, 9) || [];

  return (
    <section className="pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Featured Post - Whimsical style */}
        {featuredPost && (
          <div className="mb-16">
            <FeaturedBlogPost post={featuredPost} />
          </div>
        )}

        {/* Regular Posts Grid - Clean Whimsical layout */}
        {regularPosts.length > 0 && (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {regularPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            {/* Load More - Clean button */}
            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-200 text-gray-700 hover:border-gray-900 hover:text-gray-900 px-8 py-3 rounded-full font-medium transition-all duration-200"
              >
                Load more
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
