import React from "react";
import "./CollectionQuotes.css";

export default class CollectionQuotes extends React.Component {
  render() {
    return (
      <div className="collection-quotes">
        <div className="sc-quote">
          <div className="sc-quote-1">
            <p>Summer</p>&nbsp; is here and
          </div>
          <div className="sc-quote-2">
            so is our &nbsp;<p>collection</p>
          </div>
        </div>
        <div className='right-quote-container'>
          <div className="wfs-quote">
            <p>Wrinkle-free</p> &nbsp; t-shirts
          </div>
          <div className="sfds-quote">
            <p>Stain-free</p>&nbsp; denim shirts
          </div>
        </div>
      </div>
    );
  }
}
