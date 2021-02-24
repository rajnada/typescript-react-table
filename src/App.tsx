import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./Component/layout/Sidebar";
import Album from "./pages/Album";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import Table from "./pages/Table";
import VideoGallary from "./pages/VideoGallary";
// import Sidebar from "./Component/layout/Sidebar";

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <header className="App-header">
            Employee Table using TypeScript & React
          </header>
          <Row>
            <Col md={2}>
              <Sidebar />
            </Col>
            <Col md={10}>
              <div className="main-section">
                <Route exact path="/" component={Table} />
                <Route exact path="/album" component={Album} />
                <Route exact path="/videos" component={VideoGallary} />
              </div>
            </Col>
          </Row>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
