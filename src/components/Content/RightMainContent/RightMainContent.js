import React from "react";
import "./RightMainContent.css";

import MyProfile from "../MyProfile/MyProfile";
import MyOrders from "../MyOrders/MyOrders";

import Logo from '../../Logo/Logo'

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
            <div className='logo-container'><Logo/></div>
            // <React.Fragment />
          )}
        </content>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isProfileActive: state.global.isProfileActive,
  isOrdersActive: state.global.isOrdersActive
});

export default connect(mapStateToProps)(RightMainContent);
