import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const WebDevelopment = () => {
  const services = [
    {
      title: "Responsive Web Design",
      description:
        "Beautiful, responsive websites that look great on all devices and screen sizes.",
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
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Full-featured online stores with secure payment processing and inventory management.",
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
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
    {
      title: "Progressive Web Apps",
      description:
        "PWAs that combine the best of web and mobile apps for exceptional user experiences.",
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
    {
      title: "Content Management Systems",
      description:
        "Custom CMS solutions that make it easy to manage and update your website content.",
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
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Web Development Services - ARIN IT Solutions"
        description="Expert web development services. We build responsive, fast, and beautiful websites that convert visitors into customers."
        path="/services/web-development"
        keywords="web development, responsive web design, e-commerce, progressive web apps, CMS development"
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Web Development Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern, responsive websites that engage users and drive business
            results. From simple landing pages to complex web applications.
          </p>
        </div>

        <div className="glass-strong rounded-3xl p-12 md:p-16 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Web Development?
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
                  <span>Mobile-first responsive design</span>
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
                  <span>SEO-optimized for search engines</span>
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
                  <span>Fast loading times and performance</span>
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
                  <span>Modern frameworks and technologies</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Technologies & Frameworks
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  React
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  Next.js
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  Vue.js
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  Angular
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  WordPress
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  Shopify
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Web Development Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-strong rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 text-white">
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
          Ready to Build Your Website?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's create a stunning website that drives results for your business.
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-4 bg-arin-orange text-white rounded-lg font-semibold text-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
        >
          Start Your Project
        </Link>
      </section>
    </div>
  );
};

export default WebDevelopment;
