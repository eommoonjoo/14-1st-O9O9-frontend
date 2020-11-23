import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/Cart/Cart';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={props => <Main {...props}/>} />
          <Route exact path='/Login' component={props => <Login {...props} />} />
          <Route exact path='/SignUp' component={props => <SignUp {...props} />} />
          <Route exact path='/Cart' component={props => <Cart {...props} />} />
        </Switch>
      </Router>
    )
  }
}
export default Routes;
