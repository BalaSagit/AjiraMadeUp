import React from "react";
import "./LeftNavItem.css";

import { connect } from "react-redux";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  // setProfileActive,
  // setOrdersActive,
  toggleOrdersActive,
  toggleProfileActive
} from "../../../store/actions/globalActions";

class LeftNavItem extends React.Component {
  handleClick = () => {
    if (this.props.itemHeader === "My Profile") {
      this.props.toggleProfileActive();
    } else if (this.props.itemHeader === "My Orders") {
      this.props.toggleOrdersActive();
    }
  };

  render() {
    return (
      <div
        tabIndex="0"
        className={
          this.props.isActive === true
            ? "left-nav-item-active"
            : "left-nav-item"
        }
        onClick={this.handleClick}
      >
        <div className="lni-header">
          {" "}
          <p className="lni-header-str"> {this.props.itemHeader} </p>{" "}
          <i className="lni-header-open">
            {" "}
            <FontAwesomeIcon icon={faChevronRight} />
          </i>
        </div>
        <p className="lni-content">{this.props.itemContent}</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleOrdersActive: () => dispatch(toggleOrdersActive()),
  toggleProfileActive: () => dispatch(toggleProfileActive())
});

export default connect(null, mapDispatchToProps)(LeftNavItem);
