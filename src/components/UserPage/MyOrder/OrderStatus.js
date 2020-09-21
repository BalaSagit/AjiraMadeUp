import React from "react";
import "./OrderStatus.css";

export default class OrderStatus extends React.Component {
  OrderStatusItem = (showConnector, isActive, itemHeader, itemValue) => {
    return (
      <div className="os-item">
        <div className="prog-st-container">
          <div className={isActive ? "prog-st-active" : "prog-st"}>
            {isActive ? "✔" : ""}
          </div>
          {showConnector ? (
            <div className="prog-st-connect"></div>
          ) : (
            <React.Fragment />
          )}
        </div>
        <div className="os-item-text">
          <h4>{itemHeader}</h4>
          <p>{itemValue}</p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="order-status-container">
        {this.OrderStatusItem(
          true,
          this.props.item.itemStatus === 1,
          "Order Received",
          this.props.item.orderReceivedDate
        )}
        {this.OrderStatusItem(
          true,
          this.props.item.itemStatus === 2,
          "Order Dispatched",
          this.props.item.orderDipatchedDate
        )}
        {this.OrderStatusItem(
          true,
          this.props.item.itemStatus === 3,
          "Order Reached",
          this.props.item.orderReachedDate
        )}
        {this.OrderStatusItem(
          false,
          this.props.item.itemStatus === 4,
          "Delivered Successfully",
          ""
        )}
      </div>
    );
  }
}
