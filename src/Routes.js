import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavTop from './components/NavTop/NavTop';
import Footer from './components/Footer/Footer';
import './styles/common.scss';
import Main from './pages/Main/Main';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
