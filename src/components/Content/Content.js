import React from "react";
import "./Content.css";

import { connect } from "react-redux";

import UserProfile from "./UserProfile/UserProfile";
import LeftNavItems from "./LeftNavItems/LeftNavItems";
import RightMainContent from "./RightMainContent/RightMainContent";

class Content extends React.Component {
  state = {
    showPath: true,
    showRMC: window.innerWidth > 400 ? true : false
  };

  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          showPath: window.innerWidth > 800 ? true : false,
          showRMC: window.innerWidth > 400 ? true : false
        });
      },
      false
    );
  }

  render() {
    return (
      <main className="content-container">
        {this.state.showPath ? <div className="current-tab-Path">{this.props.currentRoute}</div> : <React.Fragment />}
        <content className="main-content">
          <content className="left-main-content">
            <UserProfile />
            <LeftNavItems />
          </content>
          {this.state.showRMC ? <RightMainContent /> : <React.Fragment />}
        </content>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  currentRoute: state.toggle.currentRoute
});

export default connect(mapStateToProps)(Content);