import React, { Component } from 'react';
import { HiSearch } from 'react-icons/hi';
import { FiShoppingCart } from 'react-icons/fi';
import { RiHeart3Line } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {MYPAGE_MENUS} from '../navData';
import './NavTop.scss';

class NavTop extends Component {
  constructor() {
    super();
    this.state = {
      activateMyPage: true, 
      isLogined: false ,
      userInfo: {}
    };
  }

  componentDidMount() {
    if(localStorage.getItem('token')){
      
      this.setState({ isLogined : true });
    }
    else this.setState({ isLogined : false });
  }


  getUserInformation = async () => {
    
  }

  toggleMyPageMenu = () => {
    this.setState({ activateMyPage: true });
  };

  outMypage = () => {
    this.setState({ activateMyPage: false });
  };

  render() {
    const { activateMyPage, isLogined } = this.state;

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
                <span className={`loginStatus ${isLogined ? 'logined' : 'notLogined'}`}>{isLogined ? 'ON' : 'OFF'}</span>
              </li>
            </ul>
          </div>
        </div>
        {!activateMyPage && (
            <div
              className='wrapMyPage'
              onMouseLeave={this.toggleMyPageMenu}
              onMouseEnter={this.outMypage}>
              <div className='myPageMenu'>
                <ul>
                  <li><Link to="/Login"><span>로그인</span></Link></li>
                  <li><Link to="/SignUp"><span>회원가입</span></Link></li>
                  {MYPAGE_MENUS.map((el, idx) => (
                    <li key={idx}>
                      <Link to="">
                        <span>{el.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
      </nav>
    );
  }
}

export default NavTop;
