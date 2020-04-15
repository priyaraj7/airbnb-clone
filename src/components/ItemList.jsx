import React from "react";
import Item from "./Item";

const masterTicketList = [
  {
    names: "Online Experience",
    location: "image url",
    issue: "Firebase won't save record. Halp.",
  },
  {
    names: "Sleater and Kinney",
    location: "4B",
    issue: "Prop types are throwing an error.",
  },
  {
    names: "Imani & Jacob",
    location: "9F",
    issue: "Child component isn't rendering.",
  },
];

function ItemList() {
  return (
    <React.Fragment>
      <hr />
      {masterTicketList.map((ticket, index) => (
        <Item
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}

export default ItemList;
