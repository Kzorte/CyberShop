"use client";

import React, { FC, useEffect, useState } from "react";
import CardCategory1 from "@/components/CardCategories/CardCategory1";
import CardCategory4 from "@/components/CardCategories/CardCategory4";
import Heading from "@/components/Heading/Heading";
import NavItem2 from "@/components/NavItem2";
import Nav from "@/shared/Nav/Nav";
import CardCategory6 from "@/components/CardCategories/CardCategory6";
import { DEMO_MORE_EXPLORE_DATA, ExploreType } from "./data";
import { PRODUCTS } from "@/data/data";
import ProductCard from "../ProductCard";

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
      setFilteredData(PRODUCTS);
    } else {
      setFilteredData(PRODUCTS.filter(product => product.category === tabActive));
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
        <Nav
          className="p-1 bg-white dark:bg-neutral-800 rounded-full shadow-lg overflow-x-auto Scrollbar sm:text-md"
          containerClassName="mb-4 md:mb-12 lg:mb-14 relative flex justify-center w-full text-sm md:text-base"
        >
          {[
            { name: "All Items", isActive: true },
            { name: "SmartPhone" },
            { name: "Smartwatch" },
            { name: "Laptop" },
            { name: "TV" },
          ].map((item, index) => (
            <NavItem2
              key={index}
              isActive={tabActive === item.name}
              onClick={() => handleTabClick(item.name)}
            >
              {item.name}
            </NavItem2>
          ))}
        </Nav>
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
