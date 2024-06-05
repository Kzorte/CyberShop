"use client";

import React, { FC, useEffect, useState } from "react";

import Heading from "@/components/Heading/Heading";
import { DEMO_MORE_EXPLORE_DATA, ExploreType } from "../data";
import { PRODUCTS } from "@/data/data";
import ProductCard from "../../ProductCard";

export interface SectionGridMoreExploreProps {
  className?: string;
  gridClassName?: string;
  boxCard?: "box1" | "box4" | "box6";
  data?: ExploreType[];
}

const SectionGridMoreExplore: FC<SectionGridMoreExploreProps> = ({
  className = "",
  gridClassName = "grid-cols-2 md:grid-cols-2 xl:grid-cols-4",
  data: initialData = DEMO_MORE_EXPLORE_DATA.filter((_, i) => i < 4),
}) => {
  const [filteredData, setFilteredData] = useState(PRODUCTS);
  const [tabActive, setTabActive] = useState("All Items");

  useEffect(() => {
    localStorage.setItem("tabActive", tabActive);
  }, [tabActive]);

  useEffect(() => {
    const savedTabActive = localStorage.getItem("tabActive");
    if (savedTabActive) {
      setTabActive(savedTabActive);
    }
  }, []);

  useEffect(() => {
    if (tabActive === "All Items") {
      setFilteredData(PRODUCTS.filter(product => product.category === "Laptop"));
    }
  }, [tabActive]);

  const renderHeading = () => {
    return (
      <div>
        <Heading
          className="mb-4 md:mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50"
          fontClass="text-xl md:text-4xl 2xl:text-5xl font-semibold"
          isCenter
          desc=""
        >
          Category
        </Heading>
        <div className="flex-1 ">   
          <div className={`flex-1 grid sm:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-10 ${gridClassName}`}>
            {filteredData.map((product, index) => (
              <ProductCard key={index} data={product} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const handleTabClick = (category: string) => {
    setTabActive(category);
  };

  return (
    <div className={`nc-SectionGridMoreExplore relative ${className}`}>
      {renderHeading()}
    </div>
  );
};

export default SectionGridMoreExplore;
