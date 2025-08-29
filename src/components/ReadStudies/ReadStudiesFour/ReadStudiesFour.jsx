import React from "react";
import { Container, Button } from "react-bootstrap";
import "./readstudiesfour.css";

const ReadStudiesFour = () => {
  return (
    <section className="portfolio3-section text-center">
      <Container>
        <h3 className="portfolio3-title">Let's build something great together</h3>
        <p className="portfolio3-desc">
          Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet,
          scelerisque cursus purus.
        </p>
        <Button variant="warning" className="px-4 py-2 rounded-pill">
          Contact Us
        </Button>
      </Container>
    </section>
  );
};

export default ReadStudiesFour;
