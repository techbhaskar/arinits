import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for Modern Web Development",
      excerpt:
        "Discover the latest best practices and techniques for building scalable, performant web applications in 2024.",
      author: "Arin IT Solutions",
      date: "March 15, 2024",
      category: "Web Development",
      readTime: "5 min read",
      image: "/api/placeholder/800/400",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Cloud Migration: A Complete Guide",
      excerpt:
        "Learn how to successfully migrate your infrastructure to the cloud, reduce costs, and improve scalability.",
      author: "Arin IT Solutions",
      date: "March 10, 2024",
      category: "Cloud & DevOps",
      readTime: "8 min read",
      image: "/api/placeholder/800/400",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Building Secure Mobile Applications",
      excerpt:
        "Explore security best practices for mobile app development, from authentication to data protection.",
      author: "Arin IT Solutions",
      date: "March 5, 2024",
      category: "Mobile Development",
      readTime: "6 min read",
      image: "/api/placeholder/800/400",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "The Future of AI in Software Development",
      excerpt:
        "How artificial intelligence is transforming the software development lifecycle and developer productivity.",
      author: "Arin IT Solutions",
      date: "February 28, 2024",
      category: "Technology",
      readTime: "10 min read",
      image: "/api/placeholder/800/400",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Design Systems: Building Consistent UIs",
      excerpt:
        "Create maintainable and scalable design systems that ensure consistency across your applications.",
      author: "Arin IT Solutions",
      date: "February 20, 2024",
      category: "Design",
      readTime: "7 min read",
      image: "/api/placeholder/800/400",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      id: 6,
      title: "DevOps Best Practices for Modern Teams",
      excerpt:
        "Streamline your development workflow with proven DevOps strategies and automation techniques.",
      author: "Arin IT Solutions",
      date: "February 15, 2024",
      category: "DevOps",
      readTime: "9 min read",
      image: "/api/placeholder/800/400",
      gradient: "from-red-500 to-pink-500",
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

  const [selectedCategory, setSelectedCategory] = React.useState("All Posts");

  const filteredPosts =
    selectedCategory === "All Posts"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Blog - ARIN IT Solutions"
        description="Insights, tutorials, and best practices on software development, technology trends, and digital transformation."
        path="/blog"
        keywords="blog, technology blog, software development blog, IT consulting blog, tech insights"
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Our Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest insights, best practices, and trends in
          software development, technology, and digital transformation.
        </p>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-arin-orange text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 glass-strong"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group glass-strong rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              {/* Post Image Placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold opacity-20">
                  {post.category}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-arin-orange font-semibold">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-arin-orange transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      {post.author}
                    </div>
                    <div className="text-xs text-gray-500">{post.date}</div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-arin-orange font-semibold hover:text-orange-600 transition-colors flex items-center gap-2"
                  >
                    Read More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="max-w-4xl mx-auto mt-20 glass-strong rounded-3xl p-12 shadow-xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Stay Updated
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Subscribe to our newsletter for the latest insights and updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-lg glass border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arin-orange"
          />
          <button className="px-10 py-4 bg-arin-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
