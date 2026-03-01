import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Enterprise E-Commerce Platform",
      category: "Web Development",
      challenge: "The client's legacy system crashed during peak holiday traffic, costing millions in lost revenue.",
      solution: "We re-architected the platform using React and Node.js on a highly scalable AWS cloud infrastructure.",
      result: "Achieved 99.99% uptime, easily handling 100K+ daily transactions with zero latency during peak spikes.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "/api/placeholder/800/600",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      id: 2,
      title: "Mobile Banking Application",
      category: "Mobile Development",
      challenge: "High fraud rates and terrible App Store ratings due to a clunky, insecure legacy mobile experience.",
      solution: "Developed a modern, secure React Native app integrating biometric authentication and TensorFlow AI.",
      result: "Fraud incidents dropped by 85%, and App Store ratings soared from 2.4 to 4.8 stars in three months.",
      tech: ["React Native", "Firebase", "TensorFlow"],
      image: "/api/placeholder/800/600",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      id: 3,
      title: "Cloud Migration Solution",
      category: "Cloud & DevOps",
      challenge: "On-premises servers were incredibly expensive to maintain and could not physically scale with company growth.",
      solution: "Executed a zero-downtime migration to AWS, heavily utilizing Docker and Kubernetes for microservices.",
      result: "Reduced total infrastructure costs by 40% while dramatically improving overall application delivery speed.",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
      image: "/api/placeholder/800/600",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      id: 4,
      title: "AI-Powered Analytics Dashboard",
      category: "Software Development",
      challenge: "The executive team was relying on 30-day old spreadsheet data to make critical real-time financial decisions.",
      solution: "Built a Python/React analytics dashboard powered by Machine Learning to provide predictive data models.",
      result: "Enabled real-time, minute-by-minute insights, increasing executive decision-making speed by over 300%.",
      tech: ["Python", "React", "TensorFlow", "PostgreSQL"],
      image: "/api/placeholder/800/600",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      id: 5,
      title: "Healthcare Management System",
      category: "Web Development",
      challenge: "Doctors were spending 40% of their daily time navigating archaic, disconnected patient record systems.",
      solution: "Deployed a unified healthcare management portal with integrated WebRTC telemedicine and scheduling.",
      result: "Saved medical staff an average of 15 hours per week, allowing them to see 20% more patients daily.",
      tech: ["React", "Node.js", "MongoDB", "WebRTC"],
      image: "/api/placeholder/800/600",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      id: 6,
      title: "FinTech Trading Platform",
      category: "Software Development",
      challenge: "Retail traders experienced severe lag during volatile market events, causing them to miss critical trades.",
      solution: "Engineered a low-latency trading engine using Go and WebSockets for instantaneous real-time data processing.",
      result: "Reduced trade execution latency to under 5ms, increasing daily active user volume by over 150%.",
      tech: ["Vue.js", "Go", "Redis", "WebSocket"],
      image: "/api/placeholder/800/600",
      gradient: "from-orange-500 to-orange-600",
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
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title="Portfolio - ARIN IT Solutions"
        description="Explore our portfolio of successful projects. See how we've helped businesses transform through innovative tech solutions. Start your project today!"
        path="/portfolio"
        keywords="portfolio, projects, case studies, software development projects, web development portfolio"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="block text-white">Our</span>
            <span className="block bg-gradient-to-r from-arin-orange to-orange-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Discover innovative solutions we've built for businesses worldwide.
            Each project represents our commitment to excellence and innovation.
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

          {/* Projects Grid */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative glass-strong-dark rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 text-white"
                >
                  {/* Project Image Placeholder */}
                  <div
                    className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold opacity-4">
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
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-arin-orange transition-colors">
                      {project.title}
                    </h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold">The Challenge:</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Our Solution:</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-arin-orange font-semibold">The Result:</h4>
                        <p className="text-gray-300 text-sm leading-relaxed font-medium">{project.result}</p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-arin-orange/20 to-orange-500/20 text-white border border-white/20 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Button */}
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-arin-orange to-orange-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-20 text-center glass-strong-dark rounded-3xl p-12 shadow-xl border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can bring your vision to life with our
              expertise and innovation.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-arin-orange to-orange-500 text-white rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
