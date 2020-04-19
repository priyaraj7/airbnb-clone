import React from "react";
import Header from "./Header";
import H1 from "./H1";
import ItemList from "./ItemList";
import ControlledTabs from "./Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import ContentH1 from "./content/ContentH1";
import ContentCardList from "./content/ContentCardList";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <br />
        <ControlledTabs />
        <H1 />
        <ItemList />
      </Container>
      <ContentH1 />
      <ContentCardList />
      <Footer />
    </React.Fragment>
  );
}

export default App;
