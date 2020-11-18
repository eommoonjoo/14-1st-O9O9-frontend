import React, { Component } from 'react';
import { RiHeart2Line } from 'react-icons/ri';
import { RiHeart2Fill } from 'react-icons/ri';
import { FiClock } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './ProductView.scss';

class ProductView extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='ProductView'>
        <div className='productViewContainer'>
          <div className='freeShippingBanner'>
            <img src='./images/freeDelivery.png' alt='freeDelivery' />
          </div>
          <div className='productGroup'>
            <div className='productImage'>
              <img
                src='//image.g9.co.kr/g/1741839107/n?ts=1584088860000'
                alt='surface'
              />
            </div>
            <div className='productInfo'>
              <div className='productIntro'>
                <div className='pickButton'>
                  <p className='likes'>
                    <RiHeart2Line />
                  </p>
                </div>
                <p>마이크로소프트</p>
                <h3>서피스 프로7 i5/8GB/128GB 플래티넘</h3>
                <div className='couponSide'>
                  <img src='./images/쿠폰.png' alt='coupon' />
                </div>
              </div>
              <div className='ProductdueDate'>
                <p>
                  <FiClock />
                  &nbsp; 남은시간 <span>12</span>일 06:48:50
                </p>
                <p>
                  <FiShoppingCart />
                  &nbsp; 231개 구매 (99,768개 구매 가능)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductView;
