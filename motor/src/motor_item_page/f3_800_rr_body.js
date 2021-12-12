import React from "react";
import Motor3d from "../generalLayout/motorPage/model3d/motor3d";
import MvEngineMotor from "../generalLayout/motorPage/motorEngine/mvEngineMotor";
import Nav from "../generalLayout/nav";
import NavDesktop from "../generalLayout/navDesk";
import OrderLayout from "../generalLayout/motorPage/orderLayout/orderLayout";
import PageName from "../generalLayout/pageName";
import MotorPageHeader from "../generalLayout/motorPage/motorHeader/motorPageHeader";
import MotorItem from "../generalLayout/motorPage/motorItems/motorItems";
import DesignTips from "../generalLayout/motorPage/designTips/designTips";
import MotorProperties from "../generalLayout/motorPage/motorProperties/motorProperties";


const heroGradientStart = "#474747";
const heroGradientEnd = "#1D1D1D";

const f3_800_infor = {
  namePage: "F3 800",
  header: {
    price: "21.900",
    nameHeaderTitle: "f3rr/logo/f3-800.svg",
    bgHeaderParallax_Large: "f3rr/bg/f3_rr_xl.webp",
    bgHeaderParallax_Small: "f3rr/bg/f3_rr_m.webp",
    manifesto_Arr: ["NON PLUS", "ULTRA"],
    colorBg: `linear-gradient(90deg,${heroGradientStart} 0%,${heroGradientEnd} 100%)`,
    contentHeaderContent: "The Ultimate F3, unrivalled Supersport Queen",
    titleSize: "auto 16%",
    reveredContent: false,
    heightContentTop: "22%",
    position: "absolute",
    posRight: "0",
    transformMedia: "none",
    // width: "100%",
    posBottom: "0",
    // height: "auto"
  },
  Model3ds: [
    {
      link: "f3rr/models/whiteRed/f3rr",
      mainColor: "linear-gradient(152.18deg, #D42222 9.59%, #AA0F0F 80.9%)",
      secondaryColor: "linear-gradient(152.18deg,#FFFFFF 9.59%,#D3D3D3 80.9%)",
      nameOfColor: "SURREAL WHITE GLOSS MAMBA RED GLOSS",
    },
  ],
  properties: {
    cylinders: 3,
    hp: 147,
    engineMaxAt: "13.200",
    topSpeed: "240",
    cc: 798,
    kg: "173",
    ratio: "13.3:1",
    scr: {
      large: "f3rr/properties/properties.jpg",
      medium: "f3rr/properties/properties-m.jpg",
      small: "f3rr/properties/properties-s.jpg",
    },
  },
  designTips: {
    span: "GP",
    strong: "AERODYNAMICS",
    p: "The F3 RR was the subject of a careful study in the wind tunnel, which led to the integration of some aerodynamic elements in the fairing. The objective? To improve performance and increase the efficiency of the engine. The appendages on the sides of the fairing are made of forged carbon fiber and are able to generate a load of 8 kg on the front end at a speed of 240 km/h.",
    src: "f3rr/designTips/design.jpg",
    inf: [
      {
        title: "DEVIL IN THE DETAILS",
        content:
          "The wings are just one of the components of an aerodynamic package that includes a higher windscreen, the new sides of the fairing in carbon fiber and the fender that optimizes the flow of air to the radiator. These elements have been studied to further improve the Cx, completely compensating for the greater drag due to the wings.",
        mediumImg: "img/f3rr/designTips/f3-rr-popup-1.png",
        largeImg: "img/f3rr/designTips/f3-rr-popup-xl-1.png",
      },
      {
        title: "SKY'S THE LIMIT",
        content:
          "The new F3 RR not only confirms the extraordinary speed performance but also gains load on the front, as well as feeling and road holding in corners. This evolution is a further example of how on the F3 RR every technical element has been designed exclusively to increase performance.",
        mediumImg: "img/f3rr/designTips/f3-rr-popup-2.png",
        largeImg: "img/f3rr/designTips/f3-rr-popup-xl-2.png",
      },
    ],
  },
  engineInf: {
    title: {
      top: "FEEL",
      bottom: "THE POWER OF SOUND",
    },
    src: "3-engine.png",
    content:
      "The “Trepistoni” engine has been further developed, reducing internal friction and increasing driveability. With its 147 horsepower engine, it is one of the most powerful in its category, the absolutely most powerful of all bikes in the 800 displacement. The titanium valves allow the bike to reach very high rotation speeds. Crankshaft main bearings are new, redesigned to reduce inertia and friction.",
  },
  advantages: [
    {
      name: "Electronic",
      title: "TOTAL CONTROL",
      img: {
        original: "f3rr/advantages/electronics.jpg",
        large: "f3rr/advantages/electronics-l.jpg",
        medium: "f3rr/advantages/electronics-m.jpg",
        small: "f3rr/advantages/electronics-s.jpg",
      },
      description:
        "From the dashboard to the ABS, passing through the controls and the ECU firmware. The electronics of the F3 RR take a clear step forward. The arrival of a new IMU inertial platform, designed and built exclusively for MV Agusta, reads the position of the bike in space and thus allows the precise management of all the controls according to the lean angle.",
    },
    {
      name: "Technology",
      title: "SMARTHPHONE ENABLED",
      img: {
        original: "f3rr/advantages/technology.jpg",
        large: "f3rr/advantages/technology-l.jpg",
        medium: "f3rr/advantages/technology-m.jpg",
        small: "f3rr/advantages/technology-s.jpg",
      },
      description:
        'The bike-rider interface is the instrumentation with 5.5" TFT panel, capable of communicating with the MV Ride app. Record and share trips, customize the bike directly from the smartphone, take advantage of turn-by-turn navigation: everything is within smartphone reach. And on the handlebars, a convenient joystick allows you to move between the configuration menus.',
    },
    {
      name: "Safety",
      title: "GO FOR IT!",
      img: {
        original: "f3rr/advantages/safety.jpg",
        large: "f3rr/advantages/safety-l.jpg",
        medium: "f3rr/advantages/safety-m.jpg",
        small: "f3rr/advantages/safety-s.webp",
      },
      description:
        "The ABS, supplied by Continental, is equipped with the very useful cornering function, a safety device; the traction control TC can intervene more precisely, because it also takes into account the inclination of the bike. Thanks to the IMU, the renewed front lift control FLC is able to manage a controlled wheelie, for the benefit of fun and performance.",
    },
  ],
};
export default function F3_800_RR_Body() {
  return (
    <>
      <NavDesktop />
      <Nav color="white" />
      <MotorPageHeader headerData={f3_800_infor.header} />
      <PageName namePage={f3_800_infor.namePage} />
      <Motor3d models={f3_800_infor.Model3ds} />
      <MotorProperties properties={f3_800_infor.properties} />
      <DesignTips designTips={f3_800_infor.designTips} />
      <MvEngineMotor engineInf={f3_800_infor.engineInf} />
      <MotorItem advantages={f3_800_infor.advantages} />
      <OrderLayout
        modelName={f3_800_infor.namePage}
        price={f3_800_infor.header.price}
      />
    </>
  );
}
