import React from "react";
import "./Logo.css";
import logo from "../../assets/logo.png";
import { setHomePageActive } from "../../store/actions/pageToggleActions";
import { connect } from "react-redux";

class Logo extends React.Component {
  onLogoClick = () => {
    this.props.setHomePageActive(true);
  };

  render() {
    return <img src={logo} className="logo" alt="My logo" onClick={this.onLogoClick}/>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  setHomePageActive: (data) => dispatch(setHomePageActive(data))
});

export default connect(null, mapDispatchToProps)(Logo);
