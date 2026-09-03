import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import CategoryPage from "./pages/CategoryPage";
import SubcategoryPage from "./pages/SubcategoryPage";
import ProductDetail from "./pages/ProductDetail";
import GlobalPresence from "./pages/GlobalPresence";
import Quality from "./pages/Quality";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

// function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => window.scrollTo(0, 0), [pathname]);
//   return null;
// }

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-body text-ink">
      {/* <ScrollToTop /> */}
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:categorySlug" element={<CategoryPage />} />
          <Route path="/products/:categorySlug/:subSlug" element={<SubcategoryPage />} />
          <Route path="/products/:categorySlug/:subSlug/:productSlug" element={<ProductDetail />} />
          <Route path="/global-presence" element={<GlobalPresence />} />
          <Route path="/quality-sustainability" element={<Quality />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Legal title="Privacy Policy" />} />
          <Route path="/terms" element={<Legal title="Terms & Conditions" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
