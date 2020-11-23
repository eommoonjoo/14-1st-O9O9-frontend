import React, { Component } from 'react';
import { VscTrash } from 'react-icons/vsc';
import { AiOutlineClose } from 'react-icons/ai';
import CartList from './components/CartList';
import NoneCartList from './components/NoneCartList';
import './Cart.scss';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
           cartItem: [],
           checked: [],
        };
    }

    componentDidMount = () => {
      fetch('http://localhost:3000/data/cartdata.json', {
       method: 'GET',
    //    headers: localStorage.getItem('token') ?
      })
      .then(res => res.json())
      .then(res => {
        //   console.log('res', res);
        //  이거 찍어보기..
        this.setState({
          cartItem: res.cartItems,
        });
      });
    }
    // 유저가 가진 장바구니 정보 get -->토큰 필요
    // 

    handleMinus = (el) => {
        const cartItem = [...this.state.cartItem];
        let idx = cartItem.indexOf(el);
        if (cartItem[idx].count > 1){
        cartItem[idx].count--;
        this.setState({cartItem});
        fetch('API url', {
            method: 'POST',
            body: JSON.stringify({
                id: el.id,
                count: el.count-1
            })
        })
        .then((response) => {return response.json()})
        .then((result) => {
            // console.log("백엔드에서 오는 응답메시지:" + result);
            if(result.message==='success') {
              return;
            }
          })
       }
    
    }

    handlePlus = (el) => {
        const cartItem = [...this.state.cartItem];
        let idx = cartItem.indexOf(el);
        if (cartItem[idx].count<10) {
            cartItem[idx].count++;
            this.setState({cartItem})
            fetch('API url', {
                method: 'POST',
                body: JSON.stringify({
                    id: el.id,
                    count: el.count+1
                    // id, count => 민영님과 맞추기
                })
            })
        } else {
            alert('최대 주문 수량은 10개 입니다.')
        }
    }

    deleteItem = (el) => {
        const {cartItem} = this.state;
        let removeItem = cartItem.filter((e) => el.id !== e.id);
        this.setState({cartItem: removeItem})
        fetch('API url', {
            method: 'POST',
            body: JSON.stringify({
                id: el.id
                // id => 민영님과 맞추기
            })
        })
    }

    totalPrice = () => {
    const {cartItem} = this.state;
     let sum = 0;
      for (let i=0; i<cartItem.length; i++) {
        sum = sum + cartItem[i].price * cartItem[i].count;
      }  
      return sum;
    }

    goToMain = () => {
        this.props.history.push('./');
    }

    deleteAll = () => {
        const items = [...this.state.cartItem];
        const itemsId = items.map(item => item.id);
        fetch('API url', {
            method: 'POST',
            body: JSON.stringify({
                items: itemsId
                // items => 민영님과 맞추기
            })
        })
        this.setState({cartItem: []});
    }

    handleAllChecked = () => {
        console.log('연결');
    }

    render() {
        let totalPrice = this.totalPrice();
        return (
            <div className='Cart'>
               <nav>
                   <div className='logo'>
                        <img alt="logo" src='./images/logo_white.png' onClick={this.goToMain}/>
                   </div>
                   <div className='cartNav'>장바구니</div>
               </nav>
               <div className='orderStatus'>
                    <span className='cart'>01 장바구니</span>
                    <span className='nextMark'>{'>'}</span>
                    <span className='order'>02 주문결제</span>
                    <span className='nextMark'>{'>'}</span>
                    <span className='success'>03 주문완료</span>
               </div>
               <aside>
                   <div className='leftSide'>
                        <div className='selection'>
                            <div className="select">
                                <input type="checkbox" id="checkBox" onClick={this.handleAllChecked}/>
                                <label htmlFor="cb1" />
                                <span className='selectItem'>선택</span>
                            </div>
                            <div className='delete'>
                                <VscTrash size="24" className='deleteIcon'/>
                                <div className='deleteItem' onClick={this.deleteAll}>삭제</div>
                            </div>
                        </div>
                        <CartList cartItems={this.state.cartItem} onPlus={this.handlePlus} onMinus={this.handleMinus} onDelete={this.deleteItem} allChecked={this.handleAllChecked}/>
                   </div>
                   <div className='rightSide'>
                        <div className='payment'>
                            <div className='orderInfo'>주문예정정보</div>
                            <div className='totalPay'>
                                <div className="pay">결제 예정금액</div>
                                <div className='total'>
                                    <div className='totalCount'>{totalPrice.toLocaleString(2)}</div>
                                    <div className='won'>원</div>
                                </div>
                             </div>
                            <button className='order'>주문하기</button>
                        </div>
                        <div className='rightSideBottom'>
                            <span className='text'>배송비, 반품비 걱정없는 G9</span>
                            <span className='goDetail'>자세히 보기 {'>'} </span>
                        </div>
                   </div>
               </aside>
            </div>
        );
    }
}

export default Cart;