import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Menu,
  Sidebar,
  Button,
  Image,
  Segment,
  Header
} from 'semantic-ui-react'

class Navbar extends Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state
    const { auth } = this.props

    return (
      <>
        <Menu borderless inverted attached="bottom" size="massive">
          <Menu.Item
            as={Link}
            to={auth ? '/dashboard' : '/'}
            name="landing"
            content="Home"
            onClick={this.handleHideClick}
          />
          {auth && (
            <Menu.Menu position="right">
              <Menu.Item style={{ padding: '0px' }}>
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
            content="My Contributions"
            onClick={this.handleHideClick}
          />

          <Menu.Item
            as={Link}
            to="/"
            name="logout"
            content="Logout"
            onClick={this.handleHideClick}
          />
          <Segment
            inverted
            style={{ position: 'absolute', bottom: '0', width: '100%' }}
          >
            <Header content="My Circle Admin" />
            <Button
              size="large"
              fluid
              basic
              inverted
              icon="user"
              content="John Doe"
              labelPosition="left"
            />
            <br />
            <Button
              size="large"
              fluid
              basic
              inverted
              icon="phone"
              content="512-867-5309"
              labelPosition="left"
            />
            <br />
            <Button
              size="large"
              fluid
              basic
              inverted
              icon="envelope"
              content="admin@mycareportal.org"
              labelPosition="left"
            />
          </Segment>
        </Sidebar>
      </>
    )
  }
}

export default Navbar
