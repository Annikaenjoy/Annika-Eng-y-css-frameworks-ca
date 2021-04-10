import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabText from "./TabContent";
import tab1 from "../img/TabImages/tab-1.jpg";
import tab2 from "../img/TabImages/tab-2.jpg";
import tab3 from "../img/TabImages/tab-3.jpg";

const TabSection = () => {
  return (
    <Tabs defaultActiveKey="first" id="uncontrolled-tab-example">
      <Tab eventKey="first" title="First">
        <TabText image={tab1} />
      </Tab>
      <Tab eventKey="second" title="Second">
        <TabText image={tab2} />
      </Tab>
      <Tab eventKey="Third" title="Third">
        <TabText image={tab3} />
      </Tab>
    </Tabs>
  );
};

export default TabSection;
