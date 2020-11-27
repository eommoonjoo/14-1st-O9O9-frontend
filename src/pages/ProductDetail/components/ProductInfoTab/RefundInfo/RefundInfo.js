import React, { Component } from 'react';
import './RefundInfo.scss';

class RefundInfo extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { productInfo } = this.props;
    return (
      <div className='RefundInfo'>
        <div className='questionModal'>
          <div className='modalContainer'>
            <h1>배송/반품/교환 문의정보</h1>
            <div className='modalTemplate'>
              <div className='subtitle'>반품배송비</div>
              <div className='radioGroup'>
                {productInfo.exchange &&
                  productInfo.exchange.return_shipping_fee}
              </div>
              <div className='subtitle'>보내실곳</div>
              <div>
                {productInfo.exchange && productInfo.exchange.where_to_send}
              </div>
              <div className='subtitle lastrow'>거래조건에 대한 정보</div>
              <div>
                {productInfo.exchange &&
                  productInfo.exchange.detail_information}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RefundInfo;
