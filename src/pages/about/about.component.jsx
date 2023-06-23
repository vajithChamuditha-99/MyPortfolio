import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/my.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Vajith Chamuditha</strong>
                <br /> As a fresh graduate of BEng Software Engineering (Hons),
                I am an enthusiastic and versatile full stack engineer. With a
                solid foundation in software development principles and a broad
                range of technical skills, I excel in both front-end and
                back-end development. I possess expertise in front-end
                technologies like React, Angular and Vue, allowing me to create
                engaging and user-friendly interfaces. Additionally, my
                knowledge of back-end technologies such as databases,
                server-side frameworks, and programming languages enables me to
                handle complex data management and build robust and restful
                APIs.
                <br />I like to learn about new technologies, what problems are
                they solving and How can I use them to build better and scalable
                products.
                <br />
                Currently, I am actively seeking opportunities to apply my
                skills and contribute to impactful projects as a full stack
                engineer.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="mailto:vajithc@gmail.com">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1xzgyK9G0d1Tf4NeaH2aNdQ-sai26GmvT/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/vajithChamuditha-99"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="http://linkedin.com/in/vajith-chamuditha-9545b7195"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
