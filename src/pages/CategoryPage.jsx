import { Link, Navigate, useParams } from "react-router-dom";
import { getCategory } from "../data/productCategories";
import EnquiryBanner from "../components/EnquiryBanner";
import ThreadWeave from "../components/ThreadWeave";

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const category = getCategory(categorySlug);

  if (!category) return <Navigate to="/products" replace />;

  return (
    <div>
      <section className="relative bg-ink text-paper overflow-hidden">
        <ThreadWeave className="absolute inset-0 w-full h-full opacity-40" variant="light" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8 py-20">
          <p className="text-sm text-paper/60 mb-4">
            <Link to="/products" className="hover:text-gold">Products</Link> / <span className="text-paper">{category.name}</span>
          </p>
          <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-4">Product Category</p>
          <h1 className="font-display text-4xl md:text-5xl mb-5">{category.name}</h1>
          <p className="text-paper/70 text-lg max-w-2xl">{category.description}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.subcategories.map((sub) => (
            <Link
              key={sub.slug}
              to={`/products/${category.slug}/${sub.slug}`}
              className="group bg-paper border border-ink/10 rounded-md overflow-hidden hover:border-maroon transition-colors flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={sub.image} alt={sub.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl mb-2">{sub.name}</h3>
                <p className="text-sm text-slate leading-relaxed mb-4">{sub.description}</p>
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
