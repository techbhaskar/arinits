import { Link } from "react-router-dom";
import SEO from "./SEO";

export interface SpecializedServiceProps {
  title: string;
  description: string;
  path: string;
  keywords: string;
  eyebrow: string;
  heading: string;
  introduction: string;
  capabilities: Array<{ title: string; description: string }>;
  process: Array<{ title: string; description: string }>;
  technologies: string[];
  outcomes: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedLinks: Array<{ to: string; label: string }>;
}

const SpecializedService = ({
  title,
  description,
  path,
  keywords,
  eyebrow,
  heading,
  introduction,
  capabilities,
  process,
  technologies,
  outcomes,
  faqs,
  relatedLinks,
}: SpecializedServiceProps) => (
  <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
    <SEO title={title} description={description} path={path} keywords={keywords} />

    <section className="relative pt-36 pb-20 border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_45%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-arin-orange font-semibold tracking-widest uppercase mb-4">{eyebrow}</p>
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight max-w-5xl">{heading}</h1>
        <p className="mt-7 text-xl text-gray-300 leading-relaxed max-w-4xl">{introduction}</p>
        <Link to="/contact" className="inline-block mt-9 px-8 py-4 bg-arin-orange rounded-lg font-semibold hover:bg-orange-600 transition-colors">
          Discuss Your Project
        </Link>
      </div>
    </section>

    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
      <section>
        <h2 className="text-3xl font-bold mb-8">What We Deliver</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((item) => (
            <article key={item.title} className="glass-strong-dark rounded-2xl p-7 border border-white/10">
              <h3 className="text-xl font-bold text-arin-orange mb-3">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-7">How We Work</h2>
          <ol className="space-y-6">
            {process.map((item, index) => (
              <li key={item.title} className="flex gap-4">
                <span className="flex-none w-9 h-9 rounded-full bg-arin-orange flex items-center justify-center font-bold">{index + 1}</span>
                <div><h3 className="text-xl font-semibold">{item.title}</h3><p className="text-gray-300 mt-2 leading-relaxed">{item.description}</p></div>
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">Technology Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {technologies.map((technology) => <span key={technology} className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-gray-200">{technology}</span>)}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Engineering Outcomes</h2>
            <ul className="space-y-3 text-gray-300">
              {outcomes.map((outcome) => <li key={outcome} className="flex gap-3"><span className="text-arin-orange">✓</span><span>{outcome}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-white/10 p-7 bg-white/5">
              <h3 className="text-xl font-semibold text-arin-orange">{faq.question}</h3>
              <p className="text-gray-300 mt-3 leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 pt-12">
        <h2 className="text-2xl font-bold mb-5">Related Expertise</h2>
        <div className="flex flex-wrap gap-4">
          {relatedLinks.map((link) => <Link key={link.to} to={link.to} className="text-arin-orange hover:underline">{link.label} →</Link>)}
        </div>
      </section>
    </main>
  </div>
);

export default SpecializedService;
