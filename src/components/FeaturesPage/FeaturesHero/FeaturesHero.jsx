import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./featureshero.css"
import FeaturesHero1 from "../../../assets/featureshero1.png"
import FeaturesHero2 from "../../../assets/featureshero2.png"
import FeaturesHero3 from "../../../assets/featureshero3.png"
import FeaturesHero4 from "../../../assets/featureshero4.png"

const FeaturesHero = () => {
  return (
    <section>
    <section  className="features-hero-section"> 
        <Container>
            <Row>
                <Col lg={6}>
                <p className="features-hero-subtitle">Use Client-first</p>
                <h1>Top agencies and freelancers <br /> around the world use <br />
Client-first </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </Col>
                <Col lg={6}>
                <img src={FeaturesHero1} alt="" />
                </Col>
            </Row>
        </Container>
        <Container>
                <Row>
                    <Col lg={6}>
                        <img src={FeaturesHero2} alt="" />

                    </Col>
                    <Col lg={6} className='text-2'>
                        <p className="features-hero-subtitle">Free Revision Rounds</p>
                        <h1>Our designs solve <br />Get free Revisions and one week of free maintenance <br />of free maintenance</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </Col>
                </Row>
            </Container>
</section>
<section  className="features-hero2-section">
                    <Container>
            <Row>
                <Col lg={6}>
                <p className="features-hero-subtitle">24/7 Support</p>
                <h1>Working with us, you will be <br />getting 24/7 priority support
Client-first </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </Col>
                <Col lg={6}>
                <img src={FeaturesHero3} alt="" />
                </Col>
            </Row>
        </Container>
        <Container>
                <Row>
                    <Col lg={6}>
                        <img src={FeaturesHero4} alt="" />

                    </Col>
                    <Col lg={6} className='text-2'>
                        <p className="features-hero-subtitle">Quick Delivery</p>
                        <h1>Guranteed 1 week delivery for <br /> standard five pager website</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </Col>
                </Row>
            </Container>
</section>
</section>
    
  );
};

export default FeaturesHero;