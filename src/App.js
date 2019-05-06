import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Sidebar } from 'semantic-ui-react'
import PrivateRoute from './components/PrivateRoute'
import Landing from './components/landing/Landing'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Dashboard from './components/dashboard/Dashboard'
import ContributionList from './components/contributions/ContributionList'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import NewContribution from './components/contributions/NewContribution'
import Monetary from './components/contributions/Monetary'
import Picture from './components/contributions/Picture'

class App extends Component {
  state = { auth: true }

  render() {
    // Simulates if a user is logged in or not for conditional rendering within Navbar component
    const { auth } = this.state
    return (
      <Router>
        <Navbar auth={auth} />
        <Route exact path="/" component={Landing} />
        <Sidebar.Pushable className="App">
          <Sidebar.Pusher>
            <Container>
              {/* Public Routes */}
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <PrivateRoute
                exact
                path="/dashboard"
                component={Dashboard}
                auth={auth}
              />

              {/* Private Routes */}
              <PrivateRoute
                exact
                path="/contributions"
                component={ContributionList}
                auth={auth}
              />
              <PrivateRoute
                exact
                path="/contributions/new"
                component={NewContribution}
                auth={auth}
              />
              <PrivateRoute
                exact
                path="/contributions/monetary"
                component={Monetary}
                auth={auth}
              />
              <PrivateRoute
                exact
                path="/contributions/picture"
                component={Picture}
                auth={auth}
              />
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Footer />
      </Router>
    )
  }
}

export default App
