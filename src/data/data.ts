import { productImgs } from "@/contains/fakeData";
import productVariantImg2 from "@/images/products/v2.jpg";
import productVariantImg3 from "@/images/products/v3.jpg";
import productVariantImg4 from "@/images/products/v4.jpg";
import productVariantImg5 from "@/images/products/v5.jpg";
import productVariantImg6 from "@/images/products/v6.jpg";
//
import productSport1 from "@/images/products/sport-1.png";
import productSport2 from "@/images/products/sport-2.png";
import productSport3 from "@/images/products/sport-3.png";
import productSport4 from "@/images/products/sport-4.png";
import productSport5 from "@/images/products/sport-5.png";
import productSport6 from "@/images/products/sport-6.png";
import productSport7 from "@/images/products/sport-7.png";
import productSport8 from "@/images/products/sport-8.png";
import { StaticImageData } from "next/image";

//

export interface ProductVariant {
  id: number;
  name: string;
  thumbnail?: StaticImageData | string;
  color?: string;
  featuredImage: StaticImageData | string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: StaticImageData | string;
  description: string;
  category: string;
  tags: string[];
  link: "/product-detail/";
  variants?: ProductVariant[];
  variantType?: "color" | "image";
  sizes?: string[];
  allOfSizes?: string[];
  status?: "New in" | "limited edition" | "Sold Out" | "50% Discount";
  rating?: string;
  numberOfReviews?: number;
}

const DEMO_VARIANTS: ProductVariant[] = [
  {
    id: 1,
    name: "Black",
    thumbnail: productVariantImg6,
    featuredImage: productImgs[0],
  },
  {
    id: 2,
    name: "White",
    thumbnail: productVariantImg2,
    featuredImage: productImgs[1],
  },
  {
    id: 3,
    name: "Orange",
    thumbnail: productVariantImg3,
    featuredImage: productImgs[2],
  },
  {
    id: 4,
    name: "Sky Blue",
    thumbnail: productVariantImg4,
    featuredImage: productImgs[3],
  },
  {
    id: 5,
    name: "Natural",
    thumbnail: productVariantImg5,
    featuredImage: productImgs[4],
  },
];
const DEMO_VARIANT_COLORS: ProductVariant[] = [
  {
    id: 1,
    name: "Violet",
    color: "bg-violet-400",
    featuredImage: productImgs[0],
  },
  {
    id: 2,
    name: "Yellow",
    color: "bg-yellow-400",
    featuredImage: productImgs[1],
  },
  {
    id: 3,
    name: "Orange",
    color: "bg-orange-400",
    featuredImage: productImgs[2],
  },
  {
    id: 4,
    name: "Sky Blue",
    color: "bg-sky-400",
    featuredImage: productImgs[3],
  },
  {
    id: 5,
    name: "Green",
    color: "bg-green-400",
    featuredImage: productImgs[4],
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Xiaomi Redmi Note 13 Pro+ 5G 12/512GB - Purple",
    description: "Every Shot Iconic",
    price: 742,
    image: "https://cdn.eraspace.com/media/catalog/product/r/e/redmi_note_13_pro_plus_5g_purple_1.jpg",
    category: "SmartPhone",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANTS,
    variantType: "image",
    status: "New in",
    rating: "4.4",
    numberOfReviews: 98,
  },
  {
    id: 2,
    name: 'Infinix GT20 Pro 8/256GB - Mecha Blue',
    description: "Gaming Beast Hype Abis",
    price: 628,
    image: "https://cdn.eraspace.com/media/catalog/product/i/n/infinix_gt20_pro_mecha_blue_1.jpg",
    category: "SmartPhone",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    // status: "50% Discount",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 3,
    name: "Xiaomi Redmi Watch 4 - Obsidian Black",
    description: "Full Width and modern fitur",
    price: 132,
    image: "https://cdn.eraspace.com/media/catalog/product/x/i/xiaomi-redmi-watch-4_obsidian-black1.jpg",
    category: "Smartwatch",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANTS,
    variantType: "image",
    status: "New in",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 4,
    name: "Huawei MateBook X Pro 2021 - Emerald Green",
    description: "Breathe life into FullView",
    price: 2428,
    image: "https://cdn.eraspace.com/media/catalog/product/l/h/lhw-xpro-21-gre1.jpg",
    category: "Laptop",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    link: "/product-detail/",
    status: "New in",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 5,
    name: "Samsung Galaxy A55 5G 8/256GB - Awesome Iceblue (Upgraded from 8/128GB)",
    description: "Metal meets glass, awesome Temui Galaxy A55 5G.",
    price: 376,
    image: "https://cdn.eraspace.com/media/catalog/product/s/a/samsung_galaxy_a55_5g_awesome_iceblue_1.jpg",
    category: "SmartPhone",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    link: "/product-detail/",
    rating: "4.9",
    numberOfReviews: 142,
  },
  {
    id: 6,
    name: "Garmin Fenix 7X Sapphire Solar - Brown Titanium",
    description: "GO LONGER. GET STRONGER. SEVEN DAYS A WEEK.",
    price: 1240,
    image: "https://cdn.eraspace.com/media/catalog/product/8/1/81000329001.jpg",
    category: "Smartwatch",
    tags: ["tag1", "tag2"],
    variantType: "color",
    variants: DEMO_VARIANT_COLORS,
    status: "New in",
    link: "/product-detail/",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 7,
    name: "Xiaomi Mi TV Q1E 55 inch SMART TV",
    description: "The wide color gamut QLED displays more colourful images",
    price: 1232,
    image: "https://cdn.eraspace.com/media/catalog/product/8/1/81000529301.jpg",
    category: "TV",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    link: "/product-detail/",
    status: "New in",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 8,
    name: "LG 4K 70 SMART TV UHD 70UP7500PTC",
    description: "UHD Real 4K Unreal immersion.",
    price: 1845,
    image: "https://cdn.eraspace.com/media/catalog/product/l/g/lg_4k_70in_smart_tv_uhd_70up7500ptc_1.jpg",
    category: "TV",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    link: "/product-detail/",
    status: "limited edition",
    rating: "4.9",
    numberOfReviews: 98,
  },
];

export const SPORT_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Mastermind Toys",
    description: "Brown cockroach wings",
    price: 74,
    image: productSport1,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    status: "New in",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 2,
    name: "Jump Rope Kids",
    description: "Classic green",
    price: 68,
    image: productSport2,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    status: "50% Discount",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 3,
    name: "Tee Ball Beanie",
    description: "New blue aqua",
    price: 132,
    image: productSport3,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANTS,
    variantType: "image",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 4,
    name: "Rubber Table Tennis",
    description: "Dark pink 2023",
    price: 28,
    image: productSport4,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    link: "/product-detail/",
    status: "Sold Out",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 5,
    name: "Classic Blue Rugby",
    description: "Perfect mint green",
    price: 42,
    image: productSport5,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    link: "/product-detail/",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 6,
    name: "Manhattan Toy WRT",
    description: "New design 2023",
    price: 30,
    image: productSport6,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variantType: "color",
    variants: DEMO_VARIANT_COLORS,
    link: "/product-detail/",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 7,
    name: "Tabletop Football ",
    description: "Matte black",
    price: 12,
    image: productSport7,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    link: "/product-detail/",
    status: "New in",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 8,
    name: "Pvc Catching Toy",
    description: "Cream pink",
    price: 145,
    image: productSport8,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    link: "/product-detail/",
    status: "limited edition",
    rating: "4.9",
    numberOfReviews: 98,
  },
];
