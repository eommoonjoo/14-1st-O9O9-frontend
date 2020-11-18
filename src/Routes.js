import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Main from './pages/Main/Main';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/detail' component={ProductDetail} />
          <Route exact path='/' component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
