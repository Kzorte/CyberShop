import React from "react";
import SectionHowItWork from "@/components/SectionHowItWork/SectionHowItWork";
import SectionHero2 from "@/components/SectionHero/SectionHero2";
import SectionSliderProductCard from "@/components/SectionSliderProductCard";
import DiscoverMoreSlider from "@/components/DiscoverMoreSlider";
import SectionClientSay from "@/components/SectionClientSay/SectionClientSay";
import { PRODUCTS, SPORT_PRODUCTS } from "@/data/data";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionGridMoreExplore from "@/components/SectionGridMoreExplore/SectionGridMoreExplore";
import { DEMO_MORE_EXPLORE_DATA_2 } from "@/components/SectionGridMoreExplore/data";
import SectionPromo2 from "@/components/SectionPromo2";

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <div className="container px-4 hidden xl:block">
        <SectionHero2 />
      </div>

      <div className="xl:hidden">
        {/* SECTION */}
        <SectionPromo2 />
      </div>

      {/* SECTION */}
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
          data={[
            PRODUCTS[4],
            PRODUCTS[4],
            PRODUCTS[4],
            PRODUCTS[4],
            PRODUCTS[4],
          ]}
        />

        <div className="py-24 lg:py-32 border-t border-b border-slate-200 dark:border-slate-700">
          <SectionHowItWork />
        </div>
        {/* <SectionPromo1 /> */}

        {/* <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          <SectionGridMoreExplore />
        </div>

        <SectionSliderProductCard
          heading="Best Sellers"
          subHeading="Best selling of the month"
        /> */}

        {/* <SectionPromo2 /> */}

        {/* <SectionSliderLargeProduct cardStyle="style2" /> */}

        {/* <SectionSliderCategories /> */}

        {/* <SectionPromo3 /> */}

        {/* <SectionGridFeatureItems /> */}

        {/* <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          <div>
            <Heading rightDescText="From the Ciseco blog">
              The latest news
            </Heading>
            <SectionMagazine5 />
            <div className="flex mt-16 justify-center">
              <ButtonSecondary>Show all blog articles</ButtonSecondary>
            </div>
          </div>
        </div> */}
        <SectionClientSay />
      </div>
    </div>
  );
}

export default PageHome;
