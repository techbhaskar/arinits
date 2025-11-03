import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-strong border-t border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Logo size="sm" />
            <p className="mt-4 text-gray-700 max-w-md">
              ARIN IT Solutions - Premier software development and consulting
              company delivering innovative technology solutions for businesses
              worldwide.
            </p>
            <div className="mt-6 space-y-2 text-gray-700">
              <p>Email: info@arinits.com</p>
              <p>Website: www.arinits.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-arin-orange transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-arin-orange transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-700 hover:text-arin-orange transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-700 hover:text-arin-orange transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/software-development"
                  className="text-gray-700 hover:text-arin-orange transition-colors"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/it-consulting"
                  className="text-gray-700 hover:text-arin-orange transition-colors"
                >
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/services/web-development"
                  className="text-gray-700 hover:text-arin-orange transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/app-development"
                  className="text-gray-700 hover:text-arin-orange transition-colors"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/technology-solutions"
                  className="text-gray-700 hover:text-arin-orange transition-colors"
                >
                  Technology Solutions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/30 text-center text-gray-700">
          <p>&copy; {currentYear} ARIN IT Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
