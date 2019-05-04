import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Sidebar } from "semantic-ui-react";
import Landing from "./components/landing/Landing";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import Contributions from "./components/contributions/Contributions";
import Profile from "./components/profile/Profile";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar.Pushable>
        <Sidebar.Pusher>
          <Container>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/contributions" component={Contributions} />
            <Route exact path="/profile" component={Profile} />
          </Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Router>
  );
}

export default App;
