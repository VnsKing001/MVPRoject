import React from "react";

import 'swiper/css/swiper.css'
import Swiper from "swiper";

const cardData = [
    {
        name:"JACKETS",
        src:"./img/category/slide4_block1_biggest.png"
    },
    {
        name:"PANTS & SHORTS",
        src:"./img/category/slide4_block2_biggest.png"
    },
    {
        name:"T-SHIRT & POLOS",
        src:"./img/category/slide4_block3_biggest.png"
    },
    {
        name:"HOODIES AND SWEATSHIRTS",
        src:"./img/category/slide4_block4_biggest.png"
    },
    {
        name:"HATS",
        src:"./img/category/slide4_block5_biggest.png"
    },
    {
        name:"BAGS",
        src:"./img/category/slide4_block6_biggest.png"
    },
    {
        name:"ACCESSORIES",
        src:"./img/category/slide4_block7_biggest.png"
    },
    {
        name:"HELMETS",
        src:"./img/category/slide4_block8_biggest.png"
    }
]

export default class AllCategories extends React.Component{

    componentDidMount(){
        this.swiper = new Swiper(".swiper2", {
            slidesPerView: 'auto',
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }

    render(){
        return(
            <div id="slide4">
            <h2 id="slide4_title">ALL CATEGORIES</h2>
            <div class="swiper swiper2">
                <div class="swiper-wrapper">
                    {cardData.map((card, key)=>{
                        return(
                            <div class="swiper-slide">
                                <img loading='lazy' src={card.src} alt={card.name} id={`group_product${key}`}/>
                                <div class="slide4_content">
                                    <h2>{card.name}</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div class="swiper-pagination" id="swiper2_pagination"></div>
            </div>
        </div>
        )
    }
}