
const BlogHero = () => {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Clean, minimal headline like Whimsical */}
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-[0.9] tracking-tight">
          Blog
        </h1>
        
        {/* Simple subtitle */}
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Insights on digital strategy, startup development, and building great products.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
