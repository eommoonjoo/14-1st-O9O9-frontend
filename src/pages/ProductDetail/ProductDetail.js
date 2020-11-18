import React, { Component } from 'react';
import NavSide from '../../components/NavSide/NavSide';
import NavTop from '../../components/NavTop/NavTop';
import Footer from '../../components/Footer/Footer';
import SelectCategory from './components/SelectCategory/SelectCategory';
import ProductView from './components/ProductView/ProductView';
import ProductPayment from './components/ProductPayment/ProductPayment';
import ProductInfoTab from './components/ProductInfoTab/ProductInfoTab';
import { Link } from 'react-router-dom';

import './ProductDetail.scss';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <NavSide />
        <div className='ProductDetail'>
          <NavTop />
          <SelectCategory />
          <div className='productSide'>
            <ProductView />
            <ProductPayment />
          </div>
          <ProductInfoTab />
          <Footer />
        </div>
      </>
    );
  }
}

export default ProductDetail;
