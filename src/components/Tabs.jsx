import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tabs, Tab, Badge } from "react-bootstrap";
import SearchInput from "./SearchInput";

class Example extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "places to stay",
    };
  }

  render() {
    const onlineExpTitle = (
      <div>
        Online Experiences &nbsp;
        <Badge variant="danger">New</Badge>
      </div>
    );
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
          Experiences
        </Tab>
        <Tab eventKey="online experience" title={onlineExpTitle}>
          Online Experiences
        </Tab>
      </Tabs>
    );
  }
}

export default Example;
