import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import SEO from "../components/SEO";

const PortfolioDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen overflow-x-hidden flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-900">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Project Not Found</h2>
          <p className="text-gray-300 mb-8">
            The project case study you're looking for doesn't exist.
          </p>
          <Link
            to="/portfolio"
            className="inline-block px-8 py-3 bg-gradient-to-r from-arin-orange to-orange-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-black via-gray-900 to-gray-900">
      <SEO
        title={`${project.title} - Case Study | ARIN IT`}
        description={`Read our detailed case study on how we built the ${project.title}. Challenge, Solution, and Results.`}
        path={`/portfolio/${project.slug}`}
        keywords={`case study, ${project.category.toLowerCase()}, ARIN IT portfolio`}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 pb-16 border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-arin-orange/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-arin-orange/20 to-orange-500/20 text-arin-orange border border-arin-orange/30 rounded-full text-sm font-semibold tracking-wider">
              {project.category.toUpperCase()}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of the challenge, our architectural solution, and the highly scalable results delivered.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-300 text-lg leading-relaxed">
        
        {/* Technologies Grid */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-widest border-b border-white/10 pb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:border-arin-orange/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <section className="mb-16 glass-strong-dark rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-red-500/80"></div>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-red-500">⚠</span> The Challenge
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed">
            {project.challenge}
          </p>
        </section>

        <section className="mb-16 glass-strong-dark rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-500/80"></div>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-blue-500">⚙</span> Our Solution
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed">
            {project.solution}
          </p>
        </section>

        <section className="mb-16 glass-strong-dark rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-arin-orange to-orange-500"></div>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-arin-orange">🏆</span> The Result
          </h2>
          <p className="text-white font-medium text-xl leading-relaxed">
            {project.result}
          </p>
        </section>

        {/* Next Steps CTA */}
        <div className="text-center mt-20 pt-12 border-t border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Want similar results for your enterprise?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-arin-orange to-orange-500 text-white rounded-lg font-bold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,102,0,0.3)] hover:shadow-[0_0_30px_rgba(255,102,0,0.5)]"
            >
              Start A Project Today
            </Link>
            <Link
              to="/portfolio"
              className="inline-block px-10 py-4 bg-transparent border border-white/30 text-white rounded-lg font-bold text-lg hover:bg-white/5 transform transition-all duration-300"
            >
              View More Work
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PortfolioDetail;
