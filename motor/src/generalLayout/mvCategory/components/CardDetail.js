import React from "react";
import { Link, NavLink } from "react-router-dom";

function CardDetail(props) {
  return (
    <div className="card" key={props.key}>
      <h2 className="card_name">{props.cardName}</h2>
      <img src={props.srcImg} alt={`${props.cardName} model`} loading="lazy" />
      {/* <!-- providing information for card --> */}
      <div className="wrap_information">
        <div className="block_information">
          <div className="number">
            <h2>{props.information[0]}</h2>
          </div>
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
      <a href={props.link} className="card_btn">LEARN MORE</a>
    </div>
  );
}

export default CardDetail;
