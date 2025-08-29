import React from 'react'
import {Container, Row, Col, Button } from "react-bootstrap";
import "./blogone.css";
import Blog from '../../../assets/FAQone.png';

const BlogOne = () => {
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
              <img src={Blog} alt="Finsweet Design" className="img-fluid" />
            </div>
            <Row className="text-left mb-5">
                <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
           <Button variant="link" className="read-more">
                Read More
              </Button>
            </Row>
          </Col>
        </Row>
        </Container>
    </section>
  )
}

export default BlogOne