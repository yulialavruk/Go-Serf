import React from "react";
import Title from "../UIComponents/Title";
import SurfSlider from "./SurfSlider";

export default class Surf extends React.Component {
  render() {
    return (
      <section className="surf">
        <div className="container">
          <Title name="surf" />
          <div className="surf__subtitle">
            <div className="subtitle">
              <div className="headline-left">Shore</div>
              <div className="subtitle__head">
                Airlie Beach <span>|</span> Australia
              </div>
            </div>
          </div>
          <SurfSlider />
        </div>
      </section>
    );
  }
}
