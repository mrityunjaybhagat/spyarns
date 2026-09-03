import { Link } from "react-router-dom";
import ThreadWeave from "../components/ThreadWeave";
import EnquiryBanner from "../components/EnquiryBanner";
import { productCategories } from "../data/productCategories";
import yarnCones1 from "../assets/images/yarn-cones-1.jpg";
import factoryFloor from "../assets/images/factory-floor.jpg";

const strengths = [
  { title: "Consistent Product Quality", desc: "Every lot is checked against agreed specification before it leaves our floor." },
  { title: "Reliable Global Sourcing", desc: "Established supplier relationships across cotton, polyester and viscose fibre." },
  { title: "Timely Order Fulfilment", desc: "Production and shipment schedules planned around your delivery window." },
  { title: "Custom Product Requirements", desc: "Blends, counts and dye lots built to a buyer's own specification." },
  { title: "International Market Experience", desc: "Three decades of export documentation, logistics and compliance." },
  { title: "Responsive Customer Support", desc: "A single point of contact from enquiry through to delivery." },
];

const industries = [
  "Apparel", "Hosiery & Knitwear", "Home Textiles", "Denim",
  "Industrial Textiles", "Weaving & Knitting", "Garment Manufacturing",
];

const regions = ["India", "Bangladesh", "Vietnam", "Thailand", "Colombia"];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-ink text-paper overflow-hidden">
        <ThreadWeave className="absolute inset-0 w-full h-full opacity-40" variant="light" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-5">Est. 1991 &middot; Kolkata, India</p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] mb-6">
              Yarn, fibre and fabric, spun for the world's supply chains.
            </h1>
            <p className="text-paper/70 text-lg mb-9 max-w-lg">
              S.P. Yarns is a vertically integrated manufacturer and exporter of raw cotton,
              yarn and fabric &mdash; built on consistent quality, honest dealing and three
              decades of trust from buyers across five continents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="bg-maroon hover:bg-maroon-2 text-paper px-7 py-3.5 rounded-sm font-medium tracking-wide transition-colors text-center">
                Explore Our Products
              </Link>
              <Link to="/contact" className="border border-paper/30 hover:border-gold hover:text-gold px-7 py-3.5 rounded-sm font-medium tracking-wide transition-colors text-center">
                Send an Enquiry
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-md overflow-hidden border border-white/10">
              <img
                src={yarnCones1}
                alt="Cotton yarn cones on a spinning frame"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-maroon text-paper px-6 py-4 rounded-sm shadow-xl hidden sm:block">
              <p className="font-display text-3xl leading-none">33+</p>
              <p className="text-xs tracking-wide text-paper/80 mt-1">Years in Manufacture &amp; Export</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 rounded-md overflow-hidden">
          <img
            src={factoryFloor}
            alt="Textile manufacturing floor"
            className="w-full h-full object-cover aspect-[4/3]"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-4">About S.P. Yarns</p>
          <h2 className="font-display text-3xl md:text-4xl mb-5 leading-tight">
            A trusted name in textile manufacture, sourcing and export.
          </h2>
          <p className="text-slate mb-4 leading-relaxed">
            From a single trading desk in 1991, S.P. Yarns has grown into a vertically
            integrated business spanning raw cotton, spun yarn, fabric and finished apparel &mdash;
            serving domestic mills and international buyers alike.
          </p>
          <p className="text-slate mb-8 leading-relaxed">
            Every stage of the process, from fibre selection to final dispatch, passes through
            our own quality checks, giving buyers a single accountable partner from order to delivery.
          </p>
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div>
              <p className="font-display text-3xl text-maroon">33+</p>
              <p className="text-xs text-slate mt-1">Years of Operation</p>
            </div>
            <div>
              <p className="font-display text-3xl text-maroon">8</p>
              <p className="text-xs text-slate mt-1">Product Categories</p>
            </div>
            <div>
              <p className="font-display text-3xl text-maroon">5+</p>
              <p className="text-xs text-slate mt-1">Export Markets</p>
            </div>
          </div>
          <Link to="/about" className="inline-flex items-center gap-2 text-ink font-medium border-b-2 border-maroon pb-1 hover:text-maroon transition-colors">
            Learn More About Us &rarr;
          </Link>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-paper-2 py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Our Range</p>
              <h2 className="font-display text-3xl md:text-4xl">Product Categories</h2>
            </div>
            <Link to="/products" className="text-sm font-medium border-b-2 border-maroon pb-1 hover:text-maroon">
              View Full Catalogue &rarr;
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/products/${cat.slug}`}
                className="group bg-paper border border-ink/10 rounded-md overflow-hidden hover:border-maroon transition-colors flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-lg mb-2">{cat.name}</h3>
                  <p className="text-sm text-slate leading-relaxed mb-3">{cat.description}</p>
                  <span className="mt-auto text-sm font-medium text-ink group-hover:text-maroon">Explore Category &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Why Choose Us</p>
        <h2 className="font-display text-3xl md:text-4xl mb-12 max-w-xl">Built on quality, reliability and three decades of relationships.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {strengths.map((s, i) => (
            <div key={s.title} className="border-t border-ink/15 pt-5">
              <p className="font-mono text-xs text-gold mb-2">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-display text-xl mb-2">{s.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-ink text-paper py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-3">Where We Serve</p>
          <h2 className="font-display text-3xl md:text-4xl mb-12 max-w-xl">Industries &amp; Applications</h2>
          <div className="flex flex-wrap gap-3">
            {industries.map((ind) => (
              <span key={ind} className="border border-paper/25 rounded-full px-5 py-2.5 text-sm text-paper/85 hover:border-gold hover:text-gold transition-colors">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence teaser */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Global Presence</p>
            <h2 className="font-display text-3xl md:text-4xl mb-5 leading-tight">Export relationships across five countries and counting.</h2>
            <p className="text-slate mb-8 leading-relaxed">
              Our presence extends beyond India into Bangladesh, Vietnam, Colombia and Thailand,
              offering dedicated service and coordinated logistics in each market we serve.
            </p>
            <Link to="/global-presence" className="inline-flex items-center gap-2 text-ink font-medium border-b-2 border-maroon pb-1 hover:text-maroon transition-colors">
              See Our Global Reach &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {regions.map((r) => (
              <div key={r} className="border border-ink/15 rounded-md px-5 py-6 text-center">
                <p className="font-display text-lg">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryBanner />
    </div>
  );
}
