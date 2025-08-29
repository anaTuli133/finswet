import React from "react";
import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import "./portfolio2.css";

import Portfolio1Img from "../../../assets/Portfolio1.png";
import Portfolio2Img from "../../../assets/Portfolio2.png";
import Portfolio3Img from "../../../assets/Portfolio3.png";
import Portfolio4Img from "../../../assets/Portfolio4.png";
import Portfolio5Img from "../../../assets/Portfolio5.png";
import Portfolio6Img from "../../../assets/Portfolio6.png";

const Portfolio2 = () => {
  return (
    <section className="portfolio2-section">
        <Container>
        <Nav className="justify-content-center mb-4" variant="pills" defaultActiveKey="all">
          <Nav.Item><Nav.Link eventKey="all">All</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link>UI Design</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link>Webflow Design</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link>Figma Design</Nav.Link></Nav.Item>
        </Nav>

        <Row className="g-4">
          <Col md={6}>
            <Card className="portfolio2-card">
              <img src={Portfolio1Img} className="card-img-top" alt="Template 1" />
              <Card.Body>
                <Card.Title>Template 1</Card.Title>
                 
                <Button className="p-0">
                  View Portfolio <BsArrowRight />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="portfolio2-card">
              <img src={Portfolio2Img} className="card-img-top" alt="Template 2" />
              <Card.Body>
                <Card.Title>Template 2</Card.Title>
                
                <Button className="p-0">
                  View Portfolio <BsArrowRight />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="portfolio2-card">
              <img src={Portfolio3Img} className="card-img-top" alt="Template 3" />
              <Card.Body>
                <Card.Title>Template 3</Card.Title>
               
                <Button className="p-0">
                  Read case study <BsArrowRight />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="portfolio2-card">
              <img src={Portfolio4Img} className="card-img-top" alt="Template 4" />
              <Card.Body>
                <Card.Title>Template 4</Card.Title>
              
                <Button className="p-0">
                  Read case study <BsArrowRight />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="portfolio2-card">
              <img src={Portfolio5Img} className="card-img-top" alt="Template 5" />
              <Card.Body>
                <Card.Title>Template 5</Card.Title>
                
                <Button className="p-0">
                  Read case study <BsArrowRight />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="portfolio2-card">
              <img src={Portfolio6Img} className="card-img-top" alt="Template 6" />
              <Card.Body>
                <Card.Title>Template 6</Card.Title>
                
                <Button className="p-0">
                  Read case study <BsArrowRight />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio2;
