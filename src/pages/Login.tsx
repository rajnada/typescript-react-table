import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "../Component/layout/Header";
import "../css/Authentication.scss";

interface Props {}

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  console.log("history =>", history);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email === "rdn@narola.email" && password === "123456") {
      var promise = new Promise(function (resolve, reject) {
        localStorage.setItem("isAdmin", "true");
        resolve(true);
      });
      promise.then((res) => history.push("/table"));
    }
  };
  return (
    <div>
      <Header />
      <Form className="login-container" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="input-control"
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="input-control"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="btn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
