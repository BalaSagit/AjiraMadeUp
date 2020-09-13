import React from "react";
import "./NavBar.css";
import Logo from "../Logo/Logo";
import NavItem from "./NavItem/NavItem";
import SecondaryNavItem from "./SecondaryNavItem/SecondaryNavItem";
import { navItems, secNavItems } from "../../appData/appData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faBars
} from "@fortawesome/free-solid-svg-icons";

export default class NavBar extends React.Component {
  state = {
    toggle: false
  };

  handleResize = () => {
    this.setState({
      toggle: window.innerWidth >= 800 ? false : this.state.toggle
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.handleResize);
  };

  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <header className="navBar">
        <Logo className="nav-logo" />

        <div className={this.state.toggle ? "nav-items-active" : "nav-items"}>
          {navItems.map((item) => (
            <NavItem
              key={item.itemName}
              itemName={item.itemName}
              isActive={item.isActive}
            />
          ))}
        </div>

        <div
          className={
            this.state.toggle ? "sec-nav-items-active" : "sec-nav-items"
          }
        >
          {secNavItems.map((item) => (
            <SecondaryNavItem key={item.itemName} itemSrc={item.itemSrc} />
          ))}
        </div>

        {!this.state.toggle ? <div className="filler" /> : ""}

        <div className="primary-nav-items">
          <i tabIndex="0" className="shopping-icon">
            {" "}
            <FontAwesomeIcon icon={faShoppingCart} />
          </i>
          <i tabIndex="0" className="search-icon">
            {" "}
            <FontAwesomeIcon icon={faSearch} />
          </i>
        </div>

        <button className="toggle-button" onClick={this.Toggle}>
          <i className="bar-icon">
            {" "}
            <FontAwesomeIcon icon={faBars} />
          </i>
        </button>
      </header>
    );
  }
}
