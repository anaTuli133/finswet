import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./readstudiesthree.css";

const ReadStudiesThree = () => {
  return (
    <section className="readstudies-keywords">
      <Container>
        <Row className="align-items-center">
          <Col xs="auto">
            <h6 className="keyword-title">Keywords</h6>
          </Col>
          <Col>
            <ul className="keyword-list">
              <li>Design</li>
              <li>UI/UX</li>
              <li>Wireframing</li>
              <li>Branding</li>
              <li>Development</li>
              <li>webflow</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReadStudiesThree;
