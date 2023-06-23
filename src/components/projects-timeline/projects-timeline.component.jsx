import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./projects-timeline.styles.css";
import { projects } from "./project-data";

const TimeLine = () => {
  return (
    <div id="projects">
      <div id="pt-3 pb-3" className="section-add-1 grid-container pt-3 pb-3">
        <h1 className="text-center font-details-b">PROJECTS</h1>
        <br />
        <br />
        <CardDeck>
          <Row className="d-flex justify-content-around">
            {projects.map((project, index) => (
              <Col key={index}>
                <Card className="text-center project-card">
                  <span className="p-2">
                    <Card.Title>{project.projectName}</Card.Title>
                    <Card.Body>
                      <Image
                        src={project.projectimgSrc}
                        alt="project1-image"
                        height="100%"
                        width="100%"
                      />
                      <Card.Text className="project-text">
                        <br />
                        {project.projectDescrep}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted project-footer">
                      {project.projectLinks.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            id={`${link.name.toLowerCase()}-btn`}
                            variant={
                              link.type === "youtube"
                                ? "outline-danger"
                                : "outline-dark"
                            }
                            title={`Watch the ${link.name} project!`}
                          >
                            <i
                              className={`fab fa-${link.type.toLowerCase()}`}
                            />{" "}
                            {link.name}
                          </Button>
                        </a>
                      ))}
                    </Card.Footer>
                  </span>
                </Card>
              </Col>
            ))}
          </Row>
        </CardDeck>
        <br />
        <br />
        <footer>
          <a
            href="https://github.com/vajithChamuditha-99/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="gitbtn-00">
              <Button variant="primary" size="lg" block>
                SEE MORE
              </Button>
            </div>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default TimeLine;
