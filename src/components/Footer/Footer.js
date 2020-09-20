import React from "react";
import "./Footer.css";
import { footerInfos } from "../../appData/appData";
import ContactInfo from "./ContactInfo/ContactInfo";
import SocialMedInfo from "./SocialMedInfo/SocialMedInfo";
import {connect} from 'react-redux';

class Footer extends React.Component {
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
      <footer className={this.props.isHomePageActive ? "footer fh-active": "footer"}>
        <div className={this.props.isHomePageActive ? "footerInfo fi-active": "footerInfo"}>
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

const mapStateToProps = (state) => ({
  isHomePageActive: state.pageToggle.isHomePageActive
});

export default connect(mapStateToProps)(Footer);
