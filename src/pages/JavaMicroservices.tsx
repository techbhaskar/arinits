import SpecializedService from "../components/SpecializedService";

export default function JavaMicroservices() {
  return <SpecializedService
    title="Java Spring Boot Microservices Development | ARIN IT Solutions"
    description="Design and modernize scalable Java and Spring Boot platforms with domain-driven microservices, Kafka, security, observability, and Kubernetes."
    path="/services/java-microservices"
    keywords="Java microservices development, Spring Boot consulting, Kafka architecture, Kubernetes microservices, Java modernization India"
    eyebrow="Java and Cloud-Native Engineering"
    heading="Java and Spring Boot Microservices That Stay Operable at Scale"
    introduction="ARIN IT Solutions architects enterprise Java platforms around clear domain boundaries, dependable data ownership, secure APIs, event-driven integration, and production observability. We balance service independence with the operational cost of distributed systems."
    capabilities={[
      { title: "Domain-Driven Service Design", description: "Identify bounded contexts, ownership, contracts, consistency requirements, and team boundaries before decomposing a system into services." },
      { title: "Spring Boot Platform Engineering", description: "Build secured REST APIs, validation, persistence, caching, configuration, resilience, and reusable platform capabilities with modern Java and Spring Boot." },
      { title: "Kafka and Event-Driven Systems", description: "Design event contracts, partitions, ordering, consumer groups, retries, dead-letter handling, idempotent consumers, schema evolution, and end-to-end traceability." },
      { title: "Cloud-Native Operations", description: "Package services with Docker, orchestrate with Kubernetes, automate delivery, and instrument logs, metrics, traces, health checks, and service-level indicators." },
    ]}
    process={[
      { title: "Architecture assessment", description: "Understand domains, workloads, dependencies, data, non-functional requirements, failure modes, and current operational pain." },
      { title: "Boundary and contract design", description: "Define service responsibilities, APIs, events, schemas, security, data ownership, and consistency patterns." },
      { title: "Incremental implementation", description: "Deliver vertical slices with automated tests, deployment pipelines, observability, and backward-compatible contracts." },
      { title: "Reliability validation", description: "Test load, recovery, retries, duplicates, dependency degradation, autoscaling, and rollback before production expansion." },
    ]}
    technologies={["Java 17+", "Spring Boot", "Spring Security", "Kafka", "PostgreSQL", "Redis", "Resilience4j", "OpenTelemetry", "Docker", "Kubernetes", "Prometheus", "Grafana"]}
    outcomes={["Services aligned to business domains rather than technical layers", "Explicit consistency and failure-recovery patterns", "Versioned APIs and evolvable event contracts", "Production diagnostics through logs, metrics, and traces"]}
    faqs={[
      { question: "Should every monolith be converted to microservices?", answer: "No. A modular monolith is often the better starting point when team size, scaling, deployment independence, and domain complexity do not justify distributed-system overhead." },
      { question: "How do you choose service boundaries?", answer: "We combine domain capabilities, data ownership, change cadence, scaling needs, transaction boundaries, failure isolation, and team ownership. Database tables or UI screens alone are poor boundaries." },
      { question: "How do services maintain consistency?", answer: "For local invariants we use database transactions. Across services we use explicit workflows such as sagas, transactional outbox, idempotent consumers, compensating actions, and reconciliation rather than distributed database transactions." },
    ]}
    relatedLinks={[{ to: "/portfolio/enterprise-microservices-platform", label: "Microservices platform case study" }, { to: "/devops-services", label: "DevOps and platform engineering" }, { to: "/services/fintech-payment-solutions", label: "FinTech engineering" }]}
  />;
}
