import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import HiddenCategories from "../HiddenCategories/HiddenCategories";
import { SUBCATEGORY_IMG } from "../../ListData";
import { SUBCATEGORY_MOCK_DATA, PRODUCTS_MOCK_DATA } from "../../../../config";
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
      // console.log("링크 바꼈다");
      this.getSubcategories();
      this.getProducts();
    }
  }

  //현재 카테고리에 해당하는 서브카테고리들을 받아옴
  getSubcategories = async () => {
    const subcategories = await axios.get(SUBCATEGORY_MOCK_DATA);
    this.setState({ subcategories: subcategories.data.subcategories });
  };

  // 현재 카테고리의 모든 상품을 받아옴
  getProducts = async () => {
    const queryString = this.props.location.search.split("=");
    //일단은 그냥 목데이터로 하겠음. 추후에 아래 주석 풀긔
    const productsData = await axios.get(PRODUCTS_MOCK_DATA);
    const products = productsData.data.products;
    if (queryString.length === 2) {
      const categoryId = parseInt(queryString[1]);
      const newProducts = products.filter((item) => item.categoryId === categoryId);
      this.setState({ products: newProducts });
    } else {
      const categoryId = parseInt(queryString[1][0]);
      const subcategoryId = parseInt(queryString[2]);
      const newProducts = products.filter((item) => item.categoryId === categoryId && item.subcategoryId === subcategoryId);
      this.setState({ products: newProducts });
    }

    //백엔드와 통신할 부분
    // if (queryString.length === 2) {
    //   const categoryId = parseInt(queryString[1]);
    //   console.log(categoryId);
    //   //여기서 백엔드에 해당 카테고리에 해당하는 프로덕트 목록 요청.
    //   //const products = await axios({"어쩌구저쩌구"}); ㅇㅋ?
    // } else {
    //   const categoryId = parseInt(queryString[1][0]);
    //   const subcategoryId = parseInt(queryString[2]);
    //   console.log(categoryId, subcategoryId);
    //   //여기서 백엔드에 해당 카테고리 && 서브카테고리에 해당하는 프로덕트 목록 요청.
    //   //const products = await axios({"어쩌구저쩌구"}); ㅇㅋ?
    // }

    // const products = await axios({
    //   method: "post",
    //   url: "어쩌구저쩌구",
    //   data: {
    //     categoryId: this.props.categoryId,
    //   },
    // });
    // console.log(products);
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
        <HiddenCategories categoryId={categoryId} subcategories={subcategories} />
        <ProductStand products={products} />
      </main>
    );
  }
}

export default withRouter(ListContainer);
