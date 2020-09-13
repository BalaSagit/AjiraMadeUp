import React from "react";
import "./NavItem.css";

export default class NavItem extends React.Component {
  render() {
    return (
        <div tabIndex="0" className={this.props.isActive ? "navItemActive" : "navItem"}>
          {this.props.itemName}
        </div>
    );
  }
}
