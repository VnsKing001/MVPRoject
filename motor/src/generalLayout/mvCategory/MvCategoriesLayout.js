import React from "react";
import Nav from "../nav";
import NavDesktop from "../navDesk";
import PageName from "../pageName";
import Intro from "./components/Intro";
import CardContainer from "./components/CardContainer";

import img_bannerSmall from "./img/dragster/bannerSmall.webp";
import img_bannerLarge from "./img/dragster/bannerLarge.webp";

const properties = [
  {
    cardName: "RUSH",
    srcImg: "/img/categories/rush-1000.webp",
    information: [],
    link: "/mv-category/rush",
  },
  {
    cardName: "BRUTALE",
    srcImg: "/img/categories/brutale-1000-rr.webp",
    information: [],
    link: "/mv-category/brutale",
  },
  {
    cardName: "DRAGSTER",
    srcImg: "/img/categories/dragster-800-rc-scs.webp",
    information: [],
    link: "/mv-category/dragster",
  },
  {
    cardName: "F3",
    srcImg: "/img/categories/f3-650.webp",
    information: [],
    link: "/mv-category/f-sport",
  },
  {
    cardName: "TURISMO VELOCE",
    srcImg: "/img/categories/tv-800-lusso-scs.webp",
    information: [],
    link: "/mv-category/turismo-veloce",
  },
  {
    cardName: "SUPERVELOCE",
    srcImg: "/img/categories/sp-800.webp",
    information: [],
    link: "/mv-category/superveloce",
  },
];
const intro = {
  title: "BEAUTY IN THE BEAST",
  contents: [
    "Awe-inspiring, compact and a lifestyle statement in",
    "its own right, Dragster is the perfect blend of",
    "technology, raw power and design.",
  ],
  background: {
    small: `${img_bannerSmall}`,
    large: `${img_bannerLarge}`,
  },
};
export default function MvCategoryDetailLayout() {
  return (
    <>
      <NavDesktop colorBlack={true} />
      <Nav color="black" />
      <PageName namePage={"MV Category"} />
      <div style={{ margin: "10vh" }}></div>
      <Intro data={intro} />
      <CardContainer properties={properties} />
    </>
  );
}
