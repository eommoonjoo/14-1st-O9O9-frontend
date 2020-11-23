import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            pw: '',
        }
    }

    handleInputValueChange = (e) => {
        // const { id, pw, name, phone, email } = e.target;
        this.setState({[e.target.name]: e.target.value});
    }

    checkValidation = (e) => {
        e.preventDefault();
        // console.log('연결확인');
    
        const {id, pw} = this.state;
    
        fetch('http://10.58.4.236:8000/user/signin', {
          method: "POST",
          body: JSON.stringify({
            ID: id, 
            password: pw,
          }),
        }).then(res => res.json())
          .then((result) => {
              console.log(result);
            if (result.authorization) {
                localStorage.setItem('token', result.authorization)
                this.props.history.push('/');
            } else {
                alert (result.message);
            }
        }
        )
    }
    
    render() {
        return (
        <div className="Login">
            <div className="logo">
                <img src='./images/logo.png' alt='이미지' />
            </div>  
            <div className="messageBox">
                <img className="gmarketLogo" src="https://pics.gmarket.co.kr/pc/single/kr/common/image__logo.png" alt="gmarketLogo" />
                <span className='gmarketMessage'>아이디로 이용이 가능합니다.</span>
            </div>
            <form>
                <div className='inputBox'>
                    <input className="inputId" placeholder="아이디" name='id' onChange={this.handleInputValueChange}/>
                    <input className="inputPw" placeholder="비밀번호" name='pw' type='password' onChange={this.handleInputValueChange}/>
                </div>
                <div className='saveId'>
                    <input type="checkbox" />
                    <label for="cb1" />
                    <div className="rememberId">아이디 기억하기</div>
                </div>
                <div className='loginWrap'> 
                    <button className="loginButton" onClick={this.checkValidation}>로그인</button>
                    <button className="kakaoLoginButton">
                        <img className='kakaoImg' src='./images/kakao.png' alt='이미지'/>
                        카카오 로그인
                    </button>
                </div>
                <div className="linkGroup">
                    <span>회원가입</span>
                    <span className="gap">|</span>
                    <span>아이디 찾기</span>
                    <span className="gap">|</span>
                    <span>비밀번호 찾기</span>
                </div>
                <div className="nonMember">
                    <div className="nonMemberOrder">비회원 주문 조회</div>
                    <input type='text' className='orderName' placeholder="주문자 이름" />
                    <input type='text' className='phoneNumber' placeholder="휴대폰 번호" />
                    <input type='text' className='orderPw' placeholder="주문 비밀번호" />
                    <div className="orderMessageBox">
                    주문 시 입력한 주문자 명과 휴대폰 번호, 주문 비밀번호를 정확히 입력해주세요.
                    </div>
                    <button className="nonMemberOrderHistory">비회원 주문내역 조회</button>
                </div>
            </form>  
        </div>
        );
    }
}

export default Login;