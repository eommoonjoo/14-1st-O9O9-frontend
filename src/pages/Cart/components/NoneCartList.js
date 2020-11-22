import React, { Component } from 'react';
import './/NonCartList.scss';
import { Link } from 'react-router-dom';

class NoneCartList extends Component {
  goToMain = () => {
    this.props.history.push('./');
  }

  render() {  
    return (
      <div>
        <aside className='NoneCartList'>
                   <div className='side'>
                     <div>
                      <div className='imgContainer'>
                        <img src='./images/exclamation_mark.png' alt='noneImage' />
                      </div>
                        <div className='noneProduct'>장바구니에 담겨 있는 상품이 없습니다.</div>
                        <div className='buttonList'>
                            <button className='goShopping'>
                              <Link to="/">쇼핑하러가기</Link>
                            </button>
                            <button className='goSelectList'>찜한상품보기</button>
                        </div>
                      </div>
                   </div>
        </aside>
      </div>
    );
  }
}

export default NoneCartList;