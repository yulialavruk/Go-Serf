import React from "react";
import Title from "../UIComponents/Title";
import SurfSlider from "./SurfSlider";

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
          <SurfSlider />
        </section>
      </div>
    );
  }
}
