import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillCaretRightFill } from "react-icons/bs";
import "./pricingpage.css";

const PricingPage = () => {
  return (
    <section
     className="pricing-section">
      <Container>
        {/* Heading */}
        <div className="text-center section-header">
          <h3 className="section-title">Our Pricing Plans</h3>
          <p className="section-subtitle">
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </p>
        </div>

        {/* Cards */}
        <Row className="g-4">
          {/* Card 1 */}
          <Col lg={4}>
            <div className="card-main card-main1">
              <div className="card-inner"></div>
              <div className="card-text">
                <h3 className="price text-color">
                  $399{" "}
                  <span className="design-text">Per Design</span>
                </h3>
                <h3 className="title text-color">Website Page</h3>
                <p className="desc text-color">
                  When you’re ready to go beyond prototyping in Figma, Webflow’s
                  ready to help.
                </p>
                <ul className="list-text">
                  <li><BsFillCaretRightFill /> All limited links</li>
                  <li><BsFillCaretRightFill /> Own analytics platform</li>
                  <li><BsFillCaretRightFill /> Chat support</li>
                  <li><BsFillCaretRightFill /> Optimize hashtags</li>
                  <li><BsFillCaretRightFill /> Optimize hashtags</li>
                </ul>
              </div>
              <div className="btn-area">
                <button className="card-btn">Get started</button>
              </div>
            </div>
          </Col>

          {/* Card 2 */}
          <Col lg={4}>
            <div className="card-main active">
              <div className="card-inner"></div>
              <div className="card-text">
                <h3 className="price text-color">
                  $399{" "}
                  <span className="design-text yellow">Multi Design</span>
                </h3>
                <h3 className="title text-color">Website Page</h3>
                <p className="desc text-color">
                  When you’re ready to go beyond prototyping in Figma, Webflow’s
                  ready to help.
                </p>
                <ul className="list-text">
                  <li><BsFillCaretRightFill /> All limited links</li>
                  <li><BsFillCaretRightFill /> Own analytics platform</li>
                  <li><BsFillCaretRightFill /> Chat support</li>
                  <li><BsFillCaretRightFill /> Optimize hashtags</li>
                  <li><BsFillCaretRightFill /> Unlimited users</li>
                </ul>
              </div>
              <div className="btn-area">
                <button className="card-btn">Get started</button>
              </div>
            </div>
          </Col>

          {/* Card 3 */}
          <Col lg={4}>
            <div className="card-main">
              <div className="card-inner"></div>
              <div className="card-text">
                <h3 className="price text-color">
                  $499{" "}
                  <span className="design-text">Per Design</span>
                </h3>
                <h3 className="title text-color">Website Page</h3>
                <p className="desc text-color">
                  When you’re ready to go beyond prototyping in Figma, Webflow’s
                  ready to help.
                </p>
                <ul className="list-text">
                  <li><BsFillCaretRightFill /> All limited links</li>
                  <li><BsFillCaretRightFill /> Own analytics platform</li>
                  <li><BsFillCaretRightFill /> Chat support</li>
                  <li><BsFillCaretRightFill /> Optimize hashtags</li>
                  <li><BsFillCaretRightFill /> Unlimited users</li>
                  <li><BsFillCaretRightFill /> Assist and Help</li>
                </ul>
              </div>
              <div className="btn-area">
                <button className="card-btn">Get started</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PricingPage;
