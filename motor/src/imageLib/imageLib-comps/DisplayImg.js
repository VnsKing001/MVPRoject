import React from 'react';
import { motion } from 'framer-motion';

const DisplayImg = ({ setChoose }) => {

    const img = ["../img/imageLibLayout/element-1.jpg","../img/imageLibLayout/element-2.jpg"];
    
    return(
        <div className="display-image">
            <div className="image-element1" onClick={() => setChoose(img[0])}>
                <motion.img src={img[0]} 
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                />
            </div>
            <div className="image-element2" onClick={() => setChoose(img[1])}>
                <motion.img src={img[1]} 
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{ delay: 1 }}
                />
            </div>
        </div>
    )

}

export default DisplayImg;