import React from "react";
import Nav from "../nav";
import NavDesktop from "../navDesk";
import PageName from "../pageName";
import Intro from "./components/Intro";
import Insight from "./components/Insight";
import Concept from "./components/Concept";

import "./styles/style.css";
import "./styles/responsive.css";
import NavigationLink from "./components/NavigationLink";
import BespokeHeader from "../../bespoke/Component/bespokeHeader";
import CardContainer from "./components/CardContainer";

import img_f3_rosso from "./img/f3/model/f3-rosso.webp";
import img_f3_rr from "./img/f3/model/f3-rr.webp";
import img_contentLarge from "./img/f3/history-xl.jpg";
import img_contentSmall from "./img/f3/history-m.jpg";
import img_insight from "./img/f3/model-style-l.png";
import img_bannerSmall from "./img/f3/f3-xs.webp";
import img_bannerLarge from "./img/f3/f3-xl.webp";
import img_headerSmall from "./img/f3/banner/f3-rosso-m.png";
import img_headerLarge from "./img/f3/banner/f3-rosso-xl.png";

const heroGradientStart = "#000000";
const heroGradientEnd = "#E1000E";

const headerData = {
  background: `linear-gradient(90deg,${heroGradientStart} 0%,${heroGradientEnd} 100%)`,
  img: {
    large: img_headerLarge,
    medium: img_headerSmall,
    small: img_headerSmall,
  },
  titles: [""],
  content:
    "MV Agusta Custom Design is an official department of MV Agusta specialising in the creation of unique models to meet a passionate clientele's demand for the most exclusive, luxury customisation.",
};

const properties = [
  {
    cardName: "ROSSO",
    srcImg: `${img_f3_rosso}`,
    information: [
      "3",
      "Cylinders",
      "798",
      "cc",
      "Capacity",
      "147",
      "hp",
      "HorsePower",
    ],
    link: "/f3-800",
  },
  {
    cardName: "RR",
    srcImg: `${img_f3_rr}`,
    information: [
      "3",
      "Cylinders",
      "798",
      "cc",
      "Capacity",
      "147",
      "hp",
      "HorsePower",
    ],
    link: "/f3-800-rr",
  },
];

const intro = {
  title: "STREET LEGAL RACETRACK LEGEND",
  contents: [
    "The return of MV Agusta’s racing-legacy 3-cylinder",
    "engine in a production bike. The first mid-size",
    "Supersport featuring a counter-rotating crankshaft.",
  ],
  background: {
    small: `${img_bannerSmall}`,
    large: `${img_bannerLarge}`,
  },
};

const concept = {
  title: "F3 SUPER SPORT",
  background: {
    small: `${img_contentSmall}`,
    large: `${img_contentLarge}`,
  },
  content: [
    "The first production bike to feature MV Agusta’s legendary inline 3-cylinder racing engine. A magnificent example of the old principle that form follows function: every detail of the F3 has been designed to achieve maximum speed.",
    "The result is a breathtaking work of Motorcycle Art, in MV Agusta’s purest tradition.",
  ],
};

const insight = {
  title: ["F3", "INSIGHTS"],
  content:
    "The signature 3-exit exhaust and the mean looking headlight tell a story of speed and passion in the unmistakable MV Agusta style. This street-legal supersport, with a 1.380 mm wheelbase for a total weight of 173kg sets the standard for the category. There are 3 F3 models in the range, including the RC limited series.",
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
const F3Category = () => {
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

export default F3Category;
