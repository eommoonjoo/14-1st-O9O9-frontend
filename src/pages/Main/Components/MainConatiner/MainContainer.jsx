import React, { Component } from "react";
import MainImageCarousel from "../MainImageCarousel/MainImageCarousel";
import BannerCard from "../BannerCard/BannerCard";
import BannerLongCard from "../BannerLongCard/BannerLongCard";
import { BANNER_TOP, BANNER_LONG } from "../../mainData.js";
import "./MainContainer.scss";

class MainContainer extends Component {
  render() {
    return (
      <div className="MainContainer">
        <MainImageCarousel />
        <ul className="topBannerList">
          {BANNER_TOP.map((bannerItem) => (
            <li key={bannerItem.id} className="bannerItem">
              <BannerCard bannerItem={bannerItem} />
            </li>
          ))}
        </ul>
        <ul className="bottomBannerList">
          {BANNER_LONG.map((bannerItem) => (
            <li key={bannerItem.id} className="bannerItem">
              <BannerLongCard bannerItem={bannerItem} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MainContainer;
