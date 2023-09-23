import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Hello, I'm Rishant Puri Goswami, a dedicated software developer proficient in
              <i>
                <b className="purple"> C, Java, JavaScript, and Data Structures & Algorithms.</b>
              </i>
              <br />
              <br />
              With a solid grasp of &nbsp;
              <i>
              <b className="purple">
                SQL, HTML, CSS &nbsp;
                </b>
              </i>
              
                and expertise in &nbsp;
                <i>
                <b className="purple">
                AWS, MySQL, JDBC, and JEE.
                </b>
                </i>
                
              <i>
              &nbsp;I create robust and efficient applications. Additionally, I specialize in
                <b className="purple">
                &nbsp;ReactJS and Bootstrap
                </b>
              </i>
              <br />
              <br />
              I'm adept at version control using  <i><b className="purple">Git</b></i> and
              <i>
                <b className="purple">
                &nbsp;Github
                </b>
              </i>
              &nbsp;showcasing my commitment to delivering high-quality code and collaborative development.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AlwaysRishant"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rishant-puri-goswami-8873a9233/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/whorishantpurigoswami/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
