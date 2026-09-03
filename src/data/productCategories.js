// Central data source for the product hierarchy.
// Header, /products overview, category pages and subcategory pages
// are all generated from this file so names, slugs and links can
// never drift out of sync with each other.

import yarnCones1 from "../assets/images/yarn-cones-1.jpg";
import yarnCones2 from "../assets/images/yarn-cones-2.jpg";
import yarnCones3 from "../assets/images/yarn-cones-3.jpg";
import yarnCones4 from "../assets/images/yarn-cones-4.jpg";
import rawCottonFibre from "../assets/images/raw-cotton-fibre.jpg";
import fabricRolls from "../assets/images/fabric-rolls.jpg";
import garmentsCollage from "../assets/images/garments-collage.jpg";

export const productCategories = [
  {
    name: "Yarns",
    slug: "yarns",
    description:
      "Cotton, polyester, viscose, blended and specialty spun yarns produced to buyer count and specification.",
    image: yarnCones1,
    subcategories: [
      {
        name: "Cotton Yarn",
        slug: "cotton-yarn",
        description: "Combed and carded cotton yarn across a wide count range, for knit and woven programs.",
        image: yarnCones1,
      },
      {
        name: "Polyester Yarn",
        slug: "polyester-yarn",
        description: "Durable, colour-fast spun polyester yarn, including recycled fibre options.",
        image: yarnCones2,
      },
      {
        name: "Viscose Yarn",
        slug: "viscose-yarn",
        description: "Soft-handle viscose and viscose-cotton blended yarn with a fine lustre.",
        image: yarnCones4,
      },
      {
        name: "Blended Yarn",
        slug: "blended-yarn",
        description: "Poly-cotton and other fibre blends balancing strength, comfort and cost.",
        image: yarnCones3,
      },
      {
        name: "Specialty Yarn",
        slug: "specialty-yarn",
        description: "Melange, slub and custom-dyed yarns built to a buyer's exact specification.",
        image: yarnCones3,
      },
    ],
  },
  {
    name: "Raw Cotton & Cotton Waste",
    slug: "raw-cotton-cotton-waste",
    description:
      "Graded raw cotton and sorted cotton waste, sourced and inspected for consistent downstream processing.",
    image: rawCottonFibre,
    subcategories: [
      {
        name: "Raw Cotton",
        slug: "raw-cotton",
        description: "Graded raw cotton bales sourced and inspected for consistent spinning quality.",
        image: rawCottonFibre,
      },
      {
        name: "Cotton Waste",
        slug: "cotton-waste",
        description: "Clean, sorted comber and card waste for open-end spinning and allied uses.",
        image: rawCottonFibre,
      },
    ],
  },
  {
    name: "Fabrics",
    slug: "fabrics",
    description:
      "Knitted and woven fabric produced to buyer GSM, width and composition, ready for garment manufacture.",
    image: fabricRolls,
    subcategories: [
      {
        name: "Knitted Fabrics",
        slug: "knitted-fabrics",
        description: "Single jersey, rib, interlock and fleece knits produced to buyer GSM and width.",
        image: fabricRolls,
      },
      {
        name: "Woven Fabrics",
        slug: "woven-fabrics",
        description: "Woven cotton and blended fabric produced to buyer construction and width.",
        image: fabricRolls,
      },
    ],
  },
  {
    name: "Garments",
    slug: "garments",
    description:
      "Conventional and fashion garments across women's, kid's, men's and infant wear, built to buyer tech packs.",
    image: garmentsCollage,
    subcategories: [
      {
        name: "Women's Wear",
        slug: "womens-wear",
        description: "Everyday and fashion garments for women, produced to buyer tech packs.",
        image: garmentsCollage,
        products: [
          "T-shirts, Tops & Blouses",
          "Polo T-shirts",
          "Jackets, Hoodies & Sweatshirts",
          "Dresses",
          "Jumpsuits",
          "Nightwear",
          "Joggers",
          "Shorts",
          "Pants",
          "Activewear",
        ],
      },
      {
        name: "Kid's Wear",
        slug: "kids-wear",
        description: "Everyday and occasion wear for kids, built for comfort and durability.",
        image: garmentsCollage,
        products: [
          "T-shirts",
          "Polo T-shirts",
          "Jackets, Hoodies & Sweatshirts",
          "Nightwear",
          "Joggers",
          "Shorts",
          "Pants",
          "Activewear",
          "Dresses",
        ],
      },
      {
        name: "Men's Wear",
        slug: "mens-wear",
        description: "Knit and woven essentials for men, produced at volume.",
        image: garmentsCollage,
        products: [
          "T-shirts",
          "Polo T-shirts",
          "Jackets, Hoodies & Sweatshirts",
          "Nightwear",
          "Joggers",
          "Shorts",
          "Pants",
          "Activewear",
        ],
      },
      {
        name: "Infants",
        slug: "infants",
        description: "Soft-handle infant wear built to safety and comfort standards.",
        image: garmentsCollage,
        products: [
          "T-shirts",
          "Polo T-shirts",
          "Jackets, Hoodies & Sweatshirts",
          "Nightwear",
          "Joggers",
          "Shorts",
          "Pants",
          "Activewear",
        ],
      },
    ],
  },
];

export const getCategory = (slug) => productCategories.find((c) => c.slug === slug);

export const getSubcategory = (categorySlug, subSlug) => {
  const category = getCategory(categorySlug);
  const subcategory = category?.subcategories.find((s) => s.slug === subSlug);
  return category && subcategory ? { category, subcategory } : null;
};
