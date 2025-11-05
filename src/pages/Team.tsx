import SEO from "../components/SEO";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "CEO & Founder",
      description:
        "Visionary leader with 15+ years in technology. Expert in digital transformation and strategic planning.",
      image: "/api/placeholder/400/400",
      gradient: "from-orange-500 to-orange-600",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "CTO",
      description:
        "Architect of innovative solutions with expertise in cloud computing, microservices, and scalable systems.",
      image: "/api/placeholder/400/400",
      gradient: "from-orange-500 to-orange-600",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Lead Developer",
      description:
        "Full-stack developer passionate about creating elegant solutions. Specializes in React, Node.js, and modern web technologies.",
      image: "/api/placeholder/400/400",
      gradient: "from-orange-500 to-orange-600",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "UX/UI Designer",
      description:
        "Creative designer focused on user-centered design. Transforms complex ideas into intuitive, beautiful interfaces.",
      image: "/api/placeholder/400/400",
      gradient: "from-orange-500 to-orange-600",
      social: {
        linkedin: "#",
        behance: "#",
      },
    },
    {
      id: 5,
      name: "David Kim",
      role: "DevOps Engineer",
      description:
        "Infrastructure expert ensuring seamless deployments and optimal performance. AWS, Docker, and Kubernetes specialist.",
      image: "/api/placeholder/400/400",
      gradient: "from-orange-500 to-orange-600",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 6,
      name: "Lisa Anderson",
      role: "Project Manager",
      description:
        "Organized leader ensuring projects are delivered on time and within budget. Expert in agile methodologies.",
      image: "/api/placeholder/400/400",
      gradient: "from-orange-500 to-orange-600",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  const stats = [
    { number: "50+", label: "Team Members" },
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Projects Delivered" },
    { number: "200+", label: "Happy Clients" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title="Our Team - ARIN IT Solutions"
        description="Meet the talented team behind ARIN IT Solutions. Experts in software development, design, and technology consulting."
        path="/team"
        keywords="team, developers, designers, IT consultants, software engineers"
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
            <span className="block text-white">Meet Our</span>
            <span className="block bg-gradient-to-r from-arin-orange to-orange-400 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Talented professionals dedicated to delivering exceptional
            technology solutions. We combine expertise, creativity, and passion
            to bring your vision to life.
          </p>
        </div>
      </section>

      <div className="relative pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-gray-900 pt-8">
        <div className="max-w-7xl mx-auto">
          {/* Stats */}
          <div className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-strong-dark rounded-2xl p-6 text-center shadow-lg border border-white/20"
                >
                  <div className="text-4xl md:text-5xl font-bold text-arin-orange mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Grid */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="group glass-strong-dark rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 text-white"
                >
                  {/* Member Image Placeholder */}
                  <div
                    className={`h-80 bg-gradient-to-br ${member.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-4">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-arin-orange transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-arin-orange font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {member.description}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="w-10 h-10 glass-strong-dark rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-gradient-to-r hover:from-arin-orange hover:to-orange-500 transition-all"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      )}
                      {(member.social.twitter ||
                        member.social.github ||
                        member.social.behance) && (
                        <a
                          href={
                            member.social.twitter ||
                            member.social.github ||
                            member.social.behance
                          }
                          className="w-10 h-10 glass-strong-dark rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-gradient-to-r hover:from-arin-orange hover:to-orange-500 transition-all"
                        >
                          {member.social.twitter && (
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                          )}
                          {member.social.github && (
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          )}
                          {member.social.behance && (
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.634 1.442 5.192 3.2l-3.026.013c-.23-1.001-.955-1.713-2.166-1.713-1.953 0-3.35 1.415-3.35 3.65 0 2.567 1.714 3.632 3.35 3.632 1.007 0 1.776-.49 2.078-1.274h-2.078v-2.857h5.441c.047.273.08.552.08.833 0 2.608-1.077 4.564-3.148 4.564zm-11.561-.289c0 3.854-3.4 5.233-6.516 5.233-3.096 0-7.009-1.388-7.009-6.447 0-5.205 3.948-7.01 7.405-7.01 3.429 0 6.12 1.343 6.12 5.72 0 3.832-1.39 4.26-2.588 4.614-.637.186-1.207.267-1.564.267-.766 0-1.266-.186-1.266-.814 0-2.098 1.684-2.66 3.465-2.66 1.835 0 3.404 1.146 3.404 3.42 0 2.363-1.584 4.015-4.558 4.015-2.147 0-4.436-1.103-4.436-4.298 0-4.3 3.293-7.369 7.958-7.369 4.559 0 7.958 3.292 7.958 7.798v2.624z" />
                            </svg>
                          )}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-20 text-center glass-strong-dark rounded-3xl p-12 shadow-xl border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals to join our growing
              team.
            </p>
            <a
              href="mailto:careers@arinits.com"
              className="inline-block px-10 py-4 bg-gradient-to-r from-arin-orange to-orange-500 text-white rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
