import React from 'react'

function Slide2Card(props) {
    return (
        <div className="card" key={props.key}>
            <h2 className="card_name">{props.cardName}</h2>
            <img src={props.srcImg} alt={`${props.cardName} model`} loading="lazy" />
            {/* <!-- providing information for card --> */}
            <div className="wrap_information">
                <div className="block_information">
                    <div className="number"><h2>{props.information[0]}</h2></div>
                    <p className="information">{props.information[1]}</p>
                </div>
                <div className="block_information">
                    <div className="number">
                        <h2>{props.information[2]}</h2>
                        <h3 className="sub_number">{props.information[3]}</h3>
                    </div>
                    <p className="information">{props.information[4]}</p>
                </div>
                <div className="block_information">
                    <div className="number">
                        <h2>{props.information[5]}</h2>
                        <h3 className="sub_number">{props.information[6]}</h3>
                    </div>
                    <p className="information">{props.information[7]}</p>
                </div>
            </div>
            <div className="card_btn">LEARN MORE</div>
        </div>
    )
}

export default Slide2Card
