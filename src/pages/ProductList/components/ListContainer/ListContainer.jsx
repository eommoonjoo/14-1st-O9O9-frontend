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
    this.subContainerRef = React.createRef();
  }

  componentDidMount() {
    Promise.all([this.getSubcategories(), this.getProducts()]);
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

  handleScroll = (event) => {
    const { showHiddenSubs } = this.state;
    if (event.srcElement.scrollingElement.scrollTop > 430 && !showHiddenSubs) this.setState({ showHiddenSubs: true });
    else if (event.srcElement.scrollingElement.scrollTop <= 430 && showHiddenSubs)
      this.setState({ showHiddenSubs: false });
  };

  //현재 카테고리에 해당하는 서브카테고리들을 받아옴
  getSubcategories = async () => {
    // 나중에 this.props.categoryId 사용해서 불러오기
    const subcategories = await axios.get(SUBCATEGORY_MOCK_DATA);
    this.setState({ subcategories: subcategories.data.subcategories });
  };

  // 현재 카테고리의 모든 상품을 받아옴
  getProducts = async () => {
    const queryString = this.props.location.search.split("=");

    //일단은 그냥 목데이터로 하겠음. 추후에 아래 주석 풀긔
    const productsData = await axios.get(PRODUCTS_MOCK_DATA);
    const products = productsData.data.products;
    let newProducts;
    if (queryString.length === 2) {
      const categoryId = parseInt(queryString[1]);
      newProducts = products.filter((item) => item.categoryId === categoryId);
    } else {
      const categoryId = parseInt(queryString[1][0]);
      const subcategoryId = parseInt(queryString[2]);
      newProducts = products.filter((item) => item.categoryId === categoryId && item.subcategoryId === subcategoryId);
    }

    newProducts.sort((product1, product2) => product2.id - product1.id); //받아올때부터 최신순으로 받아오기
    this.setState({ products: newProducts });

    //백엔드와 통신할 부분
    // let newProducts;
    // if (queryString.length === 2) {
    //   const categoryId = parseInt(queryString[1]);
    //   const productsData = await axios.get(MAINCATEGORY_PRODUCTS_DATA_API + `/${categoryId}`);
    //   console.log(productsData.data.product);
    //   newProducts = productsData.data.product;
    // } else {
    //   const categoryId = parseInt(queryString[1][0]);
    //   const subcategoryId = parseInt(queryString[2]);
    //   const productsData = await axios.get(MAINCATEGORY_PRODUCTS_DATA_API + `/${categoryId}/${subcategoryId}`);
    //   console.log(productsData.data.product);
    //   newProducts = productsData.data.product;
    // }
    // newProducts.sort((product1, product2) => product2.id - product1.id);
    // this.setState({ products: newProducts });
  };

  getFilteredProducts = () => {
    const { currentSubCategory } = this.state;
    const products = [...this.state.products];
    if (currentSubCategory === -1) return products;
    return products.filter((item) => item.subCategoryId === currentSubCategory);
  };

  render() {
    const { subcategories, products, showHiddenSubs } = this.state;
    const { categoryId } = this.props;
    return (
      <main className="ListContainer">
        <div className="subcategoryContainer" ref={this.subContainerRef}>
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
        <ProductStand products={products} />
      </main>
    );
  }
}

export default withRouter(ListContainer);
