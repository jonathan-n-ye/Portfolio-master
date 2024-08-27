import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cff from "../../Assets/Projects/cff.png";
import cyis from "../../Assets/Projects/emotion.png";
import fbla from "../../Assets/Projects/fbla.png";
import aces from "../../Assets/Projects/chatify.png";
import wlmacbc from "../../Assets/Projects/suicide.png";
import cyc from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few initiatives and organizations I've worked in recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cff}
              isBlog={false}
              title="Canada FutureFocus"
              description="A podcast serving as a platform for youth to talk about the ideas and issues they care about. Founded March 2023 and serving as Executive Director there."
              ghLink="https://instagram.com/canadafuturefocus"
              demoLink="https://canadafuturefocus.super.site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cyis}
              isBlog={false}
              title="Canadian Young Investors Society"
              description="Serving as a Senior Director of Finance there. CYIS is dedicated to promoting youth financial literacy and is the largest finance pre-professional club in Canada."
              ghLink="https://instagram.com/cyis.info"
              demoLink="https://cyis.info"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aces}
              isBlog={false}
              title="ACES"
              description="Multinational organization dedicated to promoting financial literacy, business and STEM for high school students. Serving there as a national leader where I raise and mentor branches."
              ghLink="https://instagram.com/advancedcurriculumsofficial"
              demoLink="https://www.acesofficial.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fbla}
              isBlog={false}
              title="Canada FBLA"
              description="Worked on the National Advisory Council and helped Canada FBLA expand to 1800+ members. Ran multiple events/panels featuring business professionals and Ivy League students."
              ghLink="https://instagram.com/fblcanada_"
              demoLink="https://fbla.ca"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wlmacbc}
              isBlog={false}
              title="William Lyon Mackenzie Business Council"
              description="Serving as the President of the largest chapter of Target Alpha and Canada FBLA. Over 100+ members."
              ghLink="https://instagram.com/wlmac.businesscouncil"
              demoLink="https://linktr.ee/macbusinesscouncil"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cyc}
              isBlog={false}
              title="Markham-Thornhill Consituency Youth Council"
              description="Collaborating with Minister Mary Ng and fellow council members to amplify youth voices in the community."
              ghLink="https://www.instagram.com/cycmarkhamthornhill/"
              demoLink="https://maryng.libparl.ca/cyc-2020-2021/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
