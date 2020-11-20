import React, { Component } from 'react';
import './SignUp.scss';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            pw: '',
            name: '',
            phone:'',
            email: '',
            passwordcheck: ''
        }
    }

    handleInputValueChange = (e) => {
        // const { id, pw, name, phone, email } = e.target;
        this.setState({[e.target.name]: e.target.value});
    }

    checkValidation = (e) => {
        e.preventDefault();
        // console.log('연결확인');
    
        const {id, pw, name, phone, email, passwordcheck} = this.state;
    
        fetch('http://10.58.4.236:8000/user/signup', {
          method: "POST",
          body: JSON.stringify({
            ID: id, 
            password: pw,
            name: name,
            phone_number: phone,
            email: email,
            passwordcheck: passwordcheck,
          }),
        })
          .then((res) => res.json())
          .then((result) => {

        if (result.message === "success") {
          alert ('회원가입이 완료되었습니다!')
          this.props.history.push("/")
        } else {
          alert(result.message);
        }})
    }
    
    handleDuplication = () => {
        fetch('http://10.58.4.236:8000/user/doublecheck', {
            method: "POST",
            body: JSON.stringify({
              ID: this.state.id,
            }),
          }).then((res) => res.json())
            .then((result) => {
          if (result.message === "success") {
            alert ("사용가능한 아이디입니다.")
          } else {
            alert(result.message);
          }})
    }

    render() {
        // console.log(this.state)
        return (
            <>
                <div className='joinContent'>
                    <div className='logo'>
                        <img className='o9Logo' src='./images/logo_transparent.png'/>
                    </div>
                    <div className='joinText'>잠깐 G마켓 회원이신가요?</div>
                    <div className='joinTextBox'>
                        <span className='joinText'>G9는 </span>
                            <img src='./images/gmarket.png' />
                        <span className='joinText'>아이디로 이용이 가능합니다. </span>
                        <span className='login'>로그인하기 {'>'}</span>
                    </div>
                
                    <div className='idAndPw'>
                        <div className='idSection'>
                            <input placeholder='아이디' name="id" onChange={this.handleInputValueChange}/>
                            <button onClick={this.handleDuplication}>중복확인</button>
                        </div>
                        <div className='pwSection'>
                            <input type='password' placeholder='비밀번호' name="pw" onChange={this.handleInputValueChange}/>
                        </div>
                        <div className='pwAgainSection'>
                            <input type='password' name="passwordcheck" onChange={this.handleInputValueChange} placeholder='비밀번호 확인'/>
                        </div>
                        <div className='userInfo'>
                            <input className='nameInput' placeholder='이름' name="name" onChange={this.handleInputValueChange} />
                            <input className='phoneNumberInput' placeholder='휴대폰 번호' name="phone" onChange={this.handleInputValueChange} />
                            <input className='emailInput' placeholder='이메일' name="email" onChange={this.handleInputValueChange} />
                            <div> ※ 만 14세 이상 고객만 가입이 가능합니다.</div>
                        </div>
                    </div>
                    
                    <div className='checkBox'>
                        <div className='agreement'>
                            <input type="checkbox"/>
                            <label for="cb1" />
                            <div>전체동의</div>
                        </div>
                        <div className='agreementList'>
                            <div className='checkAll'>
                                <input type="checkbox"/>
                                <label for="cb1" />
                                <div>필수항목 전체동의</div>
                            </div>
                            <div className='check'>
                                <input type="checkbox"/>
                                <label for="cb1" />
                                <div>G9 구매회원 약관</div>
                            </div>
                            <div className='check'>
                                <input type="checkbox"/>
                                <label for="cb1" />
                                <div>G마켓 구매회원 약관</div>
                            </div>
                            <div className='check'>
                                <input type="checkbox"/>
                                <label for="cb1" />
                                <div>개인정보 수집 및 이용</div>
                            </div>
                            <div className='line'></div>
                        </div>
                        <div className='optionalAgreementList'>
                            <div className='checkAll'>
                                <input type="checkbox" />
                                <label for="cb1" />
                                <div>선택항목 전체동의</div>
                            </div>
                            <div className='check'>
                                <input type="checkbox" />
                                <label for="cb1" />
                                <div>개인정보의 제3자 제공</div>
                            </div>
                            <div className='check'>
                                <input type="checkbox" />
                                <label for="cb1" />
                                <div>개인정보 수집 및 이용</div>
                            </div>
                            <div className='check'>
                                <input type="checkbox" />
                                <label for="cb1" />
                                <div>쇼핑 이메일 수신</div>
                            </div>
                            <div className='marketingInfo'>상품구매 관련 내용은 수신동의 여부와 관계없이 발송됩니다.</div>
                        </div>
                        <button onClick={this.checkValidation}>동의하고 회원가입</button>
                    </div>
                </div>
            </>
        );
    }
}


export default SignUp;