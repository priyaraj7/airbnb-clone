// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Header() {
//   return <h1>Air Bnb site</h1>;
// }

// export default Header;

// ................
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, FormControl, Button, Form } from "react-bootstrap";
function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home"></Navbar.Brand> {/*ask question */}
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Notification</Nav.Link>
        <Nav.Link href="#pricing">Message</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Tweet</Button>
      </Form>
    </Navbar>
  );
}

export default Header;
