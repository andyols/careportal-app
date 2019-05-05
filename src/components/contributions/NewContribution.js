import React, { Component } from "react";
import {
  Button,
  Header,
  Modal,
  Icon,
  Container,
  Divider
} from "semantic-ui-react";

class NewContribution extends Component {
  state = { modalOpen: false, value: null };

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
          <Header size="huge" content="Select a Contribution Type" />
          <Icon
            name="dollar sign"
            color="orange"
            size="huge"
            bordered
            circular
          />
          <Icon name="food" color="orange" size="huge" bordered circular />
          <Icon name="handshake" color="orange" size="huge" bordered circular />
          <Divider horizontal size>
            OR
          </Divider>
        </Container>
      </>
    );
  }
}

export default NewContribution;
