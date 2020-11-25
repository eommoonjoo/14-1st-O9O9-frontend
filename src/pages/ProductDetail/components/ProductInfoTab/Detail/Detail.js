import React, { Component } from 'react';
import './Detail.scss';

class Detail extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { productInfo } = this.props;
    console.log();
    return (
      <div className='Detail'>
        <img
          src={productInfo && productInfo.detailproductImage}
          alt='detail_Image'
        />

        <div className='questionModal'>
          <div className='modalContainer'>
            <h1>상품정보제공 고시 상세 정보</h1>
            <div className='modalTemplate'>
              <div className='subtitle'>상품번호</div>
              <div className='radioGroup'>
                {productInfo.moreInformation &&
                  productInfo.moreInformation.business_classification}
              </div>
              <div className='subtitle'>면세여부</div>
              <div>
                {productInfo.moreInformation &&
                  productInfo.moreInformation.tax_status}
              </div>
              <div className='subtitle'>영수증발행</div>
              <div>
                {productInfo.moreInformation &&
                  productInfo.moreInformation.receipt}
              </div>
              <div className='subtitle'>사업자구분</div>
              <div>
                {productInfo.moreInformation &&
                  productInfo.moreInformation.origin}
              </div>
              <div className='subtitle'>생산자/수입자</div>
              <div>
                {productInfo.moreInformation &&
                  productInfo.moreInformation.producer_importer}
              </div>
              <div className='subtitle lastrow'>원산지</div>
              <div>
                {productInfo.moreInformation &&
                  productInfo.moreInformation.origin}
              </div>
              <div className='subtitle lastrow'>제조연월일</div>
              <div>
                {productInfo.moreInformation &&
                  productInfo.moreInformation.manufacturing_date}
              </div>
              <div className='subtitle lastrow'>유통기한</div>
              <div>
                {productInfo.moreInformation &&
                  productInfo.moreInformation.shelf_life}
              </div>
              <div className='subtitle lastrow'>보관방법 또는 취급방법</div>
              <div>
                {productInfo.moreInformation &&
                  productInfo.moreInformation.origin}
              </div>
              <div className='subtitle lastrow'>주문후 예상 배송기간</div>
              <div className='lastrow'>
                {productInfo.moreInformation &&
                  productInfo.moreInformation.delivery_period}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
