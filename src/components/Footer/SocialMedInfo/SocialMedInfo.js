import React from "react";
import "./SocialMedInfo.css";

import Logo from "../../Logo/Logo";

import {
  faFacebook,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

class SocialMedInfo extends React.Component {
  handleClick(e) {
    if (e) {
      e.preventDefault();
    }
  }

  onKeyUp = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      this.handleClick();
    }
  };
  render() {
    return (
      <div
        className={
          this.props.isHomePageActive
            ? "socialMedInfo smi-active"
            : "socialMedInfo"
        }
      >
        <div
          tabIndex="0"
          className={
            this.props.isHomePageActive
              ? "logo-container lc-active"
              : "logo-container"
          }
          onMouseDown={this.handleClick}
          onKeyUp={this.onKeyUp}
        >
          <Logo />
        </div>
        <p className="stw-text">Stay in touch with us</p>
        <div className="sm-icon-container">
          <i
            tabIndex="0"
            className="fb-icon"
            onMouseDown={this.handleClick}
            onKeyUp={this.onKeyUp}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </i>
          <i
            tabIndex="0"
            className="insta-icon"
            onMouseDown={this.handleClick}
            onKeyUp={this.onKeyUp}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </i>
          <i
            tabIndex="0"
            className="yt-icon"
            onMouseDown={this.handleClick}
            onKeyUp={this.onKeyUp}
          >
            <FontAwesomeIcon icon={faYoutube} />
          </i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isHomePageActive: state.pageToggle.isHomePageActive
});

export default connect(mapStateToProps)(SocialMedInfo);
