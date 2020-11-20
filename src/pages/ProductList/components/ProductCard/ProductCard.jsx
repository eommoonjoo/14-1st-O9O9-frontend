import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import "./ProductCard.scss";

class ProductCard extends Component {
  render() {
    return (
      <div className="ProductCard">
        {/* 디테일 페이지로 이동시킬것 */}
        <Link to="">
          <div className="imageContainer">
            <img src="https://source.unsplash.com/random/500x500" alt="product" />
          </div>
          <p className="productPrice">26010</p>
          <p className="productTitle">마이닭 마이닭 닭가슴살 소세지 핫바 70g 4종 30팩 골라담기</p>
          <button className="coupon">10%쿠폰</button>
          <div className="cardBottom">
            <FaRegHeart color={"darkgray"} />
            <span className="wishCount">79 찜</span>
            <span className="orderCount">1166 구매</span>
          </div>
          <div className="storeContainer">
            <p>마이크로소프트 스토어 {">"}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default ProductCard;
