import React, { Component } from 'react';
import { VscTrash } from 'react-icons/vsc';
import { AiOutlineClose } from 'react-icons/ai';
import CartList from './components/CartList';
import './Cart.scss';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
           cartItem: [],
           allChecked: false,
        };
    }

    componentDidMount = () => {
      fetch('http://10.58.2.26:8000/order/', {
       method: 'GET',
    // headers: {authorization : localStorage.getItem('token')}
    // get은 body를 못 만들어 ...!!
      })
      .then(res => res.json())
      .then(res => {
        //   console.log('res', res);
        for (let i=0; i<res.product.length; i++) {
            res.product[i].ischecked=false;
        }
        this.setState({
          cartItem: res.product,
        });
      });
    }

    handleMinus = (el) => {
        const cartItem = [...this.state.cartItem];
        let idx = cartItem.indexOf(el);
        if (cartItem[idx].count > 1){
        cartItem[idx].count--;
        this.setState({cartItem});

        fetch(`http://10.58.2.26:8000/order/${cartItem[idx].id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                count: cartItem[idx].count
            })
        })
        .then((response) => {return response.json()})
        .then((result) => {
            // console.log("백엔드에서 오는 응답메시지:" + result);
            if(result.message==='success') {
              console.log(result.message);
            }
          })
       }
    }

    handlePlus = (el) => {
        const cartItem = [...this.state.cartItem];
        
        let idx = cartItem.indexOf(el);
        if (cartItem[idx].count<20) {
            cartItem[idx].count++;
            this.setState({cartItem})
        
            fetch(`http://10.58.2.26:8000/order/${cartItem[idx].id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    count: cartItem[idx].count
                })
            })
            .then((response) => {return response.json()})
            .then((result) => {
                // console.log("백엔드에서 오는 응답메시지:" + result);
                if(result.message==='success') {
                  console.log(result.message);
                }
              });
           
            
        } else {
            alert('최대 주문 수량은 50개 입니다.')
        }
    }

    deleteItem = (el) => {
        const {cartItem} = this.state;
        let removeItem = cartItem.filter((e) => el.id !== e.id);
        this.setState({cartItem: removeItem})

        fetch(`http://10.58.2.26:8000/order/cart`, {
            method: 'POST',
            body: JSON.stringify({
                ids: [el.id]
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

    onCheckDelete = (el) => {
        const cartItem = [...this.state.cartItem];
        let remove = cartItem.map((el) => {
            if(el.ischecked) return el.id;
        })
        let removeItem = cartItem.filter((el) => el.ischecked !== true)
        this.setState({cartItem : removeItem});
        // console.log(remove)
        fetch(`http://10.58.2.26:8000/order/cart`, {
            method: 'POST',
            body: JSON.stringify({
                ids: remove
            })
        }).then(res => res.json()).then(console.log);
        
    }

    handleChecked = (el) => {
        const cartItem = [...this.state.cartItem]
        let idx = cartItem.indexOf(el);
        cartItem[idx].ischecked = !cartItem[idx].ischecked;
        let cnt =0;
        for (let i=0; i<cartItem.length; i++) {
            if(cartItem[i].ischecked) cnt++;
        }
        if(cnt === cartItem.length) {
            this.setState({allChecked: true})
        } else this.setState({allChecked : false});
        this.setState({
            cartItem
        }, 
        )
    }

    handleAllChecked = (el) => {
        const cartItem = [...this.state.cartItem];
        cartItem.map((el) => {
            el.ischecked = this.state.allChecked ? false : true })
        this.setState({
            cartItem,
            allChecked: !this.state.allChecked})
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
                                <input type="checkbox" id="checkBox" onClick={this.handleAllChecked} checked={this.state.allChecked}/>
                                <label htmlFor="cb1" />
                                <span className='selectItem'>선택</span>
                            </div>
                            <div className='delete'>
                                <VscTrash size="20" className='deleteIcon'/>
                                <div className='deleteItem' onClick={this.onCheckDelete}>삭제</div>
                            </div>
                        </div>
                        <CartList cartItems={this.state.cartItem} onPlus={this.handlePlus} onMinus={this.handleMinus} onDelete={this.deleteItem} onChecked={this.handleChecked}  />
                   </div>
                   <div className='rightSide'>
                        <div className='payment'>
                            <div className='orderInfo'>주문예정정보(총 {this.state.cartItem.length}개) </div>
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
                            <span className='text'>배송비, 반품비 걱정없는 O9O9 💙</span>
                            <span className='goDetail'>자세히 보기 {'>'} </span>
                        </div>
                   </div>
               </aside>
            </div>
        );
    }
}

export default Cart;