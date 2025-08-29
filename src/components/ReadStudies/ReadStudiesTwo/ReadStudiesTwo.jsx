import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./readstudiestwo.css";
import Read2 from "../../../assets/readtwo.png";

const ReadStudiesTwo = () => {
    return (
        <section className="readstudies-section">
            <Container>
                {/* Header Section */}
                <Row className="mb-4">
                    <Col md={12}>
                        <h2 className="main-heading">
                            About the project
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <ul className="readstudies-bullets">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
                            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                            <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
                        </ul>
                    </Col>
                </Row>

                {/* Image Section */}
                <Row className="justify-content-center mb-5">
                    <Col md={10}>
                        <div className="image-container">
                            <img src={Read2} alt="Finsweet Design" className="img-fluid" />
                        </div>
                    </Col>
                </Row>

                {/* Footer Info Section */}
                <Row className="mb-4">
                    <Col md={12}>
                        <h2 className="main-heading">
                            How we do it            </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <ul className="readstudies-bullets">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
                            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                            <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ReadStudiesTwo;
