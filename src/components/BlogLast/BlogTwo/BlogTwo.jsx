import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./blogtwo.css";
import Blog1 from "../../../assets/BlogTwo_1.png";
import Blog2 from "../../../assets/BlogTwo_2.png";
import Blog3 from "../../../assets/BlogTwo_3.png";
import Blog4 from "../../../assets/BlogTwo_4.png";
import Blog5 from "../../../assets/BlogTwo_5.png";
import Blog6 from "../../../assets/BlogTwo_6.png";

import { FaLongArrowAltRight } from "react-icons/fa";

const BlogTwo = () => {
  return (
    <Container className="blog-section my-1">
      <h2 className="blog-heading mb-4 text-center">Our blog</h2>
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

        {/* Fourth blog */}
         <Col md={4} className="mb-4">
          <Card className="blog-card h-100">
            <img src={Blog4} alt="blog3" className="blog-img" />
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

        {/* Fifth blog */}
         <Col md={4} className="mb-4">
          <Card className="blog-card h-100">
            <img src={Blog5} alt="blog3" className="blog-img" />
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

        {/* Sixth blog */}
         <Col md={4} className="mb-4">
          <Card className="blog-card h-100">
            <img src={Blog6} alt="blog3" className="blog-img" />
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

export default BlogTwo;
