import React from "react";
import PropTypes from "prop-types";

const Title = ({ name }) => (
  <div className="title">
    <span>
      {name}
      <h3>{name}</h3>
    </span>
  </div>
);

Title.propTypes = {
  name: PropTypes.string.isRequired
};

export default Title;
