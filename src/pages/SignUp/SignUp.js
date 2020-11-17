import React, { Component } from 'react';
import './SignUp.scss';

class SignUp extends Component {
    render() {
        return (
            <>
                <div className='joinContent'>
                    <div className='logo'>
                        <img className='o9Logo' src='./images/logo_transparent.png'/>
                    </div>
                    <div className='joinText'>잠깐 G마켓 회원이신가요?</div>
                    <div className='joinTextBox'>
                        <span className='joinText'>G9는 </span>
                        <img className = 'gmarketImage' src='./images/gmarket.png' />
                        <span className='joinText'>아이디로 이용이 가능합니다. </span>
                        <span className='login'>로그인하기 ></span>
                    </div>
                
                    <form className='idAndPw'>
                        {/* <div className='joinInfo'>
                            <input className='id' placeholder='아이디' />
                            <input className='pw' placeholder='비밀번호'></input>
                            <input className='pwAgain' placeholder='비밀번호 확인'></input>
                        </div> */}
                        <div className='idSection'>
                            <input className='idInput' placeholder='아이디'/>
                            <button className='checkDuplication'>중복확인</button>
                        </div>
                        <div className='pwSection'>
                            <input className='pwInput' placeholder='비밀번호'/>
                        </div>
                        <div className='pwAgainSection'>
                            <input className='pwInput' placeholder='비밀번호 확인'/>
                        </div>
                        <div className='userInfo'>
                            <input className='nameInput' placeholder='이름'></input>
                            <input className='phoneNumberInput' placeholder='휴대폰 번호'></input>
                            <input className='emailInput' placeholder='이메일'></input>
                            <div className='infoText'> ※ 만 14세 이상 고객만 가입이 가능합니다.</div>
                        </div>
                    </form>
                    
                    <div className='checkBox'>
                        <div className='agreement'>
                            <input type="checkbox" id="cb1" />
                            <label for="cb1" />
                            <div className='agreementAll'>전체동의</div>
                        </div>
                        <div className='agreementList'>
                            <div className='checkAll'>
                                <input type="checkbox" id="cb1" />
                                <label for="cb1" />
                                <div className='agreementAll'>필수항목 전체동의</div>
                            </div>
                            <div className='check'>
                                <input type="checkbox" id="cb1" />
                                <label for="cb1" />
                                <div className='agreementAll'>G9 구매회원 약관</div>
                            </div>
                            <div className='check'>
                                <input type="checkbox" id="cb1" />
                                <label for="cb1" />
                                <div className='agreementAll'>G마켓 구매회원 약관</div>
                            </div>
                            <div className='check'>
                                <input type="checkbox" id="cb1" />
                                <label for="cb1" />
                                <div className='agreementAll'>개인정보 수집 및 이용</div>
                            </div>
                            <div className='line'></div>
                        </div>
                        <div className='optionalAgreementList'>
                            <div className='checkAll'>
                                <input type="checkbox" id="cb1" />
                                <label for="cb1" />
                                <div className='agreementAll'>선택항목 전체동의</div>
                            </div>
                            <div className='check'>
                                <input type="checkbox" id="cb1" />
                                <label for="cb1" />
                                <div className='agreementAll'>개인정보의 제3자 제공</div>
                            </div>
                            <div className='check'>
                                <input type="checkbox" id="cb1" />
                                <label for="cb1" />
                                <div className='agreementAll'>개인정보 수집 및 이용</div>
                            </div>
                            <div className='check'>
                                <input type="checkbox" id="cb1" />
                                <label for="cb1" />
                                <div className='agreementAll'>쇼핑 이메일 수신</div>
                            </div>
                            <div className='marketingInfo'>상품구매 관련 내용은 수신동의 여부와 관계없이 발송됩니다.</div>
                        </div>
                        <button className='signUpButton'>동의하고 회원가입</button>
                    </div>
                </div>
            </>
        );
    }
}

export default SignUp;