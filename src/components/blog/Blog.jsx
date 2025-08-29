import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./blog.css";
import Blog1 from "../../assets/blog1.png";
import Blog2 from "../../assets/blog2.png";
import Blog3 from "../../assets/blog3.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Blog = () => {
  return (
    <Container className="blog-section my-5">
      <h2 className="blog-heading mb-4">Our blog</h2>
      <Row>
        {/* First blog */}
        <Col md={4} className="mb-4">
          <Card className="blog-card h-100">
            <img src={Blog1} alt="blog1" className="blog-img" />
            <Card.Body>
              <small className="blog-date">19 Jan 2022</small>
              <Card.Title className="blog-title">
                How one Webflow user grew his single person consultancy from $0–100k in 14 months
              </Card.Title>
              <Card.Text className="blog-desc">
                
              </Card.Text>
              <Button variant="" className="read-more">
                Read More <FaLongArrowAltRight />
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Second blog */}
        <Col md={4} className="mb-4">
          <Card className="blog-card h-100">
            <img src={Blog2} alt="blog2" className="blog-img" />
            <Card.Body>
              <small className="blog-date">19 Jan 2022</small>
              <Card.Title className="blog-title">
                How one Webflow user grew his single person consultancy from $0–100k in 14 months
              </Card.Title>
              <Card.Text className="blog-desc">
                
              </Card.Text>
              <Button variant="" className="read-more">
                Read More <FaLongArrowAltRight />
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Third blog */}
        <Col md={4} className="mb-4">
          <Card className="blog-card h-100">
            <img src={Blog3} alt="blog3" className="blog-img" />
            <Card.Body>
              <small className="blog-date">19 Jan 2022</small>
              <Card.Title className="blog-title">
                How one Webflow user grew his single person consultancy from $0–100k in 14 months
              </Card.Title>
              <Card.Text className="blog-desc">
               
              </Card.Text>
              <Button variant="" className="read-more">
                Read More <FaLongArrowAltRight />
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
