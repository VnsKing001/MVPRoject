import React from "react";
import "./contentGM.css";
import compatibleXL from "./img/compatible-with-xl.png";
import compatibleL from "./img/compatible-with-l.png";
import compatibleM from "./img/compatible-with-m.png";
import compatibleS from "./img/compatible-with-s.png";

const imgLib = {
  extralarge: compatibleXL,
  large: compatibleL,
  medium: compatibleM,
  small: compatibleS,
};

const ContentGM = ({
  imageLib = imgLib,
  title = "COMPATIBLE WITH",
  content = "MV Agusta models equipped with second generation 5,5” TFT screens",
}) => {
  return (
    <div className="mv__content-gm-layout">
      <div className="mv__content-gm-lt-title">
        <h3>{title}</h3>
        <section>
            <span>{content}</span>
        </section>
      </div>
      <div className="mv__content-gm-lt-bg">
        <picture>
          <source media="(max-width: 768px)" srcset={imageLib.small} />
          <source media="(max-width: 992px)" srcset={imageLib.media} />
          <source media="(max-width: 1200px)" srcset={imageLib.large} />
          <img class="moto-list__img" src={imageLib.extralarge} alt="" />
        </picture>
      </div>
    </div>
  );
};

export default ContentGM;
