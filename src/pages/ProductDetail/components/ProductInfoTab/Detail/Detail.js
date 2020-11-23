import React, { Component } from 'react';
import './Detail.scss';

class Detail extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='Detail'>
        <img
          src='//ai.esmplus.com/gded/o/j/20201102/15/1604299576632d614823.jpg'
          alt='1'
        />

        {/* 컴포넌트를 분리할까 말까....... */}
        <div className='questionModal'>
          <div className='modalContainer'>
            <h1>상품정보제공 고시 상세 정보</h1>
            <div className='modalTemplate'>
              <div className='subtitle'>상품번호</div>
              <div className='radioGroup'>+_+</div>
              <div className='subtitle'>면세여부</div>
              <div>+_+</div>
              <div className='subtitle'>영수증발행</div>
              <div>+_+</div>
              <div className='subtitle'>사업자구분</div>
              <div>+_+</div>
              <div className='subtitle'>
                포장단위별 내용물의 용량(중량), 수량, 크기
              </div>
              <div className='phoneNumber'>+_+</div>
              <div className='subtitle'>생산자/수입자</div>
              <div>+_+</div>
              <div className='subtitle lastrow'>원산지</div>
              <div>+_+</div>
              <div className='subtitle lastrow'>제조연월일</div>
              <div>+_+</div>
              <div className='subtitle lastrow'>유통기한</div>
              <div>+_+</div>
              <div className='subtitle lastrow'>관련법상 표시사항</div>
              <div>+_+</div>
              <div className='subtitle lastrow'>상품구성</div>
              <div>+_+</div>
              <div className='subtitle lastrow'>보관방법 또는 취급방법</div>
              <div>+_+</div>
              <div className='subtitle lastrow'>소비자상담 관련 전화번호</div>
              <div>+_+</div>
              <div className='subtitle lastrow'>주문후 예상 배송기간</div>
              <div>+_+</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
