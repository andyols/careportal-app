import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleContentProp extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          as={Link}
          to="/"
          name="landing"
          active={activeItem === 'landing'}
          content="Landing"
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/dashboard"
          name="dashboard"
          active={activeItem === 'dashboard'}
          content="Dashboard"
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/login"
          name="login"
          active={activeItem === 'login'}
          content="Login"
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/signup"
          name="signup"
          active={activeItem === 'signup'}
          content="Signup"
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/contributions"
          name="contributions"
          active={activeItem === 'contributions'}
          content="Contributions"
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/profile"
          name="profile"
          active={activeItem === 'profile'}
          content="Profile"
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
