import React, { Component } from "react";
import Select from "react-select";
import ProductCard from "../ProductCard/ProductCard";
import { BsSearch } from "react-icons/bs";
import { RiLayoutGridFill } from "react-icons/ri";
import { RiGridFill } from "react-icons/ri";
import { SELECT_OPTIONS } from "../../ListData";
import "./ProductStand.scss";

const productPerPage = 24;

class ProductStand extends Component {
  constructor() {
    super();
    this.state = {
      smallGrid: true,
      products: [],
      filteredProducts: [],
      searchValue: "",
      page: 1,
      option: { value: "recent", label: "최신순" },
    };
    this.standRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.products !== this.props.products) {
      // 다른 카테고리로 이동하면 초기화
      this.setState({
        products: this.props.products,
        option: { value: "recent", label: "최신순" },
        searchValue: "",
        page: 1,
      });
    }
    if (prevState.page !== this.state.page) {
      //페이지 달라지면 가장 위로 스크롤
      if (this.standRef.current) {
        this.standRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  changeOptions = (e) => {
    const products = [...this.state.products];
    products.sort((product1, product2) => {
      if (e.value === "recent") return product2.id - product1.id;
      if (e.value === "popular") return product2.order - product1.order;
      if (e.value === "lowprice") return product1.price - product2.price;
      if (e.value === "highprice") return product2.price - product1.price;
    });
    this.setState({ products, option: e });
  };

  handleSearchInputChange = (e) => {
    const searchValue = e.target.value;
    const products = [...this.state.products];
    const filteredProducts = products.filter((product) => product.title.includes(searchValue));
    this.setState({ searchValue, filteredProducts });
  };

  getPageButtons = (products) => {
    const { page } = this.state;
    const buttons = [];
    const lastPage = Math.ceil(products.length / productPerPage);
    for (let i = page - 5; i <= page + 5; i++) {
      if (i >= 1 && i <= lastPage) buttons.push(i);
      else if (i > lastPage) break;
    }
    return buttons;
  };

  handlePageButtonClick = (e) => {
    const { innerText } = e.target;
    const { page } = this.state;
    if (innerText === ">") this.setState({ page: page + 1 });
    if (innerText === "<") this.setState({ page: page - 1 });
    if (innerText >= 0) this.setState({ page: parseInt(innerText) });
  };

  getSlicedProducts = (toSliceProducts) => {
    const { page } = this.state;
    if (page * productPerPage > toSliceProducts.length) return toSliceProducts.slice((page - 1) * productPerPage);
    return toSliceProducts.slice((page - 1) * productPerPage, page * productPerPage);
  };

  render() {
    const { smallGrid, products, option, page, searchValue, filteredProducts } = this.state;
    const { showHiddenSubs } = this.props;
    const filtered = searchValue ? filteredProducts : products;
    const pagedProducts = this.getSlicedProducts(filtered);
    const pageButtons = this.getPageButtons(filtered);
    return (
      <section className="ProductStand" ref={this.standRef}>
        {showHiddenSubs && (
          <div className="hiddenSearchContainer">
            <div className="searchContainer">
              <input
                className="hiddenSearch"
                type="text"
                placeholder="결과 내 검색"
                onChange={this.handleSearchInputChange}
                value={searchValue}
              />
              <BsSearch className="searchIcon" />
            </div>
          </div>
        )}
        <div className="standMenu">
          <div className="menuLeft">
            <p>전체 상품 {filtered.length}</p>
          </div>
          <div className="menuRight">
            <RiLayoutGridFill
              className="gridSmallButton"
              size="30"
              color={`${smallGrid ? "black" : "gray"}`}
              onClick={() => this.setState({ smallGrid: true })}
            />
            <RiGridFill
              className="gridBigButton"
              size="30"
              color={`${smallGrid ? "gray" : "black"}`}
              onClick={() => this.setState({ smallGrid: false })}
            />
            <Select
              onChange={this.changeOptions}
              className="optionSelector"
              options={SELECT_OPTIONS}
              defaultValue={SELECT_OPTIONS[0]}
              value={option}
            />
            <input
              className="inputSearch"
              type="text"
              placeholder="결과 내 검색"
              onChange={this.handleSearchInputChange}
              value={searchValue}
            />
            <BsSearch className="searchIcon" />
          </div>
        </div>
        <div className={`productsContainer ${smallGrid ? "grid4" : "grid6"}`}>
          {pagedProducts &&
            pagedProducts.map((item) => (
              <ProductCard key={item.id} product={item} onWishClick={this.props.onWishClick} />
            ))}
        </div>
        <div className="pageButtonContainer">
          {page === 1 ? (
            <button className="inactivated" disabled>
              {"<"}
            </button>
          ) : (
            <button onClick={this.handlePageButtonClick}>{"<"}</button>
          )}
          {pageButtons.map((btn, idx) => (
            <button key={idx} className={page === btn ? "currentPage" : ""} onClick={this.handlePageButtonClick}>
              {btn}
            </button>
          ))}
          {page === Math.ceil(products.length / productPerPage) ? (
            <button className="inactivated" disabled>
              {">"}
            </button>
          ) : (
            <button onClick={this.handlePageButtonClick}>{">"}</button>
          )}
        </div>
      </section>
    );
  }
}

export default ProductStand;
