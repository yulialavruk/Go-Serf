import React from "react";
import Header from "./Header/Header";
import Surf from "./Surf/Surf";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Surf />
      </React.Fragment>
    );
  }
}
