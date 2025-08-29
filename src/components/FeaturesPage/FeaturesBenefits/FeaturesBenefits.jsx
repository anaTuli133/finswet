import React from "react";
import { Container, Row} from "react-bootstrap";

import "./featuresbenefits.css";
import Logo1 from "../../../assets/Logo 1.png";
import Logo2 from "../../../assets/Logo 2.png";
import Logo3 from "../../../assets/Logo 3.png";
import Logo4 from "../../../assets/Logo 4.png";
import Logo5 from "../../../assets/Logo 5.png";

const FeaturesBenefits = () => {
  return (
    <section className="about-benefits-section project-row">


        <Row>
          <Container>
         <div className="benefits2">
            <div className="box">
             <div className='text-left box-heading'>

              <h1>100.000+</h1>
              <p>Figma Users</p>
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
    </section>
  );
};

export default FeaturesBenefits;
