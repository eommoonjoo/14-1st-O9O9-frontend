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
            passwordcheck: '',

            validID: true,
            validPW: true,
            validDoubleCheck: true,
            validName: true,
            validPhone: true,
            validEmail: true,
        }
    }
    validationCheck = (type, value) => {
        if (type==='id') {
            let idReg = /^[a-z]+[a-z0-9]{5,19}$/g;
            const validID = idReg.test(value);
            this.setState({validID});
        } else if (type==='pw') {
            let passwordRules = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
            const validPW = passwordRules.test(value);
            this.setState({validPW})
        } else if (type === 'name') {
            let reg = /^[가-힣]{2,4}$/;
            const validName = reg.test(value);
            this.setState({validName});
        } else if (type === 'email') {
            let emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            const validEmail = emailRule.test(value);
            this.setState({validEmail})
        }
    }

    handleInputValueChange = (e) => {
        // const { id, pw, name, phone, email } = e.target;
        this.validationCheck(e.target.name, e.target.value);
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
          this.props.history.push("/Login")
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
            <div className='SignUp'>
                <div className='joinContent'>
                    <div className='logo'>
                        <img src='./images/logo_transparent.png'/>
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
                            {!this.state.validID && <p>회원아이디를 정확히 입력해 주세요.</p>}
                        </div>
                        <div className='pwSection'>
                            <input type='password' placeholder='비밀번호' name="pw" onChange={this.handleInputValueChange}/>
                            {!this.state.validPW && <p>비밀번호는 영문 대/소문자, 숫자 및 특수문자 2가지 이상의 조합으로 입력해야 합니다.</p>}
                            
                        </div>
                        <div className='pwAgainSection'>
                            <input type='password' name="passwordcheck" onChange={this.handleInputValueChange} placeholder='비밀번호 확인'/>
                            <p>비밀번호가 일치하지 않습니다.</p>
                        </div>
                        <div className='userInfo'>
                            <div>
                                <input className='nameInput' placeholder='이름' name="name" onChange={this.handleInputValueChange} />
                                {!this.state.validName && <p>이름을 입력해 주세요.</p>}
                            </div>
                            <div>
                                <input className='phoneNumberInput' placeholder='휴대폰 번호' name="phone" onChange={this.handleInputValueChange} />
                                {!this.state.validPhone && <p>휴대폰 번호를 정확히 입력해 주세요.</p>}
                            </div>
                            <div>
                                <input className='emailInput' placeholder='이메일' name="email" onChange={this.handleInputValueChange} />
                                {!this.state.validEmail && <p>메일주소를 정확히 입력해 주세요.</p>}
                            </div>
                            <div className='textSignUp'> ※ 만 14세 이상 고객만 가입이 가능합니다.</div>
                        </div>
                    </div>
                    
                    <div className='checkBox'>
                        <div className='agreement'>
                            <input type="checkbox"/>
                            <label for="cb1" />
                            <div onClick={this.handleClickAll}>전체동의</div>
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
            </div>
        );
    }
}

export default SignUp;