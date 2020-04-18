import React from "react";
import Item from "./Item";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import { CardDeck } from "react-bootstrap";

const masterTicketList = [
  {
    names: "Online Experience",
    location: image1,
    issue: "Firebase won't save record. Halp.",
  },
  {
    names: "Monthly stays",
    location: image2,
    issue: "Prop types are throwing an error.",
  },
  {
    names: "Frontline stays",
    location: image3,
    issue: "Child component isn't rendering.",
  },
];

function ItemList() {
  return (
    <React.Fragment>
      <hr />
      <CardDeck>
        {masterTicketList.map((ticket, index) => (
          <Item
            names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            key={index}
          />
        ))}
      </CardDeck>
    </React.Fragment>
  );
}

export default ItemList;
