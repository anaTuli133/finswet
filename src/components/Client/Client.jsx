import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Woman from "../../assets/woman.png"
import "./client.css"
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='next'      
      onClick={onClick}
    ><IoIosArrowForward />
 </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div  className='prev'
      
      onClick={onClick}
    ><IoIosArrowBack />
</div>
  );
}

const Client = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div>
            <section className="client-section project-row">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="">
                            <h3 className='client-text'>What our clients <br />say about us</h3>
                            <p className='client-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                        </div>
                    </Col>
                    <Col lg={{span: 6, offset: 1}}>
                    <Slider {...settings}>
                        
                        <div className="">
                            <h4>
                                "The best agency we’ve worked with so far. They <br />understand our product and are able to add new <br />features with a great focus."
                            </h4>
                            <div className='c-main'>
                                <div className=''>
                                    <img src={Woman} alt="" />

                                </div>
                                <div className=''>
                                    <h6>Jenny Wilson</h6>
                                    <p>Vice President</p>
                                </div>

                            </div>
                        </div>
                         <div className="">
                            <h4>
                                "The best agency we’ve worked with so far. They <br />understand our product and are able to add new <br />features with a great focus."
                            </h4>
                            <div className='c-main'>
                                <div className=''>
                                    <img src={Woman} alt="" />

                                </div>
                                <div className=''>
                                    <h6>Jenny Wilson</h6>
                                    <p>Vice President</p>
                                </div>

                            </div>
                        </div>
        
                    </Slider>
                    </Col>
                </Row>
            </Container>
            </section>
        </div>
    );
};

export default Client;