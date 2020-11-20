import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/Cart/Cart';
import Main from './pages/Main/Main';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path = '/Login' component={Login} />
          <Route exact path = '/SignUp' component={SignUp} />
          <Route exact path = '/Cart' component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
