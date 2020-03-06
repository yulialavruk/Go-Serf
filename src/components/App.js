import React from "react";
import Slider from "react-slick";
import cx from "classnames";

const PrevArrow = ({ style, onClick }) => {
  return (
    <img
      className={cx("slider-arrows slider-arrows__left")}
      src="img/arrows-left.svg"
      alt=""
      style={style}
      onClick={onClick}
    />
  );
};

const NextArrow = ({ style, onClick }) => {
  return (
    <img
      className={cx("slider-arrows slider-arrows__rigth")}
      src="img/arrows-right.svg"
      alt=""
      style={style}
      onClick={onClick}
    />
  );
};

function App() {
  const headerSliderSettings = {
    infinite: true,
    fade: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
    // asNavFor: ".slider-dots"
  };
  return (
    <header className="header">
      <div className="header__title">go surf</div>
      <div className="header__aside">
        <div className="logo">
          <a href="#">
            <img alt="" src="img/logo.svg" />
          </a>
        </div>
        <nav className="menu">
          <ul className="menu__list">
            <li>
              <a href="#">
                <img alt="" src="img/nav-ico-1.svg" />
                <span>Surf</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img alt="" src="img/nav-ico-2.svg" />
                <span>Travel</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img alt="" src="img/nav-ico-3.svg" />
                <span>Sleep</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img alt="" src="img/nav-ico-4.svg" />
                <span>Shop</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__search">
          <img alt="" src="img/search.svg" />
        </div>
        <div className="header__date">
          20
          <span>06 | 2018</span>
        </div>
        <div className="header__location">California</div>
      </div>
      <Slider className="header__slider" {...headerSliderSettings}>
        <div className="header__slider-item slider-item">
          <div className="slider-item__info">
            <div className="slider-item__info-suptitle suptitle-left">Surf</div>
            <div className="slider-item__info-title">North Shore</div>
            <div className="slider-item__info-suptext suptitle-left">
              Condition
            </div>
            <div className="slider-item__info-text">Radical</div>
            <a className="slider-item__info-link" href="#">
              <img alt="" src="img/arrows-right.svg" />
            </a>
          </div>
        </div>
        <div className="header__slider-item slider-item">
          <div className="slider-item__info">
            <div className="slider-item__info-suptitle suptitle-left">Surf</div>
            <div className="slider-item__info-title">South Shore</div>
            <div className="slider-item__info-suptext suptitle-left">
              Condition
            </div>
            <div className="slider-item__info-text">Radical</div>
            <a className="slider-item__info-link" href="#">
              <img alt="" src="img/arrows-right.svg" />
            </a>
          </div>
        </div>
        <div className="header__slider-item slider-item">
          <div className="slider-item__info">
            <div className="slider-item__info-suptitle suptitle-left">Surf</div>
            <div className="slider-item__info-title">West Shore</div>
            <div className="slider-item__info-suptext suptitle-left">
              Condition
            </div>
            <div className="slider-item__info-text">Radical</div>
            <a className="slider-item__info-link" href="#">
              <img alt="" src="img/arrows-right.svg" />
            </a>
          </div>
        </div>
        <div className="header__slider-item slider-item">
          <div className="slider-item__info">
            <div className="slider-item__info-suptitle suptitle-left">Surf</div>
            <div className="slider-item__info-title">East Shore</div>
            <div className="slider-item__info-suptext suptitle-left">
              Condition
            </div>
            <div className="slider-item__info-text">Radical</div>
            <a className="slider-item__info-link" href="#">
              <img alt="" src="img/arrows-right.svg" />
            </a>
          </div>
        </div>
      </Slider>
      <div className="slider-dots">
        <div className="slider-dots__item">
          <div className="dots-box">
            <div className="dots-box__number">01</div>
            <div className="dots-box__name">North Shore</div>
          </div>
        </div>
        <div className="slider-dots__item">
          <div className="dots-box">
            <div className="dots-box__number">02</div>
            <div className="dots-box__name">South Shore</div>
          </div>
        </div>
        <div className="slider-dots__item">
          <div className="dots-box">
            <div className="dots-box__number">03</div>
            <div className="dots-box__name">West Shore</div>
          </div>
        </div>
        <div className="slider-dots__item">
          <div className="dots-box">
            <div className="dots-box__number">04</div>
            <div className="dots-box__name">East Shore</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
