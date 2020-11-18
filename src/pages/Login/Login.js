import React, { Component } from 'react';
import './Login.scss';
// import '../../styles/reset.scss';

const API='http://'
// API주소 받아오기

class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            pw: '',
            number: '',
            email: ''
        };
    }

    checkValidation = (e) => {
        const { name, pw, number, email } = this.state;

        fetch(API, {
            method: "POST",
            body: JSON.stringify(
                {
                    name: name,
                    password: pw,
                    number: number,
                    email: email
                }
            )
        })
        .then((res) => res.json())
        .then((result) => {
            if (result.message === "SUCCESS") {
                this.props.history.push('/')
            }
            else {
                alert('아이디 확인');
            }
        })
    }


    render() {
        return (
        <div className="loginContainer">
            <div class="logo">
                <img class='logoImage' src='./images/logo.png' />
            </div>  
            <div className="messageBox">
                <img className="gmarketLogo" src="https://pics.gmarket.co.kr/pc/single/kr/common/image__logo.png" alt="gmarketLogo" />
                <span class='gmarketMessage'>아이디로 이용이 가능합니다.</span>
            </div>
            <form>
                <div className = 'inputBox'>
                    <input className="inputId" placeholder="아이디" />
                    <input className="inputPw" placeholder="비밀번호" />
                </div>
                <div class='saveId'>
                    <input type="checkbox" id="cb1" />
                    <label for="cb1" />
                    <div className="rememberId">아이디 기억하기</div>
                </div>
                <div className='loginWrap'> 
                    <button className="loginButton">로그인</button>
                    <button className="kakaoLoginButton">
                        <img className='kakaoImg' src='./images/kakao.png' />
                        카카오 로그인
                    </button>
                </div>
                <div className = "linkGroup">
                    <span className="signUp">회원가입</span>
                    <span className="gap">|</span>
                    <span className="findId">아이디 찾기</span>
                    <span className="gap">|</span>
                    <span className="findPw">비밀번호 찾기</span>
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