import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import './QnA.scss';

class QnA extends Component {
  constructor() {
    super();
    // 차후에 배형태로 변경 예정
    this.state = { openComment: false, openModal: false };
  }

  commentHandler = () => {
    this.setState({ openComment: !this.state.openComment });
  };

  // showModal = () => {
  //   console.log('+_+');
  //   this.setState({ ...this.state, show: !this.state.show });
  // };
  modalHandler = () => {
    this.setState({ openModal: true });
  };

  closeModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    const { openModal } = this.state;
    console.log(openModal);
    return (
      <div className='QnA'>
        <div className='qnAContainer'>
          <div className='qnAHead'>
            <h1>
              판매자에게 문의하기<span>(6)</span>
            </h1>
            <p>
              &nbsp;상품, 배송, 취소/반품, A/S 등의 문의를 남겨주시면 판매자가
              직접 답변을 드립니다.
            </p>
          </div>

          <div className='qnAButtonSide'>
            <button>
              <Link onClick={this.modalHandler}>문의하기</Link>
            </button>
            <button>내 문의보기</button>
            <button>전체 문의보기</button>
          </div>

          <div className='reviewButtonSide'></div>

          <div className='qnaTemplate'>
            <div className='qnaTop'>
              <div className='qnaLabel'>번호</div>
              <div className='qnaLabel'>문의종류</div>
              <div className='qnaLabel'>답변상태</div>
              <div className='qnaLabel'>제목</div>
              <div className='qnaLabel'>문의자</div>
              <div className='qnaLabel'>등록일</div>
            </div>

            {/* Map돌릴부분 */}
            <div className='qnaContents'>
              <div className='qnaInput fitCenter'>412049586</div>
              <div className='qnaInput fitCenter'>배송</div>
              <div className='qnaInput fitCenter'>답변완료</div>
              <div className='qnaInput qnADropDown'>
                <Link onClick={this.commentHandler}>배송문의</Link>
                {/* {openModal && } */}
              </div>
              <div className='qnaInput fitCenter'>ryuwisdom</div>
              <div className='qnaInput fitCenter'>2020.11.26</div>
            </div>
            {this.state.openComment ? (
              <div className='dropDownContent'>
                <div className='question'>
                  <h3>Q&nbsp;</h3>
                  <span>언제쯤 받아볼 수 있을까요?</span>
                </div>
                <div className='answer'>
                  <h3>A&nbsp;</h3>
                  <span>
                    안녕하세요 고객님 많이 기다려주셔서 감사합니다 익일 한국
                    도착 후 통관 및 배송 예정입니다 참고 부탁드립니다.
                    <br />
                    <br />
                    <p>판매자의 답변 | 2020-11-17 오후 11:18:51</p>
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        {openModal && <Modal onClose={this.closeModal} />}
      </div>
    );
  }
}

export default QnA;
