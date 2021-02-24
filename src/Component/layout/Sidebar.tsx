import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import "../../css/Layout.scss";

interface Props {}

const Sidebar = (props: Props) => {
  return (
    <>
      <Nav
        className="col-md-2 d-none d-md-block bg-dark sidebar"
        // activeKey="/"
        // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <h3 className="text-center">Sidebar</h3>
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link href="/">Employ Record</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/album">Gallary</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Sidebar;
