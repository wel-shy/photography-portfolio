import React from "react";
import { NavBar } from "../../theme";
import { NavBarBrand } from "../../theme/Navigation/";

export const NavigationBar = () => {
  return (
    <NavBar brand={<NavBarBrand href="/">DW Photography</NavBarBrand>}></NavBar>
  );
};
