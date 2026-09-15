import { Link, useLocation } from "react-router-dom";
import SEO from "../components/SEO";

type Page = {
  title: string; description: string; keywords: string; eyebrow: string; heading: string;
  intro: string; sections: Array<{ title: string; text: string; points: string[] }>;
  faqs: Array<{ question: string; answer: string }>;
  links: Array<{ to: string; label: string }>;
};

const pages: Record<string, Page> = {
  "/industries/fintech": {
    title: "FinTech Software Engineering Company | ARIN IT Solutions",
    description: "Build resilient payment, banking, wallet, reconciliation, lending, and financial operations platforms with experienced FinTech engineers.",
    keywords: "fintech software engineering, payment platform company India, banking software development, fintech Hyderabad",
    eyebrow: "Industry Expertise", heading: "FinTech Platforms Built for Control, Reliability and Change",
    intro: "Financial platforms must preserve transaction integrity while integrating with fast-changing partner, regulatory, security, and customer ecosystems. ARIN designs systems around explicit money movement, traceable state, operational controls, and graceful failure recovery.",
    sections: [
      { title: "Payment and money-movement domains", text: "We help teams model the complete lifecycle rather than treating payments as a single API call.", points: ["Authorization, capture, refund, reversal and payout flows", "Wallet, ledger and balance-management boundaries", "Merchant onboarding, pricing and integration APIs", "Reconciliation, settlement and exception operations"] },
      { title: "Engineering controls", text: "Correctness and evidence are designed into every critical path.", points: ["Idempotency and duplicate protection", "Audit events and transaction timelines", "Authentication, authorization and sensitive-data boundaries", "Retries, timeouts, compensations and reconciliation"] },
      { title: "Operational readiness", text: "Business teams need to understand what happened to a transaction without reconstructing it from raw logs.", points: ["Business and technical observability", "Case and dispute workflows", "Actionable alerts and exception queues", "Partner health and dependency dashboards"] },
    ],
    faqs: [
      { question: "Which FinTech systems can ARIN build?", answer: "ARIN can engineer payment and wallet services, merchant platforms, reconciliation and settlement systems, operational case workflows, partner integrations, reporting, and supporting cloud-native services." },
      { question: "How is regulatory compliance handled?", answer: "We translate applicable requirements into technical controls with your compliance and security teams. Architecture alone does not constitute RBI, PCI DSS, KYC, AML, or privacy certification." },
      { question: "Can an existing payment platform be modernized incrementally?", answer: "Yes. We identify stable seams, protect transaction correctness, introduce observable interfaces, validate data in parallel, and migrate in reversible stages." },
    ], links: [{ to: "/services/fintech-payment-solutions", label: "FinTech and payment services" }, { to: "/solutions/payment-reconciliation", label: "Payment reconciliation" }, { to: "/services/java-microservices", label: "Java microservices" }],
  },
  "/solutions/payment-reconciliation": {
    title: "Payment Reconciliation Software Solutions | ARIN IT",
    description: "Design automated payment reconciliation, settlement matching, exception management, audit trails, and operational reporting for FinTech platforms.",
    keywords: "payment reconciliation software, settlement reconciliation, transaction matching, fintech exception management",
    eyebrow: "Payment Operations", heading: "Reconciliation That Turns Transaction Differences Into Actionable Work",
    intro: "Reconciliation is not merely matching two files. A dependable platform ingests evidence from multiple sources, normalizes transactions, applies explainable matching rules, manages exceptions, preserves audit history, and gives operations teams a controlled path to resolution.",
    sections: [
      { title: "Ingestion and normalization", text: "Create repeatable inputs from processors, banks, networks, internal ledgers and settlement files.", points: ["File and API ingestion with validation", "Schema versioning and source traceability", "Duplicate-file and duplicate-record protection", "Timezone, currency and reference normalization"] },
      { title: "Matching and exceptions", text: "Separate deterministic reconciliation rules from operational resolution.", points: ["Exact, tolerance and multi-stage matching", "Configurable reason codes", "Exception queues, ownership and ageing", "Maker-checker approvals and comments"] },
      { title: "Audit and reporting", text: "Every decision remains explainable to engineering, finance and audit stakeholders.", points: ["Immutable processing history", "Settlement and variance summaries", "Control totals and batch status", "Operational SLAs and trend analysis"] },
    ],
    faqs: [{ question: "Can reconciliation support multiple payment providers?", answer: "Yes. Provider-specific adapters normalize each source into a common internal model while retaining raw source references for auditability." }, { question: "How are unmatched transactions handled?", answer: "They are classified into explainable exception queues with ownership, evidence, ageing, actions and approval history rather than being silently dropped." }, { question: "Can matching rules change without deployments?", answer: "Rules that are safe to configure can be externalized with versioning and approvals; critical accounting invariants remain protected in tested application logic." }],
    links: [{ to: "/industries/fintech", label: "FinTech expertise" }, { to: "/services/fintech-payment-solutions", label: "Payment engineering" }, { to: "/contact", label: "Discuss reconciliation modernization" }],
  },
  "/solutions/api-integration": {
    title: "Enterprise API Integration Services | ARIN IT Solutions",
    description: "Connect enterprise, payment, SaaS, and legacy platforms through secure APIs, events, webhooks, adapters, and observable integration workflows.",
    keywords: "enterprise API integration, REST API development, webhook integration, legacy system integration",
    eyebrow: "Enterprise Integration", heading: "APIs and Integrations Designed for Change and Failure",
    intro: "Integrations fail at organizational boundaries: contracts evolve, credentials expire, callbacks arrive twice, dependencies slow down, and ownership becomes unclear. ARIN designs integration layers that make these realities explicit and operable.",
    sections: [
      { title: "Contract-first interfaces", text: "Define behavior before implementation and keep change safe for consumers.", points: ["REST, asynchronous event and webhook contracts", "Schema validation and versioning", "Authentication, authorization and rate limits", "Consumer-driven and integration testing"] },
      { title: "Resilience patterns", text: "Prevent one dependency from destabilizing a wider business journey.", points: ["Timeouts, bounded retries and circuit breakers", "Idempotency and deduplication", "Queues, dead letters and replay controls", "Fallbacks and manual recovery paths"] },
      { title: "Integration visibility", text: "Make failures discoverable by correlation ID, partner, business operation and outcome.", points: ["Structured logs, metrics and distributed traces", "Partner dashboards and service-level indicators", "Audit history and payload-safe diagnostics", "Alerting tied to business impact"] },
    ],
    faqs: [{ question: "Can ARIN integrate legacy applications without rewriting them?", answer: "Yes. Adapters and anti-corruption layers can expose stable contracts while containing legacy protocols and data models." }, { question: "How are duplicate webhooks handled?", answer: "Webhook identity, database constraints, idempotent state transitions and replay-safe consumers ensure repeated delivery does not repeat the business action." }, { question: "REST or Kafka—which should we use?", answer: "REST suits immediate request-response interactions; event streaming suits decoupled state propagation and replay. Many enterprise flows use both with explicit ownership." }],
    links: [{ to: "/services/software-development", label: "Custom software" }, { to: "/technologies/kafka", label: "Kafka engineering" }, { to: "/services/application-modernization", label: "Application modernization" }],
  },
  "/solutions/platform-engineering": {
    title: "Platform Engineering Services | ARIN IT Solutions",
    description: "Improve developer delivery with secure internal platforms, golden paths, CI/CD, Kubernetes, observability, and self-service infrastructure.",
    keywords: "platform engineering services, internal developer platform, Kubernetes platform, developer experience",
    eyebrow: "Engineering Enablement", heading: "Internal Platforms That Make the Safe Path the Easy Path",
    intro: "Platform engineering turns repeated delivery and operations work into supported product capabilities. ARIN helps teams build paved roads for application creation, testing, deployment, observability, security, and runtime operations without hiding essential system behavior.",
    sections: [
      { title: "Golden paths", text: "Standardize the common journey while allowing justified exceptions.", points: ["Service templates and reference architectures", "Build, test and deployment workflows", "Configuration and secret-management patterns", "Security and quality gates"] },
      { title: "Runtime platform", text: "Provide dependable application primitives across environments.", points: ["Kubernetes workload and network patterns", "Ingress, identity and policy controls", "Autoscaling, health checks and resilience", "Backup, recovery and environment promotion"] },
      { title: "Developer experience", text: "Treat engineering teams as platform customers and measure friction.", points: ["Self-service workflows with guardrails", "Clear documentation and ownership", "Deployment frequency and lead-time measurement", "Feedback loops and platform adoption metrics"] },
    ],
    faqs: [{ question: "Is platform engineering the same as DevOps?", answer: "Platform engineering productizes reusable DevOps capabilities for internal teams. DevOps remains the wider culture and operating model connecting development and operations." }, { question: "Do we need Kubernetes?", answer: "Not always. The platform should match workload and team complexity; simpler managed runtimes may provide better outcomes for smaller estates." }, { question: "How do you avoid building an unused platform?", answer: "Start with measured developer pain, deliver one high-value golden path, involve application teams, and track adoption and delivery outcomes." }],
    links: [{ to: "/devops-services", label: "DevOps services" }, { to: "/technologies/kubernetes", label: "Kubernetes expertise" }, { to: "/cloud-solutions", label: "Cloud solutions" }],
  },
  "/technologies/spring-boot": {
    title: "Spring Boot Development and Consulting | ARIN IT",
    description: "Build secure enterprise APIs and microservices with Java, Spring Boot, Spring Security, data access, testing, observability, and cloud deployment.",
    keywords: "Spring Boot development company, Java Spring consulting, enterprise API development, Spring microservices",
    eyebrow: "Technology Expertise", heading: "Enterprise Spring Boot Engineering Beyond Basic REST APIs",
    intro: "Spring Boot accelerates delivery, but production quality depends on domain boundaries, data consistency, security, testing, failure handling and operations. ARIN applies the framework as part of a complete enterprise engineering system.",
    sections: [
      { title: "Application architecture", text: "Keep business behavior explicit and framework concerns controlled.", points: ["Modular and hexagonal architecture", "Domain validation and transaction boundaries", "REST contracts and error models", "Configuration and dependency management"] },
      { title: "Security and data", text: "Protect resources and preserve consistency with deliberate boundaries.", points: ["OAuth 2.0, OIDC and Spring Security", "JPA, SQL, migrations and indexing", "Caching and concurrency controls", "Audit and sensitive-data handling"] },
      { title: "Production readiness", text: "Build services that teams can diagnose and recover.", points: ["Actuator, metrics, tracing and structured logging", "Resilience4j timeouts and circuit breakers", "Unit, integration and contract testing", "Containers, CI/CD and Kubernetes"] },
    ],
    faqs: [{ question: "Which Java versions do you support?", answer: "We favor supported LTS releases and choose the target based on framework compatibility, runtime support and migration constraints." }, { question: "Can you upgrade older Spring applications?", answer: "Yes. We assess Java, Spring, dependency, namespace, security, test and runtime changes, then upgrade in controlled stages." }, { question: "Can Spring Boot support high-volume payments?", answer: "Yes when data access, concurrency, state transitions, idempotency, messaging and resource limits are designed for the actual workload." }],
    links: [{ to: "/services/java-microservices", label: "Java microservices" }, { to: "/technologies/kafka", label: "Kafka" }, { to: "/portfolio/enterprise-microservices-platform", label: "Microservices case study" }],
  },
  "/technologies/kafka": {
    title: "Apache Kafka Consulting and Event-Driven Architecture | ARIN IT",
    description: "Design reliable Kafka platforms with event contracts, partitioning, consumer groups, idempotency, retries, schema evolution, and observability.",
    keywords: "Kafka consulting, event driven architecture, Kafka microservices, Kafka payment processing",
    eyebrow: "Technology Expertise", heading: "Kafka Architectures Built Around Delivery Semantics and Ownership",
    intro: "Kafka is an append-only event platform, not a substitute for sound domain design. ARIN helps teams decide what should be an event, how it is partitioned, who owns it, how consumers recover, and how contracts evolve without breaking the ecosystem.",
    sections: [
      { title: "Event and partition design", text: "Align ordering and scale with the business entity whose sequence matters.", points: ["Event naming, ownership and schemas", "Partition-key and ordering analysis", "Topic lifecycle and retention", "Compatibility and schema evolution"] },
      { title: "Reliable processing", text: "Design for at-least-once delivery instead of assuming every message appears once.", points: ["Idempotent consumers and deduplication", "Transactional outbox and change publication", "Retry topics, dead letters and replay", "Consumer lag and rebalance behavior"] },
      { title: "Operating Kafka", text: "Observe both platform health and business-flow health.", points: ["Broker, partition and consumer metrics", "Lag, throughput and failure alerts", "Correlation and distributed tracing", "Capacity, retention and recovery planning"] },
    ],
    faqs: [{ question: "How should a Kafka partition key be selected?", answer: "Choose the entity whose events require order and distribute keys well enough for target throughput. Payment, customer or merchant keys produce different ordering and hotspot trade-offs." }, { question: "What happens when consumers exceed partitions?", answer: "Within one consumer group, only one consumer reads a partition at a time, so extra consumers remain idle. Different consumer groups read independently." }, { question: "How do you recover acknowledged but lost business work?", answer: "Use durable publication patterns, idempotent processing, state reconciliation, replay controls and monitoring rather than relying on acknowledgements alone." }],
    links: [{ to: "/services/java-microservices", label: "Java microservices" }, { to: "/solutions/api-integration", label: "API and integration" }, { to: "/industries/fintech", label: "FinTech systems" }],
  },
  "/technologies/kubernetes": {
    title: "Kubernetes Consulting and Cloud-Native Platforms | ARIN IT",
    description: "Run secure, observable and resilient applications on Kubernetes with workload design, autoscaling, deployment automation, policy, and recovery."
    ,keywords: "Kubernetes consulting, cloud native platform, Docker Kubernetes services, Kubernetes India",
    eyebrow: "Technology Expertise", heading: "Kubernetes Platforms Designed for Operability, Not YAML Volume",
    intro: "Kubernetes provides powerful orchestration primitives, but reliability comes from how workloads, resources, health, traffic, policy, observability and recovery are designed. ARIN helps teams adopt Kubernetes where its operational value justifies its complexity.",
    sections: [
      { title: "Workload engineering", text: "Package and configure services for predictable runtime behavior.", points: ["Container security and immutable images", "Requests, limits and autoscaling", "Readiness, liveness and startup probes", "Configuration, secrets and identity"] },
      { title: "Delivery and traffic", text: "Make releases repeatable and reversibility explicit.", points: ["CI/CD and GitOps workflows", "Rolling, blue-green and canary strategies", "Ingress, service networking and certificates", "Database migration coordination"] },
      { title: "Reliability and governance", text: "Create platform controls that remain visible to product teams.", points: ["Metrics, logs, traces and SLOs", "Policy and namespace boundaries", "Backup and disaster recovery", "Capacity, cost and upgrade planning"] },
    ],
    faqs: [{ question: "Does every application need Kubernetes?", answer: "No. Kubernetes is valuable for portfolios needing standardized orchestration, scaling and policy. Managed application platforms can be simpler and cheaper for smaller workloads." }, { question: "How are zero-downtime deployments achieved?", answer: "Healthy rolling or progressive delivery requires correct probes, sufficient capacity, backward-compatible contracts, controlled migrations and automated rollback signals." }, { question: "Can you migrate Docker Compose applications?", answer: "Yes. We first document dependencies and state, then map workloads to appropriate Kubernetes and managed-service primitives instead of translating files mechanically." }],
    links: [{ to: "/solutions/platform-engineering", label: "Platform engineering" }, { to: "/devops-services", label: "DevOps" }, { to: "/services/application-modernization", label: "Application modernization" }],
  },
};

