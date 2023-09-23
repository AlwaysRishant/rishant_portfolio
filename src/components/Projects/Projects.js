import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import atm from "../../Assets/Projects/atm.png";
import cab from "../../Assets/Projects/cab.png";
import sanjeevni from "../../Assets/Projects/sanjeevni.png";
import secondhandsquare from "../../Assets/Projects/secondhandsquare.png";
import training from "../../Assets/Projects/training.png";
import movie from "../../Assets/Projects/movie.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={secondhandsquare}
              isBlog={false}
              title="Second Hand Square"
              description="This e-commerce website is built using React for the dynamic and interactive front-end, providing a seamless user experience. The back-end is powered by Java, utilizing servlet technology to handle server-side logic, database interactions, and ensure smooth transactions for a robust and efficient online shopping platform"
              ghLink="https://github.com/AlwaysRishant/Second_Hand_Square"
              videoLink="https://www.linkedin.com/posts/rishant-puri-goswami-8873a9233_reactjs-fullstackdeveloper-html5-activity-7093653275782070273-Qv00?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atm}
              isBlog={false}
              title="Atm Machine"
              description="This ATM machine simulation is designed with a Java Swing front-end for a user-friendly interface. The back-end utilizes Java for core functionality and integrates with an Oracle database to store and manage account information. Real ATM functionality is emulated, allowing up to three daily transactions while implementing a security feature that locks the account for 24 hours after three incorrect password attempts, ensuring a secure and efficient banking experience."
              ghLink="https://github.com/AlwaysRishant/Atm_Machine"
              videoLink="https://www.linkedin.com/posts/rishant-puri-goswami-8873a9233_javadeveloper-javaprogramming-java-activity-7026993251312119808-_tUg?utm_source=share&utm_medium=member_desktop"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sanjeevni}
              isBlog={false}
              title="Sanjeevni_Application"
              description="Sanjeevni application employs Java Swing for a user-friendly front-end, streamlining hospitality management. Its back-end, powered by Java, efficiently manages and coordinates various hospitality operations. This system offers a seamless experience in managing guest services, reservations, and resources within the hospitality industry. The intuitive interface enhances operational efficiency and customer satisfaction, making it an ideal tool for modern hospitality businesses."
              ghLink="https://github.com/AlwaysRishant/Sanjeevni_Application"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Top Movies"
              description="This top-rated movies showcase utilizes React for a dynamic front-end, offering an engaging user experience. The data showcasing the top 20 movies and their ratings is fetched via API calls to a server. The project provides real-time insights into the best-rated movies globally, enhancing the user's access to popular and acclaimed films in a visually appealing manner."
              ghLink="https://github.com/AlwaysRishant/Top_Movies"
              videoLink="https://www.linkedin.com/posts/rishant-puri-goswami-8873a9233_reactjs-api-fetch-activity-7092877611839721472-avZK?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={training}
              isBlog={false}
              title="Training and Placement Application"
              description="This training and placement application streamlines HR tasks by allowing easy job postings. Users can submit applications and complete timed assessment papers within 10 minutes. The platform offers a seamless interface for HR professionals to publish job openings and efficiently manage the hiring process, ensuring a smooth recruitment experience for both employers and candidates."
              ghLink="https://github.com/AlwaysRishant/Training_Placement_Application"
              videoLink="https://www.linkedin.com/posts/rishant-puri-goswami-8873a9233_good-evening-connections-recently-i-have-activity-6978764560174362624-Rbdz?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cab}
              isBlog={false}
              title="Online Cab Booking"
              description="This online cab booking system integrates HTML and CSS for a user-friendly interface, allowing users to effortlessly book or cancel cabs. Backend operations are managed through Java with Java EE, enabling robust functionality. An Oracle database stores crucial information, enhancing data management and ensuring a seamless experience for booking and managing cab reservations."
              ghLink="https://github.com/AlwaysRishant/OnlineCabBooking"
              videoLink="https://www.linkedin.com/posts/rishant-puri-goswami-8873a9233_javascript-javafullstackdeveloper-advancejava-activity-7045388453433290752-qZWQ?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
