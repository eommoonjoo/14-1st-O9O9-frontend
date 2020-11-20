import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import HiddenCategories from "../HiddenCategories/HiddenCategories";
import { SUBCATEGORY_IMG } from "../../ListData";
import "./ListContainer.scss";
import ProductStand from "../ProductStand/ProductStand";

class ListContainer extends Component {
  constructor() {
    super();
    this.state = {
      subcategories: [],
      products: [],
    };
  }

  componentDidMount() {
    this.getSubcategories();
    this.getProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.getSubcategories();
      this.getProducts();
    }
  }

  getSubcategories = async () => {
    const subcategories = await axios.get("http://localhost:3000/data/subcategoryData.json");
    this.setState({ subcategories: subcategories.data.subcategories });
  };

  // 현재 카테고리의 모든 상품을 받아옴
  getProducts = async () => {
    const queryString = this.props.location.search.split("=");
    if (queryString.length === 2) {
      // console.log(queryString[1]);
      const categoryId = parseInt(queryString[1]);
      console.log(categoryId);
    } else {
      // console.log(queryString[1][0], queryString[2]);
      const categoryId = parseInt(queryString[1][0]);
      const subcategoryId = parseInt(queryString[2]);
      console.log(categoryId, subcategoryId);
    }

    const products = await axios.get("http://localhost:3000/data/productsdata.json");
    // const products = await axios({
    //   method: "post",
    //   url: "어쩌구저쩌구",
    //   data: {
    //     categoryId: this.props.categoryId,
    //   },
    // });
    // console.log(products);
    this.setState({ products: products.data.products });
  };

  getFilteredProducts = () => {
    const { currentSubCategory } = this.state;
    const products = [...this.state.products];
    if (currentSubCategory === -1) return products;
    else return products.filter((item) => item.subCategoryId === currentSubCategory);
  };

  render() {
    const { subcategories, products } = this.state;
    // console.log(subcategories, products, currentSubCategory);
    const { categoryId } = this.props;
    return (
      <main className="ListContainer">
        <div className="subcategoryContainer">
          {subcategories &&
            subcategories.map((subcategory, idx) => (
              <div key={subcategory.id} className="subcategory">
                <Link to={`/list?category=${categoryId}&subcategory=${subcategory.id}`}>
                  <div className="imageContainer">
                    <img src={SUBCATEGORY_IMG[idx]} alt="subcategory" />
                  </div>
                  <p>{subcategory.name}</p>
                </Link>
              </div>
            ))}
        </div>
        <HiddenCategories subcategories={subcategories} />
        <ProductStand />
      </main>
    );
  }
}

export default withRouter(ListContainer);
