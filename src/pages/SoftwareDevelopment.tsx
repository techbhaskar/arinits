import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const SoftwareDevelopment = () => {
  const services = [
    {
      title: "Custom Software Solutions",
      description:
        "Tailored software applications designed to meet your specific business needs and workflows.",
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Enterprise Applications",
      description:
        "Scalable enterprise solutions that integrate seamlessly with your existing infrastructure.",
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
    {
      title: "API Development & Integration",
      description:
        "Robust APIs and seamless integrations to connect your systems and streamline operations.",
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
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
    },
    {
      title: "Legacy System Modernization",
      description:
        "Transform outdated systems into modern, efficient solutions that support your growth.",
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
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Software Development Services - ARIN IT Solutions"
        description="Expert custom software development services. We build scalable, secure, and efficient applications tailored to your business needs."
        path="/services/software-development"
        keywords="software development, custom software, enterprise applications, API development, legacy modernization"
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Software Development Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We build custom software solutions tailored to your business
            requirements. From enterprise applications to startup MVPs, we
            deliver excellence.
          </p>
        </div>

        <div className="glass-strong rounded-3xl p-12 md:p-16 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Software Development Services?
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
                  <span>Scalable architecture designed for growth</span>
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
                  <span>Cutting-edge technologies and best practices</span>
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
                  <span>Agile development methodology</span>
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
                  <span>Comprehensive testing and quality assurance</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Technologies We Work With
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  React
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  Node.js
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  Python
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  Java
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  .NET
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  Go
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Software Development Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-strong rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 text-white">
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
          Ready to Build Your Custom Software?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's discuss your project and bring your vision to life.
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-4 bg-arin-orange text-white rounded-lg font-semibold text-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
