import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Sidebar } from "semantic-ui-react";
import PrivateRoute from "./components/PrivateRoute";
import Landing from "./components/landing/Landing";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import Contributions from "./components/contributions/Contributions";
import Profile from "./components/profile/Profile";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
class App extends Component {
  state = { auth: true };
  render() {
    const { auth } = this.state;
    return (
      <Router>
        <Navbar auth={auth} />
        <Sidebar.Pushable className="App">
          <Sidebar.Pusher>
            <Container>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <PrivateRoute
                exact
                path="/dashboard"
                component={Dashboard}
                auth={auth}
              />
              <PrivateRoute
                exact
                path="/contributions"
                component={Contributions}
                auth={auth}
              />
              <PrivateRoute
                exact
                path="/profile"
                component={Profile}
                auth={auth}
              />
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Footer />
      </Router>
    );
  }
}

export default App;
