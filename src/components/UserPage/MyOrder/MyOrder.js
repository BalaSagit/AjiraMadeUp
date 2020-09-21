import React from "react";
import orderImg from "../../../assets/orderImg.png";

import OrderStatus from "./OrderStatus";

export default class MyOrder extends React.Component {
  state = {
    isCollapsed: false
  };

  onClickHandler = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  };

  render() {
    return (
      <div className="my-order-item-container">
        <div className="my-order-item">
          <div className="order-img-container">
            <img className="order-img" src={orderImg} alt="OrderImg" />
          </div>
          <div className="order-name-container">
            <p className="order-item-id">Order #{this.props.item.orderId}</p>
            <p className="order-item-name">{this.props.item.itemName}</p>
            <p className="order-item-deliver-at">{this.props.item.deliverAt}</p>
          </div>
          <div className="order-payment-container">
            <p className="order-item-payment-type">
              {this.props.item.typeOfPayment}
            </p>
            <p className="order-item-value">{this.props.item.itemValue}</p>
            <p>
              <span
                className={
                  this.props.item.itemStatus === "Pending"
                    ? "order-item-status-pending"
                    : "order-item-status"
                }
                onClick={this.onClickHandler}
              >
                {this.props.item.itemStatus}
              </span>
            </p>
          </div>
        </div>
        {this.state.isCollapsed ? (
          <OrderStatus item={this.props.item} />
        ) : (
          <React.Fragment />
        )}
      </div>
    );
  }
}
