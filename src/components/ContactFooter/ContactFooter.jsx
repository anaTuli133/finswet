import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ContactFooter.css";
import logo from "../../assets/Logo.png";
export default function ContactFooter() {
    return (
        <footer className="footer-section">
            <div className="footer-wrapper">
                <Container>
                    <Row>
                        {/* Left Section */}
                        <Col md={7} className="footer-left">
                            <div className="footer-left-top">
                                <img src={logo} alt="Finsweet Logo" className="footer-logo" />
                                <p>
                                    We are always open to discuss your project and improve your online
                                    presence.
                                </p>
                            </div>
                            <div className="footer-contact-box">
                                <div>
                                    <h6>Email me at</h6>
                                    <p>contact@website.com</p>
                                </div>
                                <div>
                                    <div classname="mb-[0]!">
                                    <h6 >Call us</h6>
                                    </div>
                                    <div classname="pt-[4px] mb-[0]!">
                                    <p >0927 6277 28525</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={5} className="footer-right">
                            <h3>Lets Talk!</h3>
                            <p>
                                We are always open to discuss your project, improve your online presence
                                and help with your UX/UI design challenges.
                            </p>

                            {/* Social Icons */}
                            <div className="footer-icons">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </Col>

                    </Row>
                </Container>
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <Container className="footer-bottom-container">
                        <p>Copyright 2022, Finsweet.com</p>
                        <div className="footer-links">
                            <a href="#">Home</a>
                            <a href="#">About us</a>
                            <a href="#">Features</a>
                            <a href="#">Pricing</a>
                            <a href="#">FAQ</a>
                            <a href="#">Blog</a>
                        </div>
                    </Container>
                </div>
            
        </footer>
    );
}
