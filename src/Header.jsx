import React, { PureComponent } from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./app.scss";
import { Link } from "react-router-dom";

export class Header extends PureComponent {
  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <Row>
              <Col xs={12} lg={4} sm={4} md={4}>
                <div className="header">
                  <a>World of Photos</a>
                </div>
              </Col>
              <Col xs={12} lg={4} sm={4} md={4} />
              <Col lg={4} sm={4} md={4} xs={12}>
                <div>
                  <ul>
                    <Link to="/">
                      <li>Home</li>
                    </Link>
                    {/* <Link to="ContactUs">
                      <li>Contact Us</li>
                    </Link>
                    <Link to="/AboutUs">
                      <li>About Us</li>
                    </Link> */}
                    <Link to="/Cart">
                      <li>My Cart</li>
                    </Link>
                  </ul>
                </div>
              </Col>
            </Row>
            {/* <div className="header">
              <Row>
                <Col xs={12} lg={3}>
                  <div>
                    <a>Unsplash Gallery</a>
                  </div>
                </Col>

                <Col xs={12} lg={9}>
                  <ul>
                    <Link to="/">
                      <li>Home</li>
                    </Link>
                    <Link to="ContactUs">
                      <li>Contact Us</li>
                    </Link>
                    <Link to="/AboutUs">
                      <li>About Us</li>
                    </Link>
                  </ul>
                </Col>
              </Row>
            </div> */}
          </Col>
        </Row>
      </>
    );
  }
}
