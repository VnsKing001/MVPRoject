import Nav from "../../nav";
import NavDesktop from "../../navDesk";
import PageName from "../../pageName";

import "./styles/motorCategory.css";

export default function CategoryLayout() {
  return (
    <>
      <NavDesktop />
      <Nav color="white" />
      <PageName namePage={"MV Category"} />
    </>
  );
}
