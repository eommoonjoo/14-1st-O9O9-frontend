import React, { Component } from 'react';
import './Review.scss';

class Review extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='Review'>
        <div className='reviewContainer'>
          <h1>
            리뷰 <span>(76)</span>
          </h1>
          <p>패밀리사이트 [We구]에서 작성된 상품평이 같이 노출됩니다.</p>

          <div className='reviewButtonSide'></div>

          <div className='reviewTemplet'>
            <div className='reviewTop'>
              <div className='reviewLabel'>게시자</div>
              <div className='reviewLabel'>만족도</div>
              <div className='reviewLabel'>상품평</div>
              <div className='reviewLabel'>게시일</div>
            </div>

            {/* Map돌릴부분 */}
            <div className='reviewContents'>
              <div className='reviewInput rateing'>ryuwisdom</div>
              <div className='reviewInput rateing'>⭐️⭐️⭐️⭐️⭐️</div>
              <div className='reviewInput'>예쁩니다 ^__^ 잘쓰겠습니다!</div>
              <div className='reviewInput rateing'>2020.11.19</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
