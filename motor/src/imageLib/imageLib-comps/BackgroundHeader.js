import React from 'react';
import { motion } from 'framer-motion';

const BackgroundHeader = () => {

    return (
        <div className="background-header" >
            <div className="logo">
                <img src="./img/imageLibLayout/banner-xl.png" />
            </div>
            <div className="header-intro" >
                <h1>
                    <strong>MV AGUSTA</strong>
                    <strong>IMAGE</strong>
                </h1>
            </div>
        </div>
    )

}

export default BackgroundHeader;