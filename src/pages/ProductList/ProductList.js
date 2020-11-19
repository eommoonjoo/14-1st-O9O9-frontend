import React, { Component } from 'react';
import NavSide from '../../components/NavSide/NavSide';
import ListContainer from './components/ListContainer/ListContainer';
import './ProductList.scss';

class ProductList extends Component {
  render() {
    const currentCategoryId = this.props.location.search.split('=')[1];
    return (
      <div className="ProductList">
        <NavSide currentCategoryId={currentCategoryId}/>
        <div className="categoryBanner"></div>
        <ListContainer />
      </div>
    );
  }
}

export default ProductList;