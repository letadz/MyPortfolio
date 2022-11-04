import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

import pic from "../../assets/pic/about-profile.jpg";
import Skills from "../skills/Skills";

const About = () => {
  return (
    <div id="aboutme" className="about">
      <Container>
        <span
          className="about-title"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          About me
        </span>
        <Row className="about-content">
          <Col
            className="about-left"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="400"
            data-aos-duration="700"
          >
            <img src={pic} className="pic" alt="pic" />
          </Col>

          <Col
            className="about-right"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="400"
            data-aos-duration="700"
          >
            {/*I'm currently looking for an opportunity to show my potential */}
            {/* continue challenging myself and do
              interesting things that matter,  */}
            <span className="about-description">
              I am willing to be trained and willing to learn new things. I'm
              currently looking for
              <span className="text-color"> entry-level position </span>
              that suits my skills. I prefer to keep learning, I
              am very passionate about improving my coding skills & developing
              websites. Coding gives me a wonderful feeling of achievement and
              joy which I cannot explain in words.
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
