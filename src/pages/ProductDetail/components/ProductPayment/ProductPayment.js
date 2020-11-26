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

  handleCartButtonClick = () => {
    //여기에 민영님에게 fetch하는부분 추가
    this.props.handleCartUpdated();
  };

  render() {
    const { productInfo, productQuantity } = this.props;
    const { handlePlusQuantity, handleMinusQuantity } = this.props;

    console.log(productInfo.price);
    return (
      <div className='ProductPayment'>
        <div className='productPaymentContainer'>
          <div className='priceMain'>
            <span>
              {productInfo && Number(productInfo.price).toLocaleString(2)}
            </span>
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
              <input type='text' value={this.props.productQuantity} />
              <div className='countButton'>
                <img
                  src='http://pics.g9.co.kr/btn/btn_num_up.gif'
                  alt='증가'
                  onClick={handlePlusQuantity}
                />
                <img
                  src='http://pics.g9.co.kr/btn/btn_num_down.gif'
                  alt='감소'
                  onClick={handleMinusQuantity}
                />
              </div>
            </div>
            <div className='priceByQuantity'>
              <p>{(productQuantity * productInfo.price).toLocaleString(2)}원</p>
            </div>
          </div>
          <div className='oderPrice'>
            <p>주문금액</p>
            <p>{(productQuantity * productInfo.price).toLocaleString(2)}원</p>
          </div>
          <div className='orderButtonSide'>
            <button onClick={this.handleCartButtonClick}>장바구니</button>
            <button>바로구매</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPayment;
