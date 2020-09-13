import React from "react";
import "./UserProfile.css";

import userProfile from "../../../assets/userProfile.png";

export default class UserProfile extends React.Component {
  render() {
    return (
      <div tabIndex="0" className="user-profile">
        <img
          className="user-profile-img"
          src={userProfile}
          alt="User profile"
        />
        <div className="user-ne-container">
          <p className="user-name">Grishk</p>
          <p className="user-email">griiskaim@gmail.com</p>
        </div>
      </div>
    );
  }
}
