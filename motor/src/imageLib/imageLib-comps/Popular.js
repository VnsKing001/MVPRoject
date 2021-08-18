import React from 'react';

const Popular = ({ setClick }) => {

    const handleClick = (click) => {
        if (click.target.classList.contains("popular-element")) {
            //this setClick will do when user click in place belong "popular-element"
            setClick(false);
        }
    }

    return (
        <div className="popular-element" onClick={handleClick} >
            <div className="contain-list">
                <ul>
                    <li>POPULAR</li>
                    <li>NEW & NOTEWORTHY</li>
                    <li>GOOD FOR SALE</li>
                </ul>
            </div>
        </div>
    )

}

export default Popular