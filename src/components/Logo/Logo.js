import React from "react";
import "./Logo.css";
import logo from "../../assets/logo.png";

export default class Logo extends React.Component {
  render() {
    return <img src={logo} className="logo" alt="My logo" />;
  }
}
