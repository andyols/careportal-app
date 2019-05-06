import React from 'react'
import { Segment } from 'semantic-ui-react'
import './Footer.css'

const Footer = () => {
  return (
    <Segment basic textAlign="center" className="footer">
      Copyright &copy; {new Date().getFullYear()} MyCarePortal
    </Segment>
  )
}

export default Footer
