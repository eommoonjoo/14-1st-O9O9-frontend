import React, { Component } from 'react';
import NavSide from '../../components/NavSide/NavSide';
import NavTop from '../../components/NavTop/NavTop';
import Footer from '../../components/Footer/Footer';
import ProductDetail from '../ProductDetail/ProductDetail';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className='Main'>
        <NavSide />
        <NavTop />
        <ProductDetail />
        <Footer />
      </div>
    );
  }
}

export default Main;
