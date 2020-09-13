import React from "react";
import "./FooterInfo.css";
import {footerInfos} from '../../../appData/appData'

export default class FooterInfo extends React.Component {
  render() {
    return (
    <div className="footerInfo">
      {footerInfos.map((info) => (
            <p key={info} className="footer-infos">{info}</p>
          ))}
    </div>
    );
  }
}
