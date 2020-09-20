import React from "react";
import "./Content.css";

import UserPage from "../UserPage/UserPage";
import HomePage from "../HomePage/HomePage";

import { connect } from "react-redux";

class Content extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.isHomePageActive ? <HomePage /> : <UserPage />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isHomePageActive: state.pageToggle.isHomePageActive
});

export default connect(mapStateToProps)(Content);
