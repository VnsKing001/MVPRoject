import React from "react";

export default function LatestNewCard() {
  return (
    <div className="mv__latest-new-card">
      <div className="mv__latest-new-card-body">
        <a href className="mv__latest-ncb-picture-wrap">
          <picture>
            <source
              media="(max-width: 1500px)"
              srcSet="./img/latestNews/rush-1000-2021-xl_1366.png"
              type="image/png"
            ></source>
            <source
              media="(min-width: 1501px)"
              srcSet="./img/latestNews/rush-1000-2021-xl_1900.png"
              type="image/png"
            ></source>
            <img
              className="mv__latest-ncb-picture"
              loading="lazy"
              src="./img/latestNews/rush-1000-2021-xl_1900.png"
              alt="news"
            ></img>
          </picture>
        </a>
        <div className="mv__latest-new-card-content-wrap">
          <a href className="mln-title">
            aaaaa
          </a>
          <a href className="mln-content">
            ahihihihihi ahihihih ahiahindhj fsifhskjfsid fhsihfksnfmsdnm
          </a>
        </div>
      </div>
    </div>
  );
}
