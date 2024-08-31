import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey everyone, I'm <span className="purple">Jonathan Ye </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br />
            I am currently the executive director of Canada FutureFocus.
            <br />
            I am a MaCS student in grade 11 at William Lyon Mackenzie C.I.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Educating People
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Eating
            </li>
            <li className="about-activity">
              <ImPointRight /> Business
            </li>

          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
