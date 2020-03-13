import React from "react";
import Header from "./Header/Header";
import Surf from "./Surf/Surf";
import Travel from "./Travel/Travel";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Header />
          <Surf />
          <Travel />
        </div>
      </>
    );
  }
}
