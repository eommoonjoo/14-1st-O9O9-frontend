import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORY_MOCK_DATA_API } from '../../../../config';
import { IoIosArrowForward } from 'react-icons/io';
import './SelectCategory.scss';

const mainCategory = {
  1: '해외직구',
  2: '맛있는지구',
  3: '식품',
  4: '뷰티',
  5: '백화점・몰',
  6: '홈스타일링',
  7: '주방・생필품',
  8: '가구・리빙・반려',
  9: '가전',
  10: '컴퓨터・디지털',
  11: '패션의류',
  12: '신발・가방・주얼리',
  13: '건강・자동차공구',
  14: '출산・유아동',
  15: '레저・아웃도어',
  16: '취미・문구・도서',
};
const subCategory = {
  1: '신선지구',
  2: '요리지구',
  3: '달콤지구',
  4: '살빠지구',
  5: '워터지구',
  6: '건강지구',
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
              {mainCategory[productInfo.maincategory_id]}
            </option>
          </select>
          <span>
            <IoIosArrowForward />
          </span>
          <select name='' id=''>
            <option value='1'>{subCategory[productInfo.subcategory_id]}</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SelectCategory;
