import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (servicesCloseTimeoutRef.current) {
        clearTimeout(servicesCloseTimeoutRef.current);
      }
    };
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/team", label: "Team" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  const servicesLinks = [
    { path: "/services/software-development", label: "Software Development" },
    { path: "/services/it-consulting", label: "IT Consulting" },
    { path: "/services/web-development", label: "Web Development" },
    { path: "/services/app-development", label: "App Development" },
    { path: "/services/technology-solutions", label: "Technology Solutions" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-strong shadow-lg" : "glass"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <Logo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "bg-arin-orange text-white"
                    : "text-gray-700 hover:bg-white/50 hover:text-arin-orange"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (servicesCloseTimeoutRef.current) {
                  clearTimeout(servicesCloseTimeoutRef.current);
                  servicesCloseTimeoutRef.current = null;
                }
                setIsServicesOpen(true);
              }}
              onMouseLeave={() => {
                servicesCloseTimeoutRef.current = setTimeout(() => {
                  setIsServicesOpen(false);
                }, 200); // Small delay to allow moving to dropdown
              }}
            >
              <button
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  servicesLinks.some((link) => location.pathname === link.path)
                    ? "bg-arin-orange text-white"
                    : "text-gray-700 hover:bg-white/50 hover:text-arin-orange"
                }`}
              >
                Services
                <svg
                  className={`inline-block w-4 h-4 ml-1 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 glass-strong rounded-xl shadow-2xl py-2 z-50"
                  onMouseEnter={() => {
                    if (servicesCloseTimeoutRef.current) {
                      clearTimeout(servicesCloseTimeoutRef.current);
                      servicesCloseTimeoutRef.current = null;
                    }
                  }}
                  onMouseLeave={() => {
                    servicesCloseTimeoutRef.current = setTimeout(() => {
                      setIsServicesOpen(false);
                    }, 200);
                  }}
                >
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => {
                        setIsServicesOpen(false);
                        if (servicesCloseTimeoutRef.current) {
                          clearTimeout(servicesCloseTimeoutRef.current);
                          servicesCloseTimeoutRef.current = null;
                        }
                      }}
                      className={`block px-4 py-3 transition-all duration-200 ${
                        location.pathname === link.path
                          ? "bg-arin-orange text-white"
                          : "text-gray-700 hover:bg-white/50 hover:text-arin-orange"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 glass-strong rounded-b-lg mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "bg-arin-orange text-white"
                    : "text-gray-700 hover:bg-white/50 hover:text-arin-orange"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Services */}
            <div className="mt-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  servicesLinks.some((link) => location.pathname === link.path)
                    ? "bg-arin-orange text-white"
                    : "text-gray-700 hover:bg-white/50 hover:text-arin-orange"
                }`}
              >
                Services
                <svg
                  className={`inline-block w-4 h-4 ml-1 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsServicesOpen(false);
                      }}
                      className={`block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        location.pathname === link.path
                          ? "bg-arin-orange text-white"
                          : "text-gray-700 hover:bg-white/50 hover:text-arin-orange"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
