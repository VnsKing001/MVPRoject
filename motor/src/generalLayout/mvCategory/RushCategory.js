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

import img_rush1000_2021 from "./img/rush/rush-1000-2021-yellow.webp";
import img_contentLarge from "./img/rush/history-xl.jpg";
import img_contentSmall from "./img/rush/history-m.jpg";
import img_insight from "./img/rush/model-style-l.png";
import img_bannerSmall from "./img/rush/rush-xs.webp";
import img_bannerLarge from "./img/rush/rush-xl.webp";
import img_headerSmall from "./img/rush/banner/banner-m.webp";
import img_headerLarge from "./img/rush/banner/banner-xl.webp";

const headerData = {
  background: "#252525",
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
    cardName: "1000",
    srcImg: `${ img_rush1000_2021 }`,
    information: [
      "4",
      "Cylinders",
      "998",
      "cc",
      "Capacity",
      "208",
      "hp",
      "HorsePower",
    ],
    link: "/rush1000",
  },
];

const intro = {
  title: " RUSH - HYPER NAKED",
  contents: [
    "Designed for heart-stopping, tarmac-burning take-offs.",
    "Its untamed beastly power and its arrogant,",
    "irreverent appeal, make it totally irresistible.",
  ],
  background: {
    small: `${img_bannerSmall}`,
    large: `${img_bannerLarge}`,
  },
};

const concept = {
  title: "RUSH 1000",
  background: {
    small: `${img_contentSmall}`,
    large: `${img_contentLarge}`,
  },
  content: [
    "Rush 1000 represents the ultimate evolution in the world of the hyper naked. Designed for heart-stopping, tarmac-burning take offs, it possesses the irreverent appeal of drag racing.",
    "It's arrogant, untamed character offers unfiltered riding emotions yet with maximum safety provided by the most advanced electronics.",
  ],
};

const insight = {
  title: ["RUSH", "INSIGHTS"],
  content:
    "Featuring a 1000cc 4 cylinder engine, the Rush 1000 offers true Replica MotoGP performance with speeds of up to and beyond 300 km/h. Sharing the engine, chassis and electronics of the Brutale 1000 models, it has unique distinctive traits such as the signature tail pipes, the lights clusters, the rear frame and the passenger’s seat, which were specially designed for the Rush 1000.",
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

const RushCategory = () => {
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

export default RushCategory;
