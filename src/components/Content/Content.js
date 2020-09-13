import React from "react";
import "./Content.css";

import TabPath from "./TabPath/TabPath";
import MainContent from "./MainContent/MainContent";

class Content extends React.Component {
  state = {
    showPath: true
  };

  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth > 768) {
          this.setState({
            showPath: true
          });
        }else{
          this.setState({
            showPath: false
          });
        }
      },
      false
    );
  }

  render() {
    return (
      <main className="content-container">
        {this.state.showPath ? <TabPath /> : <></>}
        <MainContent />
      </main>
    );
  }
}

export default Content;
