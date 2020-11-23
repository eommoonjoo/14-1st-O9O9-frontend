import React, { Component } from 'react';
import NavSide from '../../components/NavSide/NavSide';
import NavTop from '../../components/NavTop/NavTop';
import Footer from '../../components/Footer/Footer';
import SelectCategory from './components/SelectCategory/SelectCategory';
import ProductView from './components/ProductView/ProductView';
import ProductPayment from './components/ProductPayment/ProductPayment';
import ProductInfoTab from './components/ProductInfoTab/ProductInfoTab';
import Modal from './components/ProductInfoTab/QnA/Modal';
import { PRODUCTVIEW_MOCK_DATA_API } from '../../config';
import { Link } from 'react-router-dom';

import './ProductDetail.scss';

// 성보님 api(상품정보, 가격, 리뷰 정보, 구매/반품/교환 정보)는 제일 상위 컴포넌트인 요기서.

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = { openModal: false, productInfo: {} };
  }

  modalHandler = () => {
    this.setState({ openModal: true });
  };

  closeModal = () => {
    this.setState({ openModal: false });
  };

  // componentDidMount() {
  //   fetch(PRODUCTVIEW_MOCK_DATA_API)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         productInfo: res,
  //       });
  //     });

  // }

  componentDidMount() {
    fetch('http://10.58.3.60:8000/Display/VIP/Index/2', {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productInfo: res.product[0],
        });
        // this.setState({ productInfo: res.product[0] });
      });
  }

  handleMinus = (e) => {
    const { productInfo } = this.state;
    // const productInfo = [...this.state.productInfo];
    // let idx = productInfo.indexOf(e);
    if (productInfo.productview.count > 1) {
      productInfo.productview.count--;
      this.setState({ productInfo });
    }
  };

  handlePlus = (e) => {
    const { productInfo } = this.state;
    // const cartItem = [...this.state.cartItem];
    // let idx = cartItem.indexOf(e);
    if (productInfo.productview.count < 10) {
      productInfo.productview.count++;
      this.setState({ productInfo });
    } else {
      alert('최대 주문 수량은 10개 입니다.');
    }
  };

  handleHeartClick = () => {
    const { productInfo } = this.state;
    if (productInfo.productview.heart) {
      productInfo.productview.likesCount--;
    } else {
      productInfo.productview.likesCount++;
    }
    productInfo.productview.heart = !productInfo.productview.heart;
    this.setState({ productInfo });
  };

  render() {
    const { productInfo } = this.state;
    console.log(productInfo);
    return (
      <>
        <NavSide />
        <NavTop />
        <div className='ProductDetail'>
          <SelectCategory />
          <div className='productSide'>
            <ProductView
              productInfo={productInfo}
              handleHeartClick={this.handleHeartClick}
            />
            <ProductPayment
              productInfo={productInfo}
              handleMinus={this.handleMinus}
              handlePlus={this.handlePlus}
            />
          </div>
          <ProductInfoTab
            modalHandler={this.modalHandler}
            productInfo={productInfo}
          />
        </div>
        {this.state.openModal && (
          // props이름과 mockdata 객체의 배열 key값 이름 혼동하지 않기.
          <Modal onClose={this.closeModal} productInfo={productInfo} />
        )}
        <Footer />
      </>
    );
  }
}

export default ProductDetail;
