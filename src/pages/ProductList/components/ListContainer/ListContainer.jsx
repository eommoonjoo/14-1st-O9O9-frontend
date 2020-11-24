import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import HiddenCategories from "../HiddenCategories/HiddenCategories";
import { SUBCATEGORY_IMG } from "../../ListData";
import { SUBCATEGORY_MOCK_DATA, PRODUCTS_MOCK_DATA, MAINCATEGORY_PRODUCTS_DATA_API } from "../../../../config";
import ProductStand from "../ProductStand/ProductStand";
import "./ListContainer.scss";

class ListContainer extends Component {
  constructor() {
    super();
    this.state = {
      subcategories: [],
      products: [],
      showHiddenSubs: false,
    };
  }

  componentDidMount() {
    this.getSubcategories();
    this.getProducts();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.getSubcategories();
      this.getProducts();
    }
  }

  handleWishClick = (item) => {
    const products = [...this.state.products];
    const idx = products.indexOf(item);
    if (products[idx].isWished) products[idx].wish--;
    else products[idx].wish++;
    products[idx].isWished = !products[idx].isWished;
    this.setState({ products });
  };

  handleScroll = (event) => {
    const { showHiddenSubs } = this.state;
    if (event.srcElement.scrollingElement.scrollTop > 430 && !showHiddenSubs) this.setState({ showHiddenSubs: true });
    if (event.srcElement.scrollingElement.scrollTop <= 430 && showHiddenSubs) this.setState({ showHiddenSubs: false });
  };

  //현재 카테고리에 해당하는 서브카테고리들을 받아옴
  getSubcategories = async () => {
    // 나중에 this.props.categoryId 사용해서 불러오기
    const subcategories = await axios.get(SUBCATEGORY_MOCK_DATA);
    this.setState({ subcategories: subcategories.data.subcategories });
  };

  // 현재 카테고리의 모든 상품을 받아옴
  getProducts = async () => {
    const categoryIds = this.parseQueryString(this.props.location.search);

    //일단은 그냥 목데이터로 하겠음. 추후에 아래 주석 풀긔
    // const productsData = await axios.get(PRODUCTS_MOCK_DATA);
    // const products = productsData.data.products;
    // let newProducts;
    // if (categoryIds.subcategoryId) {
    //   newProducts = products.filter(
    //     (item) => item.categoryId === categoryIds.categoryId && item.subcategoryId === categoryIds.subcategoryId
    //   );
    // } else {
    //   newProducts = products.filter((item) => item.categoryId === categoryIds.categoryId);
    // }
    // newProducts.sort((product1, product2) => product2.id - product1.id); //받아올때부터 최신순으로 받아오기
    // this.setState({ products: newProducts });

    //백엔드와 통신할 부분
    let newProducts, productsData;
    console.log(categoryIds);
    if (categoryIds.subcategoryId) {
      productsData = await axios.get(MAINCATEGORY_PRODUCTS_DATA_API + `?sub=${categoryIds.subcategoryId}`);
    } else {
      productsData = await axios.get(MAINCATEGORY_PRODUCTS_DATA_API + `?main=${categoryIds.categoryId}`);
    }
    newProducts = productsData.data.productList;
    newProducts.sort((product1, product2) => product2 - product1);
    console.log(newProducts);
    this.setState({ products: newProducts });
  };

  parseQueryString = (queryString) => {
    const splitted = queryString.split("=");
    const categoryIds = {};
    categoryIds["categoryId"] = +splitted[1][0];
    if (splitted.length >= 3) categoryIds["subcategoryId"] = +splitted[2];
    return categoryIds;
  };

  render() {
    const { subcategories, products, showHiddenSubs } = this.state;
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
        {showHiddenSubs && <HiddenCategories categoryId={categoryId} subcategories={subcategories} />}
        <ProductStand products={products} showHiddenSubs={showHiddenSubs} onWishClick={this.handleWishClick} />
      </main>
    );
  }
}

export default withRouter(ListContainer);
