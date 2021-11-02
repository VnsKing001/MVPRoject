import React from 'react'

import CardDetail from './CardDetail'

export default class Slide2 extends React.Component {

    state = {
        properties: [{
            cardName: "ROSSO",
            srcImg: "./img/dragsterPage/slide2_image1.webp",
            information: ["3", "Cylinders", "798", "cc", "Capacity", "110", "hp", "HorsePower"]
        },
        {
            cardName: "RR",
            srcImg: "./img/dragsterPage/slide2_image2.webp",
            information: ["3", "Cylinders", "798", "cc", "Capacity", "140", "hp", "HorsePower"],

        },
        {
            cardName: "RR SCS",
            srcImg: "./img/dragsterPage/slide2_image3.webp",
            information: ["3", "Cylinders", "798", "cc", "Capacity", "140", "hp", "HorsePower"]
        },
        {
            cardName: "RC SCS",
            srcImg: "./img/dragsterPage/slide2_image4.webp",
            information: ["3", "Cylinders", "798", "cc", "Capacity", "150", "hp", "HorsePower"]
        }
        ]
    }

    render() {
        return (
            // <!-- slide2 -->
                <div id="wrap_card">
                    {
                        this.state.properties.map((property, key) => {
                            return (
                                <>
                                    <CardDetail
                                        cardName={property.cardName}
                                        srcImg={property.srcImg}
                                        information={property.information}
                                        key={key}
                                    />
                                </>
                            )
                        })
                    }
                </div>
        )
    }
}

