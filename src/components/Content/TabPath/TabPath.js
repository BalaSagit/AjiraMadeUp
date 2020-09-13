import React from "react";
import "./TabPath.css";

import { connect } from "react-redux";
// import { setCurrentRoute } from "../../../store/actions/globalActions";

class TabPath extends React.Component {
  render() {
    return <div className="current-tab-Path">{this.props.currentRoute}</div>;
  }
}

const mapStateToProps = (state) => ({
  currentRoute: state.global.currentRoute
});

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentRoute: (data) => dispatch(setCurrentRoute(data))
// });

export default connect(mapStateToProps)(TabPath);
