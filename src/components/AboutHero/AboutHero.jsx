import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./abouthero.css"
import About1 from "../../assets/about1.png"
const AboutHero = () => {
  return (
    <section className="abouthero-section"> 
        <Container>
            <Row>
                <Col lg={6}>
                <p className="abouthero-subtitle">About us</p>
                <h1>Our designs solve <br />problems</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </Col>
                <Col lg={6}>
                <img src={About1} alt="" />
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default AboutHero;