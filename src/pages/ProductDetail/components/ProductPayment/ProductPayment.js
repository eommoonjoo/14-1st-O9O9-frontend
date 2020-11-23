import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BsCreditCard } from 'react-icons/bs';
import { MdLocalShipping } from 'react-icons/md';
import { BiBox } from 'react-icons/bi';
import './ProductPayment.scss';

class ProductPayment extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { productInfo } = this.props;
    const { handlePlus, handleMinus } = this.props;

    // console.log(productview.length > 0 ? productview.cartItems : '+_+');
    // console.log(productview.cartItems ? productview.cartItems[0] : '+_+');

    return (
      <div className='ProductPayment'>
        <div className='productPaymentContainer'>
          <div className='priceMain'>
            <span>{productInfo && productInfo.price}</span>
            <span>10% 할인받기 ☻</span>
          </div>
          <div className='freeDelivery'>
            <span>
              <BiBox />
              &nbsp;무료배송&nbsp;
            </span>
            <p>배송비 반품비 걱정없는 O9O9 ></p>
          </div>
          <div className='payBenefit'>
            <div className='firstLine'>
              <p>
                <BsCreditCard />
                &nbsp;카드 무이자 할부 혜택
              </p>
              <small>자세히 > </small>
            </div>
            <div className='secondLine'>
              <p>
                <BsCreditCard />
                &nbsp;오구카드, 할인가능 금액 -10,000원 >
              </p>
            </div>
          </div>
          <p className='countText'>주문수량</p>
          <div className='orderQuantity'>
            <div className='handleCount'>
              <input
                type='text'
                value={productInfo.productview && productInfo.productview.count}
              />
              <div className='countButton'>
                <img
                  src='http://pics.g9.co.kr/btn/btn_num_up.gif'
                  alt='증가'
                  onClick={handlePlus}
                />
                <img
                  src='http://pics.g9.co.kr/btn/btn_num_down.gif'
                  alt='감소'
                  onClick={handleMinus}
                />
              </div>
            </div>
            <div className='priceByQuantity'>
              <p>
                {productInfo.productview &&
                  productInfo.productview.count * productInfo.productview.price}
                원
              </p>
            </div>
          </div>
          <div className='oderPrice'>
            <p>주문금액</p>
            <p>
              {productInfo.productview &&
                productInfo.productview.count * productInfo.productview.price}
              원
            </p>
          </div>
          <div className='orderButtonSide'>
            <button>장바구니</button>
            <button>바로구매</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPayment;
