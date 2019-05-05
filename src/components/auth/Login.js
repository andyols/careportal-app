import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Form size="massive">
        <Form.Input
          name="email"
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <Form.Input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <Button
          as={Link}
          to="/dashboard"
          size="massive"
          fluid
          color="orange"
          content="Login"
        />
      </Form>
    );
  }
}

export default Login;
