import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tabs, Tab } from "react-bootstrap";
import { MdSearch } from "react-icons/md";

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
          <form>
            <div class="form-row">
              <div class="form-group col-md-3">
                <div>LOCATION</div>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="add city, landmark, or address"
                />
              </div>
              <div class="form-group col-md-3">
                <div>CHECK IN/ CHECK OUT </div>

                <input
                  type="text"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="add dates"
                />
              </div>
              <div class="form-group col-md-3">
                <div>GUESTS </div>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="add guests"
                />
              </div>
              <div class="form-group col-md-3">
                <label for="inputAddress"></label>
                <br />
                <button type="submit" class="btn btn-danger">
                  <MdSearch /> Search
                </button>{" "}
              </div>
            </div>
          </form>
        </Tab>
        <Tab eventKey="monthly stay" title="Monthly stay">
          Profile content
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

// export default () => (<div><ReactBootstrapStyle /><Example /></div>)
export default Example;
