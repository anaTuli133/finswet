import React from 'react';
import { Col } from 'react-bootstrap';


const WorkReusable = ({title, she}) => {

    return (
        <Col lg={6} className='work-card'>
            <img src={she} alt="" />
            <h3 className='text-title'>{title}</h3>
            <p className='text-paragraph'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
        </Col>
    )
}

export default WorkReusable;