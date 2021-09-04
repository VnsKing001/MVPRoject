import React,{ useState } from "react";
import Nav from "../generalLayout/nav";
import NavDesktop from "../generalLayout/navDesk";
import PageName from "../generalLayout/pageName";
import BackgroundHeader from "./imageLib-comps/BackgroundHeader";
import BarLayout from "./imageLib-comps/BarLayout";
import DisplayImg from "./imageLib-comps/DisplayImg";
import Modal from "./imageLib-comps/Modal";
import Modalreponsive from "./imageLib-comps/Modalreponsive";

export default function ImageLibLayout() {

  const [ choose,setChoose ] = useState(false);

  return (
    <>
      <NavDesktop />
      <Nav color="white" />
      <PageName namePage="MV Agusta Wallpapers" />
      <BackgroundHeader />
      <BarLayout/>
      <DisplayImg setChoose={setChoose}/>
      {choose && <Modal choose={choose} setChoose={setChoose}/>}
      {choose && <Modalreponsive choose={choose} setChoose={setChoose}/>}
    </>
  );
}
