import React, { Component } from 'react';
import { PRODUCT_DETAIL_API } from '../../config';
import NavSide from '../../components/NavSide/NavSide';
import NavTop from '../../components/NavTop/NavTop';
import Footer from '../../components/Footer/Footer';
import SelectCategory from './components/SelectCategory/SelectCategory';
import ProductView from './components/ProductView/ProductView';
import ProductPayment from './components/ProductPayment/ProductPayment';
import ProductInfoTab from './components/ProductInfoTab/ProductInfoTab';
import Modal from './components/ProductInfoTab/QnA/Modal';
import { Link } from 'react-router-dom';

import './ProductDetail.scss';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      openModal: false,
      productInfo: {},
      productQuantity: 1,
      isCartUpdated: false,
    };
  }

  handleCartUpdated = () => {
    this.setState({ isCartUpdated: !this.state.isCartUpdated });
  };
  modalHandler = () => {
    this.setState({ openModal: true });
  };

  closeModal = () => {
    this.setState({ openModal: false });
  };

  componentDidMount() {
    const prodId = this.props.match.params['id'];
    fetch(`${PRODUCT_DETAIL_API}/${prodId}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          productInfo: res.product,
        });
      });
  }

  handlePlusQuantity = () => {
    const { productQuantity } = this.state;
    this.setState({ productQuantity: productQuantity + 1 });
  };
  handleMinusQuantity = () => {
    const { productQuantity } = this.state;
    if (productQuantity === 1) return;
    this.setState({ productQuantity: productQuantity - 1 });
  };
  handleHeartClick = () => {
    const { productInfo } = this.state;
    if (productInfo.productview.heart) productInfo.productview.likesCount--;
    else productInfo.productview.likesCount++;
    productInfo.productview.heart = !productInfo.productview.heart;
    this.setState({ productInfo });
  };

  render() {
    const {
      productInfo,
      productQuantity,
      openModal,
      isCartUpdated,
    } = this.state;
    const {
      handleCartUpdated,
      handleHeartClick,
      handlePlusQuantity,
      handleMinusQuantity,
      modalHandler,
      closeModal,
    } = this;

    return (
      <>
        <NavSide />
        <NavTop
          isCartUpdated={isCartUpdated}
          handleCartUpdated={handleCartUpdated}
        />
        <div className='ProductDetail'>
          <SelectCategory productInfo={productInfo} />
          <div className='productSide'>
            <ProductView
              productInfo={productInfo}
              handleHeartClick={handleHeartClick}
            />
            <ProductPayment
              productInfo={productInfo}
              productQuantity={productQuantity}
              handlePlusQuantity={handlePlusQuantity}
              handleMinusQuantity={handleMinusQuantity}
              handleCartUpdated={handleCartUpdated}
            />
          </div>
          <ProductInfoTab
            modalHandler={modalHandler}
            productInfo={productInfo}
            openModal={openModal}
          />
        </div>
        {this.state.openModal && (
          <Modal onClose={closeModal} productInfo={productInfo} />
        )}
        <Footer />
      </>
    );
  }
}

export default ProductDetail;
