import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DisplayImg = ({ setChoose }) => {

    //this use to appear  showmore in reponsive
    const [show, setShow] = useState(false);

    //array to storage address of image to display
    const img = ["../img/imageLibLayout/element-1.jpg",
        "../img/imageLibLayout/element-2.jpg",
        "../img/imageLibLayout/element-3.jpg",
        "../img/imageLibLayout/element-4.jpg",
        "../img/imageLibLayout/element-5.jpg",
        "../img/imageLibLayout/element-6.jpg",
        "../img/imageLibLayout/element-7.jpg",
        "../img/imageLibLayout/element-8.jpg",
        "../img/imageLibLayout/element-9.jpg",
        "../img/imageLibLayout/element-10.jpg",
        "../img/imageLibLayout/element-11.jpg"
    ];

    return (
        <div className="display-image">
            <div className="grid1" >
                <div className="image-element1" onClick={() => setChoose(img[0])}>
                    <motion.img src={img[0]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                    <div className="more-infor">
                        <p>THE 7-STEP JOURNEY TO BECOMING THE PROUD OWNER OF AN MV AGUSTA</p>
                    </div>
                </div>
                <div className="image-element3" onClick={() => setChoose(img[2])}>
                    <motion.img src={img[2]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                    <div className="more-infor">
                        <p>DISCOVER ALL THE SPECIAL DEALS, ONLINE OR AT AN OFFICIAL MV AGUSTA DEALER NEAR YOU</p>
                    </div>
                </div>
                <div className="image-element4" onClick={() => setChoose(img[3])}>
                    <motion.img src={img[3]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                    <div className="more-infor">
                        <p>GET CONNECTED TO YOUR BIKE AND LIVE THE MV AGUSTA DIGITAL EXPERIENCE</p>
                    </div>
                </div>
            </div>
            <div className="grid2">
                <div className="image-element5" onClick={() => setChoose(img[4])}>
                    <motion.img src={img[4]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                    <div className="more-infor">
                        <p>GET CONNECTED TO YOUR BIKE AND LIVE THE MV AGUSTA DIGITAL EXPERIENCE</p>
                    </div>
                </div>
                <div className="image-element6" onClick={() => setChoose(img[5])}>
                    <motion.img src={img[5]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                    <div className="more-infor">
                        <p>WORLD-CLASS, SPECIALISED SERVICE FOR YOUR MV AGUSTA IS ALWAYS AVAILABLE AT AN OFFICIAL DEALER NEAR YOU</p>
                    </div>
                </div>
                <div className="image-element7" onClick={() => setChoose(img[6])}>
                    <motion.img src={img[6]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                    <div className="more-infor">
                        <p>ALL THE DETAILS OF YOUR STANDARD 3 YEARS MANUFACTURER’S WARRANTY, AND HOW TO EXTEND IT</p>
                    </div>
                </div>
                <div className="image-element8" onClick={() => setChoose(img[7])}>
                    <motion.img src={img[7]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                    <div className="more-infor">
                        <p>EXPLORE OUR MV AGUSTA WALLPAPER'S WORLD LIBRARY</p>
                    </div>
                </div>
            </div>
            <div className="grid3">
                <div className="image-element9" onClick={() => setChoose(img[8])}>
                    <motion.img src={img[8]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                    <div className="more-infor">
                        <p>THE 7-STEP JOURNEY TO BECOMING THE PROUD OWNER OF AN MV AGUSTA</p>
                    </div>
                </div>
                <div className="image-element10" onClick={() => setChoose(img[9])}>
                    <motion.img src={img[9]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                    <div className="more-infor">
                        <p>DISCOVER ALL THE SPECIAL DEALS, ONLINE OR AT AN OFFICIAL MV AGUSTA DEALER NEAR YOU</p>
                    </div>
                </div>
                <div className="image-element11" onClick={() => setChoose(img[10])}>
                    <motion.img src={img[10]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                    <div className="more-infor">
                        <p>EXPLORE OUR MV AGUSTA WALLPAPER'S WORLD LIBRARY</p>
                    </div>
                </div>
            </div>

            <div className="image-collection">
                <div className="row1" onClick={() => setChoose(img[0])}>
                    <motion.img src={img[0]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                    <div className="infor-row1">
                        <p>THE 7-STEP JOURNEY TO BECOMING THE PROUD OWNER OF AN MV AGUSTA</p>
                    </div>
                </div>
                <div className="row2" onClick={() => setChoose(img[2])}>
                    <motion.img src={img[2]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                    <div className="infor-row2">
                        <p>DISCOVER ALL THE SPECIAL DEALS, ONLINE OR AT AN OFFICIAL MV AGUSTA DEALER NEAR YOU</p>
                    </div>
                </div>
                <div className="row3" onClick={() => setChoose(img[3])}>
                    <motion.img src={img[3]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                    <div className="infor-row3">
                        <p>GET CONNECTED TO YOUR BIKE AND LIVE THE MV AGUSTA DIGITAL EXPERIENCE</p>
                    </div>
                </div>
                <div className="row4" onClick={() => setChoose(img[4])}>
                    <motion.img src={img[4]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                    <div className="infor-row4">
                        <p>GET CONNECTED TO YOUR BIKE AND LIVE THE MV AGUSTA DIGITAL EXPERIENCE</p>
                    </div>
                </div>
                {show && <div className="image-collection-more">
                    <div className="row5" onClick={() => setChoose(img[5])}>
                        <motion.img src={img[5]}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        />
                        <div className="infor-row5">
                            <p>WORLD-CLASS, SPECIALISED SERVICE FOR YOUR MV AGUSTA IS ALWAYS AVAILABLE AT AN OFFICIAL DEALER NEAR YOU</p>
                        </div>
                    </div>
                    <div className="row6" onClick={() => setChoose(img[6])}>
                        <motion.img src={img[6]}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        />
                        <div className="infor-row6">
                            <p>ALL THE DETAILS OF YOUR STANDARD 3 YEARS MANUFACTURER’S WARRANTY, AND HOW TO EXTEND IT</p>
                        </div>
                    </div>
                    <div className="row7" onClick={() => setChoose(img[7])}>
                        <motion.img src={img[7]}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        />
                        <div className="infor-row7">
                            <p>EXPLORE OUR MV AGUSTA WALLPAPER'S WORLD LIBRARY</p>
                        </div>
                    </div>
                    <div className="row8" onClick={() => setChoose(img[8])}>
                        <motion.img src={img[8]}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        />
                        <div className="infor-row8">
                            <p>THE 7-STEP JOURNEY TO BECOMING THE PROUD OWNER OF AN MV AGUSTA</p>
                        </div>
                    </div>
                    <div className="row9" onClick={() => setChoose(img[9])}>
                        <motion.img src={img[9]}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        />
                        <div className="infor-row9">
                            <p>DISCOVER ALL THE SPECIAL DEALS, ONLINE OR AT AN OFFICIAL MV AGUSTA DEALER NEAR YOU</p>
                        </div>
                    </div>
                    <div className="row10" onClick={() => setChoose(img[10])}>
                        <motion.img src={img[10]}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        />
                        <div className="infor-row10">
                            <p>EXPLORE OUR MV AGUSTA WALLPAPER'S WORLD LIBRARY</p>
                        </div>
                    </div>
                </div>
                }

                {show==false &&<div className="button-show-more" >
                    <p onClick={() => { setShow(true) }}>SHOW MORE</p>
                    <svg
                        id="arrow-down-sm" 
                        width="9" height="4" viewBox="0 0 9 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        
                        <path d="M0.5 0.5L4.5 2.5L8.5 0.5" stroke="rgba(0,0,0,0.7)" stroke-linecap="round" stroke-width="0.5"/>

                    </svg>
                </div>
                }
            </div>
        </div>
    )

}

export default DisplayImg;