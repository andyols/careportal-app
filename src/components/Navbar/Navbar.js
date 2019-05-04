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
    const userLoggedIn = false;

    return (
      <>
        <Menu borderless inverted size="massive">
          <Menu.Item
            as={Link}
            to="/"
            name="landing"
            content="Home"
            onClick={this.handleHideClick}
          />
          {userLoggedIn && (
            <Menu.Menu position="right">
              <Menu.Item
                as={Button}
                disabled={visible}
                onClick={this.handleShowClick}
                icon="bars"
                size="massive"
              />
            </Menu.Menu>
          )}
        </Menu>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          direction="right"
          visible={visible}
          fluid
          size="massive"
        >
          <Menu.Item
            as={Link}
            to="/dashboard"
            name="dashboard"
            content="Dashboard"
            onClick={this.handleHideClick}
          />

          <Menu.Item
            as={Link}
            to="/contributions"
            name="contributions"
            content="Contributions"
            onClick={this.handleHideClick}
          />
          <Menu.Item
            as={Link}
            to="/profile"
            name="profile"
            content="Profile"
            onClick={this.handleHideClick}
          />
        </Sidebar>
      </>
    );
  }
}
