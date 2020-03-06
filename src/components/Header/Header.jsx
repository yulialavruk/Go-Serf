import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Sliders from "./Sliders";
import Map from "./Map";
import AnimateArrows from "./AnimateArrows";
import search from "../../img/search.svg";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__title">go surf</div>
        <div className="header__arrows">
          <AnimateArrows />
        </div>
        <div className="header__map">
          <Map />
        </div>
        <div className="header__aside">
          <Logo />
          <Menu />
          <div className="header__search">
            <img alt="" src={search} />
          </div>
          <div className="header__date">
            20
            <span>06 | 2018</span>
          </div>
          <div className="header__location">California</div>
        </div>
        <Sliders />
      </header>
    );
  }
}
