import { Link } from "react-router-dom";
import ThreadWeave from "./ThreadWeave";

export default function EnquiryBanner() {
  return (
    <section className="relative bg-ink text-paper py-20 overflow-hidden">
      <ThreadWeave className="absolute inset-0 w-full h-full opacity-60" variant="light" />
      <div className="relative max-w-4xl mx-auto px-5 text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-4">Lot Open &middot; Enquiries Welcome</p>
        <h2 className="font-display text-3xl md:text-5xl mb-6 leading-tight">
          Looking for a Reliable Yarn or Textile Supply Partner?
        </h2>
        <p className="text-paper/70 max-w-xl mx-auto mb-9">
          Tell us your specification, volume and timeline &mdash; our team will respond with
          availability, pricing and lead time within one business day.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="bg-maroon hover:bg-maroon-2 text-paper px-7 py-3.5 rounded-sm font-medium tracking-wide transition-colors"
          >
            Request a Quote
          </Link>
          <Link
            to="/contact"
            className="border border-paper/30 hover:border-gold hover:text-gold px-7 py-3.5 rounded-sm font-medium tracking-wide transition-colors"
          >
            Discuss Your Requirement
          </Link>
        </div>
      </div>
    </section>
  );
}
