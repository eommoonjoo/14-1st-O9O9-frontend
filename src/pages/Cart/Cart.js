import React, { Component } from 'react';
import './Cart.scss';
import { VscTrash } from 'react-icons/vsc';
import { AiOutlineClose } from 'react-icons/ai';
import CartList from './components/CartList';
import NoneCartList from './components/NoneCartList';

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
                    <span className='nextMark'>{'>'}</span>
                    <span className='order'>02 주문결제</span>
                    <span className='nextMark'>{'>'}</span>
                    <span className='success'>03 주문완료</span>
               </div>
               {/* <NoneCartList /> */}

               <aside>
                   <div className='leftSide'>
                        <div className='selection'>
                            <div className="select">
                                <input type="checkbox" id="checkBox" />
                                <label for="cb1" />
                                <span className='selectItem'>선택</span>
                            </div>
                            <div className='delete'>
                                <VscTrash size="24" className='deleteIcon'/>
                                <div className='deleteItem'>삭제</div>
                            </div>
                        </div>
                        <CartList />
                   </div>
                   <div className='rightSide'>
                        <div className='payment'>
                            <div className='orderInfo'>주문예정정보(상품 1개)</div>
                            <div className='totalPay'>
                                <div className="pay">결제 예정금액</div>
                                <div className='total'>
                                    <div className='totalCount'>10,900</div>
                                    <div className='won'>원</div>
                                </div>
                             </div>
                            <button className='order'>주문하기</button>
                        </div>
                   </div>
               </aside>
               <div className='rightSideBottom'>
                    <span className='text'>배송비, 반품비 걱정없는 G9</span>
                    <span className='goDetail'>자세히 보기 {'>'} </span>
               </div>
            </div>
        );
    }
}

export default Cart;