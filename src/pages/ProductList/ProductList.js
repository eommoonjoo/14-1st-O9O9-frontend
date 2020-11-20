import React, { Component } from 'react';
import axios from 'axios';
import NavSide from '../../components/NavSide/NavSide';
import ListContainer from './components/ListContainer/ListContainer';
import {CATEGORIES_API} from '../../config';
import './ProductList.scss';

class ProductList extends Component {
  constructor(){
    super();
    this.state = {
      categories : [],
    }
  }

  componentDidMount(){
    this.getCategories();
  }

  getCategories = async () => {
    const categories = await axios.get('http://localhost:3000/data/categorydata.json');
    this.setState({categories : categories.data.categories});

    // const categories = await axios.get(CATEGORIES_API);
    // this.setState({categories : categories.data.post});
  }

  getCurrentCategory = (categoryId) => {
    const {categories} = this.state;
    return categories[categories.findIndex((category) => category.id === categoryId)]
  }
  
  render() {
    const currentCategoryId = parseInt(this.props.location.search.split('=')[1]);
    const currentCategory = this.getCurrentCategory(currentCategoryId);
    return (
      <div className="ProductList">
        <NavSide currentCategoryId={currentCategoryId}/>
        <div className="categoryBanner">
          <p className="categoryTitle">{currentCategory && currentCategory.name}</p>
          <p className="categoryContext">O9O9의 맛있는 큐레이션</p>
        </div>
        <ListContainer categoryId={currentCategoryId}/>
      </div>
    );
  }
}

export default ProductList;