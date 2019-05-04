import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Form size="massive">
        <Form.Input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Form.Input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
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
        <Form.Input
          name="password2"
          type="password"
          placeholder="Confirm Password"
          value={this.state.password2}
          onChange={this.handleChange}
        />
        <Button size="massive" fluid color="orange" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Signup;
