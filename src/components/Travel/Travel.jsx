import React from "react";
import Title from "../UIComponents/Title";
// import aviaLogo from "../../img/avia-logo.svg";
// import travelSlider from "../../img/travelslider-bg.png";
// import virgin from "../../img/virgin.png";
// import Button from "../UIComponents/Button";
import TravelSlider from "./TravelSlider";

export default class Travel extends React.Component {
  render() {
    return (
      <section className="travel">
        <div className="container">
          <Title name="travel" />
          <TravelSlider />
          {/* <div className="travel__slider">
            <div className="travel__slider-item travel-slider">
              <div
                className="travel-slider__head"
                style={{ backgroundImage: "url(" + travelSlider + ")" }}
              >
                <div className="travel-slider__subtitle">
                  <div className="subtitle">
                    <div className="headline-left">Shore</div>
                    <div className="subtitle__head">
                      Airlie Beach <span>|</span> Australia
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="travel-slider__desc"
                style={{ backgroundImage: "url(" + virgin + ")" }}
              >
                <div className="desc">
                  <div className="headline-right">Airline</div>
                  <div className="desc__head">
                    Virgin Australia <img src={aviaLogo} alt="" />
                  </div>
                </div>
              </div>
              <div className="travel-slider__info">
                <div className="travel-slider__info-item">
                  <div className="travel-slider__info-subtitle">
                    Destination
                  </div>
                  <div className="travel-slider__info-title">
                    Queensland <br />
                    Australia
                  </div>
                </div>
                <div className="travel-slider__info-item">
                  <div className="travel-slider__info-subtitle">Distance</div>
                  <div className="travel-slider__info-title">7,065 Miles</div>
                </div>
                <div className="travel-slider__info-item">
                  <div className="travel-slider__info-subtitle">
                    Travel Time
                  </div>
                  <div className="travel-slider__info-title">
                    23 Hours <br />5 Minutes
                  </div>
                </div>
                <div className="travel-slider__info-item">
                  <div className="travel-slider__info-subtitle">Pricing</div>
                  <div className="travel-slider__info-title">
                    $1,976 USD
                    <span>Round Trip</span>
                  </div>
                </div>
              </div>
              <div className="travel-slider__btn">
                <Button href="/#" desc="Book" name="Flight" />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    );
  }
}
