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
            <option value='1'>맛있는지구</option>
          </select>
          <span>
            <IoIosArrowForward />
          </span>
          <select name='' id=''>
            <option value='1'>신선지구</option>
          </select>
          <span>
            <IoIosArrowForward />
          </span>
          <select name='' id=''>
            <option value='1' className='lastLabel'>
              싱싱과일
            </option>
          </select>
        </div>
      </div>
    );
  }
}

export default SelectCategory;
