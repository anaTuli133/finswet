import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";
import Card1 from "../../assets/Card1.png"
import Card2 from "../../assets/Card2.png"
import Card3 from "../../assets/Card3.png"
import "./project.css"


const Project = () => {
   return (
      <>
         <Container>
            <Row>
               <Col lg={6}>
                  <div className="custom-text">
                     <h2>View our projects</h2>
                  </div>
               </Col>
               <Col lg={6}>
                  <div className='text-end'>
                     <h6>View More  <FaLongArrowAltRight /></h6>
                  </div>
               </Col>
            </Row>

            <Row className="g-4 align-items-stretch project-row">
               <Col lg={8}>
                  <div className="custom-card h-100">
                     <img src={Card1} alt="" className="w-100 h-100" />
                     <div className="custom-card-inner">
                        <h2>Workhub office Webflow Design  </h2>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p> 
                        <a href="#">Read Case Studies <FaLongArrowAltRight /> </a>
                     </div>
                  </div>
               </Col>
               <Col lg={4} className="d-flex flex-column gap-4 h-100">
                  <div className="">
                    <div className='custom-card2'>
                     <div>
                        <img src={Card2} alt="" className="w-100 h-100" />
                     </div>
                     <div className='custom-card2-inner'>
                        <h2>Unisaas Website </h2>
                        <a href="#">View portfolio <FaLongArrowAltRight /> </a>
                     </div>
               </div >
               <div className="mt-4">
                  <div className='custom-card3 flex-fill"'>
                   <div className="custom-card3-inner">                 
                        <img src={Card3} alt="" className="w-100 h-100" />
                     </div>
                  </div>
                  </div>
               </div>
               </Col>
            </Row>

         </Container>
      </>
   );
};

export default Project;