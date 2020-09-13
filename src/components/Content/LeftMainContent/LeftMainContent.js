import React from "react";
import "./LeftMainContent.css";

import UserProfile from "../UserProfile/UserProfile";
import LeftNavItems from "../LeftNavItems/LeftNavItems";

class LeftMainContent extends React.Component {
  render() {
    return (
      <content className="left-main-content">
        <UserProfile />
        <LeftNavItems />
      </content>
    );
  }
}

export default LeftMainContent;
