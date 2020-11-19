import React, { Component } from "react";
import "./HiddenCategories.scss";

class HiddenCategories extends Component {
  render() {
    const { subcategories } = this.props;
    return <div className="HiddenCategories">{subcategories && subcategories.map((subcategory) => <span>{subcategory.name}</span>)}</div>;
  }
}

export default HiddenCategories;
