import React from "react";


import ProductSlider from "./ProductSlider";

import Icon from "../../constants/Icon";

import Styles from "./Product.module.css";

const Product = (props) => {
  return (
    <div className={Styles["products-area"]}>
      <div className={Styles["products-header"]}>
        <h2>{props.title}</h2>
        <p>{props.info}</p>
      </div>
      <div className={Styles["products-slider"]}>
        <ProductSlider productsData={props.productsData} />
      </div>
    </div>
  );
};

export default Product;
