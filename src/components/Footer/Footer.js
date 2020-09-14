import React from "react";
import "./Footer.css";

import { footerInfos } from "../../appData/appData";

import ContactInfo from "./ContactInfo/ContactInfo";
import SocialMedInfo from "./SocialMedInfo/SocialMedInfo";

export default class Footer extends React.Component {
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
      <footer className="footer">
        <div className="footerInfo">
          {footerInfos.map((info) => (
            <p
              tabIndex="0"
              key={info}
              className="footer-infos"
              onMouseDown={this.handleClick}
              onKeyUp={this.onKeyUp}
            >
              {info}
            </p>
          ))}
        </div>
        <SocialMedInfo />
        <ContactInfo />
      </footer>
    );
  }
}
