import React from "react";

import 'swiper/css/swiper.css';
import Swiper from "swiper";

const cardData = [
    {
        src: "./img/category/slide1_block1_image1.png",
        name: "Logo Level 1 Sweatpants",
        prices: "57.00",
        options: [
            "./img/category/slide1_block1_image1_logo.png",
            "./img/category/slide1_block1_image2_logo.png"
        ]
    },
    {
        src:"./img/category/slide1_block2_image1.png",
        name: "Logo Level 1 Quilted Bomber",
        prices: "57.00",
        options:["./img/category/slide1_block2_image1.png"]
    },
    {
        src:"./img/category/slide1_block3_image1.png",
        name: "Logo Level 1 Long Sleeve T-shirt",
        prices: "57.00",
        options:["./img/category/slide1_block3_image1_logo.png","./img/category/slide1_block3_image2_logo.png"]
    },
    {
        src:"./img/category/slide1_block4_image1.png",
        name:"Logo Level 1 Extended T-shirt",
        prices:"57.00",
        options:["./img/category/slide1_block4_image1_logo.png","./img/category/slide1_block4_image2_logo.png","./img/category/slide1_block4_image3_logo.png"]
    },
    {
        src:"./img/category/slide1_block5_image1.png",
        name:"Logo Level 1 Cap",
        prices:"40.00",
        options:["./img/category/slide1_block5_image1_logo.png","./img/category/slide1_block5_image2_logo.png"]
    },
    {
        src:"./img/category/slide1_block6_image1.png",
        name:"Logo level 1 Windbreaker",
        prices:"57.00",
        options:["./img/category/slide1_block6_image1.png"]
    },
    {
        src:"./img/category/slide1_block7_image1.png",
        name:"Logo Level 1 Pocket T-shirt",
        prices:"57.00",
        options:["./img/category/slide1_block7_image1_logo.png","./img/category/slide1_block7_image2_logo.png"]
    }
]

export default class ViewAll extends React.Component{

    constructor(){
        super()
        this.state = {
            card1: cardData[0].options[0],
            card2: cardData[1].options[0],
            card3: cardData[2].options[0],
            card4: cardData[3].options[0],
            card5: cardData[4].options[0],
            card6: cardData[5].options[0],
            card7: cardData[6].options[0],
        }
    }

    componentDidMount(){
        // init swiper
        this.swiper = new Swiper(".swiper1", {
            slidesPerView: 'auto',
            autoplay: {
                delay: 1000,
                disableOnInteraction: false
            },
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        // init the css for the options were activated
    }

    handleClick = (e) => {
        // alert(e.target.getAttributes(src))
    }

    render(){
        return(
            <div id="slide1">
            {/* <!-- Swiper --> */}
            <h2 id="slide1_title">VIEW IN <span id="h2_sub">VIEW ALL</span></h2>
            <div className="swiper swiper1">
                <div className="swiper-wrapper my-swiper-wrapper">
                {cardData.map((card, key)=>{
                return (
                    <div className="swiper-slide my-swiper-slide">
                    <span className="slide_new">NEW</span>
                    <img loading='lazy' src={card.src} alt={card.name} id={`slide${key}_block${key}_image`}/>
                    <div className="wrap_swiper_information">
                        <div className={`slide${key}_information`}>
                            <p>{card.name}</p>
                            <strong>&#8364;{card.prices}</strong>
                        </div>
                        <div className="swiper_logo_image">
                            {card.options.map((src, index)=>{
                                return <img loading='lazy' src={src} alt={`options ${index}`} id={src} />
                            })}
                        </div>
                    </div>
                </div>
                )
            })}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
        )
    }
}