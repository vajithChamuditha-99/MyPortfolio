import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONNECT WITH ME</h1>
      <Jumbotron className="contact-jumbotron">
      <div className="row justify-content-center">
				<div className="col-lg-10 col-md-12">
					<div className="wrapper">
						<div className="row justify-content-center">
							<div className="col-lg-8 mb-5">
								<div className="row">
									<div className="col-md-4">
										<div className="dbox w-100 text-center">
					        		<div className="icon d-flex align-items-center justify-content-center">
					        			<span className="fa fa-map-marker"></span>
					        		</div>
					        		<div className="text">
						            <p><span>Address:</span> <br/>Matara, Srilanka, 81020</p>
						          </div>
					          </div>
									</div>
									<div className="col-md-4">
										<div className="dbox w-100 text-center">
					        		<div className="icon d-flex align-items-center justify-content-center">
					        			<span className="fa fa-phone"></span>
					        		</div>
					        		<div className="text">
						            <p><span>Phone:</span> <a href="tel://+94779686823">+94779686823</a></p>
						          </div>
					          </div>
									</div>
									<div className="col-md-4">
										<div className="dbox w-100 text-center">
					        		<div className="icon d-flex align-items-center justify-content-center">
					        			<span className="fa fa-paper-plane"></span>
					        		</div>
					        		<div className="text">
						            <p><span>Email:</span> <a href="mailto:vajithc@gmail.com">vajithc@gmail.com</a></p>
						          </div>
					          </div>
									</div>
								</div>
							</div>
								
								</div>
							</div>
						</div>
					</div>
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="http://linkedin.com/in/vajith-chamuditha-9545b7195" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/vajithChamuditha-99" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            {/* <div className="m-2">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <Button id="youtube-btn" variant="outline-info" title="Lets code together!">
                <i class="fab fa-youtube"></i> Youtube
                </Button>
              </a>
            </div> */}
            <div className="m-2">
              <a href="https://discordapp.com/users/753095275752587360/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Messages are welcomed!">
                  <i className="fab fa-discord"></i> Discord
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="mailto:vajithc@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="vajithc@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/profile.php?id=100009414591598" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Say hello on FB">
                  <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
