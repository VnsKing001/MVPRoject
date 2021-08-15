import React from "react";
import Nav from "../generalLayout/nav";
import NavDesktop from "../generalLayout/navDesk";
import PageName from "../generalLayout/pageName";
import "./imageLib.css";

export default function ImageLibLayout() {
  return (
    <>
      <NavDesktop />
      <Nav color="white" />
      <PageName namePage="MV Agusta Wallpapers" />
    </>
  );
}
