import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import "./faqone.css";
 import FAQ from '../../assets/FAQone.png';
 import FAQ2 from '../../assets/FAQtwo.jpg';

const FAQone = () => {
  return (
    <section className="readstudies-section">
      <Container>
        <Row className="mb-4">
          <Col md={12} className="text-center" >
            <h2 className="main-heading">
A UX Case Study on Creating a <br/> Studious Environment for Students            </h2>
            <p>
              Andrew Jonson Posted on 27th January 2021
            </p>
          </Col>
        </Row>

        {/* Image Section */}
        <Row className="justify-content-center mb-5">
          <Col md={10}>
            <div className="image-container">
              <img src={FAQ} alt="Finsweet Design" className="img-fluid" />
            </div>
          </Col>
        </Row>
 <Row className="text-left mb-4">
          <Col md={12}>
            <h2 className="contact-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</h2>
            <p className="contact-subtitle">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>            
          
        </Row>

        <Row className="text-left mb-4">
          <Col md={12}>
            <h2 className="contact-title">Ut enim ad minim veniam, quis nostrud.
</h2>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
          
        </Row>
        <ul className="readstudies-bullets">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                   
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     {/* Image Section */}
        <Row className="justify-content-center mb-5">
          <Col md={10}>
            <div className="image-container">
              <img src={FAQ2} alt="Finsweet Design" className="img-fluid" />
            </div>
          </Col>
        </Row>
        </Container>
   </section>
  );
};

export default FAQone;
