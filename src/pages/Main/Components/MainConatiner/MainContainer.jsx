import React, { Component } from "react";
import BannerCard from "../BannerCard/BannerCard";
import BannerLongCard from "../BannerLongCard/BannerLongCard";
import "./MainContainer.scss";
import { BANNER_TOP, BANNER_LONG } from "./bannerdata.js";

class MainContainer extends Component {
  render() {
    return (
      <div className="MainContainer">
        {/* 나중에 Component 구현하거나 라이브러리 받아올 예정 */}
        <section className="imageCarousel">
          <img src="https://source.unsplash.com/random/1920x1080" alt="carousel image" className="carouselImage" />
        </section>
        {/* 나중에 Component 구현하거나 라이브러리 받아올 예정 */}
        <ul className="topBannerList">
          {BANNER_TOP.map((bannerItem) => (
            <li className="bannerItem">
              <BannerCard key={bannerItem.id} bannerItem={bannerItem} />
            </li>
          ))}
        </ul>
        <ul className="bottomBannerList">
          {BANNER_LONG.map((bannerItem) => (
            <li className="bannerItem">
              <BannerLongCard key={bannerItem.id} bannerItem={bannerItem} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MainContainer;
