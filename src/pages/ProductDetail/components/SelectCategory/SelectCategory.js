import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORY_MOCK_DATA_API } from '../../../../config';
import { IoIosArrowForward } from 'react-icons/io';
import './SelectCategory.scss';

const mainCategory = {
  1: '신선지구',
  2: '신선지구',
  3: '+_+',
  4: '+_+',
  5: '+_+',
  6: '+_+',
};
const subCategory = {
  1: '싱싱과일',
  2: '청정수산',
};
class SelectCategory extends Component {
  constructor() {
    super();
    this.state = { categories: {} };
  }

  render() {
    const { productInfo } = this.props;

    return (
      <div className='SelectCategory'>
        <div className='selectCategoryContainer'>
          <div className='homeButton'>
            <button>HOME</button>
          </div>
          <select name='' id=''>
            <option value='1'>
              {mainCategory[productInfo.maincategoryId]}
            </option>
          </select>
          <span>
            <IoIosArrowForward />
          </span>
          <select name='' id=''>
            <option value='1'>{subCategory[productInfo.subcategoryId]}</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SelectCategory;
