import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content:
        "ARIN IT Solutions transformed our business with their innovative software solutions. Their team is professional, skilled, and truly understands our needs.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, StartupXYZ",
      content:
        "The best IT consulting experience we've had. They delivered on time, within budget, and exceeded our expectations. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Director, Digital Innovations",
      content:
        "Outstanding web development services. Our new platform increased user engagement by 300%. ARIN IT Solutions is our go-to technology partner.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Expert Developers" },
    { number: "10+", label: "Years Experience" },
  ];

  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Custom Software Development",
      description:
        "We build tailored software solutions that perfectly match your business requirements. From enterprise applications to startup MVPs, we deliver excellence.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Strategic IT Consulting",
      description:
        "Get expert guidance on technology decisions that drive business growth. Our consultants help you navigate digital transformation with confidence.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Modern Web Development",
      description:
        "Responsive, fast, and beautiful websites that convert visitors into customers. Built with cutting-edge technologies for optimal performance.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Mobile App Development",
      description:
        "Native iOS and Android apps that deliver exceptional user experiences. We create apps that users love and businesses rely on.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Cloud Solutions & DevOps",
      description:
        "Scalable cloud infrastructure that grows with your business. We help you leverage AWS, Azure, and Google Cloud for maximum efficiency.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Cybersecurity & Compliance",
      description:
        "Protect your digital assets with comprehensive security solutions. We ensure compliance with industry standards and regulations.",
      color: "from-red-500 to-pink-500",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <SEO
        title="ARIN IT Solutions - Software Development & Consulting"
        description="Premier software development and consulting company delivering innovative technology solutions for businesses worldwide."
        path="/"
        keywords="software development, IT consulting, web development, app development, technology solutions"
      />

      {/* Hero Section - Premium Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-arin-orange/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-arin-orange/10 rounded-full blur-3xl"></div>
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-white space-y-6 sm:space-y-8 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-relaxed">
                <span className="block">Transform Your</span>
                <span className="block bg-gradient-to-r from-arin-orange to-orange-400 bg-clip-text text-transparent pb-4">
                  Digital Future
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl">
                We deliver cutting-edge software solutions and strategic IT
                consulting that drive innovation and accelerate business growth.
                Partner with us to build the technology that defines tomorrow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-arin-orange to-orange-500 text-white rounded-lg font-semibold text-lg 
                           hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 
                           shadow-xl hover:shadow-2xl"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 glass-strong-dark text-white rounded-lg font-semibold text-lg 
                           hover:bg-white/10 transform hover:scale-105 transition-all duration-300 
                           border-2 border-white/30"
                >
                  View Our Work
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-arin-orange mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Floating Cards */}
                <div className="absolute top-4 right-4 translate-x-4 -translate-y-4 glass-strong-dark rounded-2xl p-6 shadow-2xl transform rotate-6 animate-float border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-arin-orange to-orange-500 rounded-xl mb-4 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Cloud Solutions
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Scalable infrastructure
                  </p>
                </div>

                <div className="absolute bottom-4 left-4 -translate-x-4 translate-y-4 glass-strong-dark rounded-2xl p-6 shadow-2xl transform -rotate-6 animate-float-delayed border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-arin-orange to-orange-500 rounded-xl mb-4 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Web Development
                  </h3>
                  <p className="text-gray-300 text-sm">Modern & responsive</p>
                </div>

                <div className="absolute top-1/3 left-0 -translate-x-20 glass-strong-dark rounded-2xl p-6 shadow-2xl transform rotate-12 animate-float border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-arin-orange to-orange-500 rounded-xl mb-4 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Mobile Apps
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Native & cross-platform
                  </p>
                </div>

                <div className="absolute bottom-1/3 right-8 translate-x-12 glass-strong-dark rounded-2xl p-6 shadow-2xl transform rotate-3 animate-float border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-arin-orange to-orange-500 rounded-xl mb-4 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Software Dev
                  </h3>
                  <p className="text-gray-300 text-sm">Custom solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section - Feature Rich */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              Our Expertise
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology services designed to accelerate your
              business growth and digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative glass-strong-dark rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-xl overflow-hidden border border-white/20"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <div className="relative z-10">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br from-arin-orange to-orange-500 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-arin-orange transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6 flex items-center text-arin-orange font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn more</span>
                    <svg
                      className="w-5 h-5 ml-2"
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-arin-orange via-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              Don't just take our word for it. See what our clients say about
              working with us.
            </p>
          </div>

          <div className="relative glass-strong-dark rounded-3xl p-12 md:p-16 shadow-2xl border border-white/20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-arin-orange"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )
                )}
              </div>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div>
                <div className="text-xl font-bold text-white mb-2">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-300">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-arin-orange w-8"
                      : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore some of our most successful projects that showcase our
              expertise and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Enterprise E-Commerce Platform",
                category: "Web Development",
                gradient: "from-orange-500 to-orange-600",
              },
              {
                title: "Mobile Banking Application",
                category: "Mobile Development",
                gradient: "from-orange-500 to-orange-600",
              },
              {
                title: "Cloud Migration Solution",
                category: "Cloud & DevOps",
                gradient: "from-orange-500 to-orange-600",
              },
            ].map((project, index) => (
              <Link
                key={index}
                to="/portfolio"
                className="group glass-strong-dark rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20"
              >
                <div
                  className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold opacity-20">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-arin-orange font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-3 mb-3 group-hover:text-arin-orange transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-arin-orange font-semibold">
                    <span>View Project</span>
                    <svg
                      className="w-5 h-5 ml-2"
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
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-block px-10 py-4 bg-gradient-to-r from-arin-orange to-orange-500 text-white rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Talented professionals dedicated to delivering exceptional
              technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                name: "Alex Rodriguez",
                role: "CEO & Founder",
                gradient: "from-orange-500 to-orange-600",
              },
              {
                name: "Sarah Chen",
                role: "CTO",
                gradient: "from-orange-500 to-orange-600",
              },
              {
                name: "Michael Johnson",
                role: "Lead Developer",
                gradient: "from-orange-500 to-orange-600",
              },
              {
                name: "Emily Davis",
                role: "UX/UI Designer",
                gradient: "from-orange-500 to-orange-600",
              },
            ].map((member, index) => (
              <Link
                key={index}
                to="/team"
                className="group glass-strong-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20"
              >
                <div
                  className={`h-64 bg-gradient-to-br ${member.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold opacity-20">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-arin-orange transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-arin-orange font-semibold">
                    {member.role}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/team"
              className="inline-block px-10 py-4 bg-gradient-to-r from-arin-orange to-orange-500 text-white rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Meet Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and insights
              from our experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "10 Essential Tips for Modern Web Development",
                category: "Web Development",
                date: "March 15, 2024",
                gradient: "from-orange-500 to-orange-600",
              },
              {
                title: "Cloud Migration: A Complete Guide",
                category: "Cloud & DevOps",
                date: "March 10, 2024",
                gradient: "from-orange-500 to-orange-600",
              },
              {
                title: "Building Secure Mobile Applications",
                category: "Mobile Development",
                date: "March 5, 2024",
                gradient: "from-orange-500 to-orange-600",
              },
            ].map((post, index) => (
              <Link
                key={index}
                to="/blog"
                className="group glass-strong-dark rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-20">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-arin-orange font-semibold">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-arin-orange transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-arin-orange font-semibold">
                    <span>Read More</span>
                    <svg
                      className="w-5 h-5 ml-2"
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
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-block px-10 py-4 bg-gradient-to-r from-arin-orange to-orange-500 text-white rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Read All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-arin-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss how ARIN IT Solutions can help transform your ideas
            into innovative digital solutions that drive business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-10 py-5 bg-gradient-to-r from-arin-orange to-orange-500 text-white rounded-lg font-semibold text-lg 
                       hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 
                       shadow-2xl"
            >
              Get Started Today
            </Link>
            <Link
              to="/contact"
              className="px-10 py-5 glass-strong-dark text-white rounded-lg font-semibold text-lg 
                       hover:bg-white/10 transform hover:scale-105 transition-all duration-300 
                       border-2 border-white/30"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
