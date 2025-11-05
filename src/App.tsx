import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

// Lazy load pages for performance
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Team = lazy(() => import("./pages/Team"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const SoftwareDevelopment = lazy(() => import("./pages/SoftwareDevelopment"));
const ITConsulting = lazy(() => import("./pages/ITConsulting"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const AppDevelopment = lazy(() => import("./pages/AppDevelopment"));
const TechnologySolutions = lazy(() => import("./pages/TechnologySolutions"));

// Loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-red-50 to-orange-100">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-arin-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-700 font-semibold">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/team" element={<Team />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:name" element={<BlogDetail />} />
              <Route
                path="/services/software-development"
                element={<SoftwareDevelopment />}
              />
              <Route
                path="/services/it-consulting"
                element={<ITConsulting />}
              />
              <Route
                path="/services/web-development"
                element={<WebDevelopment />}
              />
              <Route
                path="/services/app-development"
                element={<AppDevelopment />}
              />
              <Route
                path="/services/technology-solutions"
                element={<TechnologySolutions />}
              />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
