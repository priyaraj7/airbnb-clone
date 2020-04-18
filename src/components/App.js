import React from "react";
import Header from "./Header";
import H1 from "./H1";
import ItemList from "./ItemList";
import Footer from "./Footer";
import ControlledTabs from "./Tabs";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ControlledTabs />
      <H1 />
      <ItemList />
      <Footer />
    </React.Fragment>
  );
}

export default App;
