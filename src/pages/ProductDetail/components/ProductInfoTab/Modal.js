import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Modal.scss';

class Modal extends Component {
  // constructor() {
  //   super();
  //   this.state = {};
  // }
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    // if (!this.props.show) {
    //   return null;
    // }

    // const { modal } = this.props;
    return (
      <div className='Modal'>
        <div className='questionModal'>
          <div className='modalContainer'>
            <h1>판매자에게 문의하기</h1>
            <div className='modalTemplate'>
              <div>문의종류</div>
              <div className='radioGroup'>
                <div>
                  <input type='radio' name='category' id='product' />
                  상품
                </div>
                <div>
                  <input type='radio' name='category' id='product' />
                  배송
                </div>
                <div>
                  <input type='radio' name='category' id='product' />
                  취소
                </div>
                <div>
                  <input type='radio' name='category' id='product' />
                  반품
                </div>
                <div>
                  <input type='radio' name='category' id='product' />
                  교환
                </div>
                <div>
                  <input type='radio' name='category' id='product' />
                  기타
                </div>
              </div>
              <div>상품명</div>
              <div>로봇청소기</div>
              <div>이름(ID)</div>
              <div>류지혜(ryuwisdom)</div>
              <div>E-mail</div>
              <div>
                <input type='email' name='' id='' />
                &nbsp; 답변을 해당 메일로 보내드립니다.
              </div>
              <div>연락처</div>
              <div className='phoneNumber'>
                <input type='number' name='' id='' /> &nbsp;- &nbsp;
                <input type='number' name='' id='' /> &nbsp;- &nbsp;
                <input type='number' name='' id='' />
              </div>
              <div>제목</div>
              <div>
                <input type='text' name='' id='' />
              </div>
              <div>내용</div>
              <div>
                <textarea name='' id='' cols='45' rows='10'></textarea>
                <p>문의시 유의해주세요!</p>
                <p>
                  회원간 직거래로 발생하는 피해에 대해 G9는 책임지지 않습니다.
                  <br />
                  주민등록번호, 연락처 등의 정보는 타인에게 노출될 경우 개인정보
                  도용의
                  <br />
                  위험이 있으니 주의해 주시기 바랍니다.
                  <br />
                  비방, 광고, 불건전한 내용의 글은 관리자에 의해 사전 동의 없이
                  삭제될
                  <br />
                  수 있습니다.
                  <br />
                  문의게시판 본래의 사용 목적(상품,배송,취소/반품,A/S문의 등)과
                  무관한
                  <br />
                  게시글의 경우 관리자에 의해 노출 차단될 수 있습니다.
                </p>
              </div>
            </div>
            <div className='modalButton'>
              <button>확인</button>
              <button
                onClick={(e) => {
                  this.onClose(e);
                }}>
                취소
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
