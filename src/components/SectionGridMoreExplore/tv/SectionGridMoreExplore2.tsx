"use client";

import React, { FC, useEffect, useState } from "react";
import Heading from "@/components/Heading/Heading";
import NavItem2 from "@/components/NavItem2";
import Nav from "@/shared/Nav/Nav";
import { PRODUCTS } from "@/data/data";
import ProductCard from "../../ProductCard";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface SectionGridMoreExploreProps {
  className?: string;
  gridClassName?: string;
  boxCard?: "box1" | "box4" | "box6";
  data?: any[];
}

const SectionGridMoreExplore2: FC<SectionGridMoreExploreProps> = ({
  className = "",
  gridClassName = "grid-cols-2 md:grid-cols-2 xl:grid-cols-4",
  data: initialData = [],
}) => {
  const [filteredData, setFilteredData] = useState(PRODUCTS);
  const [tabActive, setTabActive] = useState("All Items");
  const router = useRouter();

  useEffect(() => {
    if (router.query && router.query.category && typeof router.query.category === 'string') {
      setTabActive(router.query.category);
    } else {
      setTabActive("TV");
    }
  }, [router.query]);  

  useEffect(() => {
    if (tabActive === "All Items") {
      setFilteredData(PRODUCTS);
    } else {
      setFilteredData(PRODUCTS.filter(product => product.category === tabActive));
    }
  }, [tabActive]);

  const handleTabClick = (category: string) => {
    setTabActive(category);
    if (category === "All Items") {
      setFilteredData(PRODUCTS);
    } else {
      setFilteredData(PRODUCTS.filter(product => product.category === category));
    }
  };

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

  return (
    <div className={`nc-SectionGridMoreExplore relative ${className}`}>
      {renderHeading()}
    </div>
  );
};

export default SectionGridMoreExplore2;
