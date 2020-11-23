import React, { Component } from 'react';
import { RiBoxingLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './Modal.scss';

class Modal extends Component {
  constructor() {
    super();

    // const { productview } = this.props;
    this.state = {
      question_type: 1,
      emailValue: '',
      phoneNumberValue: '',
      title: '',
      context: '',
      user: {},
    };
  }

  componentDidMount() {
    // console.log(this.props);
    console.log(localStorage.getItem('token'));
    fetch('http://10.58.4.236:8000/review/questioninfo', {
      method: 'post',
      headers: { authorization: localStorage.getItem('token') },
      body: JSON.stringify({
        product_name: this.props.productInfo.title,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        this.setState({
          user: res,
          emailValue: res.email,
          phoneNumberValue: res.phone_number,
        });
      });
  }

  changeModalQTypeValue = (e) => {
    this.setState({
      question_type: e.target.id,
    });
  };
  changeModalEmailValue = (e) => {
    this.setState({
      emailValue: e.target.value,
    });
  };
  changeModalPhoneNumberValue = (e) => {
    this.setState({
      phoneNumberValue: e.target.value,
    });
  };
  changeModalTitleValue = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  changeModalContextValue = (e) => {
    this.setState({
      context: e.target.value,
    });
  };
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  enrollQuestion = (e) => {
    fetch('http://10.58.4.236:8000/review/questionenroll', {
      method: 'post',
      headers: { authorization: localStorage.getItem('token') },
      body: JSON.stringify({
        type: this.state.question_type,
        product_name: this.props.productInfo.title,
        title: this.state.title,
        content: this.state.context,
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
    const { emailValue, phoneNumberValue, title, context, user } = this.state;
    const { productInfo } = this.props;
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
                    onChange={this.changeModalQTypeValue}
                  />
                  상품
                </div>
                <div>
                  <input
                    type='radio'
                    name='category'
                    id='2'
                    onChange={this.changeModalQTypeValue}
                  />
                  배송
                </div>
                <div>
                  <input
                    type='radio'
                    name='category'
                    id='3'
                    onChange={this.changeModalQTypeValue}
                  />
                  취소
                </div>
                <div>
                  <input
                    type='radio'
                    name='category'
                    id='4'
                    onChange={this.changeModalQTypeValue}
                  />
                  반품
                </div>
                <div>
                  <input
                    type='radio'
                    name='category'
                    id='5'
                    onChange={this.changeModalQTypeValue}
                  />
                  교환
                </div>
                <div>
                  <input
                    type='radio'
                    name='category'
                    id='6'
                    onChange={this.changeModalQTypeValue}
                  />
                  기타
                </div>
              </div>
              <div className='subtitle'>상품명</div>
              <div>{productInfo.title}</div>
              <div className='subtitle'>이름</div>
              <div>
                {user.name}({user.name})
              </div>
              <div className='subtitle'>E-mail</div>
              <div>
                <input
                  className='input'
                  type='email'
                  name=''
                  id=''
                  value={emailValue}
                  onChange={this.changeModalEmailValue}
                />
                &nbsp; 답변을 해당 메일로 보내드립니다.
              </div>
              <div className='subtitle'>연락처</div>
              <div className='phoneNumber'>
                <input
                  className='input'
                  type='text'
                  name=''
                  id=''
                  value={phoneNumberValue}
                  onChange={this.changeModalPhoneNumberValue}
                />
              </div>
              <div className='subtitle'>제목</div>
              <div>
                <input
                  className='input'
                  type='text'
                  name=''
                  id=''
                  value={title}
                  onChange={this.changeModalTitleValue}
                />
              </div>
              <div className='subtitle lastrow'>내용</div>
              <div className='lastrow'>
                <textarea
                  name=''
                  id=''
                  cols='45'
                  rows='7'
                  value={context}
                  onChange={this.changeModalContextValue}></textarea>
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
              <button onClick={this.enrollQuestion}>확인</button>
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
