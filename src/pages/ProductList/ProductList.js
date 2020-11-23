import React, { Component } from 'react';
import axios from 'axios';
import NavSide from '../../components/NavSide/NavSide';
import ListContainer from './components/ListContainer/ListContainer';
import NavTop from '../../components/NavTop/NavTop';
import Footer from '../../components/Footer/Footer';
import {CATEGORY_MOCK_DATA_API, CATEGORIES_API} from '../../config';
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
    // const categories = await axios.get(CATEGORY_MOCK_DATA_API);
    // this.setState({categories : categories.data.categories});

    const categories = await axios.get(CATEGORIES_API);
    // console.log(categories);
    this.setState({categories : categories.data.category});
  }

  getCurrentCategory = (categoryId) => {
    const {categories} = this.state;
    return categories[categories.findIndex((category) => category.id === categoryId)]
  }
  
  render() {
    const categoryId = parseInt(this.props.location.search.split('=')[1]);
    const currentCategory = this.getCurrentCategory(categoryId);
    return (
      <>
        <div className="ProductList">
          <NavSide categoryId={categoryId}/>
          <NavTop />
          <div className="categoryBanner">
            <p className="categoryTitle">{currentCategory && currentCategory.name}</p>
            <p className="categoryContext">O9O9의 맛있는 큐레이션</p>
          </div>
          <ListContainer categoryId={categoryId}/>
        </div>
        <Footer />
      </> 
    );
  }
}

export default ProductList;