import React from "react";
import arrowsRight from "../../img/arrows-right.svg";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "../UIComponents/Arrows";
import beachList from "../../data/beachList";

export default class SurfSlider extends React.Component {
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
    const surfSliderSettings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      asNavFor: this.state.nav2,
      ref: slider => (this.slider1 = slider)
    };
    const surfSliderDotsSettings = {
      slidesToShow: 8,
      slidesToScroll: 1,
      asNavFor: this.state.nav1,
      ref: slider => (this.slider2 = slider),
      focusOnSelect: true,
      arrows: false
    };
    return (
      <React.Fragment>
        <Slider className="slider-map" {...surfSliderDotsSettings}>
          {beachList.map((item, index) => (
            <div className={`slider-dots slider-dots--${item.id}`} key={index}>
              <div className="slider-dots__circle"></div>
              <div className="slider-dots__content">
                <div className="slider-dots__content-row">
                  <div className="slider-dots__content-head">
                    <div className="slider-dots__content-title">
                      {item.title}
                    </div>
                    <div className="slider-dots__content-subtitle">
                      {item.country}
                    </div>
                  </div>
                  <a href="/#" className="slider-dots__content-link">
                    <img src={arrowsRight} alt="" />
                  </a>
                </div>
                <div className="slider-dots__content-row">
                  <div className="slider-dots__content-item">
                    <img src={item.surf.icon} alt="" />
                    <div className="slider-dots__content-number">
                      {item.surf.indicator}
                    </div>
                    <div className="slider-dots__content-text">
                      {item.surf.measurement}
                    </div>
                  </div>
                  <div className="slider-dots__content-item">
                    <img src={item.water.icon} alt="" />
                    <div className="slider-dots__content-number">
                      {item.water.indicator}
                    </div>
                    <div className="slider-dots__content-text">
                      {item.water.measurement}
                    </div>
                  </div>
                  <div className="slider-dots__content-item">
                    <img src={item.wind.icon} alt="" />
                    <div className="slider-dots__content-number">
                      {item.wind.indicator}
                    </div>
                    <div className="slider-dots__content-text">
                      {item.wind.measurement}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <Slider className="surf-slider" {...surfSliderSettings}>
          {beachList.map((item, index) => (
            <div className="surf-slider__item" key={index}>
              <div
                className="surf-box"
                style={{ backgroundImage: "url(" + item.img + ")" }}
              >
                <div className="surf-box__inner">
                  <div className="surf-box__inner-title">{item.title}</div>
                  <div className="surf-box__inner-location">
                    {item.city}
                    <span> | </span>
                    {item.country}
                  </div>
                  <div className="surf-box__inner-btn">
                    <a href="/#" className="btn">
                      view
                      <span>surf</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </React.Fragment>
    );
  }
}
