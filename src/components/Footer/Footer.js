import React from "react";
import "./Footer.css";

import FooterInfo from "./FooterInfo/FooterInfo";
import ContactInfo from "./ContactInfo/ContactInfo";
import SocialMedInfo from "./SocialMedInfo/SocialMedInfo";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <FooterInfo />
        <SocialMedInfo/>
        <ContactInfo />
      </footer>
    );
  }
}
