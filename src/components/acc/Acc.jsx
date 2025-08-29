import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "./acc.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Acc = () => {
  return (
    <section className="faq-section">
      <Container>
        <Row>
          {/* Left Side */}
          <Col lg={5} className="faq-left">
            <h2 className="faq-title">Frequently <br />asked questions</h2>
            <a href="#" className="faq-link">
              Contact us for more info <FaLongArrowAltRight/>
            </a>
          </Col>

          {/* Right Side */}
          <Col lg={7}>
            <Accordion defaultActiveKey="1" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span className="faq-number">01</span>
                  <span className="faq-question">
                    How much time does it take?
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span className="faq-number">02</span>
                  <span className="faq-question">
                    What is your class naming convention?
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <span className="faq-number">03</span>
                  <span className="faq-question">How do you communicate?</span>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <span className="faq-number">04</span>
                  <span className="faq-question">
                    I have a bigger project. Can you handle it?
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <span className="faq-number">05</span>
                  <span className="faq-question">
                    What is your class naming convention?
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Acc;
