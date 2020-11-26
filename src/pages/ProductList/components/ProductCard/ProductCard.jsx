import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./ProductCard.scss";

class ProductCard extends Component {
  constructor() {
    super();
  }

  handleClick = () => {
    this.props.history.push(`/detail/${this.props.product.id}`);
  };

  render() {
    const { product } = this.props;
    return (
      <div className="ProductCard">
        <div className="imageContainer" onClick={this.handleClick}>
          <img src={product.image_url} alt="product" />
        </div>
        <div className="productInfo" onClick={this.handleClick}>
          <p className="productPrice">{Number(product.price).toLocaleString(2)}</p>
          <p className="productTitle">{product.title}</p>
        </div>
        <button className="coupon">10%쿠폰</button>
        <div className="cardBottom">
          <div className="wishContainer">
            {product.isWished ? (
              <FaHeart className="heartIcon" color={"#f73b4f"} onClick={() => this.props.onWishClick(product)} />
            ) : (
              <FaRegHeart className="heartIcon" color={"darkgray"} onClick={() => this.props.onWishClick(product)} />
            )}
            <span className="wishCount">{product.watch_list} 찜</span>
          </div>
          <span className="orderCount">{product.buy_count} 구매</span>
        </div>
        <div className="storeContainer">
          {product.brand && (
            <p>
              {product.brand}
              {" >"}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(ProductCard);
