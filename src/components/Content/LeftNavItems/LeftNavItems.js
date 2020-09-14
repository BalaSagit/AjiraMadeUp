import React from "react";
import "./LeftNavItems.css";
import LeftNavItem from "./LeftNavItem";
import RightMainContent from "../RightMainContent/RightMainContent";
import { connect } from "react-redux";

class LeftNavItems extends React.Component {
  state = {
    showRMC: window.innerWidth <= 360 ? true : false
  };

  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          showRMC: window.innerWidth <= 400 ? true : false
        });
      },
      false
    );
  }

  render() {
    return (
      <nav className="left-nav-items-container">
        <LeftNavItem
          key="MP"
          itemHeader="My Profile"
          itemContent="Notifications, password"
          isActive={this.props.isProfileActive}
        />
        {this.state.showRMC && this.props.isProfileActive ? (
          <RightMainContent />
        ) : (
          <React.Fragment />
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
          <React.Fragment />
        )}
        <LeftNavItem
          key="SA"
          itemHeader="Shipping addresses"
          itemContent="3 addresses"
          isActive={false}
        />
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  isProfileActive: state.toggle.isProfileActive,
  isOrdersActive: state.toggle.isOrdersActive
});

export default connect(mapStateToProps)(LeftNavItems);
