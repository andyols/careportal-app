import React from "react";
import { List, Input } from "semantic-ui-react";
import BackToDashBoard from "../BackToDashboard";

const ContributionList = () => {
  return (
    <>
      <BackToDashBoard />
      <Input type="text" icon="search" iconPosition="left" fluid />
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
            <List.Description as="a">Scheduled Tue, 05/07/19</List.Description>
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
            <List.Description as="a">Scheduled Tue, 05/07/19</List.Description>
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
            <List.Description as="a">Scheduled Tue, 05/07/19</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </>
  );
};

export default ContributionList;
