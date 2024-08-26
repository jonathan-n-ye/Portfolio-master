import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few initiatives I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Canada FutureFocus"
              description="A podcast serving as a platform for youth to talk about the ideas and issues they care about. Founded March 2023 and serving as Executive Director there."
              ghLink="https://instagram.com/canadafuturefocus"
              demoLink="https://canadafuturefocus.super.site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Canadian Young Investors Society"
              description="Serving as a Senior Director of Finance there. CYIS is dedicated to promoting youth financial literacy and is the largest finance pre-professional club in Canada."
              ghLink="https://instagram.com/cyis.info"
              demoLink="https://cyis.info"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ACES"
              description="Multinational organization dedicated to promoting financial literacy, business and STEM for high school students. Serving there as a national leader where I raise and mentor branches."
              ghLink="https://instagram.com/advancedcurriculumsofficial"
              demoLink="NA"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Canada FBLA"
              description="Worked on the National Advisory Council and helped Canada FBLA expand to 1800+ members. Ran multiple events/panels featuring business professionals and Ivy League students."
              ghLink="https://instagram.com/fblcanada_"
              demoLink="https://fbla.ca"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="William Lyon Mackenzie Business Council"
              description="Serving as the President of the largest chapter of Target Alpha and Canada FBLA. Over 100+ members."
              ghLink="https://instagram.com/wlmac.businesscouncil"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Markham-Thornhill Consituency Youth Council"
              description="Collaborating with Minister Mary Ng and fellow council members to amplify youth voices in the community."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
