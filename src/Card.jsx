import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="card_wrapper">
      <div className="header_image">
        <div className="layer"></div>
      </div>
      <div className="card_content">
        <div className="card_info">
          <section>
            <h2 className="heading">
              Get<span className="highlight"> insights</span> that help your
              business grow.
            </h2>
          </section>
          <section>
            <p className="paragraph sub_text">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency
            </p>
          </section>
          <section className="stats">
            <div>
              <h4 className="paragraph">10K+</h4>
              <small className="sub_heading">COMPANIES</small>
            </div>
            <div>
              <h4 className="paragraph">314</h4>
              <small className="sub_heading">TEMPLATES</small>
            </div>
            <div>
              <h4 className="paragraph">12M+</h4>
              <small className="sub_heading">QUERIES</small>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Card;
