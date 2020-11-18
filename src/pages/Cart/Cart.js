import React, { Component } from 'react';
import './Cart.scss';
import { VscTrash } from 'react-icons/vsc';

class Cart extends Component {
    render() {
        return (
            <div className='Cart'>
               <div className='nav'>
                   <div className='logoDiv'>
                        <img className='logo' src='./images/logo_white.png'></img>
                   </div>
                   <div className='cartNav'>장바구니</div>
               </div>
               <div className='orderStatus'>
                    <span className='cart'>01 장바구니</span>
                    <span className='nextMark'>></span>
                    <span className='order'>02 주문결제</span>
                    <span className='nextMark'>></span>
                    <span className='success'>03 주문완료</span>
               </div>
               {/* <aside>
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
                        <div className='goDetail'>자세히 보기 ></div>
                   </div>
               </aside> */}
               <aside>
                   <div className='leftSide'>
                        <div className='selection'>
                            <div className="select">
                                <input type="checkbox" id="cb1" />
                                <label for="cb1" />
                                <span>선택</span>
                            </div>
                            <div className='delete'>
                                <span><VscTrash />삭제</span>
                            </div>
                        </div>
                        <div className='selectionList'>
                            <div className='productName'><input type="checkbox" id="cb1" />
                                <label for="cb1" />서귀포 조생 감귤</div>
                            <div className='product'>
                                <img className='productImage' src='./images/exclamation_mark.png'></img>
                            </div>
                        </div>
                   </div>
                   <div className='rightSide'>
                        <div className='payment'>
                            <div className='orderInfo'>주문예정정보(상품 1개)</div>
                            <div className='totalPay'>결제 예정금액 </div>
                            <button className='order'>주문하기</button>
                        </div>
                   </div>
                   <div className='rightSideBottom'>
                        <div className='text'>배송비, 반품비 걱정없는 G9</div>
                        <div className='goDetail'>자세히 보기 ></div>
                   </div>
               </aside>
            </div>
        );
    }
}

export default Cart;