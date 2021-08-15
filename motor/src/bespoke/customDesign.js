import React from "react";
import Nav from "../generalLayout/nav";
import NavDesktop from "../generalLayout/navDesk";
import SlideImage from "./Component/bespokeSlideImage";
import TheTeam from "./Component/bespokeTeam";
import MotorItem from "../generalLayout/motorPage/motorItems/motorItems";
import Feedback from "./Component/bespokeFeedback";
import GalleryStep from "./Component/bespokeGalleryStep";
import BespokeHeader from "./Component/bespokeHeader";

const headerData = {
  background: "linear-gradient(90deg, #773000 0%, #FFC634 100%)",
  img: {
    large: "./img/customDesign/banner-xl.png",
    medium: "./img/customDesign/banner-m.png",
    small: "",
  },
  titles: ["MV AGUSTA", "CUSTOM", "DESIGN"],
  content:
    "MV Agusta Custom Design is an official department of MV Agusta specialising in the creation of unique models to meet a passionate clientele's demand for the most exclusive, luxury customisation.",
};

const listImg = [
  "./img/customDesign/slide1.jpg",
  "./img/customDesign/slide2.jpg",
  "./img/customDesign/slide3.jpg",
  "./img/customDesign/slide4.jpg",
  "./img/customDesign/slide5.jpg",
];

const advantages = [
  {
    name: "ADD ACCESSORIES",
    title: "ADD ACCESSORIES",
    description:
      "Customers can choose to add any accessory available in the MV Agusta catalog.",
    img: {
      original: "customDesign/accessories.jpg",
      large: "customDesign/accessories.jpg",
      medium: "customDesign/accessories.jpg",
      small: "customDesign/accessories.jpg",
    },
  },
  {
    name: "NEW UPHOLSTERY",
    title: "NEW UPHOLSTERY",
    description:
      "Any type of upholstery can be chosen to match the rest of design and further personalise the bike, with the largest possible choice of fabrics and materials (Alcantara, leather with different textures, personalised embroidery)",
    img: {
      original: "customDesign/design.jpg",
      large: "customDesign/design.jpg",
      medium: "customDesign/design.jpg",
      small: "customDesign/design.jpg",
    },
  },
  {
    name: "COMPLETE DESIGN",
    title: "COMPLETE DESIGN",
    description:
      "Only high-end paint is used, and particular attention is paid to textures, offering various effects such as wood or brushed aluminium. Other refined techniques are also available to highlight specific parts, such as gold or silver leaf work, chrome plating or anodising.",
    img: {
      original: "customDesign/upholstery.jpg",
      large: "customDesign/upholstery.jpg",
      medium: "customDesign/upholstery.jpg",
      small: "customDesign/upholstery.jpg",
    },
  },
];

const galleries = [
  {
    title: "STARTING YOUR PROJECT",
    para1: "THE BEGINNING",
    para2:
      "The process begins with customers contacting their local dealer and discovering everything about this new, high-end service from the factory. They can also contact the MV Agusta Custom Design directly.",
    image: "./img/customDesign/start.jpg",
  },
  {
    title: "DEFINITION AND DISCUSSION",
    para1: "DEFINING DESIRES",
    para2:
      "When contact is made to start a project, MV Agusta Custom Design and the client discuss possible options. Several renderings of the project are then established. When the project is defined between MV Agusta Custom Design and the customer, the project is subject to the last validations at the factory with the internal Design department, the CRC and the approval department.",
    image: "./img/customDesign/definition.jpg",
  },
  {
    title: "CONSTRUCTION STAGE",
    para1: "BUILDING YOUR BIKE",
    para2:
      "Depending on the details of a project and the MV Agusta models used, the construction time of the motorcycle can vary between 3 and 6 months. Once completed, the motorcycle is tested for final approval, establishment of the “one off 1/1” certificate of authenticity an prepared for dispatch to its final destination.",
    image: "./img/customDesign/construction.jpg",
  },
];

export default function CustomDesign(props) {
  return (
    <>
      <BespokeHeader headerData={headerData} />
      <NavDesktop />
      <Nav color="white" />
      <SlideImage listImg={listImg} />
      <GalleryStep galleries={galleries} />
      <MotorItem advantages={advantages} />
      <TheTeam />
      <Feedback />
    </>
  );
}
