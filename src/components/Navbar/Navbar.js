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
    const { auth } = this.props;

    return (
      <>
        <Menu borderless inverted attached="bottom" size="massive">
          <Menu.Item
            as={Link}
            to={auth ? "/dashboard" : "/"}
            name="landing"
            content="Home"
            onClick={this.handleHideClick}
          />
          {auth && (
            <Menu.Menu position="right">
              <Menu.Item style={{ padding: "0px" }}>
                <Image src="/img/avatar-placeholder.png" avatar />
              </Menu.Item>
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
