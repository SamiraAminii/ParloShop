import React from "react";

import Icon from "../../constants/Icon";

import Styles from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <div className={Styles["product-card"]}>
      <div className={Styles["card-img"]}>
        <a href="#">
          {" "}
          <img src={props.img} />
        </a>
      </div>
      <div className={Styles["card-action"]}>
        <ul>
          <li>
            <a href="#">
              <Icon.BsSearch className={Styles["card-action-icon"]} />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon.FiHeart className={Styles["card-action-icon"]} />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon.FiRefreshCcw className={Styles["card-action-icon"]} />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon.BsBag className={Styles["card-action-icon"]} />
            </a>
          </li>
        </ul>
      </div>
      <div className={Styles["card-content"]}>
        <h4>
          <a href="#">{props.name}</a>
        </h4>
        <span>${props.price}</span>
        <div className={Styles["product-rating"]}>
          <a href="#">
            <Icon.FiStar className={Styles["product-rating-star"]} />
          </a>
          <a href="#">
            <Icon.FiStar className={Styles["product-rating-star"]} />
          </a>
          <a href="#">
            <Icon.FiStar className={Styles["product-rating-star"]} />
          </a>
          <a href="#">
            <Icon.FiStar className={Styles["product-rating-star"]} />
          </a>
          <a href="#">
            <Icon.FiStar className={Styles["product-rating-star"]} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
