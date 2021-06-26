import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'

import Home from './Components/Home/home'
import SidePanel from './Components/SidePanel/sidePanel'
import Profile from './Components/Profile/profile'
import Signin from './Components/Signin/signin'
import Signup from './Components/Signup/signup'

class App extends React.Component {

  showToast = (type, message) => {
    switch (type) {
      case 0: toast.warning(message)
        break
      case 1: toast.success(message)
        break
      default:
        break
    }
  }

  render() {
    return (
      <Router>
        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          position={toast.POSITION.TOP_CENTER}
        >
        </ToastContainer>
        <Switch>
          <Route
            exact
            path='/'
            render={props => <Home {...props} />}
          />

          <Route
            path='/Signin'
            render={props => <Signin showToast={this.showToast} {...props} />}
          />

          <Route
            path='/Signup'
            render={props => <Signup showToast={this.showToast} {...props} />}
          />

          <Route
            path='/Profile'
            render={props => <Profile showToast={this.showToast} {...props} />}
          />

          <Route
            path='/chat'
            render={props => <SidePanel showToast={this.showToast} {...props} />}
          />
        </Switch>
      </Router>
    )
  }
}

export default App;
