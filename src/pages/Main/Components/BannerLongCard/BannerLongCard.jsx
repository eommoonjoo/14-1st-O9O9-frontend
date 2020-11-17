import React, { PureComponent } from "react";
import "./BannerLongCard.scss";

class BannerLongCard extends PureComponent {
  render() {
    const { bannerItem } = this.props;
    console.log(bannerItem.title);
    return (
      <div className="BannerLongCard">
        <div className="imageContainer">
          <img src={bannerItem.imageUrl} alt="banner image" />
        </div>
        <div className="bannerContentContainer">
          <div className="contentText">
            {bannerItem.title.map((title) => (
              <p className="contentTitle">{title}</p>
            ))}
            {bannerItem.context.map((content) => (
              <p className="contentContext">{content}</p>
            ))}
          </div>
          {bannerItem.items.map((item) => (
            <div className="itemContainer">
              <div className="itemImageContainer">
                <img src={item.imageUrl} alt="item image" />
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
          <span className="bottomLink">이번 가을 뷰티 트렌드 만나보기 ></span>
        </div>
      </div>
    );
  }
}

export default BannerLongCard;
