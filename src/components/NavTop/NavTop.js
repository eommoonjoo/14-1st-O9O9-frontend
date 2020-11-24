import React, { Component } from 'react';
import axios from 'axios';
import { HiSearch } from 'react-icons/hi';
import { FiShoppingCart } from 'react-icons/fi';
import { RiHeart3Line } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {MYPAGE_MENUS} from '../navData';
import {USERINFO_API} from '../../config';
import './NavTop.scss';

class NavTop extends Component {
  constructor() {
    super();
    this.state = {
      activateMyPage: true, 
      isLogined: true ,
      userInfo: {},
      cartList: [{id: 1, name: '상품1'}, {id: 2, name: '상품2'}, {id: 3, name: '상품3'}]
    };
  }

  componentDidMount() {
    // if(localStorage.getItem('token')){
    //   // this.getUserInformation();
    //   this.setState({ isLogined : true });
    // }
    // else this.setState({ isLogined : false });
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({isLogined: false});
  }

  getUserInformation = async () => {
    const userdata = await axios({url: USERINFO_API , headers: {authorization : localStorage.getItem('token')}});
    console.log(userdata.data);
  }

  getCartInformation = async () => {
    const cartdata = await axios({url: USERINFO_API, headers: {authorization : localStorage.getItem('token')}});
    console.log(cartdata.data);
  }

  toggleMyPageMenu = () => {
    this.setState({ activateMyPage: true });
  };

  outMypage = () => {
    this.setState({ activateMyPage: false });
  };

  render() {
    const { activateMyPage, isLogined, cartList, userInfo } = this.state;

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
                {isLogined && cartList.length && <span className="cartCount">{cartList.length}</span>}
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
                  {!isLogined ? 
                  [<li><Link to="/Login"><span className="plaintext">로그인</span></Link></li>, <li><Link to="/SignUp"><span className="plaintext">회원가입</span></Link></li>] 
                  :
                  [<li><Link to=""><span className="plaintext"><span className="username">맹끼</span>님 안녕하세요</span></Link></li>, <li><Link to=""><span className="plaintext" onClick={this.handleLogout}>로그아웃</span></Link></li>]}
                  {MYPAGE_MENUS.map((el, idx) => (
                    <li key={idx}>
                      <Link to="">
                        <span className="plaintext">{el.name}</span>
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
