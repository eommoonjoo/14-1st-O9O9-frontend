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
            {cartItems.length < 1 ? <NoneCartList /> : cartItems.map((item, idx) => {
                return (
                    <div className='selectionList' key={idx}>
                        <div className='productName'>
                            <div className='productTitle'>
                                <input type="checkbox" id="checkBox" idx={item.id} onChange={()=> {this.props.onChecked(item)}} checked={item.ischecked}/>
                                {/* input 버튼의 check상태: true, false로 관리할 수 있다. */}
                                <label htmlFor="checkBox" />
                                <div className='productId'>{item.productName} </div>
                            </div>
                            <AiOutlineClose size="20" className='XIcon' onClick={() => {this.props.onDelete(item)}}/>
                        </div>
                        <div className='product'>
                            <img className='productImage' src={item.url} alt="이미지"/>
                            <div className='priceList'>
                                <div className='price'>
                                    <span>{(item.price * item.count).toLocaleString(2)}</span>
                                    <span className='won'>원</span>
                                </div>
                                <div className='amount'>
                                    <button className='minus'  onClick={() => this.props.onMinus(item)} >-</button>
                                    <button className='quentity' disabled >{item.count}</button>
                                    <button className='plus' onClick={() => this.props.onPlus(item)} >+</button>
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