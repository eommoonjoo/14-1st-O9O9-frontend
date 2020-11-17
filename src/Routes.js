import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavTop from './components/NavTop/NavTop';
import Footer from './components/Footer/Footer';
// import './styles/reset.scss';
import './styles/common.scss';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={NavTop} />
          {/* <Route exact path='/' component={Footer} /> */}
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
