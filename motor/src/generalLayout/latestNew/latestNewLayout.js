import React from "react";
import LatestNewCard from "./component/latestNewCard";
import "./mvLatestNew.css";
export default function LatestNewLayout() {
  return (
    <>
      <div className="mv__latest-new-header">
        <h1>MV LATEST NEWS</h1>
      </div>
      <div className="mv__latest-new-container">
        <div className="mv__latest-new-body">
          <LatestNewCard />
          <LatestNewCard />
          {/* <LatestNewCard /> */}
        </div>
        {/* <div class="about-us-button-container mv__latest-new-explore-container">
          <a href> Explore more</a>
        </div> */}
      </div>
    </>
  );
}
