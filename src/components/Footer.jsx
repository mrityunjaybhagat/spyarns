import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { productCategories } from "../data/productCategories";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/80 font-body">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="S.P. Yarns" className="h-10 w-auto bg-paper rounded-sm p-1 mb-4" />
          <p className="text-sm leading-relaxed text-paper/60 max-w-xs">
            A vertically integrated textile and yarn business trading and manufacturing
            since 1991 &mdash; from raw fibre to finished fabric, for buyers worldwide.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-paper">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/global-presence" className="hover:text-gold">Global Presence</Link></li>
            <li><Link to="/quality-sustainability" className="hover:text-gold">Quality &amp; Sustainability</Link></li>
            <li><Link to="/careers" className="hover:text-gold">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-paper">Products</h4>
          <ul className="space-y-2 text-sm">
            {productCategories.map((cat) => (
              <li key={cat.slug}>
                <Link to={`/products/${cat.slug}`} className="hover:text-gold">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-paper">Contact Us</h4>
          <ul className="space-y-3 text-sm text-paper/70">
            <li>Marketing Office: 3 Pretoria Street, Chandra Kunj Building, 2nd Floor, Kolkata &ndash; 700071, WB, India</li>
            <li>Registered Office: 115 Utkaimoni Gopa Bandhu Sarani, Kolkata &ndash; 700007, WB, India</li>
            <li><a href="tel:+913340069271" className="hover:text-gold">+91 33 4006 9271</a></li>
            <li><a href="mailto:info@spyarns.in" className="hover:text-gold">info@spyarns.in</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-paper/50">
          <p>&copy; {new Date().getFullYear()} S.P. Yarns. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
