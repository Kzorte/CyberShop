"use client";

import React, { FC, useEffect, useState } from "react";
import Heading from "@/components/Heading/Heading";
import NavItem2 from "@/components/NavItem2";
import Nav from "@/shared/Nav/Nav";
import { PRODUCTS } from "@/data/data";
import ProductCard from "../ProductCard";
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
      setTabActive("All Items");
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
        <Nav
          className="p-1 bg-white dark:bg-neutral-800 rounded-full shadow-lg overflow-x-auto Scrollbar sm:text-md"
          containerClassName="mb-4 md:mb-12 lg:mb-14 relative flex justify-center w-full text-sm md:text-base"
        >
          {[
            { name: "All Items", link: { pathname: "/collection" } },
            { name: "SmartPhone", link: { pathname: "/collection", query: { category: "SmartPhone" } } },
            { name: "Smartwatch", link: { pathname: "/collection", query: { category: "Smartwatch" } } },
            { name: "Laptop", link: { pathname: "/collection", query: { category: "Laptop" } } },
            { name: "TV", link: { pathname: "/collection", query: { category: "TV" } } },
          ].map((item, index) => (
            <Link key={index} href={item.link} passHref>
              <NavItem2 isActive={tabActive === item.name} onClick={() => handleTabClick(item.name)}>
                {item.name}
              </NavItem2>
            </Link>
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

  return (
    <div className={`nc-SectionGridMoreExplore relative ${className}`}>
      {renderHeading()}
    </div>
  );
};

export default SectionGridMoreExplore2;
