import React from "react";
import { Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../../css/Authentication.scss";

interface Props {}

const Header = (props: Props) => {
  const isLogin = localStorage.getItem("isAdmin");
  let history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    history.push("/");
  };
  return (
    <div>
      <div className="Nav-container">
        <Nav className="navbar navbar-expand-md d-md-flex bg-dark ">
          {/* <Nav className="navbar navbar-expand-lg navbar-light fixed-top"> */}
          <div className="container">
            <Nav.Link className="navbar-brand" href={"/"}>
              {isLogin ? "" : "RDN.io"}
            </Nav.Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Nav.Link className="nav-link" href={"/"}>
                    {isLogin ? "" : "Login"}
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link" href={"/sign-up"}>
                    {isLogin ? "" : "Sign up"}
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link" onClick={handleLogout}>
                    {isLogin ? "Logout" : ""}
                  </Nav.Link>
                </li>
              </ul>
            </div>
          </div>
        </Nav>
      </div>
      {/* <header className="App-header"></header> */}
    </div>
  );
};

export default Header;
