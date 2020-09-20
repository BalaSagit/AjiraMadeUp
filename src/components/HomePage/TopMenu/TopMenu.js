import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./TopMenu.css";
import { topMenuItems } from "../../../appData/appData";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Menu = (list) =>
  list.map((item) => {
    return (
      <div className="tm-item" key={item.itemName}>
        <div
          className={
            item.isActive ? "tm-item-circle active-tm-item" : "tm-item-circle"
          }
          style={{
            backgroundColor: item.bgColor
          }}
        />
        <p className={item.isActive ? "tm-item-name-active" : "tm-item-name"}>
          {item.itemName}
        </p>
      </div>
    );
  });

// const Arrow = ({ text, className }) => {
//   return <div className={className}>{text}</div>;
// };

const ArrowLeft = (
  <FontAwesomeIcon className="arrow-prev" icon={faChevronLeft} />
); // Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = (
  <FontAwesomeIcon className="arrow-next" icon={faChevronRight} />
); // Arrow({ text: ">", className: "arrow-next" });

export default class TopMenu extends React.Component {
  render() {
    const menu = Menu(topMenuItems);

    return (
      <div className="top-menu-container">
        <ScrollMenu data={menu} arrowLeft={ArrowLeft} arrowRight={ArrowRight} />
      </div>
    );
  }
}
