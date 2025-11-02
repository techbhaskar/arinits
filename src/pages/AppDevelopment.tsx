import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const AppDevelopment = () => {
  const services = [
    {
      title: "iOS App Development",
      description:
        "Native iOS applications built with Swift and SwiftUI for seamless iPhone and iPad experiences.",
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
      title: "Android App Development",
      description:
        "Native Android apps using Kotlin and Jetpack Compose for optimal performance and user experience.",
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
      title: "Cross-Platform Development",
      description:
        "Build once, deploy everywhere with React Native and Flutter for iOS and Android.",
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
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
    {
      title: "App Maintenance & Support",
      description:
        "Ongoing maintenance, updates, and support to keep your app running smoothly and securely.",
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
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <SEO
        title="App Development Services - ARIN IT Solutions"
        description="Expert mobile app development services. We create native iOS and Android apps that deliver exceptional user experiences."
        path="/services/app-development"
        keywords="app development, mobile app development, iOS development, Android development, React Native, Flutter"
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Mobile App Development Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Native iOS and Android apps that deliver exceptional user
            experiences. We create apps that users love and businesses rely on.
          </p>
        </div>

        <div className="glass-strong rounded-3xl p-12 md:p-16 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our App Development?
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
                  <span>Native and cross-platform solutions</span>
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
                  <span>Intuitive and user-friendly design</span>
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
                  <span>App Store optimization and deployment</span>
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
                  <span>Ongoing support and updates</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Technologies We Use</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  Swift
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  Kotlin
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  React Native
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  Flutter
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  SwiftUI
                </div>
                <div className="glass-strong-dark rounded-lg p-4 text-center">
                  Jetpack
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our App Development Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-strong rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 text-white">
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
          Ready to Build Your Mobile App?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's turn your app idea into a reality that users will love.
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-4 bg-arin-orange text-white rounded-lg font-semibold text-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
        >
          Start Your App
        </Link>
      </section>
    </div>
  );
};

export default AppDevelopment;
