import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

import pic from "../../assets/pic/about-profile.jpg";
import Skills from "../skills/Skills";

const About = () => {
  return (
    <div id="aboutme" className="about">
      <Container>
        <span className="about-title">About me</span>
        <Row className="about-content">
          <Col className="about-left">
            <img src={pic} className="pic" alt="pic" />
          </Col>

          <Col className="about-right">
            <span className="about-description">
              I'm currently looking for an opportunity to show my potential. I
              prefer to keep learning, continue challenging myself and do
              interesting things that matter, I am very passionate about
              improving my coding skills & developing websites. Coding gives me
              a wonderful feeling of achievement and joy which I cannot explain
              in words.
            </span>

            <div className="about-skills">
              <span className="about-skills__title">
                Here's my tech skills:
              </span>

              {/* Skills icon */}
              <Skills />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;