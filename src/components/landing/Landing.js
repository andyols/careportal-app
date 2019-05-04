import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <Button.Group size="massive" vertical>
        <Button as={Link} to="/signup" color="orange" content="Sign Up" />
        <Button as={Link} to="/login" content="Login" />
      </Button.Group>
    </div>
  );
};

export default Landing;
