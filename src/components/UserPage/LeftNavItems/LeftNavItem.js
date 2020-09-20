import React from "react";
import "./LeftNavItem.css";

import { connect } from "react-redux";

import {
  faChevronRight,
  faChevronDown,
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  toggleOrdersActive,
  toggleProfileActive
} from "../../../store/actions/toggleActions";

class LeftNavItem extends React.Component {
  handleClick = () => {
    if (this.props.itemHeader === "My Profile") {
      this.props.toggleProfileActive();
    } else if (this.props.itemHeader === "My Orders") {
      this.props.toggleOrdersActive();
    }
  };

  state = {
    isMobileVersion: window.innerWidth <= 400 ? true : false
  };

  onMouseDown(e) {
    if (e) {
      e.preventDefault();
    }
  }

  onKeyUp = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      this.handleClick();
    }
  };

  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          isMobileVersion: window.innerWidth <= 400 ? true : false
        });
      },
      false
    );
  }

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
        onMouseDown={this.onMouseDown}
        onKeyUp={this.onKeyUp}
      >
        <div className="lni-header">
          {" "}
          <p className="lni-header-str"> {this.props.itemHeader} </p>{" "}
          <i className="lni-header-open">
            {" "}
            {this.state.isMobileVersion ? (
              this.props.isActive ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )
            ) : (
              <FontAwesomeIcon icon={faChevronRight} />
            )}
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
