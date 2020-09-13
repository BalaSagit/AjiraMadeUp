import React from "react";
import "./SecondaryNavItem.css";

export default class SecondaryNavItem extends React.Component {
  render() {
    return (
      <i tabIndex="0" className='secNavItem'> {this.props.itemSrc}</i>
    );
  }
}
