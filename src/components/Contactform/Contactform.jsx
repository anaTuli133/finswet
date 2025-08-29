import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './contactform.css';
import Formpic from '../../assets/formpic.png';
import { FaLongArrowAltRight } from "react-icons/fa";

const Contactform = () => {
  return (
    <section>
      <Container>
        <Row className="g-0 align-items-stretch">
  {/* Left Side */}
  <Col lg={6}>
    <div className="left-side">
      <img src={Formpic} alt="form background" className="left-side-img" />

      <div className="left-side-inner">
        <h2>
          Building stellar <br /> websites for <br /> early startups
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
        </p>
      </div>
    </div>
  </Col>

  {/* Right Side */}
  <Col lg={6}>
    <div className="inquiry-container">
      <h2 className="inquiry-title">Send inquiry</h2>
      <p className="inquiry-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </p>

      <form className="inquiry-form">
        <input type="text" placeholder="Your Name" className="inquiry-input" />
        <input type="email" placeholder="Email" className="inquiry-input" />
        <input type="text" placeholder="Paste your Figma design URL" className="inquiry-input" />
        <button type="submit" className="inquiry-button">Send an Inquiry</button>
      </form>

      <p className="inquiry-footer">
        Get in touch with us <FaLongArrowAltRight />
      </p>
    </div>
  </Col>
</Row>

      </Container>
    </section>
  );
};

export default Contactform;
