import React from "react";
import "./SubNewsLetter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default class SubNewsLetter extends React.Component {
  render() {
    return (
      <div style={{ background: "#999999" }}>
        <div className="snl-container">
          <div className="gts-text">
            GET COUPONS &nbsp; <p>& STYLE GUIDES</p>
          </div>
          <p className="stonl-text">Subscribe to our Newsletter</p>
          <div className="subscribe-container">
            <input className="sub-email-input" placeholder="Email ID" />
            <button className="subscribe-button">SUBSCRIBE</button>
          </div>
        </div>
        <div className="locate-us-container">
          <div className="locate-us">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p className="locate-us-text"> LOCATE US</p>
          </div>
        </div>
      </div>
    );
  }
}
