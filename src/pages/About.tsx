import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function About() {
  return <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
    <SEO title="About ARIN IT Solutions | Software Engineering Hyderabad" description="Learn how ARIN IT Solutions approaches enterprise software, FinTech, AI, Java microservices, cloud, DevOps, and long-term technology partnerships." path="/about" keywords="ARIN IT Solutions Hyderabad, software engineering company, enterprise technology consulting" />
    <header className="pt-36 pb-20 border-b border-white/10"><div className="max-w-5xl mx-auto px-4"><p className="text-arin-orange uppercase tracking-widest font-semibold">About ARIN</p><h1 className="text-5xl sm:text-6xl font-bold mt-4">Engineering Software That Businesses Can Operate and Evolve</h1><p className="text-xl text-gray-300 leading-relaxed mt-7">ARIN IT Solutions is a Hyderabad-based software engineering and consulting company focused on enterprise applications, payments and FinTech, Java microservices, AI systems, cloud platforms, DevOps, and cybersecurity.</p></div></header>
    <main className="max-w-5xl mx-auto px-4 py-20 space-y-16">
      <section><h2 className="text-3xl font-bold">Our Approach</h2><div className="grid md:grid-cols-3 gap-6 mt-8">{[
        ["Architecture with context", "We design around business capabilities, data ownership, risk, scale, team structure, and operational reality."],
        ["Production over prototypes", "Security, observability, failure recovery, deployment, and maintainability are part of the design—not later additions."],
        ["Outcomes over output", "We connect engineering decisions to reliability, delivery speed, cost, user experience, and business control."],
      ].map(([title, text]) => <article key={title} className="p-7 rounded-2xl bg-white/5 border border-white/10"><h3 className="text-xl font-bold text-arin-orange">{title}</h3><p className="text-gray-300 mt-3 leading-relaxed">{text}</p></article>)}</div></section>
      <section><h2 className="text-3xl font-bold">Where We Add Value</h2><p className="text-gray-300 text-lg leading-relaxed mt-5">We help teams shape new digital products, stabilize complex platforms, modernize legacy systems, design service boundaries, integrate external ecosystems, improve delivery pipelines, and introduce AI responsibly. Our portfolio includes AI-native data platforms, emotional-intelligence architecture, enterprise microservices, HR systems, and logistics workflows.</p><div className="flex flex-wrap gap-5 mt-6"><Link className="text-arin-orange hover:underline" to="/portfolio">View project portfolio →</Link><Link className="text-arin-orange hover:underline" to="/team">Meet the team →</Link><Link className="text-arin-orange hover:underline" to="/about/bhaskara-rao">Engineering leadership →</Link></div></section>
      <section className="rounded-3xl bg-gradient-to-r from-orange-700 to-orange-500 p-10"><h2 className="text-3xl font-bold">Start with the problem, not a predetermined stack.</h2><p className="text-orange-50 mt-4 text-lg">Tell us what is limiting delivery, reliability, scale, or customer experience. We’ll help frame the right engineering path.</p><Link to="/contact" className="inline-block mt-7 px-7 py-3 bg-white text-orange-700 rounded-lg font-bold">Contact ARIN IT Solutions</Link></section>
    </main>
  </div>;
}
