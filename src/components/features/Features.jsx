import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaUsers,
  FaCheckCircle,
  FaRegClone,
  FaHeadset,
  FaShippingFast,
  FaHandsHelping,
} from "react-icons/fa";
import "./features.css"; 

const Features = () => {
  return (
    <section className="features-section project-row">
      <Container>
        
        <div className="text-center mb-5">
          <p className="section-subtitle">Features</p>
          <h2 className="section-title">
            Design that solves <br /> problems, one product at <br /> a time
          </h2>
        </div>

        
        <Row className="g-4 " >
          <Col md={4} sm={6}>
            <Card className="feature-card">
              <FaUsers className="feature-icon" />
              <h5>Uses Client First</h5>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam.
              </p>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="feature-card">
              <FaCheckCircle className="feature-icon" />
              <h5>Two Free Revision Round</h5>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam.
              </p>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="feature-card">
              <FaRegClone className="feature-icon" />
              <h5>Template Customization</h5>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam.
              </p>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="feature-card">
              <FaHeadset className="feature-icon" />
              <h5>24/7 Support</h5>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam.
              </p>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="feature-card">
              <FaShippingFast className="feature-icon" />
              <h5>Quick Delivery</h5>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam.
              </p>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="feature-card">
              <FaHandsHelping className="feature-icon" />
              <h5>Hands-on approach</h5>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
