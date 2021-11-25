import React from "react";
import Nav from "../nav";
import NavDesktop from "../navDesk";
import PageName from "../pageName";
import Intro from "./components/Intro";
import Insight from "./components/Insight";
import Concept from "./components/Concept";
import NavigationLink from "./components/NavigationLink";
import BespokeHeader from "../../bespoke/Component/bespokeHeader";
import headerBanner from "./img/header-banner-pcSize.webp";
import CardContainer from "./components/CardContainer";
import "./styles/style.css";
import "./styles/responsive.css";

import img_800rosso from "./img/dragster/800rosso.webp";
import img_800rr from "./img/dragster/800rr.webp";
import img_800rrscs from "./img/dragster/800rrscs.webp";
import img_800rc from "./img/dragster/800rc.webp";
import img_contentLarge from "./img/dragster/contentLarge.webp";
import img_contentSmall from "./img/dragster/contentSmall.webp";
import img_insight from "./img/dragster/insight.webp";
import img_bannerSmall from "./img/dragster/bannerSmall.webp";
import img_bannerLarge from "./img/dragster/bannerLarge.webp";

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
const properties = [
  {
    cardName: "ROSSO",
    srcImg: `${img_800rosso}`,
    information: [
      "3",
      "Cylinders",
      "798",
      "cc",
      "Capacity",
      "110",
      "hp",
      "HorsePower",
    ],
    link: "/dragster800rosso",
  },
  {
    cardName: "RR",
    srcImg: `${img_800rr}`,
    information: [
      "3",
      "Cylinders",
      "798",
      "cc",
      "Capacity",
      "140",
      "hp",
      "HorsePower",
    ],
    link: "/dragster800rr",
  },
  {
    cardName: "RR SCS",
    srcImg: `${img_800rrscs}`,
    information: [
      "3",
      "Cylinders",
      "798",
      "cc",
      "Capacity",
      "140",
      "hp",
      "HorsePower",
    ],
    link: "/dragster800rrscs",
  },
  {
    cardName: "RC SCS",
    srcImg: `${img_800rc}`,
    information: [
      "3",
      "Cylinders",
      "798",
      "cc",
      "Capacity",
      "150",
      "hp",
      "HorsePower",
    ],
    link: "/dragster800rcscs",
  },
];
const concept = {
  title: "DRAGSTER",
  background: {
    small: `${img_contentSmall}`,
    large: `${img_contentLarge}`,
  },
  content: [
    "The Dragster is MV Agusta’s most impudent, irreverent model. It has that wild, untamed allure that instantly bewitches any bike lover and makes it a lifestyle statement in its own right.",
    "The bobbed tail, the spoke wheels, the compact yet balanced volumes and weights distributed over the refined chassis are a vivid reminiscence of those epic drag races, interpreted in the most modern and compelling way.",
  ],
};
const insight = {
  title: ["DRAGSTER", "INSIGHTS"],
  content:
    "MV Agusta’s legendary inline-3-cylinder engine and the MotoGP-derived counter-rotating crankshaft featured on the Dragster take its performance to unparalleled levels. There are four Dragster models in the range, including one in the Rosso series.",
  background: `${img_insight}`,
};
const redirectLinks = [
  {
    name: "RUSH",
    href: "/mv-category/rush",
  },
  {
    name: "BRUTALE",
    href: "/mv-category/brutale",
  },
  {
    name: "DRAGSTER",
    href: "/mv-category/dragster",
  },
  {
    name: "TURISMO VELOCE",
    href: "/mv-category/turismo-veloce",
  },
  {
    name: "F3",
    href: "/mv-category/f-sport",
  },
  {
    name: "SUPERVELOCE",
    href: "/mv-category/superveloce",
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
const DragsterCategory = () => {
  return (
    <>
      <NavDesktop colorBlack={false} />
      <Nav color="white" />
      <PageName namePage={"MV Category"} />
      <BespokeHeader headerData={headerData} />
      <Intro data={intro} />
      <CardContainer properties={properties} />
      <Concept data={concept} />
      <Insight data={insight} />
      <NavigationLink links={redirectLinks} />
    </>
  );
};

export default DragsterCategory;
