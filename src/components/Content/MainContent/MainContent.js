import React from "react";
import "./MainContent.css";

import LeftMainContent from "../LeftMainContent/LeftMainContent";
import RightMainContent from "../RightMainContent/RightMainContent";

class MainContent extends React.Component {
  state = {
    showRMC: window.innerWidth > 360 ? true : false
  };

  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth > 360) {
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
      <content className="main-content">
        <LeftMainContent />
        {this.state.showRMC ? <RightMainContent /> : <></>}
      </content>
    );
  }
}

export default MainContent;