export default function GrowthPage() {
  const { pathname } = useLocation();
  const key = pathname.replace(/\/$/, "");
  const page = pages[key];
  if (!page) return null;
  return <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
    <SEO title={page.title} description={page.description} path={key} keywords={page.keywords} />
    <header className="pt-36 pb-20 border-b border-white/10"><div className="max-w-6xl mx-auto px-4"><p className="uppercase tracking-widest text-arin-orange font-semibold">{page.eyebrow}</p><h1 className="text-4xl sm:text-6xl font-bold mt-4 max-w-5xl">{page.heading}</h1><p className="text-xl text-gray-300 mt-7 leading-relaxed max-w-4xl">{page.intro}</p><Link to="/contact" className="inline-block mt-8 px-8 py-4 rounded-lg bg-arin-orange font-semibold hover:bg-orange-600">Discuss Your Requirements</Link></div></header>
    <main className="max-w-6xl mx-auto px-4 py-20 space-y-20">
      <section className="space-y-8">{page.sections.map(section => <article key={section.title} className="rounded-3xl border border-white/10 bg-white/5 p-8"><h2 className="text-3xl font-bold">{section.title}</h2><p className="text-gray-300 text-lg mt-4 leading-relaxed">{section.text}</p><ul className="grid md:grid-cols-2 gap-3 mt-6">{section.points.map(point => <li key={point} className="flex gap-3 text-gray-200"><span className="text-arin-orange">✓</span>{point}</li>)}</ul></article>)}</section>
      <section><h2 className="text-3xl font-bold mb-7">Frequently Asked Questions</h2><div className="space-y-5">{page.faqs.map(faq => <article key={faq.question} className="p-7 border border-white/10 rounded-2xl"><h3 className="text-xl font-semibold text-arin-orange">{faq.question}</h3><p className="text-gray-300 mt-3 leading-relaxed">{faq.answer}</p></article>)}</div></section>
      <section className="border-t border-white/10 pt-10"><h2 className="text-2xl font-bold mb-5">Continue Exploring</h2><div className="flex flex-wrap gap-5">{page.links.map(link => <Link key={link.to} to={link.to} className="text-arin-orange hover:underline">{link.label} →</Link>)}</div></section>
    </main>
  </div>;
}
