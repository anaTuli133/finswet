import React from 'react';
import "./banner.css"
import { Col, Container, Row} from 'react-bootstrap';
import Ban from "../../../assets/ban.png"
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className='banner'>
      <Container>
        <Row>
            <Col lg={5}>
              <div className="banner_txt">
                <h1>Building stellar websites for early startups</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <div className='buttonbox'>
                     <div className="ban_btn">
                          <a href="#">View our work</a>                    
                     </div>
                     <div className="ban_btn1">
                     <a href="#">View Pricing <FaLongArrowAltRight/></a>
                    
                     </div>
                </div>
              </div>
            </Col>
            <Col lg={{span: 6, offset: 1}}>
            <img src={Ban} alt="" /></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;