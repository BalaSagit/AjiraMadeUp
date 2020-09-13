import React from "react";
import "./MyProfile.css";

class MyProfile extends React.Component {
  render() {
    return (
      <div className="my-profile">
        <p className="my-profile-head">My Profile</p>
        <form className="my-profile-form">
          <div className="name-input-container">
            <input
              className="first-name-input"
              type="text"
              name="FirstName"
              placeholder="First name"
            />
            <input
              className="last-name-input"
              type="text"
              name="LastName"
              placeholder="Last name"
            />
          </div>

          <div className="my-profile-input-container">
            <input
              className="email-input"
              type="text"
              name="Email"
              placeholder="Email"
            />
            <input
              className="phone-input"
              type="text"
              name="PhoneNumber"
              placeholder="Phone number"
            />
            <input
              className="password-input"
              type="text"
              name="Password"
              placeholder="Password"
            />
            <input
              className="confirm-password-input"
              type="text"
              name="ConfirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <button className="save-changes-btn">SAVE CHANGES </button>
        </form>
      </div>
    );
  }
}

export default MyProfile;
