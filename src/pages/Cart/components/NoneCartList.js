import React, { Component } from 'react';
import './/NonCartList.scss';

class NoneCartList extends Component {
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
                            <button className='goShopping'>쇼핑하러가기</button>
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