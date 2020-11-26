import React, { Component } from 'react';
import { RiBoxingLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { QUESTIONINFO_API } from '../../../../../config';
import {
  QUESTION_ENROLL_API,
  PRODUCT_QNALIST_API,
} from '../../../../../config';
import './Modal.scss';

class Modal extends Component {
  constructor() {
    super();

    this.state = {
      question_type: 1,
      emailValue: '',
      phoneNumberValue: '',
      title: '',
      content: '',
      user: {},
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem('token'));
    fetch(QUESTIONINFO_API, {
      method: 'post',
      headers: { authorization: localStorage.getItem('token') },
      body: JSON.stringify({
        product_name: this.props.productInfo.title,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          user: res,
          emailValue: res.email,
          phoneNumberValue: res.phone_number,
        });
      });
  }

  changeModalQTypeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.id,
    });
  };

  changeModalValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  enrollQuestion = (e) => {
    fetch(QUESTION_ENROLL_API, {
      method: 'post',
      headers: { authorization: localStorage.getItem('token') },
      body: JSON.stringify({
        type: this.state.question_type,
        product_name: this.props.productInfo.title,
        title: this.state.title,
        content: this.state.content,
        answer: 1,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });

    this.onClose(e);
  };

  render() {
    const { emailValue, phoneNumberValue, title, content, user } = this.state;
    const { productInfo } = this.props;
    const { changeModalValue, changeModalQTypeValue, enrollQuestion } = this;
    console.log(productInfo);
    console.log(user);
    return (
      <div className='Modal'>
        <div className='questionModal'>
          <div className='modalContainer'>
            <h1>판매자에게 문의하기</h1>
            <div className='modalTemplate'>
              <div className='subtitle'>문의종류</div>
              <div className='radioGroup'>
                <div>
                  <input
                    type='radio'
                    name='category'
                    id='1'
                    onChange={changeModalQTypeValue}
                  />
                  상품
                </div>
                <div>
                  <input
                    type='radio'
                    name='category'
                    id='2'
                    onChange={changeModalQTypeValue}
                  />
                  배송
                </div>
                <div>
                  <input
                    type='radio'
                    name='category'
                    id='3'
                    onChange={changeModalQTypeValue}
                  />
                  취소
                </div>
                <div>
                  <input
                    type='radio'
                    name='category'
                    id='4'
                    onChange={changeModalQTypeValue}
                  />
                  반품
                </div>
                <div>
                  <input
                    type='radio'
                    name='category'
                    id='5'
                    onChange={changeModalQTypeValue}
                  />
                  교환
                </div>
                <div>
                  <input
                    type='radio'
                    name='category'
                    id='6'
                    onChange={changeModalQTypeValue}
                  />
                  기타
                </div>
              </div>
              <div className='subtitle'>상품명</div>
              <div>{productInfo.title}</div>
              <div className='subtitle'>이름</div>
              <div>{user.name}</div>
              <div className='subtitle'>E-mail</div>
              <div>
                <input
                  className='input'
                  type='email'
                  name='emailValue'
                  id=''
                  value={emailValue}
                  onChange={changeModalValue}
                />
                &nbsp; 답변을 해당 메일로 보내드립니다.
              </div>
              <div className='subtitle'>연락처</div>
              <div className='phoneNumber'>
                <input
                  className='input'
                  type='text'
                  name='phoneNumber'
                  id=''
                  value={phoneNumberValue}
                  onChange={changeModalValue}
                />
              </div>
              <div className='subtitle'>제목</div>
              <div>
                <input
                  className='input inputTitle'
                  type='text'
                  name='title'
                  id=''
                  value={title}
                  onChange={changeModalValue}
                />
              </div>
              <div className='subtitle lastrow'>내용</div>
              <div className='lastrow'>
                <textarea
                  name='content'
                  id=''
                  cols='45'
                  rows='7'
                  value={content}
                  onChange={changeModalValue}></textarea>
                <p>문의시 유의해주세요!</p>
                <p>
                  주민등록번호, 연락처 등의 정보는 타인에게 노출될 경우 개인정보
                  도용의 위험이 있으니 주의해 주시기 바랍니다.
                  <br />
                  문의게시판 본래의 사용 목적(상품,배송,취소/반품,A/S문의 등)과
                  무관한 게시글의 경우 관리자에 의해 노출 차단될 수 있습니다.
                </p>
              </div>
            </div>
            <div className='modalButton'>
              <button onClick={enrollQuestion}>확인</button>
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
