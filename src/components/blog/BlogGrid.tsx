
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Featured post skeleton */}
          <FeaturedPostSkeleton />

          {/* Regular posts skeleton */}
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Featured Post */}
        {featuredPost && <FeaturedBlogPost post={featuredPost} />}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-16">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary px-8 py-3 text-base font-semibold rounded-lg transition-all duration-300"
              >
                Load more articles
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
