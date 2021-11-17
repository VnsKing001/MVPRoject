import React from "react";
import Nav from "../nav";
import NavDesktop from "../navDesk";
import PageName from "../pageName";
import Banner from "./components/Banner";
import Intro from "./components/Intro";
import Cards from "./components/Cards";
import Insight from "./components/Insight";
import Concept from "./components/Concept";

import "./styles/style.css";
import "./styles/responsive.css";
import NavigationLink from "./components/NavigationLink";
import BespokeHeader from "../../bespoke/Component/bespokeHeader";

import headerBanner from "./img/header-banner-pcSize.webp";

const headerData = {
  background:
    "radial-gradient(82.29% 82.29% at 50% 98.05%,#960014 0%,#AE0000 100%)",
  img: {
    large: headerBanner,
    medium: headerBanner,
    small: "",
  },
  titles: [""],
  content:
    "MV Agusta Custom Design is an official department of MV Agusta specialising in the creation of unique models to meet a passionate clientele's demand for the most exclusive, luxury customisation.",
};

const MvCategoryLayout = () => {
  return (
    <>
      <NavDesktop colorBlack={false} />
      <Nav color="white" />
      <PageName namePage={"MV Category"} />
      <BespokeHeader headerData={headerData} />
      <Intro />
      <Cards />
      <Concept />
      <Insight />
      <NavigationLink />
    </>
  );
};

export default MvCategoryLayout;
