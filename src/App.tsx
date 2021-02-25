import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./Component/layout/Sidebar";
import Album from "./pages/Album";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import Table from "./pages/Table";
import VideoGallary from "./pages/VideoGallary";
import Login from "./pages/Login";
import PrivateRoute, { PublicRoute } from "./globalConfig/PrivateRoute";
import Header from "./Component/layout/Header";
// import Sidebar from "./Component/layout/Sidebar";

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute component={Login} exact path="/" />
        <div>
          <Header />
          <Row>
            <Col md={2}>
              <Sidebar />
            </Col>
            <Col md={10}>
              <div className="main-section">
                <PrivateRoute exact path="/table" component={Table} />
                <PrivateRoute exact path="/album" component={Album} />
                <PrivateRoute exact path="/videos" component={VideoGallary} />
              </div>
            </Col>
          </Row>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
