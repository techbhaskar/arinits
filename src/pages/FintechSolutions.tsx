import SpecializedService from "../components/SpecializedService";

export default function FintechSolutions() {
  return <SpecializedService
    title="FinTech and Payment Software Development | ARIN IT Solutions"
    description="Engineer secure payment, wallet, reconciliation, merchant, case-management, and FinTech platforms with resilient APIs and auditable transaction workflows."
    path="/services/fintech-payment-solutions"
    keywords="fintech software development India, payment platform development, reconciliation software, wallet development, payment microservices"
    eyebrow="Payments and FinTech"
    heading="Reliable Payment Platforms Built Around Transaction Integrity"
    introduction="We design FinTech systems where correctness, traceability, resilience, and operational control matter as much as throughput. Our engineering approach covers transaction APIs, merchant and wallet journeys, reconciliation, disputes, case management, observability, and integrations with external payment ecosystems."
    capabilities={[
      { title: "Payment and Wallet Platforms", description: "Design authorization, capture, refund, payout, ledger, wallet, and merchant flows with explicit state transitions, idempotency, auditability, and failure recovery." },
      { title: "Reconciliation and Settlement", description: "Build ingestion, matching, exception handling, settlement reporting, and operational dashboards that make discrepancies visible and actionable." },
      { title: "Merchant and Integration APIs", description: "Create versioned REST and event interfaces with strong authentication, idempotency keys, validation, rate limits, webhooks, and partner-specific adapters." },
      { title: "Risk, Cases and Operations", description: "Connect transaction signals to case workflows, evidence, approvals, escalation, reporting, and role-based access for operational teams." },
    ]}
    process={[
      { title: "Map money movement", description: "Model every transaction state, balance impact, external dependency, retry, reversal, timeout, and reconciliation source." },
      { title: "Define controls", description: "Establish idempotency, consistency boundaries, security roles, audit events, limits, exception queues, and observability requirements." },
      { title: "Build and verify", description: "Implement contract-tested services and simulate duplicates, delayed callbacks, dependency failures, partial success, and recovery paths." },
      { title: "Operate with evidence", description: "Expose business and technical metrics, distributed traces, searchable audit history, alerts, and actionable runbooks." },
    ]}
    technologies={["Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "REST APIs", "OAuth 2.0", "Keycloak", "Docker", "Kubernetes", "Datadog"]}
    outcomes={["Duplicate-resistant and auditable transaction processing", "Clear reconciliation and exception-management workflows", "Resilient partner integrations and webhook handling", "Operational visibility across payment states and dependencies"]}
    faqs={[
      { question: "How do you prevent duplicate payment processing?", answer: "We combine client idempotency keys, database uniqueness, atomic state transitions, deduplication at event consumers, safe retry rules, and reconciliation. The exact boundary depends on the payment flow and external provider contract." },
      { question: "Do you guarantee regulatory certification?", answer: "No software vendor should imply certification from architecture alone. We build traceable technical controls and work with your compliance and security teams against the applicable RBI, PCI DSS, KYC, AML, privacy, and internal requirements." },
      { question: "Can you modernize an existing payment platform?", answer: "Yes. We begin with transaction and dependency mapping, then isolate high-value capabilities behind stable interfaces and migrate incrementally with parallel validation and controlled cutovers." },
    ]}
    relatedLinks={[{ to: "/services/java-microservices", label: "Java microservices engineering" }, { to: "/services/application-modernization", label: "Application modernization" }, { to: "/cybersecurity-consulting", label: "Cybersecurity consulting" }]}
  />;
}
