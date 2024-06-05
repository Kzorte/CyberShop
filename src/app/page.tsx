'use client';
import React from "react";
import SectionHowItWork from "@/components/SectionHowItWork/SectionHowItWork";
import SectionHero2 from "@/components/SectionHero/SectionHero2";
import SectionSliderProductCard from "@/components/SectionSliderProductCard";
import DiscoverMoreSlider from "@/components/DiscoverMoreSlider";
import SectionClientSay from "@/components/SectionClientSay/SectionClientSay";
import { PRODUCTS } from "@/data/data";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionGridMoreExplore from "@/components/SectionGridMoreExplore/SectionGridMoreExplore";
import { DEMO_MORE_EXPLORE_DATA_2 } from "@/components/SectionGridMoreExplore/data";
import SectionPromo2 from "@/components/SectionPromo2";

// Filter produk yang memiliki status "New in"
const newInProducts = PRODUCTS.filter(product => product.status === "New in");

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <div className="container px-4 hidden xl:block">
        <SectionHero2 />
      </div>

      <div className="xl:hidden">
        <SectionPromo2 />
      </div>

      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          <SectionGridMoreExplore data={DEMO_MORE_EXPLORE_DATA_2} />
        </div>
      </div>

      <div className="mt-24 lg:mt-32 xl:hidden">
        <DiscoverMoreSlider />
      </div>

      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        <SectionSliderProductCard
          data={newInProducts}
        />

        <div className="py-24 lg:py-32 border-t border-b border-slate-200 dark:border-slate-700">
          <SectionHowItWork />
        </div>

        <SectionClientSay />
      </div>
    </div>
  );
}

export default PageHome;
