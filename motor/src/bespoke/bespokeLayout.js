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
  width: "100vw",
  background: "linear-gradient( 90deg ,#4DA5B8 0%,#51A2CF 100%)",
  img: {
    large: "./img/bespoke/banner-xl.png",
    medium: "./img/bespoke/banner-m.png",
    small: "",
  },
  titles: ["MONACO", "DESIGN", "STUDIO"],
  content:
    "Monaco Design Studio is an official department of MV Agusta specialising in the creation of unique models to meet a passionate clientele's demand for the most exclusive, luxury customisation.",
};

const listImg = [
  "./img/bespoke/slide1.jpg",
  "./img/bespoke/slide2.jpg",
  "./img/bespoke/slide3.jpg",
  "./img/bespoke/slide4.jpg",
  "./img/bespoke/slide5.jpg",
];

const advantages = [
  {
    name: "ADD ACCESSORIES",
    title: "ADD ACCESSORIES",
    description:
      "Customers can choose to add any accessory available in the MV Agusta catalog.",
    img: {
      original: "bespoke/accessories.png",
      large: "bespoke/accessories.png",
      medium: "bespoke/accessories.png",
      small: "bespoke/accessories.png",
    },
  },
  {
    name: "NEW UPHOLSTERY",
    title: "NEW UPHOLSTERY",
    description:
      "Any type of upholstery can be chosen to match the rest of design and further personalise the bike, with the largest possible choice of fabrics and materials (Alcantara, leather with different textures, personalised embroidery)",
    img: {
      original: "bespoke/design.png",
      large: "bespoke/design.png",
      medium: "bespoke/design.png",
      small: "bespoke/design.png",
    },
  },
  {
    name: "COMPLETE DESIGN",
    title: "COMPLETE DESIGN",
    description:
      "Only high-end paint is used, and particular attention is paid to textures, offering various effects such as wood or brushed aluminium. Other refined techniques are also available to highlight specific parts, such as gold or silver leaf work, chrome plating or anodising.",
    img: {
      original: "bespoke/upholstery.png",
      large: "bespoke/upholstery.png",
      medium: "bespoke/upholstery.png",
      small: "bespoke/upholstery.png",
    },
  },
];

const galleries = [
  {
    title: "STARTING YOUR PROJECT",
    para1: "THE BEGINNING",
    para2:
      "The process begins with customers contacting their local dealer and discovering everything about this new, high-end service from the factory.They can also contact the Monaco Design Studio directly.",
    image: "./img/bespoke/start.png",
  },
  {
    title: "DEFINITION AND DISCUSSION",
    para1: "DEFINING DESIRES",
    para2:
      "When contact is made to start a project, MDS and the client discuss possible options. Several renderings of the project are then established. When the project is defined between MDS and the customer, the project is subject to the last validations at the factory with the internal Design department, the CRC and the approval department.",
    image: "./img/bespoke/definition.png",
  },
  {
    title: "BUILDING YOUR BIKE",
    para1: "BUILDING YOUR BIKE",
    para2:
      "The concrete development of the project can thus begin. Depending on the details of a project and the MV Agusta models used, the construction time of the motorcycle can vary between 3 and 6 months. Once completed, the motorcycle is tested for final approval, establishment of the 'one off 1/1' certificate of authenticity and prepared for dispatch to its final destination.",
    image: "./img/bespoke/construction.png",
  },
];


export default function BespokeLayout(props) {
  return (
    <>
      <BespokeHeader headerData={headerData} />
      <NavDesktop />
      <Nav color="white" />
      <SlideImage listImg={listImg} />
      <GalleryStep galleries={galleries}/>
      <MotorItem advantages={advantages} />
      <TheTeam />
      <Feedback />
    </>
  );
}
