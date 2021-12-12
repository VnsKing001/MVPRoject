import React from "react";
import ReactDOM from "react-dom";
import { BodyHomepage } from "./bodyHomePage/bodyHomepage";
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";
import BodyBrutale1000RR from "./motor_item_page/brutale1000rr_body";
import Rush1000 from "./motor_item_page/rush1000_body";
import "animate.css/animate.min.css";
import Dragster800Rosso from "./motor_item_page/dragster800rosso_body";
import BodyDragster800RR from "./motor_item_page/dragster800rr_body";
import Dragster800RR_SCS from "./motor_item_page/dragster800rr_scs_body";
import SuperveloceAlpine from "./motor_item_page/superveloceAlpine_body";
import AboutUsLayout from "./aboutUs/aboutUsLayout";
import { ScrollNavFunction } from "./generalFunctionForOnScroll/ScrollEventFor_MotorPage";
import { NavWhiteCompact } from "./generalFunctionForOnScroll/ScrollEventFor_Homepage";
import { SpecialDeals } from "./specialDeal/specialDeals";
import MvEmail from "./generalLayout/mvEmail";
import { FooterGe } from "./generalLayout/footer_test";
import { ContactUsLayout } from "./contactUs/contactUsLayout";
import MotorRideAppLayout from "./motorRideApp/motorRideApp_Layout";
import { Container } from "./certificate/mv-certificate";
import WarrantyLayout from "./warranty/warrantyLayout";
import { NewsMV } from "./news/newMV";
import BuyYourMvLayout from "./buyYourMV/buyYourMvLayout";
import BespokeLayout from "./bespoke/bespokeLayout";
import F3_800_Body from "./motor_item_page/f3_800_body";
import Brutale800RRBody from "./motor_item_page/brutale800rr_body";
import Brutale800RR_SCS_Body from "./motor_item_page/brutale800rr_scs_body";
import Reveal2021Page from "./reveal2021/reveal2021_body";
import { HistoryPage } from "./generalLayout/slideScrollHorizontal/historyPage";
import CustomDesign from "./bespoke/customDesign";
import ImageLibLayout from "./imageLib/imageLibLayout";
import MyTeamProject from "./myTeamProject/myTeamProject";
import SignInPage from "./generalLayout/signInPage/SignInPage";
import CategoryLayout from "./generalLayout/motorPage/category/CategoryLayout";
import MvCategoriesLayout from "./generalLayout/mvCategory/MvCategoriesLayout";
import DragsterCategory from "./generalLayout/mvCategory/DragsterCategory";
import RushCategory from "./generalLayout/mvCategory/RushCategory";
import BrutaleCategory from "./generalLayout/mvCategory/BrutaleCategory";
import F3Category from "./generalLayout/mvCategory/F3Category";
import F3_800_RR_Body from "./motor_item_page/f3_800_rr_body";

function Index() {
  window.addEventListener("scroll", () => {
    ScrollNavFunction();
    NavWhiteCompact();
  });
  // window.addEventListener("scroll", NavWhiteCompact);
  return (
    <>
      <BrowserRouter>
        <div
          style={{
            width: "98.6%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Switch>
            <Route path="/index" component={BodyHomepage} exact />
            <Route path="/homepage" component={BodyHomepage} exact />
            <Route path="/" component={BodyHomepage} exact />
            <Route path="/about-us" component={AboutUsLayout} exact />
            <Route path="/special-deals" component={SpecialDeals} exact />
            <Route path="/contact-us" component={ContactUsLayout} exact />
            <Route path="/mv-ride-app" component={MotorRideAppLayout} exact />
            <Route path="/dragster800rr" component={BodyDragster800RR} />
            <Route path="/dragster800rrscs" component={Dragster800RR_SCS} />
            <Route path="/brutale1000rr" component={BodyBrutale1000RR} />
            <Route path="/certificate" component={Container} exact />
            <Route path="/warranty" component={WarrantyLayout} exact />
            <Route path="/news" component={NewsMV} exact />
            <Route path="/buy-your-mv" component={BuyYourMvLayout} exact />
            <Route path="/custom-design" component={CustomDesign} exact />
            <Route path="/monaco-design-studio" component={BespokeLayout} />
            <Route path="/mv-eshopping" component={CategoryLayout} exact />
            <Route path="/reveal-events" component={Reveal2021Page} exact />
            <Route path="/history" component={HistoryPage} exact />
            <Route path="/image-lib" component={ImageLibLayout} exact />
            <Route path="/sign-in" component={SignInPage} exact />
            <Route path="/my-team-projects" component={MyTeamProject} />
            <Route path="/rush1000" component={Rush1000} />
            <Route path="/dragster800rosso" component={Dragster800Rosso} />
            <Route path="/f3-800" component={F3_800_Body} />
            <Route path="/f3-800-rr" component={F3_800_RR_Body} />
            <Route path="/brutale800rr" component={Brutale800RRBody} />
            <Route
              path="/brutale-800-rr-scs"
              component={Brutale800RR_SCS_Body}
            />
            <Route path="/superveloce-alpine" component={SuperveloceAlpine} />
            <Switch>
              <Route path="/mv-category" component={MvCategoriesLayout} exact />
              <Route
                path="/mv-category/dragster"
                component={DragsterCategory}
              />
              <Route path="/mv-category/rush" component={RushCategory} />
              <Route path="/mv-category/brutale" component={BrutaleCategory} />
              <Route path="/mv-category/f-sport" component={F3Category} />
            </Switch>
          </Switch>
          <MvEmail />
          <FooterGe />
        </div>
      </BrowserRouter>
    </>
  );
}
ReactDOM.render(<Index />, document.getElementById("body"));
