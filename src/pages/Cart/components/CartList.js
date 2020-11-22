import React, { Component } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import NoneCartList from './NoneCartList';


class CartList extends Component {
    
    render() {
        // cartItem is array
        const {cartItems} = this.props;

        // &&
        // ||
        // a ? b : c
        return (
            <>
            {cartItems.length < 1 ? <NoneCartList /> : cartItems.map((el) => {
                return (
                    <div className='selectionList'>
                        <div className='productName'>
                        <div className='productTitle'>
                            <input type="checkbox" id="checkBox" idx={el.id}/>
                            <label for="checkBox" />
                            <div className='productId'>{el.productName} </div>
                        </div>
                        <AiOutlineClose size="30" className='XIcon' onClick={() => {this.props.onDelete(el)}}/>
                    </div>
                    <div className='product'>
                        <img className='productImage' src={el.url} alt="이미지"/>
                        <div className='priceList'>
                            <div className='price'><span>{(el.price * el.count).toLocaleString(2)}</span>
                            <span className='won'>원</span>
                        </div>
                        <div className='amount'>
                        <table>
                            <tr>
                            <td className='minus' onClick={() => this.props.onMinus(el)}>-</td>
                            <td>{el.count}</td>
                            <td className='plus' onClick={() => this.props.onPlus(el)}>+</td>
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