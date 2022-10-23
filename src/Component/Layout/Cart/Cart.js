import React from "react";
import CartItem from "./CartItem";

import Icon from "../../../constants/Icon";
import Styles from "./Cart.module.css";

const Cart = (props) => {
  const CartItems = (
    <ul>
      {[
        {
          id: "c1",
          name: "Lamp",
          src: "./images/cart-1.jpg",
          amount: 2,
          price: 90.0,
        },
        {
          id: "c2",
          name: "Chair",
          src: "./images/cart-2.jpg",
          amount: 1,
          price: 60.0,
        },
      ].map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          src={item.src}
          amount={item.amount}
        />
      ))}
    </ul>
  );
  return (
    <>
      <div className={Styles["cart-toggel"]}>
        <header className={Styles["cart-toggel-header"]}>
          <h3>Shopping Cart</h3>
          <Icon.AiOutlineCloseCircle
            onClick={props.toggleCartShow}
            className={Styles["cart-toggel-close"]}
          />
        </header>

        <div className={Styles["cart-toggel-items"]}>{CartItems}</div>
        <div className={Styles["cart-toggel-totalprice"]}>
          <span>Total : </span>
          <span>260.00</span>
        </div>
        <div className={Styles["cart-toggel-button"]}>
          <button>CHECKOUT</button>
          <button>VIEW CART</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
