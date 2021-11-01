import React from "react";
import defaultImg from '../img/2.jpg';

const defaultImage = defaultImg;

export default function LatestNewCard({img = defaultImage, title = "Empty Title", content = "Empty Content"}) {
  return (
    <div className="mv__latest-new-card">
      <div className="mv__latest-new-card-body">
        <a href className="mv__latest-ncb-picture-wrap">
          <picture>
            <source
              media="(max-width: 1500px)"
              srcSet={img}
            ></source>
            <source
              media="(min-width: 1501px)"
              srcSet={img}
            ></source>
            <img
              className="mv__latest-ncb-picture"
              loading="lazy"
              src={img}
              alt="news"
            ></img>
          </picture>
        </a>
        <div className="mv__latest-new-card-content-wrap">
          <a href className="mln-title">
            {title}
          </a>
          <a href className="mln-content">
            {content}
          </a>
        </div>
      </div>
    </div>
  );
}
