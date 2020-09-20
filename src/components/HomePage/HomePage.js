import React from "react";
import "./HomePage.css";

import TopMenu from "./TopMenu/TopMenu";
import CollectionQuotes from "./CollectionQuotes/CollectionQuotes";
import LatestCollections from "./LatestCollections/LatestCollections";
import Testimonials from "./Testimonials/Testimonials";
import SubNewsLetter from "./SubNewsLetter/SubNewsLetter";

export default class HomePage extends React.Component {
  render() {
    return (
      <main className="home-page-container">
        <TopMenu />
        <div className="browse-collections">
          <div className="ctr-btn">
            {" "}
            Clothes that &nbsp; <p>respire</p>{" "}
          </div>
          <div className="mwa-btn">
            {" "}
            for men who &nbsp;<p>aspire</p>{" "}
          </div>
          <button className="bc-btn"> BROWSE COLLECTIONS </button>
        </div>
        <CollectionQuotes />
        <LatestCollections />
        <Testimonials />
        <SubNewsLetter />
      </main>
    );
  }
}
