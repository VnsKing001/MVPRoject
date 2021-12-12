import React from "react";

const Concept = ({ data }) => {
  return (
    <div id="slide3">
      <div id="wrap_slide3">
        <div id="wrap_title_slide3">
          <h2 id="slide3_title">CONCEPT OF</h2>
          <h2 id="slide3_subtitle">{data.title}</h2>
        </div>
        <picture id="slide3_image">
          <source srcSet={data.background.small} media="(max-width: 575px)" />
          <img src={data.background.large} alt="Agusta motor" />
        </picture>
        <span id="slide3_para">
          {data.content.map((cont, key) => {
            return (
              <>
                <br></br>
                <br></br>
                <p>{cont}</p>
              </>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default Concept;
