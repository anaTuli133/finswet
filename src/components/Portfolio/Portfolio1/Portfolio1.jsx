import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./portfolio1.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Portfolio1 = () => {
  return (
    <section className="portfolio1-section text-center">
      <Container>
        <p className="portfolio1-subtitle">What we created</p>
        <h2 className="portfolio1-title">Our Work Portfolio</h2>
        <p className="portfolio1-desc">
          We help teams create great digital products by providing them with tools and technology
          to make the design-to-code process universally accessible.
        </p>

        {/* Footer row */}
        <Row className="justify-content-center">
          <Col md={5} className="footer-center">
            <div className="footer-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio1;
