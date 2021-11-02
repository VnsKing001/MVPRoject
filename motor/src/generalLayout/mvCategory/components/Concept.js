import React from 'react'

const Concept = () => {
    return (
        <div id="slide3">
            <div id="wrap_slide3">
                <div id="wrap_title_slide3">
                    <h2 id="slide3_title">CONCEPT OF</h2>
                    <h2 id="slide3_subtitle">DRAGSTER</h2>
                </div>
                <picture id="slide3_image">
                    <source srcSet="./img/dragsterPage/slide3_tabletSize.webp"
                        media="(max-width: 575px)" />
                    <img src="./img/dragsterPage/slide3_bigSize.webp" alt="Agusta motor" />
                </picture>
                <p id="slide3_para">
                    The Dragster is MV Agusta’s most impudent, irreverent model. It has that wild, untamed allure that instantly bewitches any bike lover and makes it a lifestyle statement in its own right.
                    <br />
                    <br />
                    The bobbed tail, the spoke wheels, the compact yet balanced volumes and weights distributed over the refined chassis are a vivid reminiscence of those epic drag races, interpreted in the most modern and compelling way.
                </p>
            </div>
        </div>
    )
}

export default Concept
