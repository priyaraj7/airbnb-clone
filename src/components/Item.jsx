import React from "react";
import PropTypes from "prop-types";
// import Image1 from '../assets/1.jpg';
import { Card, Button, } from "react-bootstrap";


function Item(props) {
  return (
    // <React.Fragment>
    //   <h3>
    //     {props.location} - {props.names}
    //   </h3>
    //   <p>
    //     <em>{props.issue}</em>
    //   </p>
    //   <hr />
    // </React.Fragment>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.location} />
      <Card.Body>
        <Card.Title>{props.names}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
    </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

  );
}

Item.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
};

export default Item;
