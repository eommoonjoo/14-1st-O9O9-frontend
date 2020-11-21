import React, { Component } from 'react';
import '../components/NonCartList.scss';

class NoneCartList extends Component {
  render() {
    return (
      <div>
        <aside className='NoneCart'>
                   <div className='leftSide'>
                        <img className='noneImg' src='./images/exclamation_mark.png' alt='noneImage' />
                        <div className='noneProduct'>장바구니에 담겨 있는 상품이 없습니다.</div>
                        <div className='buttonList'>
                            <button className='goShopping'>쇼핑하러가기</button>
                            <button className='goSelectList'>찜한상품보기</button>
                        </div>
                   </div>
                   <div className='rightSide'>
                        <div className='text'>배송비, 반품비 걱정없는 G9</div>
                        <div className='goDetail'>자세히 보기 {'>'}</div>
                   </div>
        </aside>
      </div>
    );
  }
}

export default NoneCartList;