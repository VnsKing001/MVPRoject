import React from "react";
import "../bespoke.css";
export default function BespokeHeader(props) {
  return (
    <>
      <div
        className="bespoke-bg"
        style={{
          background: props.headerData.background,
        }}
      >
        <picture>
          <source
            media="(max-width: 991px)"
            srcset={props.headerData.img.medium}
          ></source>
          <img
            className="img-banner-bespoke"
            src={props.headerData.img.large}
            alt=""
          ></img>
        </picture>
        <div className="title-header-bs">
          <h1>
            {props.headerData.titles.map((title, index) => (
              <strong>{title}</strong>
            ))}
          </h1>
        </div>
      </div>
      <div className="blockQUOTE_wrap">
        <p className="blockQUOTE_text">
          {props.headerData.content}
        </p>
      </div>
    </>
  );
}
