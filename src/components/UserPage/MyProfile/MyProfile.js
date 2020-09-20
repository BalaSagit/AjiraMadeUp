import React from "react";
import "./MyProfile.css";

import { connect } from "react-redux";
import { setMyProfile } from "../../../store/actions/myProfileActions";

class MyProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myProfile: props.myProfile.myProfile
    };
  }

  onSaveChanges = (event) => {
    event.preventDefault();
    if (
      this.state.myProfile.password === this.state.myProfile.confirmPassword
    ) {
      this.props.setMyProfile(this.state.myProfile);
      alert("Saved Changes...");
    } else {
      alert("Password Mismatch!");
    }
  };

  handleChange = (type, e) => {
    let mp = this.state.myProfile;

    switch (type) {
      case "FN":
        mp.firstName = e.target.value;
        break;
      case "LN":
        mp.lastName = e.target.value;
        break;
      case "EM":
        mp.email = e.target.value;
        break;
      case "PN":
        mp.phoneNumber = e.target.value;
        break;
      case "PW":
        mp.password = e.target.value;
        break;
      case "CPW":
        mp.confirmPassword = e.target.value;
        break;

      default:
        break;
    }
    this.setState({ myProfile: mp });
  };

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
              value={this.state.myProfile.firstName}
              onChange={(e) => this.handleChange("FN", e)}
            />
            <input
              className="last-name-input"
              type="text"
              name="LastName"
              placeholder="Last name"
              value={this.state.myProfile.lastName}
              onChange={(e) => this.handleChange("LN", e)}
            />
          </div>

          <div className="my-profile-input-container">
            <input
              className="email-input"
              type="text"
              name="Email"
              placeholder="Email"
              value={this.state.myProfile.email}
              onChange={(e) => this.handleChange("EM", e)}
            />
            <input
              className="phone-input"
              type="number"
              name="PhoneNumber"
              placeholder="Phone number"
              value={this.state.myProfile.phoneNumber}
              onChange={(e) => this.handleChange("PN", e)}
            />
            <input
              className="password-input"
              type="password"
              name="Password"
              placeholder="Password"
              value={this.state.myProfile.password}
              onChange={(e) => this.handleChange("PW", e)}
            />
            <input
              className="confirm-password-input"
              type="password"
              name="ConfirmPassword"
              placeholder="Confirm Password"
              value={this.state.myProfile.confirmPassword}
              onChange={(e) => this.handleChange("CPW", e)}
            />
          </div>
          <button className="save-changes-btn" onClick={this.onSaveChanges}>
            SAVE CHANGES{" "}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  myProfile: state.myProfile
});

const mapDispatchToProps = (dispatch) => ({
  setMyProfile: (myProfile) => dispatch(setMyProfile(myProfile))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
