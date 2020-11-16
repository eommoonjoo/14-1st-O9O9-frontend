import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NavSide.scss'

class NavSide extends Component {
  constructor(){
    super();
    this.state={
      isCategoryToggled: false,
    }
  }

  componentDidMount(){
    //나중에 백엔드에서 카테고리 리스트들 받아와서 CategorySide에 넘김
  }

  toggleCategory = () => {
    this.setState({isCategoryToggled : !this.state.isCategoryToggled})
  }

  render() {
    const {isCategoryToggled} = this.state;
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
            <div className="categoryItem">
              <Link><span>핫딜</span></Link>
            </div>
            <div className="categoryItem">
              <Link><span>랭킹</span></Link>
            </div>
            <div className="categoryItem">
              <Link><span>더-나은</span></Link>
            </div>
            <div className="categoryItem">
              <Link><span>직구연말결산</span></Link>
            </div>
            <div className="categoryItem">
              <Link><span>맛지구</span></Link>
            </div>
            <div className="categoryItem">
              <Link><span>집콕!장보기</span></Link>
            </div>
            <div className="categoryItem">
              <Link><span>백화점</span></Link>
            </div>
            <div className="categoryItem">
              <Link><span>뷰티샵</span></Link>
            </div>
            <div className="categoryItem">
              <Link><span>홈앤펫</span></Link>
            </div>
            <div className="categoryItem">
              <Link><span>명품관</span></Link>
            </div>
            <div className="categoryItem">
              <Link><span>뭐하지?</span></Link>
            </div>
          </div>
        </div>
        <div className={`categorySide ${isCategoryToggled ? 'toggled': ''}`}>
          <div className="categoryItem">
            <span>해외직구</span>
          </div>
          <div className="categoryItem">
            <span>맛있는지구</span>
          </div>
          <div className="categoryItem">
            <span>식품</span>
          </div>
          <div className="categoryItem">
            <span>뷰티</span>
          </div>
          <div className="categoryItem">
            <span>백화점 몰</span>
          </div>
          <div className="categoryItem">
            <span>홈스타일링</span>
          </div>
          <div className="categoryItem">
            <span>주방 생필품</span>
          </div>
          <div className="categoryItem">
            <span>가구 리빙 반려</span>
          </div>
        </div>
      </aside>
    );
  }
}

export default NavSide;