import React,{ useState } from "react";
import Nav from "../generalLayout/nav";
import NavDesktop from "../generalLayout/navDesk";
import PageName from "../generalLayout/pageName";
import BackgroundHeader from "./imageLib-comps/BackgroundHeader";
import BarLayout from "./imageLib-comps/BarLayout";
import DisplayImg from "./imageLib-comps/DisplayImg";
import Filters from "./imageLib-comps/Filters";
import Modal from "./imageLib-comps/Modal";
import Popular from "./imageLib-comps/Popular";

export default function ImageLibLayout() {

  const [ click,setClick ] = useState(false);
  const [ select,setSelect ] = useState(false);
  const [ choose,setChoose ] = useState(false);

  return (
    <>
      <NavDesktop />
      <Nav color="white" />
      <PageName namePage="MV Agusta Wallpapers" />
      <BackgroundHeader />
      <BarLayout setClick={setClick} setSelect={setSelect}/>
      {click && <Popular setClick={setClick} />}
      {select && <Filters setSelect={setSelect} />}
      <DisplayImg setChoose={setChoose}/>
      {choose && <Modal choose={choose} setChoose={setChoose}/>}
    </>
  );
}
