import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { MdLanguage } from "react-icons/md";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

function Footer() {
  return (
    <Container>
      <Row>
        <Col md="6">
          <div class="_1br4kkl" dir="ltr">
            <h6>
              © 2020 Airbnb, Inc. All rights reserved . Privacy . Term . Sitemap
            </h6>
          </div>
        </Col>
        <Col md="6">
          <h6>
            <MdLanguage /> English(US) $ USD <FaFacebook /> <FaTwitter />{" "}
            <TiSocialInstagram />
          </h6>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
