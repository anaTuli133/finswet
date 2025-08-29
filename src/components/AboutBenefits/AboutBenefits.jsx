import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaUsers,
  FaCheckCircle,
  FaRegClone

} from "react-icons/fa";
import "./aboutbenefits.css";
import Logo1 from "../../assets/Logo 1.png";
import Logo2 from "../../assets/Logo 2.png";
import Logo3 from "../../assets/Logo 3.png";
import Logo4 from "../../assets/Logo 4.png";
import Logo5 from "../../assets/Logo 5.png";

const AboutBenefits = () => {
  return (
    <section className="about-benefits-section project-row">
      <Container>

        <div className="text-center mb-5">

          <h2 className="section-title">
            The benefits of working <br /> with us
          </h2>
        </div>


        <Row className="g-4 " >
          <Col md={4} sm={6}>
            <Card className="benefits-card">
              <FaUsers className="benefits-icon" />
              <h5>Customize with ease</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
              </p>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="benefits-card">
              <FaCheckCircle className="benefits-icon" />
              <h5>Perfectly Responsive</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
              </p>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="benefits-card">
              <FaRegClone className="benefits-icon" />
              <h5>Friendly Support</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
              </p>
            </Card>
          </Col>


        </Row>


        <Row>
          <Container>
         <div className="benefits2">
            <div className="box">
             <div className='text-left box-heading'>

              <h1>100.000+</h1>
              <p>Finsweet Users</p>
            </div>



            <div className="logo-fix" >
              <img src={Logo1} className="image-hover" />
              <img src={Logo2} className="image-hover" />
              <img src={Logo3} className="image-hover" />
              <img src={Logo4} className="image-hover" />
              <img src={Logo5} className="image-hover" />

            </div>
           </div>
         </div>
          </Container>
        </Row>

      </Container>
    </section>
  );
};

export default AboutBenefits;
