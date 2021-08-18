import React from 'react';

const BarLayout = ({setClick,setSelect }) => {

    return (
        <div className="progress-bar" >
            <div className="bar-element1" >
                <div onClick={() => setClick(true)} className="contain-element1" >
                    <p>POPULAR</p>
                </div>
            </div>
            <div className="bar-element2" >
                <ul>
                    <li>RUSH</li>
                    <li>BRUTALE</li>
                    <li>DRAGSTER</li>
                    <li>TURISMO VELOCE</li>
                    <li>F3</li>
                    <li>SUPERVELOCE</li>
                </ul>
            </div>
            <div className="bar-element3" >
                <div onClick={() => setSelect(true)} className="contain-element3">
                    <p>FILTERS</p>
                </div>
            </div>
        </div>
    )

}

export default BarLayout;