import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Header, Button, List, Container } from 'semantic-ui-react'

class Dashboard extends Component {
  state = {
    isAdmin: false
  }

  toggleAdminOn = () => this.setState({ isAdmin: true })
  toggleAdminOff = () => this.setState({ isAdmin: false })

  render() {
    const { isAdmin } = this.state
    return (
      <>
        <Header content="Welcome, John Doe" />
        {!isAdmin && (
          <Button
            as={Link}
            to="/contributions/new"
            size="large"
            fluid
            color="orange"
            content="Make New Contribution"
            icon="handshake"
            labelPosition="left"
          />
        )}
        <Header
          content={isAdmin ? 'My Circle Requests' : 'Suggested Contributions'}
        />
        <List divided relaxed size="huge">
          <List.Item>
            <List.Icon
              name="exclamation circle"
              size="large"
              verticalAlign="middle"
              color="red"
            />
            <List.Content>
              <List.Header as="a">Sofa Needed!</List.Header>
              <List.Description as="a">Requested 12 mins ago</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon
              name="exclamation circle"
              size="large"
              verticalAlign="middle"
              color="yellow"
            />
            <List.Content>
              <List.Header as="a">Bed Needed!</List.Header>
              <List.Description as="a">Requested 24 mins ago</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon
              name="exclamation circle"
              size="large"
              verticalAlign="middle"
            />
            <List.Content>
              <List.Header as="a">Plumber Services Requested!</List.Header>
              <List.Description as="a">Requested 38 mins ago</List.Description>
            </List.Content>
          </List.Item>
        </List>
        <Container fluid textAlign="center">
          <Button
            as={Link}
            to="/contributions"
            compact
            basic
            size="large"
            color="orange"
            content="See All"
          />
        </Container>
        {/* my recent contributions list: link to my contributions page */}
        <Header
          content={
            isAdmin ? 'My Circle Contributions' : 'My Recent Contributions'
          }
        />
        <List divided relaxed size="huge">
          <List.Item>
            <List.Icon
              name="check circle"
              size="large"
              verticalAlign="middle"
              color="green"
            />
            <List.Content>
              <List.Header as="a">Sofa Delivered!</List.Header>
              <List.Description as="a">Delivered 39 mins ago</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon
              name="check circle"
              size="large"
              verticalAlign="middle"
              color="yellow"
            />
            <List.Content>
              <List.Header as="a">Bed Contributed</List.Header>
              <List.Description as="a">Listed 24 mins ago</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon
              name="check circle"
              size="large"
              verticalAlign="middle"
              color="yellow"
            />
            <List.Content>
              <List.Header as="a">Plumber Services</List.Header>
              <List.Description as="a">
                Scheduled Tue, 05/07/19
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
        <Container fluid textAlign="center">
          <Button
            as={Link}
            to="/contributions"
            compact
            basic
            size="large"
            color="orange"
            content="See All"
          />

          {/* NOT INTENDED FOR PRODUCTION, this is an easy way to switch between admin and user dashboards */}
          <br />
          <br />
          <Button.Group compact basic color="orange">
            <Button content="User" onClick={this.toggleAdminOff} />
            <Button.Or text="or" />
            <Button content="Admin" onClick={this.toggleAdminOn} />
          </Button.Group>
        </Container>
      </>
    )
  }
}

export default Dashboard
