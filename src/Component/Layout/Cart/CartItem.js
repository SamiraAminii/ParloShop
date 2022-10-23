import React from "react";

import Styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={Styles["cart-item"]}>
      <div className={Styles["cart-item-img"]}>
        <a href="#">
          {" "}
          <img src={props.src} />
        </a>
      </div>
      <div className={Styles["cart-item-description"]}>
        <h4>
          {" "}
          <a href="#"> {props.name}</a>
        </h4>
        <span>{props.amount}</span>
        <span> x </span>
        <span>{props.price}</span>
      </div>
    </li>
  );
};

export default CartItem;
