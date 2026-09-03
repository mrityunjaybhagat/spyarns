import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getProduct, relatedProducts, productPath } from "../data/products";
import { getCategory } from "../data/productCategories";
import EnquiryBanner from "../components/EnquiryBanner";

export default function ProductDetail() {
  const { productSlug, categorySlug, subSlug } = useParams();
  const product = getProduct(productSlug);
  const category = getCategory(categorySlug);
  const [activeImg, setActiveImg] = useState(0);

  if (!product) return <Navigate to="/products" replace />;

  const related = relatedProducts(product);
  const specRows = [
    ["Category", product.category],
    ["Composition / Material", product.composition],
    ["Count / Specification", product.count],
    ["Available Variants", product.variants.join(", ")],
    ["Packaging", product.packaging],
    ["Minimum Order", product.moq],
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-8 text-sm text-slate">
        <Link to="/products" className="hover:text-maroon">Products</Link> /{" "}
        {category && (
          <>
            <Link to={`/products/${categorySlug}`} className="hover:text-maroon">{category.name}</Link> /{" "}
            <Link to={`/products/${categorySlug}/${subSlug}`} className="hover:text-maroon">{product.category}</Link> /{" "}
          </>
        )}
        <span className="text-ink">{product.name}</span>
      </div>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-10 grid md:grid-cols-2 gap-14">
        {/* Gallery */}
        <div>
          <div className="aspect-[4/3] rounded-md overflow-hidden border border-ink/10 mb-4">
            <img src={product.gallery[activeImg]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-3">
            {product.gallery.map((src, i) => (
              <button
                key={src + i}
                onClick={() => setActiveImg(i)}
                className={`w-20 aspect-square rounded-sm overflow-hidden border-2 ${activeImg === i ? "border-maroon" : "border-transparent"}`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">{product.lot} &middot; {product.category}</p>
          <h1 className="font-display text-3xl md:text-4xl mb-5">{product.name}</h1>
          <p className="text-slate leading-relaxed mb-8">{product.short}</p>

          <div className="border-t border-ink/10 mb-8">
            {specRows.map(([label, value]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-3 border-b border-ink/10">
                <span className="w-48 shrink-0 text-xs font-mono uppercase tracking-wide text-slate/70">{label}</span>
                <span className="text-sm text-ink">{value}</span>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-wide text-slate/70 mb-3">Common Applications</p>
            <div className="flex flex-wrap gap-2 mb-9">
              {product.applications.map((a) => (
                <span key={a} className="border border-ink/15 rounded-full px-4 py-1.5 text-sm text-slate">{a}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={`/contact?product=${encodeURIComponent(product.name)}`}
              className="flex-1 text-center bg-maroon hover:bg-maroon-2 text-paper px-6 py-3.5 rounded-sm font-medium transition-colors"
            >
              Request Quote
            </Link>
            <button
              onClick={() => alert("Specification sheet download — connect your PDF/spec file for " + product.name)}
              className="flex-1 border border-ink/20 hover:border-maroon hover:text-maroon px-6 py-3.5 rounded-sm font-medium transition-colors"
            >
              Download Specification
            </button>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-paper-2 py-16">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <p className="font-mono text-xs tracking-[0.2em] text-maroon uppercase mb-3">Related</p>
            <h2 className="font-display text-2xl md:text-3xl mb-10">More from {product.category}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((p) => (
                <Link key={p.slug} to={productPath(p)} className="group bg-paper border border-ink/10 rounded-md overflow-hidden hover:border-maroon transition-colors">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg mb-1">{p.name}</h3>
                    <p className="text-sm text-slate">{p.short}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <EnquiryBanner />
    </div>
  );
}
