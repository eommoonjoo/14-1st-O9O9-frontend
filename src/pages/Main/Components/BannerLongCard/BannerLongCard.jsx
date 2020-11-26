import React, { PureComponent } from "react";
import "./BannerLongCard.scss";

class BannerLongCard extends PureComponent {
  render() {
    const { bannerItem } = this.props;
    return (
      <div className="BannerLongCard">
        <div className="imageContainer">
          <img src={bannerItem.imageUrl} alt="banner" />
        </div>
        <div className="bannerContentContainer">
          <div className="contentText">
            {bannerItem.title.map((title, idx) => (
              <p key={idx} className="contentTitle">
                {title}
              </p>
            ))}
            {bannerItem.context.map((content, idx) => (
              <p key={idx} className="contentContext">
                {content}
              </p>
            ))}
          </div>
          {bannerItem.items.map((item, idx) => (
            <div key={idx} className="itemContainer">
              <div className="itemImageContainer">
                <img src={item.imageUrl} alt="item" />
              </div>
              <div className="itemDetailContainer">
                <p className="itemPrice">{item.price}</p>
                <p className="itemDetail">{item.context}</p>
                <button className="coupon">{item.coupon}%쿠폰</button>
              </div>
            </div>
          ))}
        </div>
        <div className="bottomLinkContainer">
          <span className="bottomLink">이번 가을 뷰티 트렌드 만나보기 {">"}</span>
        </div>
      </div>
    );
  }
}

export default BannerLongCard;
