import Nav from "../../nav";
import NavDesktop from "../../navDesk";
import PageName from "../../pageName";
import NavShop from "./components/NavShop";
import LookBook from "./components/LookBook";
import AllCategories from "./components/AllCategories";
import ViewAll from "./components/ViewAll";


import "./styles/motorCategory.css";
import "./styles/responsive.css";

export default function CategoryLayout() {
  return (
    <>
      <NavDesktop colorBlack={true}/>
      <Nav color="white" />
      <PageName namePage={"MV Category"} />
      <div id="wrap_body">
          <ViewAll/>
          <NavShop/>
          <LookBook/>
          <AllCategories/>
      </div>
    </>
  );
}
