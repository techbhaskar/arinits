import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const CybersecurityConsulting = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-black via-gray-900 to-gray-900">
      <SEO
        title="Enterprise Cybersecurity Consulting Services | ARIN IT"
        description="Protect your digital assets with advanced cybersecurity consulting, penetration testing, and zero-trust. Audit your security with our team today!"
        path="/cybersecurity-consulting"
        keywords="cybersecurity consulting, penetration testing, zero-trust architecture, cybersecurity threat detection"
      />

      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24 pb-16 border-b border-white/10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="block text-white">Cybersecurity</span>
            <span className="block bg-gradient-to-r from-arin-orange to-orange-400 bg-clip-text text-transparent">
              Consulting Services
            </span>
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-300 text-lg leading-relaxed space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Defending Your Most Valuable Assets</h2>
          <p>
            In an era where digital threats are becoming increasingly sophisticated, catastrophic data breaches are no longer a matter of 'if', but 'when'. Establishing formidable cybersecurity defenses is paramount protecting your intellectual property, client trust, and bottom line. ARIN IT Solutions provides world-class cybersecurity consulting precisely designed to proactively identify vulnerabilities, implement airtight defensive methodologies, and ensure rapid neutralization of active threats. We do not just react to breaches; we engineer impenetrable perimeters using modern zero-trust architecture principles and comprehensive layered security models that safeguard your critical digital infrastructure around the clock.
          </p>
          <p className="mt-4">
            Security must be integrated deeply into every project. Learn how we lock down the applications we build by exploring our <Link to="/services/web-development" className="text-arin-orange hover:underline">Web Development</Link> division.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Proactive Auditing and Strategic Compliance</h2>
          <p>
            We commence our cybersecurity engagements with exhaustive penetration testing and rigorous vulnerability assessments. Our ethical hackers simulate the exact tactics, techniques, and procedures (TTPs) utilized by advanced persistent threat (APT) groups to expose your network's hidden weaknesses. We thoroughly analyze source code, bombard APIs, and execute complex social engineering campaigns against personnel to test human firewall capabilities. Furthermore, navigating complicated regulatory networks is deeply integrated into our strategy. We actively ensure our clients maintain strict, unwavering compliance with rigorous industry standards including HIPAA, GDPR, SOC 2, and PCI-DSS, shielding organizations from severe legal liabilities and agonizing financial penalties.
          </p>
          <p className="mt-4">
            Implementing robust Identity and Access Management (IAM), sophisticated endpoint detection and response (EDR) solutions, and unbreakable encryption protocols forms the backbone of our cybersecurity arsenal. We believe security should enable business velocity rather than hinder it, creating solutions that protect without degrading the daily productivity of your workforce.
          </p>
        </section>

        <section className="glass-strong-dark rounded-3xl p-8 border border-white/20 mt-12 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Case Study: Healthcare Provider Breach Remediation</h2>
          <p className="mb-4">
            <strong>The Challenge:</strong> A large regional healthcare provider discovered a sophisticated ransomware infiltration attempting to encrypt hundreds of thousands of highly sensitive electronic patient records.
          </p>
          <p className="mb-4">
            <strong>Our Solution:</strong> Our incident response team deployed immediately. We isolated the contaminated network segments to halt lateral movement, eradicated the malware strains completely, and restored clean operational data from immutable backups. We then rebuilt their entire network using micro-segmentation and strictly enforced zero-trust access controls.
          </p>
          <p>
            <strong>The Results:</strong> Not a single byte of patient data was successfully exfiltrated or corrupted. We achieved full operational recovery in under 24 hours, completely avoiding ransom payouts and regulatory fines. View more examples of our emergency interventions in our <Link to="/portfolio" className="text-arin-orange hover:underline">Case Studies</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-arin-orange mb-2">What is a Zero-Trust Architecture?</h3>
              <p>Zero-Trust is a security framework requiring all users, whether inside or outside the organization's network, to be continuously authenticated, authorized, and strictly validated before being granted or keeping access to critical applications and data. It operates exactly on the principle of "never trust, always verify."</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-arin-orange mb-2">How often should we perform penetration tests?</h3>
              <p>We adamantly recommend conducting comprehensive penetration tests at least annually, as well as immediately after any significant architectural changes, major software updates, or when mandated by specific compliance frameworks relevant to your industry.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-arin-orange mb-2">Do you provide security awareness training for employees?</h3>
              <p>Yes. Human error remains the largest vulnerability in any security posture. We provide highly engaging, customized security awareness training programs designed to quickly identify phishing attempts, social engineering tactics, and dangerous digital behaviors.</p>
            </div>
          </div>
        </section>

        <div className="text-center mt-16 pb-12">
          <p className="text-xl text-gray-300 mb-8">Do not wait until you are compromised. Secure your enterprise today.</p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-arin-orange to-orange-500 text-white rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Audit Your Security Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityConsulting;
