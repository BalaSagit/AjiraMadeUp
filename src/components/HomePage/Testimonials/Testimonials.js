import React from "react";
import "./Testimonials.css";

export default class Testimonials extends React.Component {
  render() {
    let numberOfTestimonials = 7;
    let numberOfStars = 5;
    return (
      <div className="testimonials-container">
        <p className="tms-text">TESTIMONIALS</p>
        <div className="tms-list">
          {[...Array(numberOfTestimonials)].map((item, index) => (
            <div className="tms-item" key={index}>
              <div className="tms-item-header">
                <p className="tms-item-custmr-name">Vikas</p>
                <div className="stars-list">
                  {[...Array(numberOfStars)].map((item, index) => (
                    <p className="star" key={index}>
                      ★
                    </p>
                  ))}
                </div>
              </div>
              <p className="tms-comment">
                Love the cloth material! So breezy and comfortable. Really
                durable as well. I must say the jeans I bought was worth the
                price.
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
