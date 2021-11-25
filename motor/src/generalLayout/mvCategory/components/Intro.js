import React from "react";

export default function Intro({ data }) {
  return (
    <>
      <div id="slide1">
        <h2 id="slide1_title">{data.title}</h2>
        <h2 id="slide1_title_replace">{data.title}</h2>
        <picture id="slide1_source_image">
          <source media="(min-width: 766px)" srcSet={data.background.large} />
          <img
            src={data.background.small}
            alt="Dragster model"
            loading="lazy"
          />
        </picture>
        <div id="wrap_slide1_para">
          {data.contents.map((content) => {
            return <p>{content}</p>;
          })}
        </div>
        <div id="wrap_slide1_replace">
          {data.contents.map((content) => {
            return <>{content}</>;
          })}
        </div>
      </div>
    </>
  );
}
