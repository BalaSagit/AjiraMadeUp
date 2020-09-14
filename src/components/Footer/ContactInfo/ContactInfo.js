import React from "react";
import "./ContactInfo.css";
import { addressInfos } from "../../../appData/appData";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ContactInfo extends React.Component {
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
      <div className="contactInfo">
        {addressInfos.map((info) => (
          <p
            key={info}
            className="address-infos"
            onMouseDown={this.handleClick}
            onKeyUp={this.onKeyUp}
          >
            {info}
          </p>
        ))}

        <i
          tabIndex="0"
          className="envelope-container"
          onMouseDown={this.handleClick}
          onKeyUp={this.onKeyUp}
        >
          <FontAwesomeIcon className="envelope-icon" icon={faEnvelope} />
          <p className="mail-value">sales@derbymen.com</p>
        </i>

        <i
          tabIndex="0"
          className="phone-container"
          onMouseDown={this.handleClick}
          onKeyUp={this.onKeyUp}
        >
          <FontAwesomeIcon className="phone-icon" icon={faPhoneAlt} />
          <p className="phone-value">044 5566 6889</p>
        </i>
      </div>
    );
  }
}
