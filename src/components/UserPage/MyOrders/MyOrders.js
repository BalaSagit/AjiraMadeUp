import React from "react";
import "./MyOrders.css";

import {
  // myOrderList,
  myPendingOrders,
  myPastOrders
} from "../../../appData/appData";

import MyOrder from '../MyOrder/MyOrder';

class MyOrders extends React.Component {
  state = {
    isPastOrders: false,
    orderList: myPastOrders
  };


  onPendingClick = () => {
    this.setState({
      isPastOrders: false,
      orderList: myPendingOrders
    })
  }

  onPastClick = () => {
    this.setState({
      isPastOrders: true,
      orderList: myPastOrders
    })
  }

  render() {
    return (
      <div className="my-orders">
        <header className="mo-header">
          <h1 className={this.state.isPastOrders ? "pending-orders-text" : "pending-orders-text pot-active"} onClick={this.onPendingClick}> Pending Orders</h1>
          <h1 className={!this.state.isPastOrders ? "past-orders-text" : "past-orders-text pstot-active"} onClick={this.onPastClick}> Past Orders</h1>
        </header>
        {/* <p className="my-orders-head">My Orders</p> */}
        {this.state.orderList.map((x) => (
          <MyOrder key={x.orderItemKey} item={x} />
        ))}
      </div>
    );
  }
}

export default MyOrders;
