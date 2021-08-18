import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ choose,setChoose }) => {

    const handleClick = (click) => {
        if(click.target.classList.contains('modal')){
            setChoose(false);
        }
    }

    return (
        <motion.div className="modal" onClick={handleClick}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
        >
            <motion.img src={choose} 
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            />
        </motion.div>
    )

}

export default Modal;