import React from "react";

export const UILink = ({ href, desc, name }) => (
  <a href={href} className="btn">
    {desc}
    <span>{name}</span>
  </a>
);
