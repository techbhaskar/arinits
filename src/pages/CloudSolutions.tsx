import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const CloudSolutions = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-black via-gray-900 to-gray-900">
      <SEO
        title="Enterprise Cloud Solutions & Migration | ARIN IT"
        description="Comprehensive enterprise cloud solutions and migration strategies to accelerate your digital transformation. Contact our cloud experts today!"
        path="/cloud-solutions"
        keywords="cloud solutions, cloud migration, AWS, Azure, enterprise cloud"
      />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24 pb-16 border-b border-white/10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="block text-white">Enterprise</span>
            <span className="block bg-gradient-to-r from-arin-orange to-orange-400 bg-clip-text text-transparent">
              Cloud Solutions
            </span>
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-300 text-lg leading-relaxed space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Empowering Your Digital Transformation</h2>
          <p>
            In today's fast-paced digital economy, adopting robust cloud solutions is no longer a luxury—it is an absolute necessity for enterprise survival and growth. Cloud technology provides the foundational architecture required for incredible scalability, unbreakable security, and global accessibility. At ARIN IT Solutions, we specialize in migrating complex legacy infrastructure to modern, agile cloud environments seamlessly. Our approach ensures zero downtime during migrations and perfectly aligns with your long-term operational goals. By leveraging cloud platforms such as AWS, Microsoft Azure, and Google Cloud, we equip your business with the computational power to process large datasets, deploy applications instantly, and reduce unnecessary capital expenditures on physical hardware.
          </p>
          <p className="mt-4">
            Our cloud modernization strategy extends deeply into your existing development lifecycle. If you want to learn more about how we structure the rest of our consulting pipelines, please read more about our <Link to="/services/it-consulting" className="text-arin-orange hover:underline">Strategic IT Consulting Services</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Our Core Cloud Services</h2>
          <p>
            Transitioning to the cloud is a multifaceted endeavor. We begin with a rigorous cloud readiness assessment. We evaluate every single application, database, and process in your existing architecture to determine the optimal migration path—whether that is rehosting, replatforming, or completely refactoring your systems into cloud-native microservices.
          </p>
          <p className="mt-4">
            Security and compliance are built into every cloud environment we design. We implement advanced identity and access management (IAM), automated threat detection, and continuous compliance auditing to ensure your data stays protected against evolving threats. Furthermore, we dramatically lower your total cost of ownership (TCO) by implementing strict financial operations (FinOps) protocols. This guarantees that your cloud resources are consistently rightsized, preventing the rampant cloud waste that plagues many unoptimized digital transformations. Our clients consistently report massive reductions in their monthly infrastructure bills after implementing our cost-governance frameworks.
          </p>
        </section>

        <section className="glass-strong-dark rounded-3xl p-8 border border-white/20 mt-12 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Case Study: Global Retailer Migration</h2>
          <p className="mb-4">
            <strong>The Challenge:</strong> A massive international retail client was struggling with an outdated on-premises data center that routinely crashed during peak holiday traffic, causing millions of dollars in lost revenue and damaging their brand reputation.
          </p>
          <p className="mb-4">
            <strong>Our Solution:</strong> We engineered a multi-cloud hybrid architecture designed for extreme high availability. By containerizing their monolithic applications using Kubernetes and migrating their databases to managed cloud services, we established an auto-scaling infrastructure that dynamically adjusts resources based on real-time traffic demands.
          </p>
          <p>
            <strong>The Results:</strong> The client experienced 100% uptime during the subsequent holiday season. Infrastructure costs decreased by 40%, and page load times improved by 60%. To see more of our incredible success stories like this one, be sure to visit our extensive <Link to="/portfolio" className="text-arin-orange hover:underline">Client Portfolio</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-arin-orange mb-2">How long does a typical cloud migration take?</h3>
              <p>The timeline heavily depends on the size and complexity of your existing infrastructure. A simple rehosting ("lift-and-shift") can take just a few weeks, while complex refactoring of large enterprise applications might span several months. We prioritize a phased approach to deliver immediate value while mitigating risk.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-arin-orange mb-2">Will my data be secure in the public cloud?</h3>
              <p>Absolutely. Modern public cloud providers invest billions of dollars annually into security infrastructure that far surpasses what most individual organizations can build. We enhance this baseline security by implementing zero-trust architectures, end-to-end encryption, and rigorous access controls.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-arin-orange mb-2">Do you provide ongoing cloud support?</h3>
              <p>Yes. Our partnership doesn't end after migration. We offer 24/7 managed cloud services, continuous performance optimization, and proactive monitoring to ensure your cloud environment operates flawlessly day and night.</p>
            </div>
          </div>
        </section>

        <div className="text-center mt-16 pb-12">
          <p className="text-xl text-gray-300 mb-8">Ready to revolutionize your digital infrastructure? Let our experts guide you.</p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-arin-orange to-orange-500 text-white rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Contact Our Cloud Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CloudSolutions;
