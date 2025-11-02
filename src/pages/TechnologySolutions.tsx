import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const TechnologySolutions = () => {
  const solutions = [
    {
      title: "Cloud Solutions & Migration",
      description:
        "Scalable cloud infrastructure and seamless migration services using AWS, Azure, and Google Cloud.",
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
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
    },
    {
      title: "DevOps & CI/CD",
      description:
        "Automate your development workflow with continuous integration and deployment pipelines.",
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
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive security measures to protect your digital assets and ensure compliance.",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "AI & Machine Learning",
      description:
        "Leverage artificial intelligence and machine learning to automate processes and gain insights.",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Technology Solutions - ARIN IT Solutions"
        description="Comprehensive technology solutions including cloud services, DevOps, cybersecurity, and AI/ML solutions."
        path="/services/technology-solutions"
        keywords="technology solutions, cloud solutions, DevOps, cybersecurity, AI, machine learning"
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Technology Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions to transform your business. From
            cloud infrastructure to AI-powered automation.
          </p>
        </div>

        <div className="glass-strong rounded-3xl p-12 md:p-16 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Technology Solutions?
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
                  <span>End-to-end solution delivery</span>
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
                  <span>Scalable and future-proof architecture</span>
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
                  <span>Industry best practices and standards</span>
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
                  <span>24/7 monitoring and support</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-blue-500 rounded-3xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Solution Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  AWS
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  Azure
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  Google Cloud
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  Docker
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  Kubernetes
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  Terraform
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Technology Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="glass-strong rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 text-white">
                {solution.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto glass-strong rounded-3xl p-12 shadow-xl text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Need Custom Technology Solutions?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's discuss how we can help solve your technology challenges.
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-4 bg-arin-orange text-white rounded-lg font-semibold text-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
        >
          Get Solutions
        </Link>
      </section>
    </div>
  );
};

export default TechnologySolutions;
