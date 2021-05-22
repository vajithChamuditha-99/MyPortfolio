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
    <div id="projects pt-3 pb-3" className="section-add-1 grid-container pt-3">
      <h1 className="text-center font-details-b">PROJECTS</h1><br/><br/>
      <CardDeck>
        <Row className="d-flex justify-content-around">
          <Col>
            <Card className="text-center">
              {projects.projectOne.map((project, index) => (
                <span className="p-2" key={index}>
                  <Card.Title>{project.projectName}</Card.Title>
                  <Card.Body>
                    <Image src={project.projectimgSrc} alt="project1-image" height="100%" width="100%"></Image>
                    <Card.Text>
                      <br/>
                      {project.projectDescrep}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                      <Button  id="youtube-btn" variant="outline-danger" title="watch the live project!">
                        <i className="fab fa-youtube"></i> live project
                      </Button>
                    </a>
                  </Card.Footer>
                </span>
              ))}
            </Card>
          </Col>
          <Col>
          <Card className="text-center">
              {projects.projectFour.map((project, index) => (
                <span className="p-2" key={index}>
                  <Card.Title>{project.projectName}</Card.Title>
                  <Image src={project.projectimgSrc} alt="project2-image" rounded height="60%" width="55%" ></Image>
                  <Card.Text>
                    <br/>
                    {project.projectDescrep}
                  </Card.Text>
                  <Card.Footer className="text-muted">
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline-dark" title="Github repo">
                        <i className="fab fa-github-square"></i> source code
                      </Button><span>{"           "}</span>
                    </a>
                  </Card.Footer>
                </span> 
              ))}
            </Card>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
          <Card className="text-center">
              {projects.projectThree.map((project, index) => (
                <span className="p-2" key={index}>
                  <Card.Title>{project.projectName}</Card.Title>
                  <Image src={project.projectimgSrc} alt="project3-image" rounded height="84%" width="78%"></Image>
                  <Card.Text>
                    <br/>
                    {project.projectDescrep}
                  </Card.Text>
                  <Card.Footer className="text-muted">
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline-dark" title="Github repo">
                        <i className="fab fa-github-square"></i> source code
                      </Button>
                    </a>
                  </Card.Footer>
                </span>
              ))}
            </Card>
          </Col>
          <Col>
          <Card className="text-center">
              {projects.projectTwo.map((project, index) => (
                <span className="p-2" key={index}>
                  <Card.Title>{project.projectName}</Card.Title>
                  <Image src={project.projectimgSrc} alt="project4-image" height="100%" width="90%"></Image>
                  <Card.Text>
                    <br/>
                    {project.projectDescrep}
                  </Card.Text>
                  <Card.Footer className="text-muted">
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline-dark" title="Github repo">
                        <i className="fab fa-github-square"></i> source code-1
                      </Button>
                    </a>
                    <a href={project.projectLinkTwo} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline-dark" title="Github repo">
                        <i className="fab fa-github-square"></i> source code-2
                      </Button><span>{"           "}</span>
                    </a>
                  </Card.Footer>
                </span>
              ))}
            </Card>
          </Col>
        </Row>
      </CardDeck>
      <br/>
      <br/>
      <footer>
        <a href="https://github.com/vajithChamuditha-99/" target="_blank" rel="noopener noreferrer">
          <div className="gitbtn-00">
            <Button variant="primary" size="lg" block>
              SEE MORE
            </Button>
          </div>
        </a>
      </footer>
    </div>
  );
};

export default TimeLine;


