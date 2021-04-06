import React from "react";
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import TabContent from "./TabContent"

 function TabSection() {
     return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="first" title="First">
          <TabContent />
        </Tab>
        <Tab eventKey="second" title="Second" disabled>
        </Tab>
        <Tab eventKey="Third" title="Third" disabled>
        </Tab>
      </Tabs>
     )
 }

 export default TabSection;