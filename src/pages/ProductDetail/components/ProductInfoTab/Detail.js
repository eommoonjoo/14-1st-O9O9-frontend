import React, { Component } from 'react';
import './Detail.scss';

class Detail extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='Detail'>
        <div className='detailContainer'>
          <img
            src='//ai.esmplus.com/gded/o/j/20201102/15/1604299576632d614823.jpg'
            alt='1'
          />
        </div>
      </div>
    );
  }
}

export default Detail;
