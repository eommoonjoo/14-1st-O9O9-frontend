import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

class Footer extends Component {
  constructor() {
    super();
    this.state = { footerMenu: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/categorydata.json', {
      method: 'GET',
    })
      // 서버에서 받은 데이터를 json파일로 변환하고
      .then((res) => res.json())
      // 객체형태의 데이터를 위 state에 미리 만들어둔 빈 comment배열로 들어간다.
      .then((res) => {
        this.setState({
          footerMenu: res.footerMenu,
        });
      });
  }
  render() {
    const { footerMenu } = this.state;
    return (
      <footer className='Footer'>
        <div className='footerContainer'>
          <div className='footerMenu'>
            <ul>
              {footerMenu &&
                footerMenu.map((el, idx) => (
                  <li>
                    <Link>{el.name}</Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className='FooterInfo'>
            <div className='helpCenterTop'>
              <p>
                지구에서
                <br />
                가장 친절한 고객센터
              </p>
              <p>1644-5702</p>
            </div>

            <div className='helpCenterBottom'>
              <div> 상담가능시간</div>
              <div> 오전9시-오후6시 토요일,공휴일 휴무</div>
              <div> 주소</div>
              <div> 경기도 부천시 부일로 223 투나빌딩 9층</div>
              <div> E-Mail</div>
              <div> g9_help@g9.co.kr</div>
            </div>
            <small>분쟁처리절차</small>
          </div>
          <div className='companyInfo'>
            <p className='subject'>이베이코리아 유한책임회사</p>
            <p className='companyInfoContent'>
              서울시 강남구 테헤란로 152 (역삼동 강남파이낸스센터)
              <br />
              <br />
              업무집행자 : 변광윤 Fax : 02-589-8842 사업자정보확인
              <br />
              <br />
              통신판매업신고 : 강남 10630호
              <br />
              <br />
            </p>

            <p className='subject'>전자금융분쟁처리 안내</p>
            <div className='contactInfo'>
              <div> TEL</div>
              <div> 1644 - 5702</div>
              <div> Fax</div>
              <div> 02-589-8844</div>
              <div> Mail</div>
              <div> gmk_cs@corp.gmarket.co.kr</div>
            </div>
            <p className='subject'>저작권 침해 신고하기</p>
          </div>
        </div>

        <div className='copyRight'>
          <p>
            <br />
            G9는 G마켓에서 만든 패밀리사이트입니다.
            <br /> 이베이코리아 유한책임회사 사이트의 상품/판매자/쇼핑 정보,
            콘텐츠, UI 등에 대한 무단 복제, 전송, 배포, 스크래핑 등의 행위는
            저작권법, 콘텐츠산업진흥법 등에 의하여 엄격히 금지됩니다.
            <span>콘텐츠 산업 진흥법에 따른 표시</span> G9는 통신판매중개자이며
            통신판매 당사자가 아닙니다. 따라서 G9는 상품, 거래정보 및 거래에
            대하여 책임을 지지 않습니다.
            <br />
            <br />
            Copyrightⓒ eBay Korea LLC All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
