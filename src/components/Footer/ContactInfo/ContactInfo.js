import React from "react";
import "./ContactInfo.css";
import { addressInfos } from "../../../appData/appData";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ContactInfo extends React.Component {
  render() {
    return (
      <div className="contactInfo">
        {addressInfos.map((info) => (
          <p key={info} className="address-infos">{info}</p>
        ))}

        <div className="envelope-container">
          <FontAwesomeIcon className="envelope-icon" icon={faEnvelope} />
          <p className="mail-value">sales@derbymen.com</p>
        </div>

        <i className="phone-container">
          <FontAwesomeIcon className="phone-icon" icon={faPhoneAlt} />
          <p className="phone-value">044 5566 6889</p>
        </i>
      </div>
    );
  }
}
