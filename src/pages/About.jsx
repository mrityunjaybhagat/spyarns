import ThreadWeave from "../components/ThreadWeave";
import EnquiryBanner from "../components/EnquiryBanner";
import factoryStitching from "../assets/images/factory-stitching.jpg";

const timeline = [
  { year: "1991", text: "S.P. Yarns founded in Kolkata as a cotton and yarn trading house." },
  { year: "2000s", text: "Expanded into spinning and vertical integration across raw cotton, yarn and fabric." },
  { year: "2010s", text: "Built export relationships across South &amp; Southeast Asia and Latin America." },
  { year: "Today", text: "A vertically integrated supplier serving domestic and international manufacturers." },
];

const values = [
  { title: "Honesty", desc: "Transparent dealing with every supplier and buyer, at every stage of the order." },
  { title: "Consistency", desc: "The same quality, lot after lot, container after container." },
  { title: "Craft", desc: "Regular upgradation of infrastructure and continual upskilling of our workforce." },
  { title: "Partnership", desc: "Long relationships built on reliability, not one-off transactions." },
];

const capabilities = [
  { title: "Manufacturing", desc: "Spinning and processing across cotton, polyester, viscose and blended yarns." },
  { title: "Sourcing", desc: "Established supplier network for raw cotton, fibre and cotton waste." },
  { title: "Trading", desc: "Domestic and cross-border trading of yarn, fabric and finished apparel." },
  { title: "Export", desc: "End-to-end export documentation, logistics coordination and compliance." },
];

export default function About() {
  return (
    <div>
      <section className="relative bg-ink text-paper overflow-hidden">
        <ThreadWeave className="absolute inset-0 w-full h-full opacity-40" variant="light" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8 py-24 text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-4">About Us</p>
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6">
            Thirty-three years of building on heritage.
          </h1>
          <p className="text-paper/70 text-lg max-w-2xl mx-auto">
            From a single trading desk to a vertically integrated textile business &mdash;
            our story is one of consistency, honest dealing and long relationships.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 grid md:grid-cols-2 gap-14 items-start">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Our Story</p>
          <h2 className="font-display text-3xl md:text-4xl mb-6 leading-tight">1991 marked a turning point for the textile industry.</h2>
          <p className="text-slate leading-relaxed mb-4">
            That year saw the birth of S.P. Yarns. Since then, we have worked to become
            pioneers across a vast range of products &mdash; raw cotton and waste, yarns,
            fabrics and apparel &mdash; carving a niche not only in the domestic market but
            in international markets as well.
          </p>
          <p className="text-slate leading-relaxed mb-4">
            As a vertically integrated organisation, we maintain control over the process of
            transforming fibre into finished goods. Every step passes through a rigorous
            quality check &mdash; producing high-quality goods is not simply a need, but a
            habit at S.P. Yarns.
          </p>
          <p className="text-slate leading-relaxed">
            The secret to our success is two-fold: our expertise, and the experience behind
            it. Honesty and transparency are the virtues through which we continue to earn
            the patronage of customers who have supported us for more than three decades.
          </p>
        </div>
        <div>
          <div className="rounded-md overflow-hidden mb-8">
            <img src={factoryStitching} alt="S.P. Yarns garment production floor" className="w-full h-full object-cover aspect-[4/3]" />
          </div>
          <div className="space-y-4">
            {timeline.map((t) => (
              <div key={t.year} className="flex gap-5 border-l-2 border-maroon pl-5 py-1">
                <div className="w-20 shrink-0 font-display text-lg text-maroon">{t.year}</div>
                <p className="text-slate text-sm leading-relaxed pt-1">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-paper-2 py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10">
          <div className="bg-paper border border-ink/10 rounded-md p-8">
            <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Mission</p>
            <p className="font-display text-2xl leading-snug">
              To deliver consistent, high-quality yarn and textile products that our
              partners can build their own businesses on.
            </p>
          </div>
          <div className="bg-paper border border-ink/10 rounded-md p-8">
            <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Vision</p>
            <p className="font-display text-2xl leading-snug">
              To be recognised globally as a dependable, vertically integrated partner
              from fibre to finished fabric.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Core Values</p>
        <h2 className="font-display text-3xl md:text-4xl mb-12 max-w-xl">What guides how we work.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div key={v.title} className="border-t border-ink/15 pt-5">
              <h3 className="font-display text-xl mb-2">{v.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-ink text-paper py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-3">Business Capabilities</p>
          <h2 className="font-display text-3xl md:text-4xl mb-12 max-w-xl">Manufacturing, sourcing, trading and export &mdash; under one roof.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((c) => (
              <div key={c.title} className="border-t border-paper/20 pt-5">
                <h3 className="font-display text-xl mb-2">{c.title}</h3>
                <p className="text-paper/65 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership placeholder */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Leadership</p>
        <h2 className="font-display text-3xl md:text-4xl mb-12 max-w-xl">Guided by hands-on, family leadership.</h2>
        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl">
          {["Managing Director", "Director &ndash; Operations", "Director &ndash; Exports"].map((role) => (
            <div key={role} className="text-center">
              <div className="w-full aspect-square rounded-full bg-paper-2 border border-ink/10 mb-4" />
              <p className="font-display text-lg">Name Placeholder</p>
              <p className="text-sm text-slate" dangerouslySetInnerHTML={{ __html: role }} />
            </div>
          ))}
        </div>
      </section>

      <EnquiryBanner />
    </div>
  );
}
