import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiAmazonaws, SiApachetomcat, SiBootstrap, SiCss3, SiHtml5, SiOracle} from "react-icons/si";
import { SiC } from "react-icons/si";
import Sqlicon from "../About/sqlicon.png";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiJava,
  DiGithub,
  DiMysql,
} from "react-icons/di";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiC/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Sqlicon} width={50+"%"} alt="not found"></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachetomcat/>
      </Col>
    </Row>
  );
}

export default Techstack;
