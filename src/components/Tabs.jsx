import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tabs, Tab } from "react-bootstrap";
import SearchInput from "./SearchInput";

// function ControlledTabs() {
//   return (
//     <Tabs id="controlled-tab-example">
//       <Tab eventKey="stay" title="Places to stay"></Tab>
//       <Tab eventKey="profile" title="Monthly stay"></Tab>
//       <Tab title="Experience"></Tab>
//     </Tabs>
//   );
// }

// export default ControlledTabs;

class Example extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "places to stay",
    };
  }

  render() {
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={(key) => this.setState({ key })}
      >
        <Tab eventKey="places to stay" title="Places to stay">
          <SearchInput />
        </Tab>
        <Tab eventKey="monthly stay" title="Monthly stay">
          <SearchInput />
        </Tab>
        <Tab eventKey="experience" title="Experiences">
          Contact content
        </Tab>
        <Tab eventKey="online experience" title="Online Experiences">
          Contact content
        </Tab>
      </Tabs>
    );
  }
}

export default Example;
