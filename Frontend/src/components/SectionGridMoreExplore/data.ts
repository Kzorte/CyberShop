import { StaticImageData } from "next/image";
import explore1Svg from "@/images/collections/explore1.svg";
import explore2Svg from "@/images/collections/explore2.svg";
import explore3Svg from "@/images/collections/explore3.svg";
import explore4Svg from "@/images/collections/explore4.svg";
import explore5Svg from "@/images/collections/explore5.svg";
import explore6Svg from "@/images/collections/explore6.svg";
import explore7Svg from "@/images/collections/explore7.svg";
import explore8Svg from "@/images/collections/explore8.svg";
import explore9Svg from "@/images/collections/explore9.svg";
//
import explore1Png from "@/images/collections/explore1.png";
import explore2Png from "@/images/collections/explore2.png";
import explore3Png from "@/images/collections/explore3.png";
import explore4Png from "@/images/collections/explore4.png";
import explore5Png from "@/images/collections/explore5.png";
import explore6Png from "@/images/collections/explore6.png";
import explore7Png from "@/images/collections/explore7.png";
import explore8Png from "@/images/collections/explore8.png";
import explore9Png from "@/images/collections/explore9.png";
import explore10Png from "@/images/collections/iphone1.png";
import explore11Png from "@/images/collections/hero-2.png";
import explore12Png from "@/images/collections/hero-3.png";
import explore13Png from "@/images/collections/hero-4.png";
import { Route } from "next";


export interface ExploreType {
  id: number;
  name: string;
  desc: string;
  href: CustomRoute;
  image: string | StaticImageData;
  svgBg: string;
  color?: string;
  count?: number;
}

const smartphoneRoute: CustomRoute = { pathname: "/category/smartphone" };
const smartwatchRoute: CustomRoute = { pathname: "/category/smartwatch" };
const laptopRoute: CustomRoute = { pathname: "/category/laptop" };
const tvRoute: CustomRoute = { pathname: "/category/tv" };

export const  DEMO_MORE_EXPLORE_DATA_2: ExploreType[] = [
  {
    id: 4,
    name: "Smartphone",
    desc: "Electronic",
    image: explore10Png,
    href: smartphoneRoute,
    svgBg: explore9Svg,
    color: "bg-orange-50",
    count: 343,
  },
  {
    id: 5,
    name: "Smartwatch",
    desc: "Electronic",
    image: explore12Png,
    href: smartwatchRoute,
    svgBg: explore5Svg,
    color: "bg-blue-50",
    count: 222,
  },
  {
    id: 6,
    name: "Laptop",
    desc: "Electronic",
    image: explore11Png,
    href: laptopRoute,
    svgBg: explore6Svg,
    color: "bg-orange-50",
    count: 155,
  },
  {
    id: 7,
    name: "TV",
    desc: "Electronic",
    image: explore13Png,
    href: tvRoute,
    svgBg: explore7Svg,
    color: "bg-stone-100",
    count: 98,
  },
];
export const DEMO_MORE_EXPLORE_DATA: ExploreType[] = [
];
export interface CustomRoute {
  pathname: string;
  // Anda dapat menambahkan properti lain seperti query, hash, dll. jika diperlukan
}
