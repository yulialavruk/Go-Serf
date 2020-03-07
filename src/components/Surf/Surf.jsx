import React from "react";
import Title from "../UIComponents/Title";

export default class Surf extends React.Component {
  render() {
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
          <div className="surf-slider">
            <div className="surf-box">
              <div className="surf-box__inner">
                <div className="surf-box__inner-title"></div>
                <div className="surf-box__inner-location"></div>
                <div className="btn-box">
                  <a href="/#" className="btn">
                    view
                    <span>surf</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
