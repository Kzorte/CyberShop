import React, { FC } from "react";
import SectionSliderCollections from "@/components/SectionSliderLargeProduct";
import SectionPromo1 from "@/components/SectionPromo1";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/data";
import SidebarFilters from "@/components/SidebarFilters";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionGridMoreExplore2 from "@/components/SectionGridMoreExplore/SectionGridMoreExplore2";
import { DEMO_MORE_EXPLORE_DATA_2 } from "@/components/SectionGridMoreExplore/data";

const PageCollection2 = ({}) => {
  return (
    <div className={`nc-PageCollection2`}>
      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
        <div className="space-y-10 lg:space-y-14">
          {/* HEADING */}
          <div className="container relative space-y-10 my-10 lg:space-y-15 lg:my-15">
              <div>
                <SectionGridMoreExplore2 data={DEMO_MORE_EXPLORE_DATA_2} />
              </div>
            </div>

          <hr className="border-slate-200 dark:border-slate-700" />
          <main>
            {/* LOOP ITEMS */}
            <div className="flex flex-col lg:flex-row">
            <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mx-4 border-t lg:border-t-0"></div>
              <div className="flex-1 ">
                <div className="flex-1 grid sm:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-10 ">
                {Array(6).fill(PRODUCTS.find(product => product.id === 5)).map((product, index) => (
                  <ProductCard key={index} data={product} />
                ))}
                </div>
              </div>
              {/* <div className="lg:w-1/3 xl:w-1/4 pr-4">
                <SidebarFilters />
              </div> */}
              
            </div>
          </main>
        </div>

        {/* === SECTION 5 === */}
        {/* <hr className="border-slate-200 dark:border-slate-700" /> */}

        {/* <SectionSliderCollections />
        <hr className="border-slate-200 dark:border-slate-700" /> */}

        {/* SUBCRIBES */}
        {/* <SectionPromo1 /> */}
      </div>
    </div>
  );
};

export default PageCollection2;
