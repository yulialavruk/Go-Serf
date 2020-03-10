import React from "react";
import Title from "../UIComponents/Title";
import slide1 from "../../img/slide-1.jpg";
import slide2 from "../../img/slide-2.jpg";
import slide3 from "../../img/slide-3.jpg";
import slide4 from "../../img/slide-4.jpg";
import arrowsRight from "../../img/arrows-right.svg";
import surfIcon from "../../img/surf-icon.svg";
import waterIcon from "../../img/water-icon.svg";
import windIcon from "../../img/wind-icon.svg";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "../UIComponents/Arrows";

const slideList = [
  {
    id: 1,
    title: "Malibu Beach",
    city: "California",
    country: "USA",
    img: slide1,
    surf: {
      measurement: "Surf (FT)",
      indicator: "9 - 13",
      icon: surfIcon
    },
    water: {
      measurement: "Tide (FT)",
      indicator: "+2.3",
      icon: waterIcon
    },
    wind: {
      measurement: "Wind (KTS)",
      indicator: "4 SE",
      icon: windIcon
    }
  },
  {
    id: 2,
    title: "Airlie Beach",
    city: "Queensland",
    country: "Australia",
    img: slide2,
    surf: {
      measurement: "Surf (FT)",
      indicator: "9 - 13",
      icon: surfIcon
    },
    water: {
      measurement: "Tide (FT)",
      indicator: "+2.3",
      icon: waterIcon
    },
    wind: {
      measurement: "Wind (KTS)",
      indicator: "4 SE",
      icon: windIcon
    }
  },
  {
    id: 3,
    title: "Cloud Nine",
    city: "Siargao",
    country: "Philippines",
    img: slide3,
    surf: {
      measurement: "Surf (FT)",
      indicator: "9 - 13",
      icon: surfIcon
    },
    water: {
      measurement: "Tide (FT)",
      indicator: "+2.3",
      icon: waterIcon
    },
    wind: {
      measurement: "Wind (KTS)",
      indicator: "4 SE",
      icon: windIcon
    }
  },
  {
    id: 4,
    title: "Vieux Boucau",
    city: "Hossegor",
    country: "France",
    img: slide4,
    surf: {
      measurement: "Surf (FT)",
      indicator: "9 - 13",
      icon: surfIcon
    },
    water: {
      measurement: "Tide (FT)",
      indicator: "+2.3",
      icon: waterIcon
    },
    wind: {
      measurement: "Wind (KTS)",
      indicator: "4 SE",
      icon: windIcon
    }
  },
  {
    id: 5,
    title: "Malibu Beach",
    city: "California",
    country: "USA",
    img: slide1,
    surf: {
      measurement: "Surf (FT)",
      indicator: "9 - 13",
      icon: surfIcon
    },
    water: {
      measurement: "Tide (FT)",
      indicator: "+2.3",
      icon: waterIcon
    },
    wind: {
      measurement: "Wind (KTS)",
      indicator: "4 SE",
      icon: windIcon
    }
  },
  {
    id: 6,
    title: "Airlie Beach",
    city: "Queensland",
    country: "Australia",
    img: slide2,
    surf: {
      measurement: "Surf (FT)",
      indicator: "9 - 13",
      icon: surfIcon
    },
    water: {
      measurement: "Tide (FT)",
      indicator: "+2.3",
      icon: waterIcon
    },
    wind: {
      measurement: "Wind (KTS)",
      indicator: "4 SE",
      icon: windIcon
    }
  },
  {
    id: 7,
    title: "Cloud Nine",
    city: "Siargao",
    country: "Philippines",
    img: slide3,
    surf: {
      measurement: "Surf (FT)",
      indicator: "9 - 13",
      icon: surfIcon
    },
    water: {
      measurement: "Tide (FT)",
      indicator: "+2.3",
      icon: waterIcon
    },
    wind: {
      measurement: "Wind (KTS)",
      indicator: "4 SE",
      icon: windIcon
    }
  },
  {
    id: 8,
    title: "Vieux Boucau",
    city: "Hossegor",
    country: "France",
    img: slide4,
    surf: {
      measurement: "Surf (FT)",
      indicator: "9 - 13",
      icon: surfIcon
    },
    water: {
      measurement: "Tide (FT)",
      indicator: "+2.3",
      icon: waterIcon
    },
    wind: {
      measurement: "Wind (KTS)",
      indicator: "4 SE",
      icon: windIcon
    }
  }
];

export default class Surf extends React.Component {
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
      <div className="container">
        <section className="surf">
          <Title name="surf" />
          <div className="surf__subtitle">
            <div className="subtitle">
              <div className="headline-left">Current location</div>
              <div className="subtitle__head">
                California <span>|</span> USA
              </div>
            </div>
          </div>
          <Slider className="slider-map" {...surfSliderDotsSettings}>
            {slideList.map((item, index) => (
              <div
                className={`slider-dots slider-dots--${item.id}`}
                key={index}
              >
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
            {slideList.map((item, index) => (
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
        </section>
      </div>
    );
  }
}
