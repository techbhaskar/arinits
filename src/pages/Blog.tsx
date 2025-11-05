import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for Modern Web Development",
      slug: "10-essential-tips-for-modern-web-development",
      excerpt:
        "Discover the latest best practices and techniques for building scalable, performant web applications in 2024.",
      author: "Arin IT Solutions",
      date: "March 15, 2024",
      category: "Web Development",
      readTime: "5 min read",
      image: "/api/placeholder/800/400",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      id: 2,
      title: "Cloud Migration: A Complete Guide",
      slug: "cloud-migration-a-complete-guide",
      excerpt:
        "Learn how to successfully migrate your infrastructure to the cloud, reduce costs, and improve scalability.",
      author: "Arin IT Solutions",
      date: "March 10, 2024",
      category: "Cloud & DevOps",
      readTime: "8 min read",
      image: "/api/placeholder/800/400",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      id: 3,
      title: "Building Secure Mobile Applications",
      slug: "building-secure-mobile-applications",
      excerpt:
        "Explore security best practices for mobile app development, from authentication to data protection.",
      author: "Arin IT Solutions",
      date: "March 5, 2024",
      category: "Mobile Development",
      readTime: "6 min read",
      image: "/api/placeholder/800/400",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      id: 4,
      title: "The Future of AI in Software Development",
      slug: "the-future-of-ai-in-software-development",
      excerpt:
        "How artificial intelligence is transforming the software development lifecycle and developer productivity.",
      author: "Arin IT Solutions",
      date: "February 28, 2024",
      category: "Technology",
      readTime: "10 min read",
      image: "/api/placeholder/800/400",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      id: 5,
      title: "Design Systems: Building Consistent UIs",
      slug: "design-systems-building-consistent-uis",
      excerpt:
        "Create maintainable and scalable design systems that ensure consistency across your applications.",
      author: "Arin IT Solutions",
      date: "February 20, 2024",
      category: "Design",
      readTime: "7 min read",
      image: "/api/placeholder/800/400",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      id: 6,
      title: "DevOps Best Practices for Modern Teams",
      slug: "devops-best-practices-for-modern-teams",
      excerpt:
        "Streamline your development workflow with proven DevOps strategies and automation techniques.",
      author: "Arin IT Solutions",
      date: "February 15, 2024",
      category: "DevOps",
      readTime: "9 min read",
      image: "/api/placeholder/800/400",
      gradient: "from-orange-500 to-orange-600",
    },
  ];

  const categories = [
    "All Posts",
    "Web Development",
    "Mobile Development",
    "Cloud & DevOps",
    "Technology",
    "Design",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  const filteredPosts =
    selectedCategory === "All Posts"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title="Blog - ARIN IT Solutions"
        description="Insights, tutorials, and best practices on software development, technology trends, and digital transformation."
        path="/blog"
        keywords="blog, technology blog, software development blog, IT consulting blog, tech insights"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-24 pb-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-arin-orange/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(184, 107, 35, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center justify-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-relaxed mb-6">
            <span className="block text-white">Our</span>
            <span className="block bg-gradient-to-r from-arin-orange to-orange-400 bg-clip-text text-transparent pb-4">
              Blog
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Stay updated with the latest insights, best practices, and trends in
            software development, technology, and digital transformation.
          </p>
        </div>
      </section>

      <div className="relative pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-gray-900 pt-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-arin-orange to-orange-500 text-white shadow-lg transform scale-105"
                      : "glass-strong-dark text-white border border-white/20 hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group glass-strong-dark rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 text-white"
                >
                  {/* Post Image Placeholder */}
                  <div
                    className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold opacity-4">
                      {post.category}
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-arin-orange font-semibold">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-400">
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-arin-orange transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/20">
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {post.author}
                        </div>
                        <div className="text-xs text-gray-400">{post.date}</div>
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-arin-orange font-semibold hover:text-orange-400 transition-colors flex items-center gap-2"
                      >
                        Read More
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="max-w-4xl mx-auto mt-20 glass-strong-dark rounded-3xl p-12 shadow-xl text-center border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg glass-strong-dark border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-arin-orange focus:border-transparent transition-all"
              />
              <button className="px-10 py-4 bg-gradient-to-r from-arin-orange to-orange-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
