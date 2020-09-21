import React from "react";
import "./RightMainContent.css";
import MyProfile from "../MyProfile/MyProfile";
import MyOrders from "../MyOrders/MyOrders";
import Logo from "../../Logo/Logo";
import { connect } from "react-redux";

class RightMainContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <content className="right-main-content">
          {this.props.isProfileActive || this.props.isOrdersActive ? (
            <React.Fragment>
              {this.props.isProfileActive ? <MyProfile /> : <React.Fragment />}
              {this.props.isOrdersActive ? <MyOrders /> : <React.Fragment />}
            </React.Fragment>
          ) : (
            <div className="logo-container">
              <Logo />
            </div>
          )}
        </content>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isProfileActive: state.toggle.isProfileActive,
  isOrdersActive: state.toggle.isOrdersActive
});

export default connect(mapStateToProps)(RightMainContent);
