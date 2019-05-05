import React from "react";
import { Link } from "react-router-dom";
import { Header, Button, List, Item, Container } from "semantic-ui-react";

const AdminDash = () => {
  return (
    <div>
      <Header>My Circle Requests</Header>
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
          to="/circle/requests"
          compact
          basic
          size="large"
          color="orange"
          content="See All"
        />
      </Container>
      {/* my recent contributions list: link to my contributions page */}
      <Header>My Circle Contributions</Header>
      <List divided relaxed size="huge">
        <List.Item>
          <List.Icon
            name="check circle"
            size="large"
            verticalAlign="middle"
            color="green"
          />
          <List.Content>
            <List.Header as="a">Sofa Needed!</List.Header>
            <List.Description as="a">Requested 12 mins ago</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon
            name="check circle"
            size="large"
            verticalAlign="middle"
            color="green"
          />
          <List.Content>
            <List.Header as="a">Bed Needed!</List.Header>
            <List.Description as="a">Requested 24 mins ago</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon
            name="check circle"
            size="large"
            verticalAlign="middle"
            color="green"
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
          to="/circle/contributions"
          compact
          basic
          size="large"
          color="orange"
          content="See All"
        />
      </Container>
    </div>
  );
};

export default AdminDash;
