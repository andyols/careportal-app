import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Modal, Button, Header, Segment, Form, Icon } from 'semantic-ui-react'
import BackToNewContribution from '../BackToNewContribution'

const categories = [
  {
    key: '0',
    text: 'Furniture',
    value: 'furniture'
  },
  {
    key: '1',
    text: 'Food',
    value: 'food'
  },
  {
    key: '2',
    text: 'Toys',
    value: 'toys'
  },
  {
    key: '3',
    text: 'Clothing',
    value: 'clothing'
  },
  {
    key: '4',
    text: 'Misc',
    value: 'misc'
  },
  {
    key: '5',
    text: 'Supplies',
    value: 'supplies'
  }
]

class Picture extends Component {
  state = { modalOpen: false, description: '' }

  handleModalToggle = () => this.setState({ modalOpen: !this.state.modalOpen })
  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <>
        <BackToNewContribution />
        <Modal open={this.state.modalOpen} basic size="small">
          <Header
            icon="check circle outline"
            color="green"
            content="Thank You!"
          />
          <Modal.Content>
            <p>
              Your image has been uploaded successfully. Your Circle Manager
              will be in contact with you shortly!
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              as={Link}
              to="/dashboard"
              onClick={this.handleModalToggle}
              color="green"
              inverted
              content="Back To Dashboard"
              icon="left arrow"
            />
          </Modal.Actions>
        </Modal>
        <Segment placeholder>
          <Header icon>
            <Icon name="camera" />
          </Header>
        </Segment>
        <Form>
          <Form.Dropdown
            placeholder="Category"
            fluid
            selection
            options={categories}
          />
          <Form.Input
            name="description"
            type="textarea"
            placeholder="A brief description..."
            value={this.state.value}
            onChange={this.handleChange}
          />
          <Form.Button
            onClick={this.handleModalToggle}
            content="Upload"
            fluid
            color="orange"
            size="huge"
            icon="upload"
            labelPosition="left"
          />
        </Form>
      </>
    )
  }
}

export default Picture
