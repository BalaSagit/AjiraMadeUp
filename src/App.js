import React from "react";
import "./styles.css";

import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Content />
        <Footer />
      </React.Fragment>
    );
  }
}
