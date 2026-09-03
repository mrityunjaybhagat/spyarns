import { Link, Navigate, useParams } from "react-router-dom";
import { getSubcategory } from "../data/productCategories";
import { productsInSubcategory, productPath } from "../data/products";
import EnquiryBanner from "../components/EnquiryBanner";
import ThreadWeave from "../components/ThreadWeave";

export default function SubcategoryPage() {
  const { categorySlug, subSlug } = useParams();
  const match = getSubcategory(categorySlug, subSlug);

  if (!match) return <Navigate to="/products" replace />;

  const { category, subcategory } = match;
  const isGarmentGroup = Boolean(subcategory.products);
  const items = isGarmentGroup ? [] : productsInSubcategory(subcategory.name);

  return (
    <div>
      <section className="relative bg-ink text-paper overflow-hidden">
        <ThreadWeave className="absolute inset-0 w-full h-full opacity-40" variant="light" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8 py-20">
          <p className="text-sm text-paper/60 mb-4">
            <Link to="/products" className="hover:text-gold">Products</Link> /{" "}
            <Link to={`/products/${category.slug}`} className="hover:text-gold">{category.name}</Link> /{" "}
            <span className="text-paper">{subcategory.name}</span>
          </p>
          <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-4">{category.name}</p>
          <h1 className="font-display text-4xl md:text-5xl mb-5">{subcategory.name}</h1>
          <p className="text-paper/70 text-lg max-w-2xl">{subcategory.description}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        {isGarmentGroup ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategory.products.map((type) => (
              <div key={type} className="bg-paper border border-ink/10 rounded-md p-6 flex flex-col hover:border-maroon transition-colors">
                <h3 className="font-display text-lg mb-4">{type}</h3>
                <Link
                  to={`/contact?product=${encodeURIComponent(`${subcategory.name} — ${type}`)}`}
                  className="mt-auto text-sm font-medium bg-maroon text-paper text-center rounded-sm py-2.5 hover:bg-maroon-2 transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <p className="text-slate">Product listings for this category are being finalised — please send an enquiry for current availability.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((p) => (
              <div key={p.slug} className="group bg-paper border border-ink/10 rounded-md overflow-hidden hover:border-maroon transition-colors flex flex-col">
                <Link to={productPath(p)} className="aspect-[4/3] overflow-hidden block">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <p className="font-mono text-[11px] tracking-wide text-maroon uppercase mb-1">{p.lot}</p>
                  <h3 className="font-display text-xl mb-2">{p.name}</h3>
                  <p className="text-sm text-slate leading-relaxed mb-3">{p.short}</p>
                  <p className="text-xs text-slate/80 mb-5"><span className="font-medium text-ink/70">Composition:</span> {p.composition}</p>
                  <div className="mt-auto flex gap-3">
                    <Link to={productPath(p)} className="flex-1 text-center text-sm font-medium border border-ink/20 rounded-sm py-2.5 hover:border-maroon hover:text-maroon transition-colors">
                      View Details
                    </Link>
                    <Link to={`/contact?product=${encodeURIComponent(p.name)}`} className="flex-1 text-center text-sm font-medium bg-maroon text-paper rounded-sm py-2.5 hover:bg-maroon-2 transition-colors">
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <EnquiryBanner />
    </div>
  );
}
