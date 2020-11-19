import React, { Component } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const API = 'http://localhost:3000/data/cartdata.json'
 
class CartList extends Component {
    constructor() {
        super();
        this.state = {
           cartItem: []
        };
    }

    componentDidMount = () => {
      fetch(API, {
       method: 'GET'
      })
      .then(res => res.json())
      .then(res => {
        this.setState({
          cartItem: res.cartItems
        });
      });
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
                        <AiOutlineClose size="30" className='XIcon'/>
                    </div>
                    <div className='product'>
                        <img className='productImage' src={el.url} alt="이미지"/>
                        <div className='priceList'>
                            <div className='price'><span>{el.price}</span>
                            <span className='won'>원</span>
                        </div>
                        <div className='amount'>
                        <table>
                            <tr>
                            <td className='minus'>-</td>
                            <td>{el.count}</td>
                            <td className='plus'>+</td>
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