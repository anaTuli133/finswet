import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import icon from '../../assets/icon-line.png'
import './aboutprocess.css'

const AboutProcess = () => {
  return (
    <section className='process-section'>
      <Container>
        <div className="header text-center">
          <h2 className='process-title'>The process we follow</h2>
        </div> 
        <Row>
          <Col lg={3}>
            <div className="process-box">
              <img src={icon} alt="" />
              <h3 className='process-subtitle'>Planning</h3>
              <p className='process-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="process-box">
              <img src={icon} alt="" />
              <h3 className='process-subtitle'>Conception</h3>
              <p className='process-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="process-box">
              <img src={icon} alt="" />
              <h3 className='process-subtitle'>Design</h3>
              <p className='process-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="process-box">
              <img src={icon} alt="" />
              <h3 className='process-subtitle'>Development</h3>
              <p className='process-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutProcess
