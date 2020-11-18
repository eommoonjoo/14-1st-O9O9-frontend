import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NavSide.scss'

const MAINCATEGORIES = ['핫딜', '랭킹', '더-나은', '직구연말결산', '맛지구','집콕!장보기','백화점','뷰티샵','홈앤펫','명품관','뭐하지?']; // 고정 카테고리

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
    this.setState({categories: ['해외직구', '맛있는지구', '식품', '뷰티', '백화점 몰', '홈스타일링', '주방 생필품', '가구 리빙 반려', '가전', '컴퓨터 디지털', '패션의류', '신발 가방 주얼리', '건강 자동차공구', '출산 유아동', '레저 아웃도어']});
  }

  toggleCategory = () => {
    this.setState({isCategoryToggled : !this.state.isCategoryToggled})
  }

  render() {
    const {isCategoryToggled, categories} = this.state;
    return (
      <aside className="NavSide">
        <div className="categories">
          <div className="logoContainer">
            <img src="./images/logo.png" alt="O9O9 logo"/>
          </div>
          <div className="categoryTop">
            <div className={`categoryItem ${isCategoryToggled ? "selected" : ""}`} onClick={this.toggleCategory}>
              <span>카테고리</span>
              <span className="arrowIcon">▶</span>
            </div>
          </div>
          <div className="categoryBottom">
            {MAINCATEGORIES.map((item, idx) => (
              <div key={idx} className="categoryItem">
                <Link to=""><span>{item}</span></Link>
              </div>
            ))}
          </div>
        </div>
        <div className={`categorySide ${isCategoryToggled ? 'toggled': ''}`}>
          {categories.map((item, idx) => 
            (<div key={idx} className="categoryItem">
              <Link to=""><span>{item}</span></Link>
            </div>))}
        </div>
      </aside>
    );
  }
}

export default NavSide; 