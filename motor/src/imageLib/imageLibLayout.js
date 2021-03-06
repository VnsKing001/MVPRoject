import React, { useState } from "react";
import BespokeHeader from "../bespoke/Component/bespokeHeader";
import Nav from "../generalLayout/nav";
import NavDesktop from "../generalLayout/navDesk";
import PageName from "../generalLayout/pageName";
import DisplayImg from "./imageLib-comps/DisplayImg";
import Modal from "./imageLib-comps/Modal";
import Modalreponsive from "./imageLib-comps/Modalreponsive";
const headerData = {
  background: "#252525",
  img: {
    large: "./img/imageLibLayout/imgMain/banner-xl.png",
    medium: "./img/imageLibLayout/imgMain/banner-m.png",
    small: "",
  },
  titles: ["MV AGUSTA", "WALLPAPER"],
  content:
    "The MV Agusta warranty offers free towing to the nearest authorised dealer within 100 km in case of breakdown and many other advantages.",
};
export default function ImageLibLayout() {
  const [choose, setChoose] = useState(false);

  return (
    <>
      <NavDesktop />
      <Nav color="white" />
      <PageName namePage="MV Agusta Wallpapers" />
      <BespokeHeader headerData={headerData} />
      <DisplayImg setChoose={setChoose} />
      {choose && <Modal choose={choose} setChoose={setChoose} />}
      {choose && <Modalreponsive choose={choose} setChoose={setChoose} />}
    </>
  );
}
