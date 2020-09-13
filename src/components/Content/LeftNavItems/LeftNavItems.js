import React from "react";
import "./LeftNavItems.css";

import LeftNavItem from "./LeftNavItem";

import RightMainContent from "../RightMainContent/RightMainContent";
import {} from "../../../store/actions/globalActions";

import { connect } from "react-redux";

class LeftNavItems extends React.Component {
  state = {
    showRMC: window.innerWidth <= 360 ? true : false
  };

  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth <= 360) {
          this.setState({
            showRMC: true
          });
        } else {
          this.setState({
            showRMC: false
          });
        }
      },
      false
    );
  }

  render() {
    return (
      <div className="left-nav-items-container">
        <LeftNavItem
          key="MP"
          itemHeader="My Profile"
          itemContent="Notifications, password"
          isActive={this.props.isProfileActive}
        />
        {this.state.showRMC && this.props.isProfileActive ? (
          <RightMainContent />
        ) : (
          <></>
        )}
        <LeftNavItem
          key="MO"
          itemHeader="My Orders"
          itemContent="Already have 12 orders"
          isActive={this.props.isOrdersActive}
        />
        {this.state.showRMC && this.props.isOrdersActive ? (
          <RightMainContent />
        ) : (
          <></>
        )}
        <LeftNavItem
          key="SA"
          itemHeader="Shipping addresses"
          itemContent="3 addresses"
          isActive={false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isProfileActive: state.global.isProfileActive,
  isOrdersActive: state.global.isOrdersActive
});

export default connect(mapStateToProps)(LeftNavItems);
