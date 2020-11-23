import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { QNA_MOCK_DATA_API } from '../../../../../config';
import './QnAList.scss';

const typeTable = {
  1: '상품',
  2: '배송',
  3: '취소',
  4: '반품',
  5: '교환',
  6: '기타',
};

class QnAList extends Component {
  constructor() {
    super();
    this.state = { qnadata: [] };
  }

  commentHandler = () => {
    this.setState({ openComment: !this.state.openComment });
  };

  render() {
    const { qnadata } = this.props;
    return (
      <div className='QnAList'>
        <div className='qnaContents'>
          <div className='qnaInput fitCenter'>{qnadata.registNumber}</div>
          <div className='qnaInput fitCenter'>{typeTable[qnadata.askType]}</div>
          <div className='qnaInput fitCenter'>{qnadata.answerState}</div>
          <div className='qnaInput qnADropDown'>
            <Link onClick={this.commentHandler}>{qnadata.subject}</Link>
          </div>
          <div className='qnaInput fitCenter'>{qnadata.username}</div>
          <div className='qnaInput fitCenter'>{qnadata.registDate}</div>
        </div>
        {this.state.openComment ? (
          <div className='dropDownContent'>
            <div className='question'>
              <h3>Q&nbsp;</h3>
              <span>{qnadata.subject}</span>
            </div>
            <div className='answer'>
              <h3>A&nbsp;</h3>
              <span>
                {qnadata.answer}
                <br />
                <br />
                <p>판매자의 답변 | 2020-11-17 오후 11:18:51</p>
              </span>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default QnAList;
