import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <h3>
        {props.location} - {props.names}
      </h3>
      <p>
        <em>{props.issue}</em>
      </p>
      <hr />
    </React.Fragment>
  );
}

Item.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
};

export default Item;