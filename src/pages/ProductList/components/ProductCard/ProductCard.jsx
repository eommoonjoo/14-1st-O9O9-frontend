import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import "./ProductCard.scss";

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="ProductCard">
        <Link to={`/detail/${product.id}`}>
          <div className="imageContainer">
            <img src={product.imageUrl} alt="product" />
          </div>
          <div className="productInfo">
            <p className="productPrice">{Number(product.price).toLocaleString(2)}</p>
            <p className="productTitle">{product.title}</p>
          </div>
          <button className="coupon">10%쿠폰</button>
          <div className="cardBottom">
            <FaRegHeart color={"darkgray"} />
            <span className="wishCount">{product.wish} 찜</span>
            <span className="orderCount">{product.order} 구매</span>
          </div>
          <div className="storeContainer">
            {product.brand && (
              <p>
                {product.brand}
                {" >"}
              </p>
            )}
          </div>
        </Link>
      </div>
    );
  }
}

export default ProductCard;
