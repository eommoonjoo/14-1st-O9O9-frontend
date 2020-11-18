import React, { Component } from 'react';
import Detail from './Detail';
import Review from './Review';
import QnA from './QnA';
import RefundInfo from './RefundInfo';
import { Link } from 'react-router-dom';
import './ProductInfoTab.scss';

class ProductInfoTab extends Component {
  clickHandler = (id) => {
    console.log(id);
  };
  render() {
    return (
      <div className='ProductInfoTab'>
        <ul className='productInfoTabContainer'>
          <li onClick={() => this.clickHandler(0)}>Detail</li>
          <li onClick={() => this.clickHandler(1)}>Review</li>
          <li onClick={() => this.clickHandler(2)}>QnA</li>
          <li onClick={() => this.clickHandler(3)}>RefundInfo</li>
        </ul>
      </div>
    );
  }
}

export default ProductInfoTab;
