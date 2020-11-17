import React, { Component } from "react";
import "./BannerCard.scss";

class BannerCard extends Component {
  render() {
    const { bannerItem } = this.props;
    return (
      <div className="BannerCard">
        <div className="imageContainer">
          <img src={bannerItem.imageUrl} alt="banner card image" />
        </div>
        <div className="bannerText">
          <div className="bannerTitle">
            {bannerItem.title.map((title) => (
              <p>{title}</p>
            ))}
            {/* <p>집까지 배송되는 신선함!</p>
            <p>신선지구 3주년 감사제</p> */}
          </div>
          <div className="bannerContext">
            {bannerItem.content.map((content) => (
              <p>{content}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default BannerCard;
