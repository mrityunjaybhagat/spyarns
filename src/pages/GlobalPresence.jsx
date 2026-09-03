import ThreadWeave from "../components/ThreadWeave";
import EnquiryBanner from "../components/EnquiryBanner";

const markets = [
  { region: "India", desc: "Domestic manufacturing base, spinning and trading operations." },
  { region: "Bangladesh", desc: "Established yarn and fabric supply relationships with regional mills." },
  { region: "Vietnam", desc: "Growing export partnerships across the garment manufacturing sector." },
  { region: "Colombia", desc: "Cross-continental trade relationships serving Latin American buyers." },
  { region: "Thailand", desc: "Dedicated service supporting Southeast Asian textile production." },
];

const process = [
  { step: "Enquiry & Specification", desc: "Buyer shares required count, composition and volume." },
  { step: "Sample & Approval", desc: "Sample lots dispatched for buyer testing and sign-off." },
  { step: "Production Planning", desc: "Order scheduled against mill capacity and delivery window." },
  { step: "Quality Check & Packing", desc: "Every lot inspected and export-packed before dispatch." },
  { step: "Shipment & Documentation", desc: "Logistics coordinated with full export documentation." },
  { step: "Delivery & Support", desc: "Tracking through to arrival, with after-sales support." },
];

export default function GlobalPresence() {
  return (
    <div>
      <section className="relative bg-ink text-paper overflow-hidden">
        <ThreadWeave className="absolute inset-0 w-full h-full opacity-40" variant="light" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8 py-24 text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-4">Global Presence</p>
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6">Coordinated logistics, wherever your mill is.</h1>
          <p className="text-paper/70 text-lg max-w-2xl mx-auto">
            Our presence extends across India, Bangladesh, Vietnam, Colombia and Thailand &mdash;
            offering dedicated service and export coordination in every market we serve.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Markets We Serve</p>
        <h2 className="font-display text-3xl md:text-4xl mb-12 max-w-xl">Five markets, one accountable partner.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((m) => (
            <div key={m.region} className="border border-ink/10 rounded-md p-7 hover:border-maroon transition-colors">
              <h3 className="font-display text-2xl mb-2">{m.region}</h3>
              <p className="text-slate text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper-2 py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Export Process</p>
          <h2 className="font-display text-3xl md:text-4xl mb-12 max-w-xl">From enquiry to delivery.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((p, i) => (
              <div key={p.step} className="border-t border-ink/15 pt-5">
                <p className="font-mono text-xs text-gold mb-2">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-display text-xl mb-2">{p.step}</h3>
                <p className="text-slate text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Logistics Coordination</p>
        <h2 className="font-display text-3xl md:text-4xl mb-6 max-w-xl">Shipping handled end to end.</h2>
        <p className="text-slate leading-relaxed max-w-2xl">
          We coordinate freight forwarding, export documentation and customs clearance across
          sea and air, working with established logistics partners in each of our export
          markets to keep lead times predictable and buyers informed at every stage.
        </p>
      </section>

      <EnquiryBanner />
    </div>
  );
}
