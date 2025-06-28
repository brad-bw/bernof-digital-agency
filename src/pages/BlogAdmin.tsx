
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { useBlogPosts } from "@/hooks/useBlogData";
import BlogEditor from "@/components/blog/BlogEditor";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const BlogAdmin = () => {
  const { data: posts, isLoading } = useBlogPosts(false); // Include unpublished posts
  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  const handleNewPost = () => {
    setEditingPost(null);
    setShowEditor(true);
  };

  const handleEditPost = (post: any) => {
    setEditingPost(post);
    setShowEditor(true);
  };

  const handleCloseEditor = () => {
    setShowEditor(false);
    setEditingPost(null);
  };

  if (showEditor) {
    return (
      <BlogEditor 
        post={editingPost} 
        onClose={handleCloseEditor}
      />
    );
  }

  return (
    <div className="min-h-screen font-inter bg-gray-50">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog Administration</h1>
              <p className="text-gray-600">Manage your blog posts and content</p>
            </div>
            <Button 
              onClick={handleNewPost}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold"
            >
              <Plus className="mr-2 h-5 w-5" />
              New Post
            </Button>
          </div>

          {isLoading ? (
            <div className="grid gap-6">
              {[...Array(5)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-4 w-20 bg-gray-200 rounded mb-3"></div>
                    <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-full bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 w-32 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-6">
              {posts?.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge 
                            variant={post.is_published ? "default" : "secondary"}
                            className={post.is_published ? "bg-green-500" : "bg-gray-400"}
                          >
                            {post.is_published ? "Published" : "Draft"}
                          </Badge>
                          {post.is_featured && (
                            <Badge className="bg-yellow-500">Featured</Badge>
                          )}
                          {post.blog_categories && (
                            <Badge 
                              style={{ backgroundColor: post.blog_categories.color }}
                              className="text-white"
                            >
                              {post.blog_categories.name}
                            </Badge>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>By {post.author_name}</span>
                          <span>
                            {post.published_at 
                              ? formatDistanceToNow(new Date(post.custom_published_date || post.published_at)) + " ago"
                              : "Not published"
                            }
                          </span>
                          <span>{post.read_time} min read</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 ml-4">
                        {post.is_published && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            asChild
                            className="text-primary hover:text-primary/80"
                          >
                            <Link to={`/blog/${post.slug}`} target="_blank">
                              <Eye className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleEditPost(post)}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogAdmin;
