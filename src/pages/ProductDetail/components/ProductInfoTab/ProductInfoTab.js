import React, { Component } from 'react';
import Detail from './Detail/Detail';
import Review from './Review/Review';
import QnA from './QnA/QnA';
import RefundInfo from './RefundInfo/RefundInfo';
import { Link } from 'react-router-dom';
import './ProductInfoTab.scss';

// const obj = {
//   0: <Detail />,
//   1: <Review />,
//   2: <QnA />,
//   3: <RefundInfo />,
// };

class ProductInfoTab extends Component {
  state = {
    activeId: 0,
  };

  clickHandler = (id) => {
    this.setState({ activeId: id });
  };

  render() {
    const { productInfo, qnadata } = this.props;
    const { activeId } = this.state;
    let component;

    if (activeId == 0) {
      component = <Detail />;
    }
    if (activeId == 1) {
      component = <Review />;
    }
    if (activeId == 2) {
      component = (
        <QnA modalHandler={this.props.modalHandler} productInfo={productInfo} />
      );
    }
    if (activeId == 3) {
      component = <RefundInfo />;
    }
    console.log(this.props.modalHandler);

    return (
      <div className='ProductInfoTab'>
        <ul className='productInfoTabContainer'>
          <li
            className={activeId === 0 ? 'selected' : ''}
            onClick={() => this.clickHandler(0)}>
            상세정보
          </li>
          <li
            className={activeId === 1 ? 'selected' : ''}
            onClick={() => this.clickHandler(1)}>
            리뷰
          </li>
          <li
            className={activeId === 2 ? 'selected' : ''}
            onClick={() => this.clickHandler(2)}>
            문의
          </li>
          <li
            className={activeId === 3 ? 'selected' : ''}
            onClick={() => this.clickHandler(3)}>
            구매/반품/교환
          </li>
        </ul>
        <div className='contents'>{component}</div>
      </div>
    );
  }
}

export default ProductInfoTab;
