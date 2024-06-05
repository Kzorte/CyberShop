import rightImg from "@/images/hero-right-cybershop.png";
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";
import BgGlassmorphism from "@/components/BgGlassmorphism/BgGlassmorphism";
import SectionHero from "./SectionHero";

const PageAbout = ({}) => {
  return (
    <div className={`nc-PageAbout overflow-hidden relative`}>
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 About Us."
          btnText=""
          subHeading="Kami, Kelompok 8, adalah tim yang berdedikasi dalam menciptakan pengalaman belanja gadget terbaik melalui website Ecommerce kami. Bergabunglah dengan kami dalam perjalanan ini!."
        />

        <SectionFounder />
      </div>
    </div>
  );
};

export default PageAbout;
