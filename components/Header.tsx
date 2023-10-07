import React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import TopBanner from "@/components/topbanner/TopBanner";

const Header = () => {
  return (
    <>
      <TopBanner />
      <Navbar />
    </>
  );
};

export default Header;
