import React, { Component } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const API = 'http://localhost:3000/data/cartdata.json'
 
class CartList extends Component {
    constructor() {
        super();
        this.state = {
           cartItem: [],
        };
    }

    componentDidMount = () => {
      fetch(API, {
       method: 'GET'
      })
      .then(res => res.json())
      .then(res => {
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
       }
    }

    handlePlus = (el) => {
        const cartItem = [...this.state.cartItem];
        let idx = cartItem.indexOf(el);
        if (cartItem[idx].count<5) {
            cartItem[idx].count++;
            this.setState({cartItem})
        } else {
            alert('최대 주문 수량은 5개 입니다.')
        }
        
    }

    // totalPrice = (el) => {
    //     const cartItem = [...this.state.cartItem];
    //     let idx = cartItem.indexOf(el);
    //     {cartItem && cartItem.map((el) => {
    //         return {
                
    //         }
    //     })}
    // }

    deleteItem = (el) => {
        const {cartItem} = this.state;
        let removeItem = cartItem.filter((e) => el.id !== e.id);
        this.setState({cartItem: removeItem})
    }

    render() {
        const {cartItem} = this.state;
        return (
            <>
            {cartItem &&  cartItem.map((el) => {
                return (
                    <div className='selectionList'>
                        <div className='productName'>
                        <div className='productTitle'>
                            <input type="checkbox" id="checkBox" />
                            <label for="checkBox" />
                            <div className='productId'>{el.productName} </div>
                        </div>
                        <AiOutlineClose size="30" className='XIcon' onClick={() => {this.deleteItem(el)}}/>
                    </div>
                    <div className='product'>
                        <img className='productImage' src={el.url} alt="이미지"/>
                        <div className='priceList'>
                            <div className='price'><span>{el.price * el.count}</span>
                            <span className='won'>원</span>
                        </div>
                        <div className='amount'>
                        <table>
                            <tr>
                            <td className='minus' onClick={() => this.handleMinus(el)}>-</td>
                            <td>{el.count}</td>
                            <td className='plus' onClick={() => this.handlePlus(el)}>+</td>
                            </tr>
                        </table>
                        <button className='buy'>즉시구매</button>
                    </div>
                </div>
            </div>
        </div>
            )
          })}
        </>
        );
    }
}

export default CartList;