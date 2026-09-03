import ThreadWeave from "../components/ThreadWeave";
import EnquiryBanner from "../components/EnquiryBanner";
import rawCottonFibre from "../assets/images/raw-cotton-fibre.jpg";

const qualityPoints = [
  { title: "Material Inspection", desc: "Incoming fibre and cotton checked against agreed grade before it enters production." },
  { title: "Supplier Evaluation", desc: "Suppliers assessed and reviewed regularly to protect consistency of input material." },
  { title: "Product Consistency", desc: "Process controls at every stage to keep count, strength and colour within tolerance." },
  { title: "Quality Checks Before Dispatch", desc: "Final inspection and sample retention before any lot is packed for shipment." },
];

const sustainability = [
  { title: "Responsible Sourcing", desc: "Preference for suppliers who can demonstrate traceable, responsible fibre origin." },
  { title: "Waste Reduction", desc: "Cotton waste and comber noil recovered and directed into secondary product lines rather than discarded." },
  { title: "Recyclable & Sustainable Practices", desc: "Recycled polyester (rPET) offered alongside virgin fibre where buyers request it." },
];

export default function Quality() {
  return (
    <div>
      <section className="relative bg-ink text-paper overflow-hidden">
        <ThreadWeave className="absolute inset-0 w-full h-full opacity-40" variant="light" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8 py-24 text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-4">Quality &amp; Sustainability</p>
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6">Quality is a habit, not an inspection.</h1>
          <p className="text-paper/70 text-lg max-w-2xl mx-auto">
            Every lot passes through material inspection, in-process checks and a final
            review before it is cleared for dispatch.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Quality Control</p>
        <h2 className="font-display text-3xl md:text-4xl mb-12 max-w-xl">Checked at every stage of production.</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {qualityPoints.map((q, i) => (
            <div key={q.title} className="flex gap-5 border-t border-ink/15 pt-5">
              <p className="font-mono text-xs text-gold shrink-0">{String(i + 1).padStart(2, "0")}</p>
              <div>
                <h3 className="font-display text-xl mb-2">{q.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{q.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper-2 py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Sustainability</p>
            <h2 className="font-display text-3xl md:text-4xl mb-6 leading-tight">Reducing waste across the production cycle.</h2>
            <div className="space-y-6">
              {sustainability.map((s) => (
                <div key={s.title}>
                  <h3 className="font-display text-lg mb-1">{s.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-md overflow-hidden aspect-[4/5]">
            <img
              src={rawCottonFibre}
              alt="Raw cotton fibre"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Certifications</p>
        <h2 className="font-display text-3xl md:text-4xl mb-6 max-w-xl">Documentation available on request.</h2>
        <p className="text-slate leading-relaxed max-w-2xl">
          Current certifications and compliance documents can be shared directly with
          buyers as part of the enquiry process. Get in touch to request the latest
          documentation relevant to your order.
        </p>
      </section>

      <EnquiryBanner />
    </div>
  );
}
