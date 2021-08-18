import React from 'react';

const Filters = ({setSelect}) => {

    const handleClick = (click) => {
        if(click.target.classList.contains("filters")){
            //this hook will do when user click place in filters to close list of filters
            setSelect(false);
        }
    }

    return (
        <div className="filters" onClick={handleClick}>
            <div className="tags">
                <p>Tags</p>
                <input type='text' />
            </div>
            <div className="color">
                <p>Color</p>
                <input type='text' />
            </div>
            <div className="timeframe">
                <p>Timeframe</p>
                <input type='text' />
            </div>
            <div className="made-with">
                <p>Made with</p>
                <input type='text' />
            </div>
            <div className="downloads">
                <p>Downloads</p>
                <input type='text' />
            </div>
        </div>
    )

}

export default Filters;