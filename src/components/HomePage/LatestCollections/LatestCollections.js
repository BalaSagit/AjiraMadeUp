import React from "react";
import "./LatestCollections.css";

export default class LatestCollections extends React.Component {
  render() {
    let numberOfCollections = 10;
    return (
      <div className="lastest-collections-container">
        <div className="lc-text-container">
          <hr />
          <p className="lc-text">LATEST COLLECTIONS</p>
          <hr />
        </div>
        <div className="lc-list">
          {[...Array(numberOfCollections)].map((item, index) => (
            <div className="lc-item" key={index}>
              <img
                src="./urbanFashion.jpg"
                alt="urban fashion"
                className="lc-item-img"
              />
              <p className="ppts-text">Printed Polo T-Shirt</p>
              <p className="ppts-price">₹1,499.00</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
