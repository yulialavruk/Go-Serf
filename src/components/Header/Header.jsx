import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Sliders from "./Sliders";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__title">go surf</div>
        <div className="header__aside">
          <Logo />
          <Menu />
          <div className="header__search">
            <img alt="" src="img/search.svg" />
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
