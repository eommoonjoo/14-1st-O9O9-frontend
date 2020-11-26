import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { AiFillLock } from 'react-icons/ai';
import { FaUserLock } from 'react-icons/fa';
import {AiOutlineUnlock} from 'react-icons/ai';
import { CHECK_VALIDATION_API } from '../../config';
import { DUPLICATION_CHECK_API } from '../../config';
import { POST_EMAIL_API } from '../../config';
import { CODE_CHECK_API } from '../../config';
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
            idDoubleCheck: false,
            codeNumber: '',

            validID: true,
            validPW: true,
            validDoubleCheck: true,
            validName: true,
            validPhone: true,
            validEmail: true,
           

            allNecessaryChecked: false,
            checked1: false,
            checked2: false,
            checked3: false,

            validCode: false,
        }
    }

    validationCheck = (name, value) => {
        if (name ==='id') {
            let idReg = /^[a-z]+[a-z0-9]{5,19}$/g;
            const validID = idReg.test(value);
            this.setState({validID});
            return;
        } 
        if (name ==='pw') {
            let passwordRules = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
            const validPW = passwordRules.test(value);
            this.setState({validPW});
            return;   
        } 
        if (name === 'passwordcheck') {
            const validDoubleCheck = this.state.pw === value
            this.setState({validDoubleCheck});
            return;
        } 
        if (name === 'name') {
            let reg = /^[가-힣]{2,4}$/;
            const validName = reg.test(value);
            this.setState({validName});
            return;
        } 
        if (name === 'phone') {
            let regPhone = /^\d{3}-\d{3,4}-\d{4}$/;
            const validPhone = regPhone.test(value);
            this.setState({validPhone});
            return;
        } 
        if (name === 'email') {
            let emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            const validEmail = emailRule.test(value);
            this.setState({validEmail});
            return;
        } 
    }

    handleInputValueChange = (e) => {
        const {name, value} = e.target;
        this.validationCheck(name, value);
        this.setState({[name]: value});
    }

    checkValidation = (e) => {
        e.preventDefault();
        const {id, pw, name, phone, email, passwordcheck, idDoubleCheck, validCode} = this.state;
        if(!idDoubleCheck){
            return alert("아이디 중복확인을 해주세요");
        }
        if(!validCode){
            return alert("이메일 인증을 진행해주세요");
        }
        fetch(CHECK_VALIDATION_API, {
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
                return;
            } 
          alert(result.message);
        })
    }
    
    handleDuplication = () => {
        fetch(DUPLICATION_CHECK_API, {
            method: "POST",
            body: JSON.stringify({
              ID: this.state.id,
            }),
          }).then((res) => res.json())
            .then((result) => {
          if (result.status === "success") {
            this.setState({idDoubleCheck: true});
            alert ("사용가능한 아이디입니다.");
            return;
          } 
          alert(result.message);
        })
    }


    handleAllChecked = () => {
        if (this.state.allNecessaryChecked === true) {
            this.setState({
                checked1: false,
                checked2: false,
                checked3: false,
                allNecessaryChecked: false,
            })
        } else {
            this.setState({
                checked1: true,
                checked2: true,
                checked3: true,
                allNecessaryChecked: true,
            })
        }
        
    }

    handleEachChecked1 = () => {
        this.setState ({
            checked1: !this.state.checked1
        })     
    }
    handleEachChecked2 = () => {
        this.setState ({
            checked2: !this.state.checked2
        })     
    }
    handleEachChecked3 = () => {
        this.setState ({
            checked3: !this.state.checked3
        })     
    }

    componentDidUpdate(prevProps, prevState){
        const {checked1, checked2, checked3} = this.state;
        let prevtruecnt = 0, curtruecnt = 0;
        if(prevState.checked1) prevtruecnt++; 
        if(prevState.checked2) prevtruecnt++;
        if(prevState.checked3) prevtruecnt++;

        if(checked1) curtruecnt++; 
        if(checked2) curtruecnt++;
        if(checked3) curtruecnt++;

        if( prevtruecnt<3 && curtruecnt===3 ) {
            this.setState({
                allNecessaryChecked : true
            })
        } 
        if(prevtruecnt===3 && curtruecnt<3) {
            this.setState({
                allNecessaryChecked : false
            })
        }
        // 이해가 필요해서 주석처리 해놓았습니다.. ㅜ
        // if( !(prevState.checked1 && prevState.checked2 && prevState.checked3) && (checked1 && checked2 &&checked3) ){
        //     this.setState({allNecessaryChecked : true});
        // }
        // if( (prevState.checked1 && prevState.checked2 && prevState.checked3) && !(checked1 && checked2 &&checked3) ){
        //     this.setState({allNecessaryChecked : false});
        // }
    }

    postEmail = () => {
        fetch(POST_EMAIL_API, {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email
            }),
        }).then((res) => res.json())
          .then((result) => {
              if (result.message === 'success') {
                  console.log(result.message);
                  alert('인증코드가 발송되었습니다.');
              }
        })
    }

    validCodeCheck = () => {
        fetch(CODE_CHECK_API, {
            method: 'POST',
            body: JSON.stringify({
                codeNumber: this.state.codeNumber
            }),
        }).then((res) => res.json())
          .then((result) => {
              if (result.message === 'success') {
                  console.log(result.message);
                  this.setState({
                      validCode: true,
                  })
                  alert('인증이 완료되었습니다👩‍💻')
              } return alert('인증코드를 다시 확인해주세요!');
          })
    }
    render() {
        const { 
        id, 
        pw,
        name,
        phone,
        email,
        passwordcheck,
        idDoubleCheck,
        codeNumber,

        validID,
        validPW,
        validDoubleCheck,
        validName,
        validPhone,
        validEmail,
       

        allNecessaryChecked,
        checked1,
        checked2,
        checked3,

        validCode
        } = this.state

        return (
            <div className='SignUp'>
                <div className='joinContent'>
                    <div className='logo'>
                        <Link to='/'>
                            <img src='./images/logo_transparent.png' alt='로고이미지'/>
                        </Link>
                    </div>
                    <div className='joinText'>잠깐 O9마켓 회원이신가요?</div>
                    <div className='joinTextBox'>
                        <span className='joinText'>G9는 </span>
                            <img src='./images/gmarket.png' alt='지마켓'/>
                        <span className='joinText'>아이디로 이용이 가능합니다. </span>
                        <span className='login'>로그인하기 {'>'}</span>
                    </div>
                    <div className='idAndPw'>
                        <div className='idSection'>
                            <input placeholder='아이디' name="id" onChange={this.handleInputValueChange}/>
                            <button onClick={this.handleDuplication}>중복확인</button>
                            {!validID && <p>회원아이디를 정확히 입력해 주세요.</p>}
                        </div>
                        <div className='pwSection'>
                            <div>
                                <input type='password' placeholder='비밀번호' name="pw" onChange={this.handleInputValueChange}/>
                                <div className='locked'>
                                    <AiFillLock size='28' color={pw ? (validPW? '#01b8ff' : 'red') : 'lightgray'}/>
                                </div>
                            </div>
                            {!validPW && <p>비밀번호는 영문 대/소문자, 숫자 및 특수문자의 조합으로 8자 이상 입력해야 합니다.</p>}
                        </div>
                        <div className='pwAgainSection'>
                            <div>
                                <input type='password' name="passwordcheck" onChange={this.handleInputValueChange} placeholder='비밀번호 확인'/>
                                <div className='locked'><FaUserLock size='28' color={passwordcheck ? (validDoubleCheck? '#01b8ff' : 'red') : 'lightgray'}/></div>
                            </div>
                                {!validDoubleCheck && <p>비밀번호가 일치하지 않습니다.</p>}
                        </div>
                        <div className='userInfo'>
                            <div>
                                <input className='nameInput' placeholder='이름' name="name" onChange={this.handleInputValueChange} />
                                {!validName && <p>이름을 입력해 주세요.</p>}
                            </div>
                            <div>
                                <input className='phoneNumberInput' placeholder='휴대폰 번호' name="phone" onChange={this.handleInputValueChange} />
                                {!validPhone && <p>휴대폰 번호를 정확히 입력해 주세요.</p>}
                            </div>
                            <div>
                                <input className='emailInput' placeholder='이메일' name="email" onChange={this.handleInputValueChange} />
                                <button onClick={this.postEmail}>인증코드 발송</button>
                                {!validEmail && <p>메일주소를 정확히 입력해 주세요.</p>}
                            </div>
                            <div>
                                <input className='emailCode' placeholder='인증코드' name="codeNumber" onChange={this.handleInputValueChange} />
                                <button onClick={this.validCodeCheck}>인증코드 확인</button>
                                {codeNumber ? (!validCode ? <p>인증코드를 정확히 입력해 주세요.</p> : '') : ''}
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
                                <input type="checkbox" onChange={this.handleAllChecked} checked={allNecessaryChecked}/>
                                <label for="cb1" />
                                <div>필수항목 전체동의</div>
                            </div>
                            <div className='check'>
                                <input type="checkbox" onChange={this.handleEachChecked1} checked={checked1}/>
                                <label for="cb1" />
                                <div>G9 구매회원 약관</div>
                            </div>
                            <div className='check'>
                                <input type="checkbox" onChange={this.handleEachChecked2} checked={checked2}/>
                                <label for="cb1" />
                                <div>G마켓 구매회원 약관</div>
                            </div>
                            <div className='check'>
                                <input type="checkbox"onChange={this.handleEachChecked3} checked={checked3}/>
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
                        <button onClick={this.checkValidation} >동의하고 회원가입</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;