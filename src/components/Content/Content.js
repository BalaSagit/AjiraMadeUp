import React from "react";
import "./Content.css";

import TabPath from "./TabPath/TabPath";

// import LeftMainContent from "./LeftMainContent/LeftMainContent";
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
        {this.state.showPath ? <TabPath /> : <React.Fragment />}
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

export default Content;
