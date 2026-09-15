import SpecializedService from "../components/SpecializedService";

export default function ApplicationModernization() {
  return <SpecializedService
    title="Legacy Application Modernization Services | ARIN IT Solutions"
    description="Modernize legacy Java and enterprise applications through architecture assessment, modularization, APIs, cloud migration, DevOps, and observability."
    path="/services/application-modernization"
    keywords="legacy application modernization, Java modernization, monolith to microservices, cloud migration consulting, application replatforming"
    eyebrow="Application Modernization"
    heading="Modernize Legacy Systems Without Betting the Business on a Rewrite"
    introduction="We modernize business-critical applications incrementally. Instead of beginning with a fashionable target architecture, we identify the constraints affecting delivery, reliability, cost, security, and scale—then choose the smallest sequence of changes that produces measurable value."
    capabilities={[
      { title: "Architecture and Code Assessment", description: "Map modules, dependencies, database coupling, runtime risks, release bottlenecks, security gaps, and operational blind spots to establish a practical baseline." },
      { title: "Modularization and Service Extraction", description: "Improve boundaries inside the existing application first, then extract capabilities only where independent scaling, ownership, or deployment creates value." },
      { title: "Cloud and Platform Modernization", description: "Containerize workloads, externalize configuration, automate infrastructure and delivery, improve resilience, and adopt managed cloud services where justified." },
      { title: "Data and Integration Evolution", description: "Introduce stable APIs, events, change-data patterns, schema migration controls, compatibility testing, and phased cutovers around legacy dependencies." },
    ]}
    process={[
      { title: "Baseline", description: "Measure release lead time, incidents, recovery, performance, infrastructure cost, code risk, and critical business journeys." },
      { title: "Sequence", description: "Prioritize modernization slices by value, risk, dependency order, reversibility, and learning—not by technology novelty." },
      { title: "Migrate safely", description: "Use strangler patterns, feature flags, parallel runs, contract tests, data reconciliation, and rollback plans to control change." },
      { title: "Prove outcomes", description: "Track whether each increment improves delivery speed, stability, security, scalability, cost, or user experience." },
    ]}
    technologies={["Java", "Spring Boot", "REST", "Kafka", "Docker", "Kubernetes", "AWS", "Azure", "Terraform", "GitHub Actions", "OpenTelemetry"]}
    outcomes={["Lower change risk through incremental migration", "Faster and more repeatable deployments", "Clearer module and data ownership", "Improved reliability, security posture, and operational visibility"]}
    faqs={[
      { question: "Rewrite, replatform, refactor, or retain—which is best?", answer: "The answer can differ by component. We evaluate business value, code health, operational risk, vendor support, cloud fit, data coupling, and migration cost before assigning a strategy." },
      { question: "Can modernization happen while features continue?", answer: "Yes. A sequenced roadmap, stable seams, automated regression tests, feature flags, and incremental cutovers allow product delivery and modernization to proceed together." },
      { question: "How do you reduce migration risk?", answer: "We keep increments small, make contracts explicit, validate data, run old and new paths in parallel when needed, monitor business outcomes, and prepare tested rollback or compensation paths." },
    ]}
    relatedLinks={[{ to: "/services/java-microservices", label: "Java microservices" }, { to: "/cloud-solutions", label: "Cloud solutions" }, { to: "/devops-services", label: "DevOps services" }]}
  />;
}
