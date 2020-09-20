import React from "react";
import "./MyOrders.css";

import { myOrderList } from "../../../appData/appData";
import orderImg from "../../../assets/orderImg.png";

function MyOrder(props) {
  return (
    <div className="my-order-item">
      <div className="order-img-container">
        <img className="order-img" src={orderImg} alt="OrderImg" />
      </div>
      <div className="order-name-container">
        <p className="order-item-id">Order #{props.item.orderId}</p>
        <p className="order-item-name">{props.item.itemName}</p>
        <p className="order-item-deliver-at">{props.item.deliverAt}</p>
      </div>
      <div className="order-payment-container">
        <p className="order-item-payment-type">{props.item.typeOfPayment}</p>
        <p className="order-item-value">{props.item.itemValue}</p>
        <p>
          <span
            className={
              props.item.itemStatus === "Pending"
                ? "order-item-status-pending"
                : "order-item-status"
            }
          >
            {props.item.itemStatus}
          </span>
        </p>
      </div>
    </div>
  );
}

class MyOrders extends React.Component {
  render() {
    return (
      <div className="my-orders">
        <p className="my-orders-head">My Orders</p>
        {myOrderList.map((x) => (
          <MyOrder key={x.orderItemKey} item={x} />
        ))}
      </div>
    );
  }
}

export default MyOrders;
