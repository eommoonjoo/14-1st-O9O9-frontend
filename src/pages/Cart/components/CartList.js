import React, { Component } from 'react';
import { AiOutlineClose } from 'react-icons/ai';


class CartList extends Component {
    render() {
        return (
            <div className='selectionList'>
                <div className='productName'>
                    <div className='productTitle'>
                        <input type="checkbox" id="checkBox" />
                        <label for="checkBox" />
                        <div className='productId'>서귀포 조생 감귤 </div>
                    </div>
                    <AiOutlineClose size="30" className='XIcon'/>
                </div>
                <div className='product'>
                    <img className='productImage' src='https://image.g9.co.kr/g/1893145348/8' alt="이미지"/>
                    <div className='priceList'>
                        <div className='price'><span>10900</span><span className='won'>원</span></div>
                        <div className='amount'>
                            <table>
                                <tr>
                                <td className='minus'>-</td>
                                <td>수량</td>
                                <td className='plus'>+</td>
                                </tr>
                            </table>
                            <button className='buy'>즉시구매</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartList;