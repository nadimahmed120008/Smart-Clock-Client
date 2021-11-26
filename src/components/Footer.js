import React from "react";
import contactNow from "./../assets/images/contact.png";
import { Col, Container, Row } from "react-bootstrap";
import "./../assets/css/footer.css";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
  return (
    <>
      <div className="footer-top pb-4">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h1 className="col-title">SMART CLOCK</h1>
                <h5 className="text-muted">Sign up for our Newsletter</h5>
                <form className="d-flex">
                  <input
                    placeholder="Enter your email"
                    className="form-control rounded-0"
                    type="text"
                  />
                  <button className="btn rounded-0 btn-primary">Subs</button>
                </form>
                <h5 className="text-muted mt-4">Follow us on</h5>
                <div>
                  <ul className="social-icons">
                    <li>
                      <a href="/d">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/d">
                        <i class="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/d">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/d">
                        <i class="fab fa-twitter-square"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </Zoom>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">INFORMATION</h4>
                <ul className="information">
                  <li>
                    <a href="/d">bKash Payments</a>
                  </li>
                  <li>
                    <a href="/d">TERMS & CONDITIONS</a>
                  </li>
                  <li>
                    <a href="/d">Card Payments</a>
                  </li>
                  <li>
                    <a href="/d">Payment Options</a>
                  </li>
                  <li>
                    <a href="/d">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/d">Refund Policy</a>
                  </li>
                </ul>
              </Zoom>
            </Col>

            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">CUSTOMER SERVICE</h4>
                <ul className="information">
                  <li>
                    <a href="/d">FAQs</a>
                  </li>
                  <li>
                    <a href="/d">MyBata</a>
                  </li>
                  <li>
                    <a href="/d">Store Locator</a>
                  </li>
                  <li>
                    <a href="/d">All About Feet</a>
                  </li>
                  <li>
                    <a href="/d">Contact Info</a>
                  </li>
                  <li>
                    <a href="/d">Delivery</a>
                  </li>
                </ul>
              </Zoom>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">Reach us</h4>
                <div className="">
                  <img width="100px" src={contactNow} alt="" />
                </div>
                <ul className="information contact-info">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    Mirpur, Dhaka, Bangladesh
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    Official: smartclock@gmail.com
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    Helpline: +8801787-777777
                  </li>
                </ul>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer">
        <p className="text-center">Copyright &copy; All rights reserved by SMART CLOCK</p>
      </div>
    </>
  );
};

export default Footer;
