import React, { Component } from 'react';
import NavSide from '../../components/NavSide/NavSide';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <NavSide />
      </div>
    );
  }
}

export default Main;