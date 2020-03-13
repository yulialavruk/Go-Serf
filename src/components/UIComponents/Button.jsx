import React from "react";

const Button = ({ href, desc, name }) => (
  <a href={href} className="btn">
    {desc}
    <span>{name}</span>
  </a>
);

export default Button;
