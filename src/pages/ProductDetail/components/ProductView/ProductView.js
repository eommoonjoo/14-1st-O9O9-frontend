import React, { Component } from 'react';
import CountDown from './countDown';
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
    const { productInfo } = this.props;
    console.log(productInfo);

    return (
      <div className='ProductView'>
        <div className='productViewContainer'>
          <div className='freeShippingBanner'>
            <img src='/images/freeDelivery.png' alt='freeDelivery' />
          </div>
          <div className='productGroup'>
            <div className='productImage'>
              <img src={productInfo && productInfo.imageUrl} alt='감귤' />
            </div>
            <div className='productInfo'>
              <div className='productIntro'>
                <div
                  className='pickButton'
                  onClick={() => this.props.handleHeartClick()}>
                  <p className='likes'>
                    {/* {productInfo.productview &&
                    !productInfo.productview.heart ? (
                      <RiHeart2Line style={{ fill: 'red' }} />
                    ) : (
                      <RiHeart2Fill style={{ fill: 'red' }} />
                    )} */}
                    &nbsp;
                    <span>
                      {/* {productInfo.productview
                        ? productInfo.productview.likesCount
                        : ''} */}
                    </span>
                  </p>
                </div>
                <p>
                  <br />
                  {productInfo && productInfo.brand}
                </p>
                <h3>
                  {productInfo && productInfo.productgroup
                    ? productInfo && productInfo.productgroup
                    : productInfo && productInfo.title}
                </h3>
                <div className='couponSide'>
                  <img src='/images/쿠폰.png' alt='coupon' />
                </div>
              </div>
              <div className='ProductdueDate'>
                <p className='leftTime'>
                  <FiClock />
                  &nbsp; 남은시간 &nbsp; <span>12</span>일&nbsp;
                  <span>
                    <CountDown />
                  </span>
                </p>
                <p>
                  <FiShoppingCart />
                  &nbsp; <span>231</span>개 구매 (99,768개 구매 가능)
                </p>
              </div>
            </div>
          </div>
          <img className='banner' src='/images/carousel-Img1.jpg' alt='' />
        </div>
      </div>
    );
  }
}

export default ProductView;
