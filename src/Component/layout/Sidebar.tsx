import React from "react";
import { Dropdown, DropdownButton, Nav } from "react-bootstrap";
import "../../css/Layout.scss";

interface Props {}

const Sidebar = (props: Props) => {
  return (
    <>
      <Nav className="col-md-2 d-none d-md-block bg-dark sidebar">
        <h3 className="text-center">Sidebar</h3>
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link href="/table">Employ Record</Nav.Link>
        </Nav.Item>
        <DropdownButton
          id="dropdown-item-button"
          title="Gallary"
          style={{ left: "4px", borderColor: "none" }}
        >
          <Nav.Item>
            <Nav.Link href="/album">Image Gallary</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/videos">Video Gallary</Nav.Link>
          </Nav.Item>
        </DropdownButton>
      </Nav>
    </>
  );
};

export default Sidebar;
