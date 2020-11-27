import React, { Component } from 'react';
import axios from 'axios';
import { PRODUCT_DETAIL_API, CARTLIST_API } from '../../config';
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
      cartList: [],
      likes: false,
    };
  }

  handleCartAddClick = async () => {
    const cartdata = await axios({
      url: CARTLIST_API,
      headers: { authorization: localStorage.getItem('token') },
    });
    this.setState({ cartList: cartdata.data.product });
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
    const { productInfo, likes } = this.state;
    if (likes) productInfo.watch_list--;
    else productInfo.watch_list++;
    this.setState({ productInfo, likes: !likes });
  };

  render() {
    const {
      productInfo,
      productQuantity,
      openModal,
      cartList,
      likes,
    } = this.state;
    const {
      handleCartAddClick,
      handleHeartClick,
      handlePlusQuantity,
      handleMinusQuantity,
      modalHandler,
      closeModal,
    } = this;

    console.log(productInfo);
    return (
      <>
        <NavSide />
        <NavTop cartList={cartList} />
        <div className='ProductDetail'>
          <SelectCategory productInfo={productInfo} />
          <div className='productSide'>
            <ProductView
              productInfo={productInfo}
              handleHeartClick={handleHeartClick}
              likes={likes}
            />
            <ProductPayment
              productInfo={productInfo}
              productQuantity={productQuantity}
              handlePlusQuantity={handlePlusQuantity}
              handleMinusQuantity={handleMinusQuantity}
              handleCartAddClick={handleCartAddClick}
              productId={this.props.match.params['id']}
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
