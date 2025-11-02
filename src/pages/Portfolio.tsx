import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Enterprise E-Commerce Platform",
      category: "Web Development",
      description:
        "Built a scalable e-commerce platform handling 100K+ daily transactions with advanced inventory management and real-time analytics.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "/api/placeholder/800/600",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Mobile Banking Application",
      category: "Mobile Development",
      description:
        "Developed a secure mobile banking app with biometric authentication, real-time transactions, and AI-powered fraud detection.",
      tech: ["React Native", "Firebase", "TensorFlow"],
      image: "/api/placeholder/800/600",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Cloud Migration Solution",
      category: "Cloud & DevOps",
      description:
        "Migrated enterprise infrastructure to AWS, reducing costs by 40% and improving scalability and performance significantly.",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
      image: "/api/placeholder/800/600",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "AI-Powered Analytics Dashboard",
      category: "Software Development",
      description:
        "Created an intelligent analytics platform with machine learning capabilities, providing real-time insights and predictions.",
      tech: ["Python", "React", "TensorFlow", "PostgreSQL"],
      image: "/api/placeholder/800/600",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Healthcare Management System",
      category: "Web Development",
      description:
        "Developed a comprehensive healthcare management system with patient records, scheduling, and telemedicine capabilities.",
      tech: ["React", "Node.js", "MongoDB", "WebRTC"],
      image: "/api/placeholder/800/600",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      id: 6,
      title: "FinTech Trading Platform",
      category: "Software Development",
      description:
        "Built a high-performance trading platform with real-time data processing, advanced charting, and algorithmic trading support.",
      tech: ["Vue.js", "Go", "Redis", "WebSocket"],
      image: "/api/placeholder/800/600",
      gradient: "from-red-500 to-pink-500",
    },
  ];

  const categories = [
    "All Projects",
    "Web Development",
    "Mobile Development",
    "Cloud & DevOps",
    "Software Development",
  ];

  const [selectedCategory, setSelectedCategory] =
    React.useState("All Projects");

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Portfolio - ARIN IT Solutions"
        description="Explore our portfolio of successful projects. See how we've helped businesses transform through innovative technology solutions."
        path="/portfolio"
        keywords="portfolio, projects, case studies, software development projects, web development portfolio"
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Our Portfolio
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover innovative solutions we've built for businesses worldwide.
          Each project represents our commitment to excellence and innovation.
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

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative glass-strong rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              {/* Project Image Placeholder */}
              <div
                className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold opacity-20">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-arin-orange font-semibold">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-arin-orange transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button className="w-full px-6 py-3 bg-arin-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center glass-strong rounded-3xl p-12 shadow-xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Have a Project in Mind?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's discuss how we can bring your vision to life with our expertise
          and innovation.
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-4 bg-arin-orange text-white rounded-lg font-semibold text-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
        >
          Start Your Project
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
