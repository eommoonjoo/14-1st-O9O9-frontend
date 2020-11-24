import React, { Component } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import NoneCartList from './NoneCartList';
import { withRouter } from 'react-router-dom'

class CartList extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    
    render() {
        const {cartItems} = this.props;
        return (
            <>
            {cartItems.length < 1 ? <NoneCartList /> : cartItems.map((el, idx) => {
                return (
                    <div className='selectionList' key={idx}>
                        <div className='productName'>
                        <div className='productTitle'>
                            <input type="checkbox" id="checkBox" idx={el.id} onChange={()=> {this.props.onChecked(el)}} checked={el.ischecked}/>
                            {/* input 버튼의 check상태: true, false로 관리할 수 있다. */}
                            <label htmlFor="checkBox" />
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

export default withRouter(CartList);