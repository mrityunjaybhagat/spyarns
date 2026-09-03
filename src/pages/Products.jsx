import { Link } from "react-router-dom";
import { productCategories } from "../data/productCategories";
import EnquiryBanner from "../components/EnquiryBanner";
import ThreadWeave from "../components/ThreadWeave";

export default function Products() {
  return (
    <div>
      <section className="relative bg-ink text-paper overflow-hidden">
        <ThreadWeave className="absolute inset-0 w-full h-full opacity-40" variant="light" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-16">
          <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-3">Catalogue</p>
          <h1 className="font-display text-4xl md:text-5xl mb-4">Products</h1>
          <p className="text-paper/70 max-w-xl">
            Raw cotton, spun yarn, fabric and garments &mdash; browse by category, then
            drill down to the exact product you need and request a quote.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid sm:grid-cols-2 gap-8">
          {productCategories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/products/${cat.slug}`}
              className="group bg-paper border border-ink/10 rounded-md overflow-hidden hover:border-maroon transition-colors flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h2 className="font-display text-2xl mb-2">{cat.name}</h2>
                <p className="text-sm text-slate leading-relaxed mb-5">{cat.description}</p>
                <span className="mt-auto text-sm font-medium text-ink group-hover:text-maroon">Explore Category &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <EnquiryBanner />
    </div>
  );
}
