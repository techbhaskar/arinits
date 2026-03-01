import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const DevopsServices = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-black via-gray-900 to-gray-900">
      <SEO
        title="Expert DevOps Services & CI/CD Automation | ARIN IT"
        description="Accelerate software delivery with expert DevOps services, CI/CD pipelines, & infrastructure as code. Call our team today for a free consult!"
        path="/devops-services"
        keywords="DevOps services, CI/CD automation, infrastructure as code, release management"
      />

      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24 pb-16 border-b border-white/10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="block text-white">DevOps</span>
            <span className="block bg-gradient-to-r from-arin-orange to-orange-400 bg-clip-text text-transparent">
              Consulting & Services
            </span>
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-300 text-lg leading-relaxed space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Accelerate Your Software Delivery Lifecycle</h2>
          <p>
            In the modern software landscape, the speed at which you can cleanly, securely, and reliably deploy code directly correlates to your business success. DevOps is not merely a set of tools; it is a fundamental cultural shift that bridges the gap between development teams and IT operations. We specialize in dismantling these silos, introducing highly automated workflows, and establishing incredibly stringent continuous integration and continuous delivery (CI/CD) pipelines. By eliminating manual intervention from the deployment process, you completely mitigate human error, dramatically reduce release cycles, and drastically improve overall platform stability.
          </p>
          <p className="mt-4">
            Our DevOps strategies perfectly complement custom enterprise applications. To learn more about our software engineering expertise, check out our <Link to="/services/software-development" className="text-arin-orange hover:underline">Custom Software Development</Link> division.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Infrastructure as Code & Containerization</h2>
          <p>
            Managing servers manually is an archaic practice that leads to configuration drift, inconsistency, and severe security vulnerabilities. Our DevOps engineers implement cutting-edge Infrastructure as Code (IaC) paradigms using tools like Terraform and AWS CloudFormation. By defining your entire infrastructure inside version-controlled code repositories, environments can be replicated instantly, audited effortlessly, and scaled automatically. This creates a rock-solid foundation that is both completely reproducible and inherently resilient against disaster.
          </p>
          <p className="mt-4">
            Furthermore, we heavily emphasize containerization technologies such as Docker and Kubernetes. By packaging applications into lightweight, deeply isolated containers, we eliminate the dreaded "it works on my machine" problem. This guarantees pristine consistency across development, staging, and production environments. Combining automated testing, strict code quality gating, and instantaneous infrastructure provisioning allows your developers to focus entirely on writing brilliant features instead of fighting deployment fires.
          </p>
        </section>

        <section className="glass-strong-dark rounded-3xl p-8 border border-white/20 mt-12 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Case Study: FinTech Deployment Automation</h2>
          <p className="mb-4">
            <strong>The Challenge:</strong> A rapidly growing Financial Technology platform was plagued by agonizingly slow, manual deployments that took an average of three days to complete. Every release caused major system downtimes and required extensive overnight rollbacks.
          </p>
          <p className="mb-4">
            <strong>Our Solution:</strong> We orchestrated a complete DevOps transformation. We constructed an automated CI/CD pipeline using GitLab CI, implemented strict automated unit and integration testing blocks, and utilized Kubernetes for blue-green deployments that swap live traffic with zero dropped connections.
          </p>
          <p>
            <strong>The Results:</strong> The client went from one traumatic deployment per month to multiple seamless deployments every single day. Deployment times dropped from three days to under fifteen minutes with absolutely zero downtime. Discover more case studies in our <Link to="/portfolio" className="text-arin-orange hover:underline">Project Portfolio</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-arin-orange mb-2">What really is DevOps?</h3>
              <p>DevOps is the powerful fusion of software development (Dev) and IT operations (Ops). It involves communication practices, cultural philosophies, and automated tools that increase an organization's capability to deliver high-quality applications at an exceptionally high velocity.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-arin-orange mb-2">Which CI/CD tools do you utilize?</h3>
              <p>We are tool-agnostic and adapt to your specific ecosystem. However, we have extremely deep expertise configuring Jenkins, GitLab CI/CD, GitHub Actions, CircleCI, and Azure DevOps for enterprise-scale environments.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-arin-orange mb-2">How do you manage database migrations automatically?</h3>
              <p>We implement rigid database version control systems like Liquibase or Flyway directly into the CI/CD pipeline. This ensures that database schema changes are rigorously tested and deployed synchronously with the application code, without causing corruption or downtime.</p>
            </div>
          </div>
        </section>

        <div className="text-center mt-16 pb-12">
          <p className="text-xl text-gray-300 mb-8">Ready to automate your operations and deploy with absolute confidence?</p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-arin-orange to-orange-500 text-white rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Speak With Our DevOps Consultants
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DevopsServices;
