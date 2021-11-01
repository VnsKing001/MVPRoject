import React from "react";
import LatestNewCard from "./component/latestNewCard";
import "./mvLatestNew.css";
import firstImg from "./img/1.jpg";
import secondImg from "./img/2.jpg";
import ThirdImg from "./img/3.jpg";
export default function LatestNewLayout() {
  return (
    <>
      <div className="mv__latest-new-header">
        <h1>MV LATEST NEWS</h1>
      </div>
      <div className="mv__latest-new-container">
        <div className="mv__latest-new-body">
          <LatestNewCard
            img={firstImg}
            title="Brutale 1000 - A naked Monster"
            content="Brutale was tested on race tracked at NordChef and its get a nice record, momen high and stability is compatible for biker..."
          />
          <LatestNewCard
            img={secondImg}
            title="Special Yellow Superveloce"
            content="We release new Special edition for Superveloce, it is combine between the history and modern. Just try out, and making you more unite..."
          />
          <LatestNewCard
            img={ThirdImg}
            title="Test ride new Brutale 800"
            content="Let test ride new MV Agusta Butale 800, drop down the hill and have your angle as low as you can. The bike will make you impressive..."
          />
        </div>
        {/* <div class="about-us-button-container mv__latest-new-explore-container">
          <a href> Explore more</a>
        </div> */}
      </div>
    </>
  );
}
