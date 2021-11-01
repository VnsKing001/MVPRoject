import React from 'react'
import Nav from "../nav";
import NavDesktop from "../navDesk";
import PageName from "../pageName";
import Banner from './components/Banner';
import Intro from './components/Intro';
import Cards from './components/Cards'
import Insight from './components/Insight';
import Concept from './components/Concept';

import './styles/style.css'
import './styles/responsive.css'
import NavigationLink from './components/NavigationLink';


const MvCategoryLayout = () => {
    return (
        <>
        <NavDesktop colorBlack={false}/>
        <Nav color="white" />
        <PageName namePage={"MV Category"} />
          <Banner/>
          <Intro/> 
          <Cards/>
          <Concept/>
          <Insight/>
          <NavigationLink/>
      </>
    )
}

export default MvCategoryLayout
