import React, { FC } from "react";

import { DEMO_MORE_EXPLORE_DATA_2 } from "@/components/SectionGridMoreExplore/data";
import SectionGridMoreExplore2 from "@/components/SectionGridMoreExplore/smartwatch/SectionGridMoreExplore2";

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
          <main>
            {/* LOOP ITEMS */}
            <div className="flex flex-col lg:flex-row">
            <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mx-4 border-t lg:border-t-0"></div>
              
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PageCollection2;
