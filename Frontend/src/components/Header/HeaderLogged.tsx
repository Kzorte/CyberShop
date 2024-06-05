import React, { FC } from "react";
import MainNav2Logged from "./MainNav2Logged";
import MainNav2Login from "./MainNav2Login";

export interface HeaderLoggedProps {}

const HeaderLogged: FC<HeaderLoggedProps> = () => {
  return (
    <div className="nc-HeaderLogged sticky top-0 w-full z-40 ">
      <MainNav2Login />
    </div>
  );
};

export default HeaderLogged;
