import React, { Component } from 'react';
import { REAVIEW_MOCK_DATA_API } from '../../../../../config';
import './Review.scss';

const rating = {
  1: '⭐️',
  2: '⭐️⭐️',
  3: '⭐️⭐️⭐️',
  4: '⭐️⭐️⭐️⭐️',
  5: '⭐️⭐️⭐️⭐️⭐️',
};

class Review extends Component {
  constructor() {
    super();
    this.state = { reviewdata: [] };
  }

  componentDidMount() {
    fetch(REAVIEW_MOCK_DATA_API)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ reviewdata: res.reviewdata });
      });
  }

  render() {
    const { reviewdata } = this.state;
    return (
      <div className='Review'>
        <div className='reviewContainer'>
          <h1>
            리뷰 <span>({reviewdata.length})</span>
          </h1>
          <p>패밀리사이트 O마켓에서 작성된 상품평이 같이 노출됩니다.</p>

          <div className='reviewButtonSide'></div>

          <div className='reviewTemplet'>
            <div className='reviewTop'>
              <div className='reviewLabel'>게시자</div>
              <div className='reviewLabel'>만족도</div>
              <div className='reviewLabel'>상품평</div>
              <div className='reviewLabel'>게시일</div>
            </div>

            {reviewdata.map((list, idx) => (
              <div className='reviewContents' key={idx}>
                <div className='reviewInput rateing'>{list.username}</div>
                <div className='reviewInput rateing'>
                  {rating[list.satisfaction]}
                </div>
                <div className='reviewInput'>{list.content}</div>
                <div className='reviewInput rateing'>{list.registDate}</div>
              </div>
              //satisfaction은 숫자로 받으면
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
