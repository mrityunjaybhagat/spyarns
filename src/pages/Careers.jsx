import ThreadWeave from "../components/ThreadWeave";
import { Link } from "react-router-dom";

const perks = [
  { title: "Hands-on Learning", desc: "Work directly across sourcing, production and export operations." },
  { title: "Long-term Growth", desc: "A three-decade business built on promoting from within." },
  { title: "Stable Team", desc: "Low turnover, close-knit teams across our Kolkata offices." },
];

const openings = [
  { role: "Export Documentation Executive", location: "Kolkata, WB", type: "Full-time" },
  { role: "Quality Control Associate", location: "Kolkata, WB", type: "Full-time" },
  { role: "Merchandising Executive", location: "Kolkata, WB", type: "Full-time" },
];

export default function Careers() {
  return (
    <div>
      <section className="relative bg-ink text-paper overflow-hidden">
        <ThreadWeave className="absolute inset-0 w-full h-full opacity-40" variant="light" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8 py-24 text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-4">Careers</p>
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6">Build your career in textiles.</h1>
          <p className="text-paper/70 text-lg max-w-2xl mx-auto">
            We're a small, hands-on team spanning sourcing, production and export &mdash;
            and we grow by developing people who grow with us.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="grid sm:grid-cols-3 gap-8 mb-20">
          {perks.map((p) => (
            <div key={p.title} className="border-t border-ink/15 pt-5">
              <h3 className="font-display text-xl mb-2">{p.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Current Openings</p>
        <h2 className="font-display text-3xl md:text-4xl mb-10 max-w-xl">Open roles at S.P. Yarns.</h2>
        <div className="divide-y divide-ink/10 border-t border-b border-ink/10 mb-12">
          {openings.map((o) => (
            <div key={o.role} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-6">
              <div>
                <h3 className="font-display text-lg">{o.role}</h3>
                <p className="text-sm text-slate">{o.location} &middot; {o.type}</p>
              </div>
              <Link
                to={`/contact?role=${encodeURIComponent(o.role)}`}
                className="inline-flex items-center text-sm font-medium border-b-2 border-maroon pb-1 hover:text-maroon w-fit"
              >
                Apply Now &rarr;
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-paper-2 rounded-md p-8 text-center">
          <h3 className="font-display text-2xl mb-3">Don't see a role that fits?</h3>
          <p className="text-slate mb-6 max-w-md mx-auto">
            We're always open to hearing from people with textile industry experience.
            Send your profile and we'll keep it on file.
          </p>
          <Link to="/contact?role=General%20Application" className="inline-block bg-maroon hover:bg-maroon-2 text-paper px-7 py-3 rounded-sm font-medium transition-colors">
            Send Your Profile
          </Link>
        </div>
      </section>
    </div>
  );
}
