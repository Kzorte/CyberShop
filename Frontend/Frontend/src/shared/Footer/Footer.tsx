import Logo from "@/shared/Logo/Logo";
import SocialsList1 from "@/shared/SocialsList1/SocialsList1";
import { CustomLink } from "@/data/types";
import React from "react";
import Payment from "@/images/payment.webp"
import Image from "next/image";


type MenuType = CustomLink;

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: MenuType[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "CyberShop :",
    menus: [
      { href: "/about", label: "Tentang CyberShop" },
      { href: "/not-found", label: "Hubungi Kami" },
      { href: "/not-found", label: "Syarat, Ketentuan dan Privasi" },
    ],
  },
  {
    id: "1",
    title: "Panduan & Layanan :",
    menus: [
      { href: "/not-found", label: "Yang sering ditanyakan" },
      { href: "/not-found", label: "Seputar Belanja" },
      { href: "/not-found", label: "Seputar Promo & Voucher" },
      { href: "/not-found", label: "Seputar Pembayaran" },
      { href: "/not-found", label: "Seputar Pengiriman" },
      { href: "/not-found", label: "Seputar Keangotaan CyberShop" },
      { href: "/not-found", label: "Pembatalan Pesanan" },
    ],
  },
  {
    id: "2",
    title: "Metode Pembayaran :",
    menus: [
    ]
  }
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm md:items-center">
        <h2 className="font-bold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
              
            </li>
          ))}
        </ul>
        {menu.id === "2" && ( // Check if it's the "Metode Pembayaran" menu
          <div className="mt-5">
            <Image src={Payment} alt="Metode Pembayaran" width={600} height={300} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="nc-Footer relative py-20 lg:pt-28 lg:pb-24 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid md:grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-10 ">
        <div className="">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <br /><br />
            <p className="text-sm"><b>Tentang Kami :</b></p>
            <br />
            <div className="flex items-center md:col-span-3">
            <SocialsList1 className="flex items-center space-x-2 lg:space-x-0 lg:flex-row lg:items-center md:items-center" />
          </div>
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
    </div>
  );
};

export default Footer;
