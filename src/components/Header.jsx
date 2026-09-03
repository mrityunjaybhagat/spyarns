import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { productCategories } from "../data/productCategories";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products", dropdown: true },
  { to: "/global-presence", label: "Global Presence" },
  { to: "/quality-sustainability", label: "Quality & Sustainability" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [productsExpanded, setProductsExpanded] = useState(false);
  const [mobileGroupOpen, setMobileGroupOpen] = useState(null);
  const productsRef = useRef(null);

  // Close the desktop mega-menu on outside click and on Escape.
  useEffect(() => {
    const handleClick = (e) => {
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === "Escape") setProductsOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="S.P. Yarns" className="h-10 w-auto bg-paper rounded-sm p-1" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-body text-sm tracking-wide">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.to} ref={productsRef} className="relative">
                <button
                  onClick={() => setProductsOpen((v) => !v)}
                  aria-haspopup="true"
                  aria-expanded={productsOpen}
                  className="flex items-center gap-1 py-2 text-paper/90 hover:text-gold transition-colors"
                >
                  {link.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${productsOpen ? "rotate-180" : ""}`}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>

                {productsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-ink-2 border border-white/10 rounded-md shadow-xl p-6 grid grid-cols-4 gap-8 w-[720px]">
                    {productCategories.map((cat) => (
                      <div key={cat.slug}>
                        <Link
                          to={`/products/${cat.slug}`}
                          onClick={() => setProductsOpen(false)}
                          className="block font-display text-base text-paper hover:text-gold mb-3 pb-2 border-b border-white/10"
                        >
                          {cat.name}
                        </Link>
                        <ul className="space-y-1.5">
                          {cat.subcategories.map((sub) => (
                            <li key={sub.slug}>
                              <Link
                                to={`/products/${cat.slug}/${sub.slug}`}
                                onClick={() => setProductsOpen(false)}
                                className="block text-sm text-paper/65 hover:text-gold"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `py-2 text-paper/90 hover:text-gold transition-colors ${isActive ? "text-gold" : ""}`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-2 text-paper px-5 py-2.5 rounded-sm text-sm font-medium tracking-wide transition-colors"
          >
            Send Enquiry
          </Link>
        </div>

        <button
          className="lg:hidden text-paper p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            {open ? (
              <path d="M6 6L20 20M20 6L6 20" stroke="currentColor" strokeWidth="1.8" />
            ) : (
              <>
                <path d="M4 8H22" stroke="currentColor" strokeWidth="1.8" />
                <path d="M4 13H22" stroke="currentColor" strokeWidth="1.8" />
                <path d="M4 18H22" stroke="currentColor" strokeWidth="1.8" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink-2 border-t border-white/10 px-5 py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.to} className="border-b border-white/5">
                <div className="flex items-center justify-between">
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="flex-1 py-3 text-paper/90 font-body"
                  >
                    {link.label}
                  </Link>
                  <button
                    onClick={() => setProductsExpanded((v) => !v)}
                    aria-label="Expand product categories"
                    className="p-3 text-paper/70"
                  >
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" className={`transition-transform ${productsExpanded ? "rotate-180" : ""}`}>
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </button>
                </div>
                {productsExpanded && (
                  <div className="pb-2">
                    {productCategories.map((cat) => (
                      <div key={cat.slug} className="pl-3">
                        <div className="flex items-center justify-between">
                          <Link
                            to={`/products/${cat.slug}`}
                            onClick={() => setOpen(false)}
                            className="flex-1 py-2 text-paper/80 text-sm"
                          >
                            {cat.name}
                          </Link>
                          <button
                            onClick={() =>
                              setMobileGroupOpen(mobileGroupOpen === cat.slug ? null : cat.slug)
                            }
                            aria-label={`Expand ${cat.name}`}
                            className="p-2 text-paper/60"
                          >
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${mobileGroupOpen === cat.slug ? "rotate-180" : ""}`}>
                              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                          </button>
                        </div>
                        {mobileGroupOpen === cat.slug && (
                          <div className="pl-4 pb-2">
                            {cat.subcategories.map((sub) => (
                              <Link
                                key={sub.slug}
                                to={`/products/${cat.slug}/${sub.slug}`}
                                onClick={() => setOpen(false)}
                                className="block py-1.5 text-paper/55 text-sm"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="block py-3 text-paper/90 border-b border-white/5 font-body"
              >
                {link.label}
              </NavLink>
            )
          )}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block mt-3 text-center bg-maroon text-paper px-5 py-3 rounded-sm font-medium"
          >
            Send Enquiry
          </Link>
        </div>
      )}
    </header>
  );
}
