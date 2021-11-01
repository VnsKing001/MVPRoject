import React from "react";

export default class Intro extends React.Component{
    render(){
        return(

        <>
            <div id="slide1">
                <h2 id="slide1_title">BEAUTY IN THE <br />BEAST</h2>
                <h2 id="slide1_title_replace">BEAUTY IN THE BEAST</h2>
                <picture id="slide1_source_image">
                    <source media="(min-width: 766px)" srcSet="./img/dragsterPage/slide1_image1.webp" />
                    <img src="./img/dragsterPage/slide1_image1_smallSize.webp" alt="Dragster model" loading="lazy" />
                </picture>
                <div id="wrap_slide1_para">
                    <p>Awe-inspiring, compact and a lifestyle statement in</p>
                    <p>its own right, Dragster is the perfect blend of</p>
                    <p>technology, raw power and design.</p>
                </div>
                <div id="wrap_slide1_replace">
                    Awe-inspiring, compact and a lifestyle statement in its own right, Dragster is the perfect blend of technology, raw power and design.
                </div>
            </div>
        </>
    )}
}

