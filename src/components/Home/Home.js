import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Image from "/Users/anyueow/Desktop/FindHer-Landing-V2/src/Assets/hero.png";
import Button from "react-bootstrap/Button";
import Home2 from "./Home2";
import About from "../About/About";

function Home() {
  const [email, setEmail] = useState("");

  const handleChange = event => {
    setEmail(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Email is ${email}`);
  }

  return (
      <section>
        <Container fluid id="home">
          <Container className="home-content center-contents">
            <Row>
              <Col md={6} className="text-left"> {/* Align text to the left */}
                <h1 className="main-name">
                  <strong>Insights on workplaces in India,
                    <span className="span"> for </span>
                    <span className="text-wrapper">women </span>
                    <span className="span">by</span>
                    <span className="text-wrapper"> women. </span>
                  </strong>
                </h1>
                <h3 className="heading-name">
                  Learn what it’s like to work at a company from the women who have been there.
                </h3>
                <div className="group">
                  <div className="overlap-group">
                    <Form onSubmit={handleSubmit} className="rectangle">
                      <Form.Control
                          className="your-email-address"
                          type="email"
                          placeholder="Your email address"
                          value={email}
                          onChange={handleChange}
                      />
                      <Button className="div" type="submit">
                        <div className="get-access">get access</div>
                      </Button>
                    </Form>
                  </div>
                </div>
              </Col>
              <Col md={6} className="d-flex justify-content-center align-items-center"> {/* Align image to the right */}
                <img src={Image} alt="Screen Demo" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Container>


      </section>
  );
}

export default Home;
