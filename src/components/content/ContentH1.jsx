import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Container } from "react-bootstrap";

function ContentH1() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        paddingTop: "20px",
      }}
    >
      <Container>
        <Row>
          <Col md={9}>
            <h1>Introducing Online Experiences</h1>
            <p>
              Now you can meet people all over the world while trying <br />{" "}
              something new. Join live, interactive video sessions led by <br />{" "}
              expert hosts—all without leaving home.
            </p>
          </Col>
          <Col md={3}>
            <Button variant="dark">Explore all</Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContentH1;
