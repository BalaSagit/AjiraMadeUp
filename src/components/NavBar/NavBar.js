import React from "react";
import "./NavBar.css";
import Logo from "../Logo/Logo";
import { navItems, secNavItems } from "../../appData/appData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { setHomePageActive } from "../../store/actions/pageToggleActions";
import {
  toggleProfileActive,
  toggleOrdersActive
} from "../../store/actions/toggleActions";

class NavBar extends React.Component {
  state = {
    toggle: false
  };

  handleResize = () => {
    this.setState({
      toggle: window.innerWidth >= 800 ? false : this.state.toggle
    });
  };

  handleSecNavItemClick = (e, itemName) => {
    if (e) {
      e.preventDefault();
    }
    if (itemName === "profile") {
      this.props.toggleProfileActive();
      this.props.setHomePageActive(false);
    }
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

  handleClick(e) {
    if (e) {
      e.preventDefault();
    }
  }

  onKeyUp = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      this.handleClick();
    }
  };

  getNavItems = () => {
    return (
      <nav className={this.state.toggle ? "nav-items-active" : "nav-items"}>
        {navItems.map((item) => (
          <div
            key={item.itemName}
            tabIndex="0"
            className={item.isActive ? "navItemActive" : "navItem"}
            onMouseDown={this.handleClick}
            onKeyUp={this.onKeyUp}
          >
            {item.itemName}
          </div>
        ))}
      </nav>
    );
  };

  getSecNavItems = () => {
    return (
      <nav
        className={this.state.toggle ? "sec-nav-items-active" : "sec-nav-items"}
      >
        {secNavItems.map((item) => (
          <i
            key={item.itemName}
            tabIndex="0"
            className="secNavItem"
            onMouseDown={this.handleClick}
            onKeyUp={this.onKeyUp}
            onClick={(e) => {
              this.handleSecNavItemClick(e, item.itemName);
            }}
          >
            {" "}
            {item.itemSrc}
          </i>
        ))}
      </nav>
    );
  };

  getPrimaryNavItems = () => {
    return (
      <nav
        className={
          this.state.toggle ? "primary-nav-items-active" : "primary-nav-items"
        }
      >
        <i
          tabIndex="0"
          className="shopping-icon"
          onMouseDown={this.handleClick}
          onKeyUp={this.onKeyUp}
        >
          {" "}
          <FontAwesomeIcon icon={faShoppingCart} />
        </i>
        <i
          tabIndex="0"
          className="search-icon"
          onMouseDown={this.handleClick}
          onKeyUp={this.onKeyUp}
        >
          {" "}
          <FontAwesomeIcon icon={faSearch} />
        </i>
      </nav>
    );
  };

  getToggleButton = () => {
    return (
      <button
        className={this.state.toggle ? "toggle-button-active" : "toggle-button"}
        onClick={this.Toggle}
      >
        <i className="bar-icon">
          {" "}
          <FontAwesomeIcon icon={faBars} />
        </i>
      </button>
    );
  };

  render() {
    return (
      <header className="navBar">
        <Logo />

        {this.getNavItems()}

        {this.getSecNavItems()}

        {this.getPrimaryNavItems()}

        {this.getToggleButton()}
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setHomePageActive: (data) => dispatch(setHomePageActive(data)),
  toggleProfileActive: () => dispatch(toggleProfileActive()),
  toggleOrdersActive: () => dispatch(toggleOrdersActive())
});

export default connect(null, mapDispatchToProps)(NavBar);
