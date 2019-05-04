import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

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
        <Button size="massive" fluid color="orange" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Login;
