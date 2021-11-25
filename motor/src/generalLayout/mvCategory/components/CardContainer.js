import React from "react";
import CardDetail from "./CardDetail";

export default function CardContainer({ properties }) {
  return (
    <div id="wrap_card">
      {properties.map((property, key) => {
        return (
          <>
            <CardDetail
              cardName={property.cardName}
              srcImg={property.srcImg}
              information={property.information}
              key={key}
              link={property.link}
            />
          </>
        );
      })}
    </div>
  );
}
