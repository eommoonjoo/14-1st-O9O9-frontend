import React, { Component } from "react";
import Select from "react-select";
import ProductCard from "../ProductCard/ProductCard";
import { BsSearch } from "react-icons/bs";
import { RiLayoutGridFill } from "react-icons/ri";
import { RiGridFill } from "react-icons/ri";
import { SELECT_OPTIONS } from "../../ListData";
import "./ProductStand.scss";

class ProductStand extends Component {
  constructor() {
    super();
    this.state = {
      smallGrid: true,
      products: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      this.setState({ products: this.props.products });
    }
  }

  changeOptions = (e) => {
    const products = [...this.state.products];
    if (e.value === "recent") {
      products.sort((product1, product2) => product2.id - product1.id);
    } else if (e.value === "popular") {
      products.sort((product1, product2) => product2.order - product1.order);
    } else if (e.value === "lowprice") {
      products.sort((product1, product2) => product1.price - product2.price);
    } else {
      products.sort((product1, product2) => product2.price - product1.price);
    }
    this.setState({ products });
  };

  render() {
    const { smallGrid, products } = this.state;
    return (
      <section className="ProductStand">
        <div className="standMenu">
          <div className="menuLeft">
            <p>전체 상품 {products.length}</p>
          </div>
          <div className="menuRight">
            <RiLayoutGridFill className="gridSmallButton" size="30" color={`${smallGrid ? "black" : "gray"}`} onClick={() => this.setState({ smallGrid: true })} />
            <RiGridFill className="gridBigButton" size="30" color={`${smallGrid ? "gray" : "black"}`} onClick={() => this.setState({ smallGrid: false })} />
            <Select onChange={this.changeOptions} className="optionSelector" options={SELECT_OPTIONS} defaultValue={SELECT_OPTIONS[0]} />
            <input className="inputSearch" type="text" placeholder="결과 내 검색" />
            <BsSearch className="searchIcon" />
          </div>
        </div>
        <div className={`productsContainer ${smallGrid ? "grid4" : "grid6"}`}>{products && products.map((item) => <ProductCard key={item.id} product={item} />)}</div>
      </section>
    );
  }
}

export default ProductStand;
