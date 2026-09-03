import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ThreadWeave from "../components/ThreadWeave";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const prefill = searchParams.get("product") || searchParams.get("role") || "";
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="relative bg-ink text-paper overflow-hidden">
        <ThreadWeave className="absolute inset-0 w-full h-full opacity-40" variant="light" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8 py-20 text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-4">Contact</p>
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6">Send a Business Enquiry</h1>
          <p className="text-paper/70 text-lg max-w-2xl mx-auto">
            Share your requirement and our team will respond with availability, pricing
            and lead time within one business day.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 grid lg:grid-cols-5 gap-14">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Marketing Office</p>
            <p className="text-slate leading-relaxed">
              3 Pretoria Street, Chandra Kunj Building, 2nd Floor,<br />Kolkata &ndash; 700071, West Bengal, India
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Registered Office</p>
            <p className="text-slate leading-relaxed">
              115 Utkaimoni Gopa Bandhu Sarani,<br />Kolkata &ndash; 700007, West Bengal, India
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Phone</p>
            <p className="text-slate"><a href="tel:+913340069271" className="hover:text-maroon">+91 33 4006 9271</a></p>
            <p className="text-slate"><a href="tel:+919903569627" className="hover:text-maroon">+91 99035 69627</a></p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Email</p>
            <p className="text-slate"><a href="mailto:info@spyarns.in" className="hover:text-maroon">info@spyarns.in</a></p>
          </div>
        </div>

        <div className="lg:col-span-3">
          {submitted ? (
            <div className="bg-paper-2 border border-ink/10 rounded-md p-10 text-center">
              <h3 className="font-display text-2xl mb-3">Thank you &mdash; your enquiry has been received.</h3>
              <p className="text-slate">Our team will get back to you within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wide text-slate/70 mb-2">Full Name</label>
                  <input required type="text" className="w-full border border-ink/20 rounded-sm px-4 py-3 focus:outline-none focus:border-maroon" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wide text-slate/70 mb-2">Company Name</label>
                  <input type="text" className="w-full border border-ink/20 rounded-sm px-4 py-3 focus:outline-none focus:border-maroon" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wide text-slate/70 mb-2">Email</label>
                  <input required type="email" className="w-full border border-ink/20 rounded-sm px-4 py-3 focus:outline-none focus:border-maroon" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wide text-slate/70 mb-2">Phone</label>
                  <input type="tel" className="w-full border border-ink/20 rounded-sm px-4 py-3 focus:outline-none focus:border-maroon" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wide text-slate/70 mb-2">Country</label>
                <input type="text" className="w-full border border-ink/20 rounded-sm px-4 py-3 focus:outline-none focus:border-maroon" />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wide text-slate/70 mb-2">Requirement / Message</label>
                <textarea
                  rows={5}
                  defaultValue={prefill ? `Enquiry regarding: ${prefill}` : ""}
                  className="w-full border border-ink/20 rounded-sm px-4 py-3 focus:outline-none focus:border-maroon resize-none"
                />
              </div>
              <button type="submit" className="bg-maroon hover:bg-maroon-2 text-paper px-8 py-3.5 rounded-sm font-medium tracking-wide transition-colors">
                Submit Enquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
