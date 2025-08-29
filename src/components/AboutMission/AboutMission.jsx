import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./aboutmission.css"
import AboutMission1 from "../../assets/mission1.png"
import AboutMission2 from "../../assets/mission2.png"


const AboutMission = () => {
    return (
        <section className="aboutmission-section">
            <Container>
                <Row>
                    <Col lg={6}>
                        <p className="aboutmission-subtitle">Our Mission </p>
                        <h1>Our designs solve <br />Inspire, Innovate, Share</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </Col>
                    <Col lg={6}>
                        <img src={AboutMission1} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={6}>
                        <img src={AboutMission2} alt="" />

                    </Col>
                    <Col lg={6} className='text-2'>
                        <p className="aboutmission-subtitle">Our Vision</p>
                        <h1>Our designs solve <br />Laser focus</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutMission;