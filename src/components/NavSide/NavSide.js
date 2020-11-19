import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {MAINCATEGORIES} from '../navData';
import {CATEGORIES_API} from '../../config';
import './NavSide.scss'

class NavSide extends Component {
  constructor(){
    super();
    this.state={
      isCategoryToggled: false,
      categories: [],
    }
  }

  componentDidMount(){
    //나중에 백엔드에서 카테고리 리스트들 받아올것임
    this.getCategories();
  }

  getCategories = async () => {
    // const categories = await axios.get('http://localhost:3000/data/categorydata.json');
    // this.setState({categories : categories.data.categories});

    const categories = await axios.get(CATEGORIES_API);
    this.setState({categories : categories.data.post});

  }

  toggleCategory = () => {
    this.setState({isCategoryToggled : !this.state.isCategoryToggled})
  }

  render() {
    const {isCategoryToggled, categories} = this.state;
    const {currentCategoryId} = this.props;
    return (
      <aside className="NavSide">
        <div className="categories">
          <div className="logoContainer">
            <Link to="/">
              <img src="./images/logo.png" alt="O9O9 logo"/>
            </Link>
          </div>
          <div className="categoryTop">
            <div className={`categoryItem ${isCategoryToggled ? "selected" : ""}`} onClick={this.toggleCategory}>
              <span>카테고리</span>
              <span className="arrowIcon">▶</span>
            </div>
          </div>
          <div className="categoryBottom">
            {MAINCATEGORIES.map((item) => (
              <div key={item.id} className="categoryItem">
                <Link to=""><span>{item.name}</span></Link>
              </div>
            ))}
          </div>
        </div>
        <div className={`categorySide ${isCategoryToggled ? 'toggled': ''}`}>
          { categories && categories.map((item) => 
            (<div key={item.id} className="categoryItem">
              <Link to={`/list?category=${item.id}`}>
                <span className={parseInt(currentCategoryId) === item.id ? "selected" : ""}>
                  {item.name}
                </span>
              </Link>
            </div>))}
        </div>
      </aside>
    );
  }
}

export default NavSide;