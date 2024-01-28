import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import Email from "../assets/icons/email.png";

const Footer: React.FC = () => {
  return (
    <div id="footer">
      <Container>
        <h2>Need Help?</h2>
        <Row>
          <Col md className="mb-6">
            <h3 className="font-semibold">Email us</h3>
            <img
              src={Email}
              alt="Link to Instagram"
              width={20}
              style={{ marginRight: "0.25em" }}
            />
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="mailto:info@senecahackathon.com"
            >
              info@senecahackathon.com
            </a>
          </Col>
          <Col md className="mb-6">
            <h3 className="font-semibold">Address</h3>
            <p style={{ margin: 0 }}>
              Seneca Polytechnic <br />
              1750 Finch Ave East
              <br />
              Toronto, Ontario, Canada <br />
              M2J 2X5
            </p>
          </Col>
        </Row>
        <p style={{ fontSize: "x-small" }}>
          &copy; Copyright. All rights reserved by Housing Hackathon.
        </p>
      </Container>
    </div>
  );
};

export default Footer;
