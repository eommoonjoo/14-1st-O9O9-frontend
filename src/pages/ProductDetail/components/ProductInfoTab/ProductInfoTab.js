import React, { Component } from 'react';
import Detail from './Detail';
import Review from './Review';
import QnA from './QnA';
import RefundInfo from './RefundInfo';
import { Link } from 'react-router-dom';
import './ProductInfoTab.scss';

const obj = {
  0: <Detail />,
  1: <Review />,
  2: <QnA />,
  3: <RefundInfo />,
};

class ProductInfoTab extends Component {
  state = {
    activeId: 0,
  };

  clickHandler = (id) => {
    this.setState({ activeId: id });
  };
  render() {
    console.log(this.state);
    return (
      <div className='ProductInfoTab'>
        <ul className='productInfoTabContainer'>
          <li onClick={() => this.clickHandler(0)}>상세정보</li>
          <li onClick={() => this.clickHandler(1)}>리뷰</li>
          <li onClick={() => this.clickHandler(2)}>문의</li>
          <li onClick={() => this.clickHandler(3)}>구매/반품/교환</li>
        </ul>
        <div className='contents'>{obj[this.state.activeId]}</div>
      </div>
    );
  }
}

export default ProductInfoTab;
