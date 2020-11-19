import React, { Component } from 'react';
import { HiSearch } from 'react-icons/hi';
import { FiShoppingCart } from 'react-icons/fi';
import { RiHeart3Line } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './NavTop.scss';

class NavTop extends Component {
  constructor() {
    super();
    this.state = { activateMyPage: true, myPageMenu: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/categorydata.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          myPageMenu: res.myPageMenu,
        });
      });
  }

  toggleMyPageMenu = () => {
    this.setState({ activateMyPage: true });
  };

  outMypage = () => {
    this.setState({ activateMyPage: false });
  };

  render() {
    const { myPageMenu } = this.state;
    const { activateMyPage } = this.state;

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
          {!activateMyPage ? (
            <div
              className='wrapMyPage'
              onMouseLeave={this.toggleMyPageMenu}
              onMouseEnter={this.outMypage}>
              <div className='myPageMenu'>
                <ul>
                  {myPageMenu &&
                    myPageMenu.map((el, idx) => (
                      <li key={idx}>
                        <Link rel='stylesheet' href='#'>
                          <span>{el.name}</span>
                        </Link>
                      </li>
                    ))}
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
