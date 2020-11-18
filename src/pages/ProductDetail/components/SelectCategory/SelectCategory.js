import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

import './SelectCategory.scss';
class SelectCategory extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='SelectCategory'>
        <div className='selectCategoryContainer'>
          <div className='homeButton'>
            <button>HOME</button>
          </div>
          {/* 백앤드데이터 연결 */}
          <select name='' id=''>
            <option value='1'>해외직구</option>
          </select>
          <span>
            <IoIosArrowForward />
          </span>
          <select name='' id=''>
            <option value='1'>해외직구</option>
          </select>
          <span>
            <IoIosArrowForward />
          </span>
          <select name='' id=''>
            <option value='1'>해외직구</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SelectCategory;
