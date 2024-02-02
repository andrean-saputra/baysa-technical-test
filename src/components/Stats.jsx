import Card from "./OverviewCard";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

function Stats() {
  return (
    <Container>
      <div className="main-wrapper">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="tabHeader">
            <div className="statsTitleWrapper">
              <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>Overview</p>
            </div>
            <Nav variant="pills" className="flex-row">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="divider"></div>
          <div className="tabContent">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="d-flex flex-wrap justify-content-between pt-5 cardWrapper">
                  <Card />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
    </Container>
  );
}

export default Stats;

<div className="main-wrapper">
  <div className="bg-white roundedCorner">
    <div className="statsTitleWrapper">
      <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>Overview</p>
    </div>
  </div>
</div>;
