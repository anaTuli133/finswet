import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./aboutfeature.css";
import About2 from "../../assets/about2.png"; 

const AboutFeature = () => {
  return (
    <section className="aboutfeature-section">
      <Container>
 <div className="aboutfeature-box">
        <Row className="mb-5">
          <Col lg={6} className='aboutfeature-para'>
            <p className="aboutfeature-subtitle">Who we are</p>
            <h2 className="aboutfeature-title">Goal focussed</h2>
            <p className="aboutfeature-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col lg={6} className='aboutfeature-para2'>
            <h2 className="aboutfeature-title">Continuous improvement</h2>
            <p className="aboutfeature-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <img src={About2} alt="About us" className="aboutfeature-img"/>
          </Col>
        </Row>
       </div>
      </Container>
    </section>
  );
};

export default AboutFeature;
