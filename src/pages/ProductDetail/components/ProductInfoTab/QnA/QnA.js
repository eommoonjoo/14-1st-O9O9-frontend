import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { QNA_MOCK_DATA_API } from '../../../../../config';

import QnAList from '../QnA/QnAList';
import './QnA.scss';

class QnA extends Component {
  constructor() {
    super();
    // 차후에 배열 형태로 변경 예정
    this.state = { openComment: false, qnadata: [] };
  }

  // 승제님 api는 요기서
  componentDidMount() {
    fetch('http://10.58.4.236:8000/review/question')
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        this.setState({ qnadata: res.question_list });
      });
  }

  render() {
    const { qnadata } = this.state;
    const { productInfo } = this.props;

    console.log(qnadata);
    return (
      <>
        <div className='QnA'>
          <div className='qnAContainer'>
            <div className='qnAHead'>
              <h1>
                판매자에게 문의하기<span>({qnadata.length})</span>
              </h1>
              <p>
                &nbsp;상품, 배송, 취소/반품, A/S 등의 문의를 남겨주시면 판매자가
                직접 답변을 드립니다.
              </p>
            </div>

            <div className='qnAButtonSide'>
              <button>
                <Link onClick={this.props.modalHandler}>문의하기</Link>
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

              {/* 여기서는 <QnAList/>에 이벤트를 주고 map을 돌리면 된다.*/}
              {qnadata.map((el, inx) => (
                <QnAList key={inx} qnadata={el} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default QnA;
