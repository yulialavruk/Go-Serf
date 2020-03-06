import React from "react";
import navIco1 from "../../img/nav-ico-1.svg";
import navIco2 from "../../img/nav-ico-2.svg";
import navIco3 from "../../img/nav-ico-3.svg";
import navIco4 from "../../img/nav-ico-4.svg";

const menuList = [
  { img: navIco1, name: "Serf" },
  { img: navIco2, name: "Travel" },
  { img: navIco3, name: "Sleep" },
  { img: navIco4, name: "Shop" }
];

const Menu = () => (
  <nav className="menu">
    <ul className="menu__list">
      {menuList.map((item, index) => (
        <li key={index}>
          <a href="/#">
            <img alt="" src={item.img} />
            <span>{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
