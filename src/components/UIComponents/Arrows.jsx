import React from "react";
import cx from "classnames";
import arrowsRight from "../../img/arrows-right.svg";
import arrowsLeft from "../../img/arrows-left.svg";

export const PrevArrow = ({ style, onClick }) => {
  return (
    <img
      className={cx("slider-arrows slider-arrows__left")}
      src={arrowsLeft}
      alt=""
      style={style}
      onClick={onClick}
    />
  );
};

export const NextArrow = ({ style, onClick }) => {
  return (
    <img
      className={cx("slider-arrows slider-arrows__rigth")}
      src={arrowsRight}
      alt=""
      style={style}
      onClick={onClick}
    />
  );
};
