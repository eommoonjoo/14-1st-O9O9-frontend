import React, { Component } from "react";
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
    };
  }

  componentDidMount() {
    this.getSubcategories();
  }

  getSubcategories = async () => {
    const subcategories = await axios.get("http://localhost:3000/data/subcategoryData.json");
    // console.log(subcategories.data.subcategories);
    this.setState({ subcategories: subcategories.data.subcategories });
  };

  render() {
    const { subcategories } = this.state;
    return (
      <main className="ListContainer">
        <div className="subcategoryContainer">
          {subcategories &&
            subcategories.map((subcategory, idx) => (
              <div key={subcategory.id} className="subcategory">
                <div className="imageContainer">
                  <img src={SUBCATEGORY_IMG[idx]} alt="subcategory" />
                </div>
                <p>{subcategory.name}</p>
              </div>
            ))}
        </div>
        <HiddenCategories subcategories={subcategories} />
        <ProductStand />
      </main>
    );
  }
}

export default ListContainer;
