import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rishant Puri Goswami </span>
            from <span className="purple"> Bhopal, India.</span>
            <br /> I am a final year student pursuing an B.Tech
            in Computer Science Engineering at SATI Vidisha.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Fond of Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Confusion is part of programming"{" "}
          </p>
          <footer className="blockquote-footer">Rishant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
