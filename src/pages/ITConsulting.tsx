import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const ITConsulting = () => {
  const services = [
    {
      title: "Strategic IT Planning",
      description:
        "Develop comprehensive IT strategies aligned with your business goals and objectives.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Digital Transformation",
      description:
        "Guide your organization through digital transformation initiatives and technology adoption.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Technology Assessment",
      description:
        "Evaluate your current technology stack and identify opportunities for improvement.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      title: "IT Architecture Design",
      description:
        "Design scalable and efficient IT architectures that support your business growth.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <SEO
        title="IT Consulting Services - ARIN IT Solutions"
        description="Expert IT consulting services. Get strategic guidance on technology decisions that drive business growth and digital transformation."
        path="/services/it-consulting"
        keywords="IT consulting, digital transformation, technology assessment, IT strategy, technology consulting"
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            IT Consulting Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get expert guidance on technology decisions that drive business
            growth. Our consultants provide strategic insights and practical
            solutions.
          </p>
        </div>

        <div className="glass-strong rounded-3xl p-12 md:p-16 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our IT Consulting?
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-arin-orange mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>15+ years of combined consulting experience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-arin-orange mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Data-driven recommendations and insights</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-arin-orange mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Industry-specific expertise across sectors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-arin-orange mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>End-to-end implementation support</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Our Consulting Approach
              </h3>
              <div className="space-y-4">
                <div className="glass-strong-dark rounded-lg p-4">
                  <div className="font-semibold mb-2">1. Assessment</div>
                  <div className="text-sm opacity-90">
                    Understand your current state
                  </div>
                </div>
                <div className="glass-strong-dark rounded-lg p-4">
                  <div className="font-semibold mb-2">2. Strategy</div>
                  <div className="text-sm opacity-90">
                    Develop actionable roadmap
                  </div>
                </div>
                <div className="glass-strong-dark rounded-lg p-4">
                  <div className="font-semibold mb-2">3. Implementation</div>
                  <div className="text-sm opacity-90">
                    Execute with precision
                  </div>
                </div>
                <div className="glass-strong-dark rounded-lg p-4">
                  <div className="font-semibold mb-2">4. Optimization</div>
                  <div className="text-sm opacity-90">
                    Continuous improvement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our IT Consulting Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-strong rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 text-white">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto glass-strong rounded-3xl p-12 shadow-xl text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Need Expert IT Consultation?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's discuss your technology challenges and opportunities.
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-4 bg-arin-orange text-white rounded-lg font-semibold text-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
        >
          Schedule Consultation
        </Link>
      </section>
    </div>
  );
};

export default ITConsulting;
