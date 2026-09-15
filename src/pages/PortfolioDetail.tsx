import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import SEO from "../components/SEO";

const caseStudyDetails: Record<string, {
  architecture: string[];
  decisions: Array<{ title: string; rationale: string }>;
  reliability: string[];
  verification: string[];
}> = {
  "sochdb-ai-native-vector-sql-database": {
    architecture: ["Embedded SQL and vector-query layer", "Real-time ingestion and indexing pipeline", "Context and agent-memory model", "API boundary for application integration"],
    decisions: [
      { title: "Unify structured and semantic retrieval", rationale: "Keeping SQL, vector search and contextual memory behind one product boundary reduces the integration and synchronization burden common in multi-database RAG stacks." },
      { title: "Optimize for local-first operation", rationale: "An embedded deployment model supports privacy-sensitive development, predictable environments and applications that should not depend on a remote database service." },
      { title: "Treat memory as a database concern", rationale: "Agent memory requires lifecycle, retrieval and relevance controls rather than an unstructured accumulation of prompts and responses." },
    ],
    reliability: ["Deterministic persistence before derived indexing", "Observable ingestion and query latency", "Recovery-safe index updates", "Clear separation between stored records and generated embeddings"],
    verification: ["SQL and vector retrieval correctness tests", "Ingestion and re-indexing regression tests", "Latency measurements across representative datasets", "Failure recovery and persistence checks"],
  },
  "nova-ai-emotional-intelligence-platform": {
    architecture: ["Gateway and domain-oriented services", "RAG service for contextual retrieval", "Layered emotional-intelligence policy engine", "Executor guard for controlled actions", "Memory, messaging, safety and trust boundaries"],
    decisions: [
      { title: "Separate generation from policy", rationale: "A generated response should not bypass consent, safety, trust and interaction constraints. Independent policy layers keep those decisions testable and auditable." },
      { title: "Make memory selective", rationale: "Context improves continuity only when retention, relevance and sensitive-data handling are controlled explicitly." },
      { title: "Guard execution after reasoning", rationale: "Even an acceptable response can propose an unsafe action. A final execution boundary validates what the system is permitted to do." },
    ],
    reliability: ["Fallback behavior when retrieval or models are unavailable", "Policy outcomes recorded separately from generated text", "Bounded context and memory retrieval", "Traceability across gateway, RAG, policy and execution"],
    verification: ["Policy rule and precedence tests", "Prompt-injection and unsafe-action scenarios", "Retrieval grounding evaluation", "Latency and fallback-path validation"],
  },
  "enterprise-microservices-platform": {
    architecture: ["API gateway and secured edge", "Authentication and authorization service", "Domain service with independent persistence", "Scheduler and asynchronous integration", "Containerized runtime and observability"],
    decisions: [
      { title: "Keep authentication outside domain logic", rationale: "A dedicated identity boundary centralizes token validation while individual services still enforce resource-level authorization." },
      { title: "Use service boundaries around capabilities", rationale: "Separating authentication, weather intelligence and scheduling supports independent change without fragmenting every technical function into a service." },
      { title: "Design degradation paths", rationale: "External weather dependencies can be slow or unavailable, so timeouts, circuit breakers and observable fallback behavior are first-class requirements." },
    ],
    reliability: ["Timeout, retry and circuit-breaker policies", "Health, readiness and dependency indicators", "Correlation IDs and distributed traces", "Container resource and restart controls"],
    verification: ["API contract and security tests", "Dependency-failure simulations", "Containerized integration tests", "Metrics, trace and alert validation"],
  },
  "hrms-microservice-architecture": {
    architecture: ["Employee and onboarding domains", "Recruitment and performance capabilities", "Role-based access and user platform", "Notification and analytics integration", "API gateway and shared platform services"],
    decisions: [
      { title: "Align services to HR capabilities", rationale: "Recruitment, onboarding, attendance, payroll and performance change at different rates and own different business rules." },
      { title: "Centralize identity, distribute authorization", rationale: "Authentication can be shared, while each domain remains responsible for who may perform its business actions." },
      { title: "Avoid a shared operational database", rationale: "Explicit APIs and events protect domain ownership and reduce release coupling, while reporting receives purpose-built projections." },
    ],
    reliability: ["Auditable changes to employee and access data", "Idempotent onboarding and notification workflows", "Versioned APIs between HR domains", "Independent health and deployment controls"],
    verification: ["Role and permission matrix tests", "Cross-service workflow tests", "Data ownership and migration checks", "Notification retry and duplicate scenarios"],
  },
  "unified-order-delivery-tracking-platform": {
    architecture: ["Multi-channel order ingestion", "Address validation and routing boundary", "Event-driven status timeline", "Payment gateway integration", "Customer and operations tracking views"],
    decisions: [
      { title: "Normalize orders at ingestion", rationale: "Each source can retain its external identifiers and payload while the core platform operates on a consistent order lifecycle." },
      { title: "Represent tracking as events", rationale: "An ordered history makes current status explainable and supports new notification, analytics and partner consumers." },
      { title: "Separate payment state from delivery state", rationale: "Refunds, collection and delivery can progress independently; explicit state machines prevent one from incorrectly overwriting the other." },
    ],
    reliability: ["Idempotent source and callback processing", "Out-of-order event handling", "Partner timeout and retry controls", "Reconciliation of payment and delivery outcomes"],
    verification: ["Order-state transition tests", "Duplicate and delayed callback scenarios", "Address and routing integration tests", "End-to-end payment and delivery reconciliation"],
  },
};

const PortfolioDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const details = slug ? caseStudyDetails[slug] : undefined;

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

        {details && <>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-7">Architecture Overview</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {details.architecture.map(item => <div key={item} className="p-5 rounded-2xl bg-white/5 border border-white/10 text-gray-200">{item}</div>)}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-7">Key Architecture Decisions</h2>
            <div className="space-y-5">
              {details.decisions.map(decision => <article key={decision.title} className="p-7 rounded-2xl bg-white/5 border border-white/10"><h3 className="text-xl font-bold text-arin-orange">{decision.title}</h3><p className="mt-3 text-gray-300">{decision.rationale}</p></article>)}
            </div>
          </section>

          <section className="mb-16 grid md:grid-cols-2 gap-8">
            <div className="p-7 rounded-2xl bg-white/5 border border-white/10"><h2 className="text-2xl font-bold text-white mb-5">Reliability and Operations</h2><ul className="space-y-3">{details.reliability.map(item => <li key={item} className="flex gap-3"><span className="text-arin-orange">✓</span>{item}</li>)}</ul></div>
            <div className="p-7 rounded-2xl bg-white/5 border border-white/10"><h2 className="text-2xl font-bold text-white mb-5">Verification Approach</h2><ul className="space-y-3">{details.verification.map(item => <li key={item} className="flex gap-3"><span className="text-arin-orange">✓</span>{item}</li>)}</ul></div>
          </section>
        </>}

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
