import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./contactus.css";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <Container>
        {/* Header */}
        <Row className="text-center mb-4">
          <Col md={12}>
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </Col>
        </Row>

        {/* Form */}
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="contact-form-box">
              <Form>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your Email" />
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Provide context" />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Select>
                      <option>Select Subject</option>
                      <option>General Inquiry</option>
                      <option>Support</option>
                      <option>Feedback</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write your question here"
                    />
                  </Col>
                </Row>
                <Button type="submit" className="send-btn">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
            <Row className="text-center mb-4 pt-5">
          <Col md={12}>
            <h2 className="contact-title">Privacy Policy</h2>
            <p className="contact-subtitle">
            When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help you bring your 
            </p>
          </Col>
          
        </Row>
                <Row className="text-left mb-4">
          <Col md={12}>
            <h2 className="contact-title">Lorem ipsum dolor.</h2>
            <p className="contact-subtitle">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.            </p>
<p>Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
          
        </Row>

        <Row className="text-left mb-4">
          <Col md={12}>
            <h2 className="contact-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          </Col>
          
        </Row>
        <ul className="readstudies-bullets">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
      </Container>
    </section>
  );
};

export default ContactUs;
