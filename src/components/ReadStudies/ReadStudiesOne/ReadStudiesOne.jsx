import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./readstudiesone.css";
import Read from "../../../assets/read.png"; 

const ReadStudiesOne = () => {
  return (
    <section className="readstudies-section">
      <Container>
        {/* Header Section */}
        <Row className="mb-4">
          <Col md={12}>
            <p className="small-heading">Web design and development</p>
            <h2 className="main-heading text-start">
              Finsweet Design case <br /> studies
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </p>
          </Col>
        </Row>

        {/* Image Section */}
        <Row className="justify-content-center mb-5">
          <Col md={10}>
            <div className="image-container">
              <img src={Read} alt="Finsweet Design" className="img-fluid" />
            </div>
          </Col>
        </Row>

        {/* Footer Info Section */}
        <Row className="text-center footer-info">
          <Col md={4}>
            <h6>Client</h6>
            <p>facebook.com</p>
          </Col>
          <Col md={4}>
            <h6>Service</h6>
            <p>Product Design</p>
          </Col>
          <Col md={4}>
            <h6>Deliverable</h6>
            <p>UI Screens, UX Flow & Prototype</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReadStudiesOne;
