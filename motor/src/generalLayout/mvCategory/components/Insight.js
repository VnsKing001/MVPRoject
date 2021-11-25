import React from "react";

const Insight = ({ data }) => {
  return (
    <div id="slide4">
      <div id="wrap_slide4">
        <div id="slide4_image">
          <img
            src={data.background}
            id="slide4_imgTag"
            alt="Dragster in front"
            loading="lazy"
          />
        </div>
        <div id="slide4_content">
          <div id="wrap_slide4_title">
            {data.title.map((til) => {
              return <h2>{til}</h2>;
            })}
          </div>
          <div id="slide4_para">
            <p>{data.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insight;
