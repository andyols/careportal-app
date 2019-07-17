import React from 'react'
import { Button, Divider } from 'semantic-ui-react'
import BackToNewContribution from '../BackToNewContribution'

const Monetary = () => {
  return (
    <>
      <BackToNewContribution />
      <Button
        content="Credit Card"
        color="orange"
        icon="credit card outline"
        className="spaced"
        labelPosition="left"
        size="huge"
        fluid
      />
      <Button
        content="Check"
        color="orange"
        icon="edit"
        className="spaced"
        labelPosition="left"
        size="huge"
        fluid
      />
      <Divider horizontal>OR</Divider>
      <Button
        content="PayPal"
        color="orange"
        icon="paypal"
        className="spaced"
        labelPosition="left"
        size="huge"
        fluid
      />
      <Button
        content="Google Pay"
        color="orange"
        icon="google"
        className="spaced"
        labelPosition="left"
        size="huge"
        fluid
      />
      <Button
        content="Apple Pay"
        color="orange"
        icon="apple"
        className="spaced"
        labelPosition="left"
        size="huge"
        fluid
      />
    </>
  )
}

export default Monetary
