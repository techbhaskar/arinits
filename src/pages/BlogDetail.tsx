import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";

// Helper function to generate slug from title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

// Blog posts data - should match Blog.tsx
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Modern Web Development",
    slug: "10-essential-tips-for-modern-web-development",
    excerpt:
      "Discover the latest best practices and techniques for building scalable, performant web applications in 2024.",
    author: "Arin IT Solutions",
    date: "March 15, 2024",
    category: "Web Development",
    readTime: "5 min read",
    image: "/api/placeholder/800/400",
    gradient: "from-orange-500 to-orange-600",
    content: `
      <p>Modern web development has evolved significantly over the past few years. With new frameworks, tools, and best practices emerging constantly, it's essential to stay updated with the latest trends and techniques.</p>
      
      <h2>1. Embrace Component-Based Architecture</h2>
      <p>Component-based architecture has become the standard for modern web development. Frameworks like React, Vue, and Angular encourage building reusable components that make your codebase more maintainable and scalable.</p>
      
      <h2>2. Prioritize Performance Optimization</h2>
      <p>Performance is crucial for user experience. Implement code splitting, lazy loading, and optimize images to ensure fast load times. Use tools like Lighthouse to regularly audit your application's performance.</p>
      
      <h2>3. Implement Responsive Design</h2>
      <p>With mobile traffic accounting for over 50% of web traffic, responsive design is no longer optional. Use CSS Grid and Flexbox to create flexible layouts that work across all device sizes.</p>
      
      <h2>4. Focus on Accessibility</h2>
      <p>Accessibility should be a priority from the start. Ensure proper semantic HTML, ARIA labels, keyboard navigation, and sufficient color contrast to make your applications usable by everyone.</p>
      
      <h2>5. Use TypeScript for Type Safety</h2>
      <p>TypeScript provides static type checking that helps catch errors early in development. It improves code quality, makes refactoring safer, and enhances IDE support.</p>
      
      <h2>6. Implement Proper State Management</h2>
      <p>Choose the right state management solution for your application size. For smaller apps, React Context or Vue's reactive system might suffice. For complex applications, consider Redux, Zustand, or Pinia.</p>
      
      <h2>7. Write Unit and Integration Tests</h2>
      <p>Testing ensures your application works as expected and prevents regressions. Use testing frameworks like Jest, Vitest, or Testing Library to write comprehensive tests.</p>
      
      <h2>8. Optimize for SEO</h2>
      <p>Search engine optimization is crucial for visibility. Use semantic HTML, proper meta tags, structured data, and ensure fast page load times to improve your search rankings.</p>
      
      <h2>9. Implement Security Best Practices</h2>
      <p>Security should never be an afterthought. Sanitize user inputs, use HTTPS, implement proper authentication, and stay updated with security patches and dependencies.</p>
      
      <h2>10. Keep Learning and Adapting</h2>
      <p>The web development landscape changes rapidly. Stay updated with new technologies, follow industry leaders, participate in communities, and continuously improve your skills.</p>
      
      <p>By following these essential tips, you'll be well-equipped to build modern, performant, and maintainable web applications that meet the demands of today's users.</p>
    `,
  },
  {
    id: 2,
    title: "Cloud Migration: A Complete Guide",
    slug: "cloud-migration-a-complete-guide",
    excerpt:
      "Learn how to successfully migrate your infrastructure to the cloud, reduce costs, and improve scalability.",
    author: "Arin IT Solutions",
    date: "March 10, 2024",
    category: "Cloud & DevOps",
    readTime: "8 min read",
    image: "/api/placeholder/800/400",
    gradient: "from-orange-500 to-orange-600",
    content: `
      <p>Cloud migration has become a critical strategy for businesses looking to modernize their infrastructure, reduce costs, and improve scalability. This comprehensive guide will walk you through the entire migration process.</p>
      
      <h2>Understanding Cloud Migration</h2>
      <p>Cloud migration involves moving your applications, data, and IT processes from on-premises infrastructure to cloud-based platforms. This transition offers numerous benefits including cost savings, improved scalability, and enhanced flexibility.</p>
      
      <h2>Benefits of Cloud Migration</h2>
      <ul>
        <li>Cost Reduction: Pay only for what you use, eliminating upfront infrastructure costs</li>
        <li>Scalability: Easily scale resources up or down based on demand</li>
        <li>Disaster Recovery: Improved backup and recovery capabilities</li>
        <li>Global Reach: Deploy applications closer to users worldwide</li>
        <li>Security: Enterprise-grade security features and compliance</li>
      </ul>
      
      <h2>Migration Strategies</h2>
      <p>There are several migration strategies to consider:</p>
      <ul>
        <li><strong>Rehosting (Lift and Shift):</strong> Move applications without modification</li>
        <li><strong>Replatforming:</strong> Make minor optimizations during migration</li>
        <li><strong>Refactoring:</strong> Redesign applications to leverage cloud-native features</li>
        <li><strong>Repurchasing:</strong> Move to a different product or SaaS solution</li>
        <li><strong>Retiring:</strong> Decommission applications that are no longer needed</li>
      </ul>
      
      <h2>Key Considerations</h2>
      <p>Before migrating, consider factors such as compliance requirements, data security, application dependencies, and migration costs. A thorough assessment phase is crucial for success.</p>
      
      <p>Cloud migration is a complex but rewarding process that can transform your business operations when executed properly.</p>
    `,
  },
  {
    id: 3,
    title: "Building Secure Mobile Applications",
    slug: "building-secure-mobile-applications",
    excerpt:
      "Explore security best practices for mobile app development, from authentication to data protection.",
    author: "Arin IT Solutions",
    date: "March 5, 2024",
    category: "Mobile Development",
    readTime: "6 min read",
    image: "/api/placeholder/800/400",
    gradient: "from-orange-500 to-orange-600",
    content: `
      <p>Mobile application security is paramount in today's digital landscape. With sensitive data being accessed through mobile devices, implementing robust security measures is essential.</p>
      
      <h2>Authentication and Authorization</h2>
      <p>Implement strong authentication mechanisms including biometric authentication, multi-factor authentication (MFA), and secure token management. Use OAuth 2.0 or similar protocols for secure authorization.</p>
      
      <h2>Data Encryption</h2>
      <p>Encrypt sensitive data both in transit and at rest. Use TLS/SSL for network communications and implement device-level encryption for stored data.</p>
      
      <h2>Secure API Communication</h2>
      <p>Ensure all API communications are secured with proper authentication tokens, request signing, and rate limiting to prevent abuse and unauthorized access.</p>
      
      <h2>Code Obfuscation</h2>
      <p>Protect your application code from reverse engineering by using code obfuscation techniques. This makes it harder for attackers to understand and exploit your application logic.</p>
      
      <h2>Regular Security Audits</h2>
      <p>Conduct regular security audits and penetration testing to identify vulnerabilities. Keep dependencies updated and patch security issues promptly.</p>
      
      <p>By following these security best practices, you can build mobile applications that protect user data and maintain trust.</p>
    `,
  },
  {
    id: 4,
    title: "The Future of AI in Software Development",
    slug: "the-future-of-ai-in-software-development",
    excerpt:
      "How artificial intelligence is transforming the software development lifecycle and developer productivity.",
    author: "Arin IT Solutions",
    date: "February 28, 2024",
    category: "Technology",
    readTime: "10 min read",
    image: "/api/placeholder/800/400",
    gradient: "from-orange-500 to-orange-600",
    content: `
      <p>Artificial Intelligence is revolutionizing software development, transforming how developers write code, debug applications, and solve complex problems.</p>
      
      <h2>AI-Powered Code Generation</h2>
      <p>Tools like GitHub Copilot and ChatGPT are enabling developers to generate code faster by providing intelligent suggestions and auto-completion. These AI assistants understand context and can write entire functions based on comments and requirements.</p>
      
      <h2>Automated Testing and Quality Assurance</h2>
      <p>AI is being used to automatically generate test cases, identify potential bugs, and ensure code quality. Machine learning algorithms can analyze code patterns and predict where errors are likely to occur.</p>
      
      <h2>Code Review and Optimization</h2>
      <p>AI-powered code review tools can analyze pull requests, suggest improvements, and identify security vulnerabilities faster than human reviewers. They can also optimize code for performance and maintainability.</p>
      
      <h2>Intelligent Debugging</h2>
      <p>AI systems can analyze error logs, stack traces, and user reports to quickly identify root causes of bugs. This significantly reduces debugging time and improves application reliability.</p>
      
      <h2>The Future Landscape</h2>
      <p>As AI continues to evolve, we can expect even more sophisticated tools that will further enhance developer productivity while maintaining code quality and security standards.</p>
    `,
  },
  {
    id: 5,
    title: "Design Systems: Building Consistent UIs",
    slug: "design-systems-building-consistent-uis",
    excerpt:
      "Create maintainable and scalable design systems that ensure consistency across your applications.",
    author: "Arin IT Solutions",
    date: "February 20, 2024",
    category: "Design",
    readTime: "7 min read",
    image: "/api/placeholder/800/400",
    gradient: "from-orange-500 to-orange-600",
    content: `
      <p>Design systems are comprehensive collections of reusable components, guidelines, and standards that ensure consistency and efficiency in UI development.</p>
      
      <h2>Benefits of Design Systems</h2>
      <ul>
        <li>Consistency across products and platforms</li>
        <li>Faster development through reusable components</li>
        <li>Improved collaboration between designers and developers</li>
        <li>Better user experience through standardized patterns</li>
        <li>Easier maintenance and updates</li>
      </ul>
      
      <h2>Key Components</h2>
      <p>A well-designed system includes:</p>
      <ul>
        <li>Color palettes and typography scales</li>
        <li>Component libraries with code examples</li>
        <li>Design tokens for spacing, shadows, and animations</li>
        <li>Usage guidelines and best practices</li>
        <li>Accessibility standards</li>
      </ul>
      
      <h2>Implementation Best Practices</h2>
      <p>Start with foundational elements like colors and typography, then build component libraries. Document everything thoroughly and ensure your design system is accessible to all team members.</p>
      
      <p>Investing in a robust design system pays dividends in consistency, efficiency, and user satisfaction.</p>
    `,
  },
  {
    id: 6,
    title: "DevOps Best Practices for Modern Teams",
    slug: "devops-best-practices-for-modern-teams",
    excerpt:
      "Streamline your development workflow with proven DevOps strategies and automation techniques.",
    author: "Arin IT Solutions",
    date: "February 15, 2024",
    category: "DevOps",
    readTime: "9 min read",
    image: "/api/placeholder/800/400",
    gradient: "from-orange-500 to-orange-600",
    content: `
      <p>DevOps practices have become essential for modern software teams looking to deliver high-quality software faster and more reliably.</p>
      
      <h2>Continuous Integration and Deployment</h2>
      <p>CI/CD pipelines automate the build, test, and deployment processes, enabling teams to release code frequently and reliably. Tools like Jenkins, GitHub Actions, and GitLab CI facilitate this automation.</p>
      
      <h2>Infrastructure as Code</h2>
      <p>IaC allows you to manage infrastructure through code, making it version-controlled, repeatable, and consistent. Tools like Terraform and Ansible help automate infrastructure provisioning.</p>
      
      <h2>Containerization</h2>
      <p>Docker and Kubernetes have revolutionized application deployment. Containers ensure consistency across environments and simplify scaling and management.</p>
      
      <h2>Monitoring and Observability</h2>
      <p>Implement comprehensive monitoring using tools like Prometheus, Grafana, and ELK stack. Monitor application performance, infrastructure metrics, and user experience to identify issues quickly.</p>
      
      <h2>Security Integration</h2>
      <p>Integrate security practices throughout the DevOps pipeline. Use automated security scanning, vulnerability assessments, and compliance checks to ensure secure deployments.</p>
      
      <p>Adopting these DevOps best practices will help your team deliver software faster, more reliably, and with higher quality.</p>
    `,
  },
];

const BlogDetail = () => {
  const { name } = useParams<{ name: string }>();

  const post = blogPosts.find((p) => p.slug === name);

  if (!post) {
    return (
      <div className="min-h-screen overflow-x-hidden flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-300 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="inline-block px-8 py-3 bg-gradient-to-r from-arin-orange to-orange-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title={`${post.title} - ARIN IT Solutions Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        keywords={`${post.category}, ${post.title}, blog, technology`}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-24 pb-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-arin-orange/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-4"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(184, 107, 35, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-arin-orange to-orange-500 text-white rounded-full text-sm font-semibold text-white">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-gray-300">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-arin-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-arin-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-arin-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div className="relative pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-gray-900 pt-8">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div
            className={`h-96 bg-gradient-to-br ${post.gradient} rounded-3xl mb-12 relative overflow-hidden`}
          >
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold opacity-4">
              {post.category}
            </div>
          </div>

          {/* Article Body */}
          <article className="glass-strong-dark rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
            <div
              className="article-content text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
              }}
            />
          </article>

          {/* Back to Blog Button */}
          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-arin-orange to-orange-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
