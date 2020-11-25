import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORY_MOCK_DATA_API } from '../../../../config';
import { IoIosArrowForward } from 'react-icons/io';
import './SelectCategory.scss';

class SelectCategory extends Component {
  constructor() {
    super();
    this.state = { categories: {} };
  }

  componentWillUnmount() {
    fetch(CATEGORY_MOCK_DATA_API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ categories: res });
      });
  }

  render() {
    const { productInfo } = this.props;
    const { categories } = this.state;
    console.log(categories);
    return (
      <div className='SelectCategory'>
        <div className='selectCategoryContainer'>
          <div className='homeButton'>
            <button>HOME</button>
          </div>
          <select name='' id=''>
            <option value='1'>{productInfo.maincategoryId}</option>
          </select>
          <span>
            <IoIosArrowForward />
          </span>
          <select name='' id=''>
            <option value='1'>{productInfo.subcategoryId}</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SelectCategory;
