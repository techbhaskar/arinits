import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { projects } from "../data/projects";

const Portfolio = () => {

  const categories = [
    "All Projects",
    "AI & Machine Learning Platforms",
    "Enterprise SaaS",
    "Workforce & HR Systems",
    "Logistics & E-commerce",
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
              Work
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white font-semibold mb-4 leading-relaxed max-w-3xl mx-auto">
            Enterprise Software, AI Systems & Scalable Digital Platforms
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            At Arin IT Solutions, we design and build enterprise-grade software platforms that power digital transformation. From AI-native databases to secure microservices architectures, our work focuses on scalability, performance, and long-term business impact.
            <br/><br/>
            <strong>We don't just build applications — we architect systems designed to evolve.</strong>
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
                    <Link
                      to={`/portfolio/${project.slug}`}
                      className="block w-full px-6 py-3 bg-gradient-to-r from-arin-orange to-orange-500 text-white rounded-lg font-semibold text-center hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach Section */}
          <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="glass-strong-dark rounded-3xl p-10 shadow-xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-arin-orange">🔐</span> Our Approach
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Every system we build follows a structured engineering philosophy:
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-arin-orange">✔</span> Domain-Driven Design
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-arin-orange">✔</span> Microservices-first Architecture
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-arin-orange">✔</span> Secure-by-Default Implementation
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-arin-orange">✔</span> Cloud-Ready Deployment
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-arin-orange">✔</span> Performance Optimization
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-arin-orange">✔</span> Observability & Monitoring
                </li>
              </ul>
              <div className="mt-8 p-4 bg-gradient-to-r from-arin-orange/10 to-transparent border-l-4 border-arin-orange rounded-r-lg">
                <p className="text-white font-medium italic">"We focus on long-term scalability — not short-term fixes."</p>
              </div>
            </div>

            <div className="glass-strong-dark rounded-3xl p-10 shadow-xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-arin-orange">🌍</span> Industries We Support
              </h2>
              <ul className="space-y-6">
                <li className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-arin-orange/50 transition-colors">
                  <p className="text-white font-semibold">FinTech & Payments</p>
                </li>
                <li className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-arin-orange/50 transition-colors">
                  <p className="text-white font-semibold">Enterprise SaaS</p>
                </li>
                <li className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-arin-orange/50 transition-colors">
                  <p className="text-white font-semibold">AI & Machine Learning Platforms</p>
                </li>
                <li className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-arin-orange/50 transition-colors">
                  <p className="text-white font-semibold">Logistics & E-commerce</p>
                </li>
                <li className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-arin-orange/50 transition-colors">
                  <p className="text-white font-semibold">Workforce & HR Systems</p>
                </li>
              </ul>
            </div>
          </div>

          {/* New CTA Section */}
          <div className="max-w-4xl mx-auto mt-20 text-center glass-strong-dark rounded-3xl p-12 shadow-xl border border-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-arin-orange to-transparent"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              🚀 Let’s Build Scalable Systems Together
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Whether you’re modernizing legacy infrastructure, implementing AI-driven solutions, or building secure enterprise platforms, our team delivers architecture designed for growth.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-arin-orange to-orange-500 text-white rounded-lg font-bold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,102,0,0.3)] hover:shadow-[0_0_30px_rgba(255,102,0,0.5)]"
            >
              👉 Schedule a Consultation Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
