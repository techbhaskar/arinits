import SEO from "../components/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title="Terms of Service - ARIN IT Solutions"
        description="Read the terms of service for ARIN IT Solutions website and services."
        path="/terms"
        keywords="terms of service, terms and conditions, ARIN IT Solutions terms, website terms, legal terms"
      />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-24">
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
            <span className="block text-white">Terms of</span>
            <span className="block bg-gradient-to-r from-arin-orange to-orange-400 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
        </div>
      </section>

      <div className="relative -mt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-gray-900">
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
                  1. Agreement to Terms
                </h2>
                <p>
                  By accessing and using the ARIN IT Solutions website
                  (www.arinits.com), you accept and agree to be bound by the
                  terms and provision of this agreement. If you do not agree to
                  abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  2. Use License
                </h2>
                <p>
                  Permission is granted to temporarily download one copy of the
                  materials on ARIN IT Solutions' website for personal,
                  non-commercial transitory viewing only. This is the grant of a
                  license, not a transfer of title, and under this license you
                  may not:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                  <li>Modify or copy the materials</li>
                  <li>
                    Use the materials for any commercial purpose or for any
                    public display
                  </li>
                  <li>
                    Attempt to reverse engineer any software contained on the
                    website
                  </li>
                  <li>
                    Remove any copyright or other proprietary notations from the
                    materials
                  </li>
                  <li>
                    Transfer the materials to another person or "mirror" the
                    materials on any other server
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  3. Services
                </h2>
                <p>
                  ARIN IT Solutions provides software development, IT
                  consulting, web development, app development, and related
                  technology services. All services are subject to separate
                  service agreements that will detail the specific terms,
                  deliverables, timelines, and pricing for each engagement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  4. Disclaimer
                </h2>
                <p>
                  The materials on ARIN IT Solutions' website are provided on an
                  'as is' basis. ARIN IT Solutions makes no warranties,
                  expressed or implied, and hereby disclaims and negates all
                  other warranties including, without limitation, implied
                  warranties or conditions of merchantability, fitness for a
                  particular purpose, or non-infringement of intellectual
                  property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  5. Limitations
                </h2>
                <p>
                  In no event shall ARIN IT Solutions or its suppliers be liable
                  for any damages (including, without limitation, damages for
                  loss of data or profit, or due to business interruption)
                  arising out of the use or inability to use the materials on
                  ARIN IT Solutions' website, even if ARIN IT Solutions or an
                  authorized representative has been notified orally or in
                  writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  6. Accuracy of Materials
                </h2>
                <p>
                  The materials appearing on ARIN IT Solutions' website could
                  include technical, typographical, or photographic errors. ARIN
                  IT Solutions does not warrant that any of the materials on its
                  website are accurate, complete, or current. ARIN IT Solutions
                  may make changes to the materials contained on its website at
                  any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Links</h2>
                <p>
                  ARIN IT Solutions has not reviewed all of the sites linked to
                  its website and is not responsible for the contents of any
                  such linked site. The inclusion of any link does not imply
                  endorsement by ARIN IT Solutions of the site. Use of any such
                  linked website is at the user's own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  8. Modifications
                </h2>
                <p>
                  ARIN IT Solutions may revise these terms of service for its
                  website at any time without notice. By using this website you
                  are agreeing to be bound by the then current version of these
                  terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  9. Governing Law
                </h2>
                <p>
                  These terms and conditions are governed by and construed in
                  accordance with applicable laws and you irrevocably submit to
                  the exclusive jurisdiction of the courts in that state or
                  location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  10. Contact Information
                </h2>
                <p>
                  If you have any questions about these Terms of Service, please
                  contact us at:
                </p>
                <div className="mt-4 p-4 glass-strong-dark rounded-lg border border-white/20">
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

export default Terms;
