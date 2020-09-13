import React from "react";
import "./SocialMedInfo.css";

import Logo from "../../Logo/Logo";

import {
  faFacebook,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SocialMedInfo extends React.Component {
  render() {
    return (
      <div className="socialMedInfo">
        <div className="logo-container">
          <Logo />
        </div>
        <p className="stw-text">Stay in touch with us</p>
        <div className="sm-icon-container">
          <i className="fb-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </i>
          <i className="insta-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </i>
          <i className="yt-icon">
            <FontAwesomeIcon icon={faYoutube} />
          </i>
        </div>
      </div>
    );
  }
}
