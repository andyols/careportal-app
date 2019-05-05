import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Header, Modal, Container, Divider } from "semantic-ui-react";
import BackToDashboard from "../BackToDashboard";
import "./Contributions.css";

class NewContribution extends Component {
  state = { modalOpen: true, value: null };

  handleModalToggle = () => this.setState({ modalOpen: !this.state.modalOpen });
  handleChange = e => {
    console.log(e.target.children);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <Modal open={this.state.modalOpen} basic size="small">
          <Header icon="exclamation triangle" content="A Quick Disclaimer..." />
          <Modal.Content>
            <p>
              Thank you so much for your generosity! Please be advised that your
              Circle Manager will be contacting you to arrange the logistics of
              this contribution.
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              onClick={this.handleModalToggle}
              color="green"
              inverted
              content="Ok"
              icon="checkmark"
            />
          </Modal.Actions>
        </Modal>
        <Container textAlign="center">
        <BackToDashboard />
          <Header size="huge" content="Select a Contribution Type" />
          <Button
            as={Link}
            to="/contributions/monetary"
            content="Monetary"
            color="orange"
            className="spaced"
            icon="dollar sign"
            labelPosition="left"
            fluid
            size="huge"
          />
          <Button
            content="Goods"
            color="orange"
            className="spaced"
            icon="shopping bag"
            labelPosition="left"
            size="huge"
            fluid
          />
          <Button
            content="Volunteer"
            color="orange"
            icon="handshake"
            className="spaced"
            labelPosition="left"
            size="huge"
            fluid
          />
          <Divider horizontal>OR</Divider>
          <Button
            as={Link}
            to="/contributions/picture"
            content="Take a Picture"
            color="orange"
            icon="camera"
            className="spaced"
            labelPosition="left"
            size="huge"
            fluid
          />
          <Button
            content="Tell us"
            color="orange"
            icon="microphone"
            className="spaced"
            labelPosition="left"
            size="huge"
            fluid
          />
        </Container>
      </>
    );
  }
}

export default NewContribution;
