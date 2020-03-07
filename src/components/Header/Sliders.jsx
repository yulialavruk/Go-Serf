import React from "react";
import Slider from "react-slick";
import cx from "classnames";
import arrowsRight from "../../img/arrows-right.svg";
import arrowsLeft from "../../img/arrows-left.svg";

const PrevArrow = ({ style, onClick }) => {
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

const NextArrow = ({ style, onClick }) => {
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

const sliderList = [
  {
    number: "01",
    title: "North Shore"
  },
  {
    number: "02",
    title: "South Shore"
  },
  {
    number: "03",
    title: "West Shore"
  },
  {
    number: "04",
    title: "East Shore"
  }
];

export default class Sliders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const headerSlider1Settings = {
      infinite: true,
      fade: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      asNavFor: this.state.nav2,
      ref: slider => (this.slider1 = slider)
    };
    const headerSlider2Settings = {
      asNavFor: this.state.nav1,
      ref: slider => (this.slider2 = slider),
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
      <React.Fragment>
        <Slider className="header__slider" {...headerSlider1Settings}>
          {sliderList.map((item, index) => (
            <div className="header__slider-item slider-item" key={index}>
              <div className="slider-item__info">
                <div className="slider-item__info-suptitle headline-left">
                  Surf
                </div>
                <div className="slider-item__info-title">{item.title}</div>
                <div className="slider-item__info-suptext headline-left">
                  Condition
                </div>
                <div className="slider-item__info-text">Radical</div>
                <a className="slider-item__info-link" href="/#">
                  <img alt="" src="img/arrows-right.svg" />
                </a>
              </div>
            </div>
          ))}
        </Slider>
        <Slider className="slider-dots" {...headerSlider2Settings}>
          {sliderList.map((item, index) => (
            <div className="slider-dots__item" key={index}>
              <div className="dots-box">
                <div className="dots-box__number">{item.number}</div>
                <div className="dots-box__name">{item.title}</div>
              </div>
            </div>
          ))}
        </Slider>
      </React.Fragment>
    );
  }
}
