import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaUsers,
  FaCheckCircle,
  FaRegClone
} from "react-icons/fa";
import "./featuresbenefitsmore.css";


const FeaturesBenefitsmore = () => {
  return (
    <section className="features-benefits-section">
      <Container>

        <div className="text-center mb-1">

          <h2 className="section-title">
            The benefits of working <br /> with our team
          </h2>
        </div>


        <Row className="g-4 " >
          <Col md={4} sm={6}>
            <Card className="benefits-card">
              <FaUsers className="benefits-icon" />
              <h5>Customize with ease</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
              </p>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="benefits-card">
              <FaCheckCircle className="benefits-icon" />
              <h5>Perfectly Responsive</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
              </p>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="benefits-card">
              <FaRegClone className="benefits-icon" />
              <h5>Friendly Support</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
              </p>
            </Card>
          </Col>


        </Row>

      </Container>
    </section>
  );
};

export default FeaturesBenefitsmore;
