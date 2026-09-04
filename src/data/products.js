import { productCategories } from "./productCategories";
import yarnCones1 from "../assets/images/yarn-cones-1.jpg";
import yarnCones2 from "../assets/images/yarn-cones-2.jpg";
import yarnCones3 from "../assets/images/yarn-cones-3.jpg";
import yarnCones4 from "../assets/images/yarn-cones-4.jpg";
import rawCottonFibre from "../assets/images/cotton-waste.jpg";
import fabricRolls from "../assets/images/fabric-rolls.jpg";
import factoryFloor from "../assets/images/factory-floor.jpg";
import factoryStitching from "../assets/images/factory-stitching.jpg";

export const products = [
  {
    slug: "combed-cotton-yarn",
    name: "Combed Cotton Yarn",
    category: "Cotton Yarn",
    lot: "SPY-CY-01",
    short: "Fine, high-strength combed yarn for premium knitwear and wovens.",
    composition: "100% Combed Cotton",
    count: "Ne 20s – Ne 60s",
    variants: ["Ring Spun", "Compact Spun", "Carded"],
    applications: ["Apparel", "Hosiery & Knitwear", "Home Textiles"],
    packaging: "Cones, 1.5–2 kg net, wrapped on pallets",
    moq: "One 20ft container (editable per order)",
    image: yarnCones1,
    gallery: [yarnCones1, yarnCones2],
  },
  {
    slug: "carded-cotton-yarn",
    name: "Carded Cotton Yarn",
    category: "Cotton Yarn",
    lot: "SPY-CY-02",
    short: "Economical, dependable yarn for everyday knit and woven programs.",
    composition: "100% Carded Cotton",
    count: "Ne 10s – Ne 40s",
    variants: ["Ring Spun", "Open End"],
    applications: ["Denim", "Garment Manufacturing", "Weaving"],
    packaging: "Cones or hanks, standard export crating",
    moq: "One 20ft container (editable per order)",
    image: yarnCones2,
    gallery: [yarnCones2, yarnCones1],
  },
  {
    slug: "polyester-spun-yarn",
    name: "Polyester Spun Yarn",
    category: "Polyester Yarn",
    lot: "SPY-PY-01",
    short: "Durable, colour-fast yarn engineered for volume manufacturing.",
    composition: "100% Polyester (Virgin / Recycled options)",
    count: "Ne 20s – Ne 45s",
    variants: ["Virgin Fibre", "Recycled (rPET)", "Dyed"],
    applications: ["Industrial Textiles", "Activewear", "Home Textiles"],
    packaging: "Cones, 2 kg net, moisture-proof wrap",
    moq: "One 20ft container (editable per order)",
    image: yarnCones2,
    gallery: [yarnCones2, yarnCones3],
  },
  {
    slug: "viscose-blended-yarn",
    name: "Viscose Blended Yarn",
    category: "Viscose Yarn",
    lot: "SPY-VY-01",
    short: "Soft-handle viscose yarn with a fine lustre for fashion knits.",
    composition: "100% Viscose / Viscose-Cotton blends",
    count: "Ne 20s – Ne 40s",
    variants: ["100% Viscose", "60/40 Viscose-Cotton"],
    applications: ["Apparel", "Fashion Knitwear"],
    packaging: "Cones, 1.5 kg net",
    moq: "One 20ft container (editable per order)",
    image: yarnCones4,
    gallery: [yarnCones4, yarnCones3],
  },
  {
    slug: "poly-cotton-blend",
    name: "Poly-Cotton Blended Yarn",
    category: "Blended Yarn",
    lot: "SPY-BY-01",
    short: "Balanced strength and comfort for high-volume knit programs.",
    composition: "65/35, 50/50 & 80/20 Polyester-Cotton",
    count: "Ne 20s – Ne 40s",
    variants: ["65/35 PC", "50/50 PC", "80/20 PC"],
    applications: ["Hosiery & Knitwear", "Garment Manufacturing"],
    packaging: "Cones, 2 kg net",
    moq: "One 20ft container (editable per order)",
    image: yarnCones3,
    gallery: [yarnCones3, yarnCones4],
  },
  {
    slug: "melange-specialty-yarn",
    name: "Melange & Specialty Yarn",
    category: "Specialty Yarn",
    lot: "SPY-SY-01",
    short: "Custom-dyed and fancy yarns built to a buyer's exact specification.",
    composition: "Cotton / Poly-Cotton, custom fibre blends on request",
    count: "Ne 16s – Ne 30s",
    variants: ["Melange", "Slub", "Space-dyed"],
    applications: ["Fashion Knitwear", "Denim"],
    packaging: "Cones, colour-matched batch cards included",
    moq: "Subject to fibre and shade (editable per order)",
    image: yarnCones3,
    gallery: [yarnCones3, yarnCones2],
  },
  {
    slug: "raw-cotton-bales",
    name: "Raw Cotton Bales",
    category: "Raw Cotton",
    lot: "SPY-RC-01",
    short: "Graded raw cotton sourced and inspected for consistent spinning quality.",
    composition: "Indian / Egyptian / Blended cotton staple",
    count: "Staple length 26mm – 32mm",
    variants: ["Short Staple", "Medium Staple", "Long Staple"],
    applications: ["Spinning Mills", "Yarn Manufacturing"],
    packaging: "Standard export bales, 170 kg approx.",
    moq: "As per seasonal availability (editable per order)",
    image: rawCottonFibre,
    gallery: [rawCottonFibre, factoryFloor],
  },
  {
    slug: "cotton-waste-comber",
    name: "Comber Cotton Waste",
    category: "Cotton Waste",
    lot: "SPY-CW-01",
    short: "Clean, sorted comber waste for open-end spinning and allied uses.",
    composition: "100% Cotton comber noil",
    count: "Graded by fibre length",
    variants: ["Comber Noil", "Card Waste", "Sliver Waste"],
    applications: ["Open-End Spinning", "Non-wovens"],
    packaging: "Compressed bales, export-standard wrap",
    moq: "Truck-load / container basis (editable per order)",
    image: rawCottonFibre,
    gallery: [rawCottonFibre, yarnCones1],
  },
  {
    slug: "knitted-fabric-rolls",
    name: "Knitted Fabric Rolls",
    category: "Knitted Fabrics",
    lot: "SPY-FB-01",
    short: "Single and double knit fabric produced to buyer GSM and width.",
    composition: "Cotton, Poly-Cotton, Viscose blends",
    count: "GSM 140 – 320 (customisable)",
    variants: ["Single Jersey", "Rib", "Interlock", "Fleece"],
    applications: ["Apparel", "Hosiery & Knitwear"],
    packaging: "Rolls, poly-wrapped, width as per order",
    moq: "500 kg per shade (editable per order)",
    image: fabricRolls,
    gallery: [fabricRolls, factoryFloor],
  },
  {
    slug: "woven-fabric-rolls",
    name: "Woven Fabric Rolls",
    category: "Woven Fabrics",
    lot: "SPY-FB-02",
    short: "Woven cotton and blended fabric produced to buyer construction and width.",
    composition: "Cotton, Poly-Cotton blends",
    count: "GSM 100 – 280 (customisable)",
    variants: ["Plain Weave", "Twill", "Denim"],
    applications: ["Apparel", "Denim", "Home Textiles"],
    packaging: "Rolls, poly-wrapped, width as per order",
    moq: "500 metres per shade (editable per order)",
    image: fabricRolls,
    gallery: [fabricRolls, factoryStitching],
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const relatedProducts = (product, count = 3) =>
  products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, count);

// Resolves a product's full nested URL, e.g. /products/yarns/cotton-yarn/combed-cotton-yarn
export const productPath = (product) => {
  for (const cat of productCategories) {
    const sub = cat.subcategories.find((s) => s.name === product.category);
    if (sub) return `/products/${cat.slug}/${sub.slug}/${product.slug}`;
  }
  return `/products/${product.slug}`;
};

// Products belonging to a given subcategory name (used by SubcategoryPage)
export const productsInSubcategory = (subcategoryName) =>
  products.filter((p) => p.category === subcategoryName);
