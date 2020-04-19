import React from "react";
import PropTypes from "prop-types";
import { Card, Container } from "react-bootstrap";

function ContentCard(props) {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Container>
        <div style={{ padding: "10px" }}>
          <Card>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
              <Card.Text>{props.paragraph}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

ContentCard.propTypes = {
  img: PropTypes.string,
  paragraph: PropTypes.string,
};

export default ContentCard;
