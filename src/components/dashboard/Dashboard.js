import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import AdminDash from "./AdminDash";
import UserDash from "./UserDash";

class Dashboard extends Component {
  state = {
    isAdmin: false
  };
  render() {
    if (this.state.isAdmin) {
      return (
        <div>
          <Header as={"h2"}>
            MyCarePortal
            <Header.Subheader>Welcome, User Name</Header.Subheader>
          </Header>

          <AdminDash />
        </div>
      );
    } else {
      return (
        <div>
          <Header as={"h2"}>
            MyCarePortal
            <Header.Subheader>Welcome, User Name</Header.Subheader>
          </Header>

          <UserDash />
        </div>
      );
    }
  }
}

export default Dashboard;
