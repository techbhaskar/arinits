import SEO from "../components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title="Privacy Policy - ARIN IT Solutions"
        description="Privacy policy for ARIN IT Solutions. Learn how we collect, use, and protect your personal information."
        path="/privacy"
        keywords="privacy policy, data privacy, personal information protection, GDPR compliance, privacy statement"
      />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-24 pb-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-arin-orange/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(184, 107, 35, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="block text-white">Privacy</span>
            <span className="block bg-gradient-to-r from-arin-orange to-orange-400 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
        </div>
      </section>

      <div className="relative pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-gray-900 pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong-dark rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
            <p className="text-gray-300 mb-8">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <div className="prose prose-lg max-w-none space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  1. Introduction
                </h2>
                <p>
                  ARIN IT Solutions ("we", "our", or "us") is committed to
                  protecting your privacy. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when
                  you visit our website www.arinits.com. Please read this
                  privacy policy carefully. If you do not agree with the terms
                  of this privacy policy, please do not access the site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  2. Information We Collect
                </h2>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                  2.1 Information You Provide
                </h3>
                <p>
                  We may collect information that you voluntarily provide to us
                  when you:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                  <li>Contact us through our contact form</li>
                  <li>Request information about our services</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Communicate with us via email or other methods</li>
                </ul>
                <p className="mt-4">
                  This information may include your name, email address, phone
                  number, company name, and any other information you choose to
                  provide.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                  2.2 Automatically Collected Information
                </h3>
                <p>
                  When you visit our website, we may automatically collect
                  certain information about your device, including:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages you visit and time spent on pages</li>
                  <li>Referring website addresses</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  3. How We Use Your Information
                </h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                  <li>Provide, operate, and maintain our website</li>
                  <li>
                    Respond to your inquiries and provide customer service
                  </li>
                  <li>
                    Send you information about our services, updates, and
                    marketing communications
                  </li>
                  <li>Improve our website and user experience</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Detect, prevent, and address technical issues</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  4. Cookies and Tracking Technologies
                </h2>
                <p>
                  We may use cookies, web beacons, and similar tracking
                  technologies to collect and store information about your
                  preferences and browsing activities. Cookies are small data
                  files stored on your device that help us improve your
                  experience on our website.
                </p>
                <p className="mt-4">
                  You can control cookies through your browser settings.
                  However, disabling cookies may limit your ability to use
                  certain features of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  5. Information Sharing and Disclosure
                </h2>
                <p>
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information only in the
                  following circumstances:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                  <li>
                    <strong>Service Providers:</strong> We may share information
                    with third-party service providers who perform services on
                    our behalf, such as hosting, analytics, and email services.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> We may disclose
                    information if required by law or in response to valid
                    requests by public authorities.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In the event of a
                    merger, acquisition, or sale of assets, your information may
                    be transferred as part of that transaction.
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> We may share your
                    information with your explicit consent.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  6. Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the Internet or
                  electronic storage is 100% secure, and we cannot guarantee
                  absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  7. Your Rights
                </h2>
                <p>
                  Depending on your location, you may have certain rights
                  regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to delete your information</li>
                  <li>The right to object to processing of your information</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the
                  information provided below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  8. Data Retention
                </h2>
                <p>
                  We retain your personal information for as long as necessary
                  to fulfill the purposes outlined in this Privacy Policy,
                  unless a longer retention period is required or permitted by
                  law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  9. Children's Privacy
                </h2>
                <p>
                  Our website is not intended for children under the age of 18.
                  We do not knowingly collect personal information from
                  children. If you believe we have collected information from a
                  child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  10. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date. You are
                  advised to review this Privacy Policy periodically for any
                  changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  11. Contact Us
                </h2>
                <p>
                  If you have any questions or concerns about this Privacy
                  Policy or our data practices, please contact us:
                </p>
                <div className="mt-4 p-4 glass-strong-dark rounded-lg border border-white/20">
                  <p className="text-white">
                    <strong>ARIN IT Solutions</strong>
                  </p>
                  <p className="text-white">
                    <strong>Email:</strong> info@arinits.com
                  </p>
                  <p className="text-white">
                    <strong>Website:</strong> www.arinits.com
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
