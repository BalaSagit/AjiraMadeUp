import React from "react";
import "./Footer.css";

import { footerInfos } from "../../appData/appData";

import ContactInfo from "./ContactInfo/ContactInfo";
import SocialMedInfo from "./SocialMedInfo/SocialMedInfo";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footerInfo">
          {footerInfos.map((info) => (
            <p key={info} className="footer-infos">
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
