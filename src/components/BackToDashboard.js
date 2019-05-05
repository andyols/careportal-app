import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

const BackToDashboard = () => {
  return (
    <Button as={Link} to="/dashboard" content="Back To Dashboard" icon="left arrow" labelPosition="left" color="orange" basic compact fluid style={{marginBottom: '10px'}} />
  )
}

export default BackToDashboard
