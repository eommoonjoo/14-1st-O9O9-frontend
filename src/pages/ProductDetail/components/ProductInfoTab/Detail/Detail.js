import React, { Component } from 'react';
import './Detail.scss';

class Detail extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { productInfo } = this.props;
    return (
      <div className='Detail'>
        <img
          src={productInfo && productInfo.detailproduct_image}
          alt='detail_Image'
        />

        <div className='questionModal'>
          <div className='modalContainer'>
            <h1>상품정보제공 고시 상세 정보</h1>
            <div className='modalTemplate'>
              <div className='subtitle'>상품번호</div>
              <div className='radioGroup'>
                {productInfo.more_information &&
                  productInfo.more_information.business_classification}
              </div>
              <div className='subtitle'>면세여부</div>
              <div>
                {productInfo.more_information &&
                  productInfo.more_information.tax_status}
              </div>
              <div className='subtitle'>영수증발행</div>
              <div>
                {productInfo.more_information &&
                  productInfo.more_information.receipt}
              </div>
              <div className='subtitle'>사업자구분</div>
              <div>
                {productInfo.more_information &&
                  productInfo.more_information.origin}
              </div>
              <div className='subtitle'>생산자/수입자</div>
              <div>
                {productInfo.more_information &&
                  productInfo.more_information.producer_importer}
              </div>
              <div className='subtitle lastrow'>원산지</div>
              <div>
                {productInfo.more_information &&
                  productInfo.more_information.origin}
              </div>
              <div className='subtitle lastrow'>제조연월일</div>
              <div>
                {productInfo.more_information &&
                  productInfo.more_information.manufacturing_date}
              </div>
              <div className='subtitle lastrow'>유통기한</div>
              <div>
                {productInfo.more_information &&
                  productInfo.more_information.shelf_life}
              </div>
              <div className='subtitle lastrow'>보관방법 또는 취급방법</div>
              <div>
                {productInfo.more_information &&
                  productInfo.more_information.origin}
              </div>
              <div className='subtitle lastrow'>주문후 예상 배송기간</div>
              <div className='lastrow'>
                {productInfo.more_information &&
                  productInfo.more_information.delivery_period}
              </div>
            </div>
            <h1 className='sellerTitle'>판매자 정보</h1>
            <div className='sellerInfo'>
              <div className='subtitle bold'>상호/대표자</div>
              <div>
                {productInfo.seller_information &&
                  productInfo.seller_information.representative}
              </div>
              <div className='subtitle'>사업자번호</div>
              <div>
                {productInfo.seller_information &&
                  productInfo.seller_information.business_number}
              </div>
              <div className='subtitle lastrow bold'>연락처</div>
              <div className='lastrow'>
                0
                {productInfo.seller_information &&
                  productInfo.seller_information.phone_number}
              </div>
              <div className='subtitle lastrow'>E-mail</div>
              <div className='lastrow'>
                {productInfo.seller_information &&
                  productInfo.seller_information.email}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
