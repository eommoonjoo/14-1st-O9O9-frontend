import React, { Component } from 'react';
import { HiSearch } from 'react-icons/hi';
import { FiShoppingCart } from 'react-icons/fi';
import { RiHeart3Line } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../../styles/reset.scss';
import './NavTop.scss';

class NavTop extends Component {
  constructor() {
    super();
    this.state = { activateMyPage: true };
  }

  toggleMyPageMenu = () => {
    this.setState({ activateMyPage: true });
  };

  outMypage = () => {
    this.setState({ activateMyPage: false });
  };

  // }
  render() {
    return (
      <nav className='NavTop'>
        <div className='navTopContainer'>
          <div className='searchBar'>
            <form className='searchForm'>
              <input
                type='text'
                placeholder='전상품 무료배송, 반품비 월 1만원 지원'
                autoComplete='off'
              />
              <button>
                <HiSearch />
              </button>
            </form>
          </div>
          <div className='navTopIcons'>
            <ul>
              <li>
                <FiShoppingCart />
              </li>
              <li>
                <RiHeart3Line />
              </li>
              <li
                onMouseLeave={this.toggleMyPageMenu}
                onMouseEnter={this.outMypage}>
                <FiUser />
              </li>
            </ul>
          </div>
          {!this.state.activateMyPage ? (
            <div
              className='wrapMyPage'
              onMouseLeave={this.toggleMyPageMenu}
              onMouseEnter={this.outMypage}>
              <div className='myPageMenu'>
                <ul>
                  <li>
                    <Link rel='stylesheet' href='#'>
                      <span>로그인</span>
                    </Link>
                  </li>
                  <li>
                    <Link rel='stylesheet' href='#'>
                      <span>회원가입</span>
                    </Link>
                  </li>
                  <li>
                    <Link rel='stylesheet' href='#'>
                      <span>주문배송조회</span>
                    </Link>
                  </li>
                  <li>
                    <Link rel='stylesheet' href='#'>
                      <span>찜한상품</span>
                    </Link>
                  </li>
                  <li>
                    <Link rel='stylesheet' href='#'>
                      <span>찜한브랜드</span>
                    </Link>
                  </li>
                  <li>
                    <Link rel='stylesheet' href='#'>
                      <span>최근본상품</span>
                    </Link>
                  </li>
                  <li>
                    <Link rel='stylesheet' href='#'>
                      <span>나의정보</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    );
  }
}

export default NavTop;
