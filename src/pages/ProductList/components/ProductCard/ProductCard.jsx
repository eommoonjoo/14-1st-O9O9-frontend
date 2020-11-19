import React, { Component } from "react";
import "./ProductCard.scss";

class ProductCard extends Component {
  render() {
    return (
      <div className="ProductCard">
        <div className="imageContainer">
          <img src="https://source.unsplash.com/random/500x500" alt="product" />
        </div>
      </div>
    );
  }
}

export default ProductCard;
