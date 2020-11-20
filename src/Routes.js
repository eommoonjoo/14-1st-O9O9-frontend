import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/list" component={ProductList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
