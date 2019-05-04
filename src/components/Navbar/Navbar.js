import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Sidebar,
  Segment,
  Button,
  Image,
  Header
} from "semantic-ui-react";

export default class Navbar extends Component {
  state = { visible: false };

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;

    return (
      <>
        <Button.Group>
          <Button
            disabled={visible}
            onClick={this.handleShowClick}
            icon="bars"
            labelPosition="right"
          />
        </Button.Group>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item as={Button} icon="times" />
          <Menu.Item
            as={Link}
            to="/"
            name="landing"
            content="Landing"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/dashboard"
            name="dashboard"
            content="Dashboard"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/login"
            name="login"
            content="Login"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/signup"
            name="signup"
            content="Signup"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/contributions"
            name="contributions"
            content="Contributions"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/profile"
            name="profile"
            content="Profile"
            onClick={this.handleItemClick}
          />
        </Sidebar>
      </>
    );
  }
}
