import React from "react";
import { Link } from "react-router-dom";

const NavigationLink = ({ links }) => {
  return (
    <div id="other_models">
      <div id="wrap_other_models">
        <h1 id="see_also">see also</h1>
        {links.map((link) => {
          return <a href={link.href}>{link.name}</a>;
        })}
      </div>
    </div>
  );
};

export default NavigationLink;
