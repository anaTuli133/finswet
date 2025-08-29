import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import WorkReusable from '../reusable/WorkReusable';
import One from "../../../assets/one.png"
import Two from "../../../assets/two.png"
import Three from "../../../assets/three.png"
import Four from "../../../assets/four.png"
import "./work.css"
import { FaLongArrowAltRight } from "react-icons/fa";
const Work = () => {
  return (
   <div className="custom-work">
   <section className='py-5'>
    <Container>
        <Row>
            <Col lg ={4}>
              <div>
                  <h2 className='text-name'> How we work</h2>
                  <p className='text-name-name'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                  <a>
                     <h5 className='text-short '>Get in touch with us <FaLongArrowAltRight/></h5>
                  </a>
              </div>
            </Col>
            <Col lg ={{span:6, offset: 1}}>
            <Row>
                <WorkReusable title="Strategy" she={One}/>
                <WorkReusable title="Wireframing" she={Two}/>
                <WorkReusable title="Design" she={Three} />
                <WorkReusable title="Development" she={Four}/>                
            </Row>
            </Col>
        </Row>
    </Container>
   </section>
   </div>
  );
};

export default Work;