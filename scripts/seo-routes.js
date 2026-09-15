export const siteUrl = "https://arinits.com";

const page = (path, title, description, options = {}) => ({
  path,
  title,
  description,
  changefreq: "monthly",
  priority: "0.8",
  type: "website",
  ...options,
});

export const seoRoutes = [
  page("/", "Custom Software Development & IT Consulting | ARIN IT", "Expert custom software development and strategic IT consulting. We deliver scalable enterprise software solutions. Start your digital transformation!", { changefreq: "weekly", priority: "1.0" }),
  page("/contact", "Contact Us - ARIN IT Solutions", "Get in touch with ARIN IT Solutions for custom software development, IT consulting, and enterprise technology solutions.", { priority: "0.9" }),
  page("/about", "About ARIN IT Solutions | Software Engineering Hyderabad", "Learn how ARIN IT Solutions approaches enterprise software, FinTech, AI, Java microservices, cloud, DevOps, and long-term technology partnerships.", { priority: "0.8" }),
  page("/portfolio", "Portfolio - ARIN IT Solutions", "Explore ARIN IT Solutions case studies in AI platforms, microservices, enterprise software, HR systems, and logistics.", { priority: "0.9" }),
  page("/team", "Our Team - ARIN IT Solutions", "Meet the engineers and designers behind ARIN IT Solutions and discover the expertise of our growing technology team."),
  page("/blog", "Software Engineering Blog - ARIN IT Solutions", "Read practical insights on software development, cloud, DevOps, security, AI, architecture, and digital transformation.", { changefreq: "weekly" }),
  page("/services/software-development", "Software Development Services - ARIN IT Solutions", "Build scalable, secure enterprise applications tailored to your business with ARIN IT Solutions custom software development services.", { priority: "0.9" }),
  page("/services/fintech-payment-solutions", "FinTech and Payment Software Development | ARIN IT Solutions", "Engineer secure payment, wallet, reconciliation, merchant, case-management, and FinTech platforms with resilient APIs and auditable transaction workflows.", { priority: "0.9" }),
  page("/services/java-microservices", "Java Spring Boot Microservices Development | ARIN IT Solutions", "Design and modernize scalable Java and Spring Boot platforms with domain-driven microservices, Kafka, security, observability, and Kubernetes.", { priority: "0.9" }),
  page("/services/ai-development", "AI Development Company in Hyderabad | ARIN IT Solutions", "Build production-ready AI agents, RAG applications, enterprise copilots, and intelligent workflows with secure integration and measurable evaluation.", { priority: "0.9" }),
  page("/services/application-modernization", "Legacy Application Modernization Services | ARIN IT Solutions", "Modernize legacy Java and enterprise applications through architecture assessment, modularization, APIs, cloud migration, DevOps, and observability.", { priority: "0.9" }),
  page("/services/it-consulting", "Strategic IT Consulting Services | ARIN IT Solutions", "Get strategic technology and architecture guidance that drives business growth and digital transformation.", { priority: "0.9" }),
  page("/services/web-development", "Custom Web Development Services | ARIN IT Solutions", "We design and engineer responsive, high-performance websites and web applications that turn business ideas into reliable digital products.", { priority: "0.9" }),
  page("/services/app-development", "Mobile App Development Services | ARIN IT Solutions", "Build secure, high-performance iOS and Android applications that deliver dependable user experiences.", { priority: "0.9" }),
  page("/services/technology-solutions", "Technology Solutions - ARIN IT Solutions", "Modernize your business with cloud, DevOps, AI, automation, and enterprise technology solutions from ARIN IT Solutions.", { priority: "0.9" }),
  page("/cloud-solutions", "Enterprise Cloud Solutions & Migration | ARIN IT", "Accelerate digital transformation with enterprise cloud architecture, migration, modernization, and optimization services.", { priority: "0.9" }),
  page("/devops-services", "Expert DevOps Services & CI/CD Automation | ARIN IT", "Accelerate software delivery with CI/CD automation, infrastructure as code, cloud-native platforms, and DevOps consulting.", { priority: "0.9" }),
  page("/cybersecurity-consulting", "Enterprise Cybersecurity Consulting Services | ARIN IT", "Protect digital assets with cybersecurity consulting, security assessments, penetration testing, and zero-trust architecture.", { priority: "0.9" }),
  page("/terms", "Terms of Service - ARIN IT Solutions", "Read the terms governing the ARIN IT Solutions website, software development services, and technology consulting.", { changefreq: "yearly", priority: "0.3" }),
  page("/privacy", "Privacy Policy - ARIN IT Solutions", "Learn how ARIN IT Solutions collects, uses, and protects personal information.", { changefreq: "yearly", priority: "0.3" }),

  page("/blog/10-essential-tips-for-modern-web-development", "10 Essential Tips for Modern Web Development | ARIN IT", "Discover best practices and techniques for building scalable, accessible, secure, and performant web applications.", { type: "article", priority: "0.7" }),
  page("/blog/cloud-migration-a-complete-guide", "Cloud Migration: A Complete Guide | ARIN IT", "Learn how to migrate infrastructure to the cloud successfully, reduce costs, manage risk, and improve scalability.", { type: "article", priority: "0.7" }),
  page("/blog/building-secure-mobile-applications", "Building Secure Mobile Applications | ARIN IT", "Explore mobile application security best practices covering authentication, encryption, API protection, and security testing.", { type: "article", priority: "0.7" }),
  page("/blog/the-future-of-ai-in-software-development", "The Future of AI in Software Development | ARIN IT", "Learn how artificial intelligence is transforming software delivery, testing, debugging, code review, and developer productivity.", { type: "article", priority: "0.7" }),
  page("/blog/design-systems-building-consistent-uis", "Design Systems: Building Consistent UIs | ARIN IT", "Learn how reusable components, design tokens, accessibility standards, and documentation create consistent product experiences.", { type: "article", priority: "0.7" }),
  page("/blog/devops-best-practices-for-modern-teams", "DevOps Best Practices for Modern Teams | ARIN IT", "Improve delivery with CI/CD, infrastructure as code, containers, observability, and integrated security practices.", { type: "article", priority: "0.7" }),
  page("/blog/how-devops-reduces-deployment-time", "How DevOps Reduces Deployment Time | ARIN IT", "Discover how DevOps practices, CI/CD automation, infrastructure as code, and microservices reduce enterprise deployment time.", { type: "article", priority: "0.7" }),
  page("/blog/cloud-security-best-practices-for-enterprises", "Cloud Security Best Practices for Enterprises | ARIN IT", "Learn enterprise cloud security practices for zero-trust architecture, compliance, data protection, and proactive threat detection.", { type: "article", priority: "0.7" }),

  page("/portfolio/sochdb-ai-native-vector-sql-database", "SochDB AI-Native Vector and SQL Database | ARIN IT", "See how ARIN IT Solutions engineered SochDB, an AI-native database combining SQL, vector search, real-time ingestion, and agent memory.", { priority: "0.8" }),
  page("/portfolio/nova-ai-emotional-intelligence-platform", "Nova AI Emotional Intelligence Platform | ARIN IT", "Explore Nova, a layered emotional-intelligence architecture with contextual memory, policy enforcement, and AI safety guardrails.", { priority: "0.8" }),
  page("/portfolio/enterprise-microservices-platform", "Enterprise Microservices Platform Case Study | ARIN IT", "Explore a secure, containerized microservices platform using Spring Boot, API Gateway, JWT, Docker, and React.", { priority: "0.8" }),
  page("/portfolio/hrms-microservice-architecture", "HRMS Microservice Architecture Case Study | ARIN IT", "See how ARIN IT Solutions designed a modular HRMS platform with domain isolation, onboarding, recruitment, and role-based access.", { priority: "0.8" }),
  page("/portfolio/unified-order-delivery-tracking-platform", "Unified Order and Delivery Tracking Platform | ARIN IT", "Explore a unified logistics platform with multi-channel integration, route optimization, event-driven tracking, and payments.", { priority: "0.8" }),
];
