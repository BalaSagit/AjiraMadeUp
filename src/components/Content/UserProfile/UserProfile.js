import React from "react";
import "./UserProfile.css";

import userProfile from "../../../assets/userProfile.png";
import { connect } from "react-redux";

class UserProfile extends React.Component {
  render() {
    return (
      <div tabIndex="0" className="user-profile">
        <img
          className="user-profile-img"
          src={userProfile}
          alt="User profile"
        />
        <div className="user-ne-container">
          <p className="user-name">
            {this.props.myProfile.firstName +
              " " +
              this.props.myProfile.lastName}
          </p>
          <p className="user-email">{this.props.myProfile.email}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  myProfile: state.myProfile.myProfile
});

export default connect(mapStateToProps)(UserProfile);
