import React from "react";

import Icon from "../../constants/Icon";
import images from "../../constants/images";

import Styles from "./Feature.module.css";

const Feature = (props) => {
  return (
    <div className={Styles["feature"]}>
      <div className={Styles["feature-single"]}>
        <div className={Styles["feature-icon"]}>
          <img src={images.freeShipping} />
        </div>
        <div className={Styles["feature-content"]}>
          <h4>Free Shipping</h4>
          <p>Most product are free shipping.</p>
        </div>
      </div>
      <div className={Styles["feature-single"]}>
        <div className={Styles["feature-icon"]}>
          <img src={images.support} />
        </div>
        <div className={Styles["feature-content"]}>
          <h4>Customer Support</h4>
          <p>24x7 Customer Support.</p>
        </div>
      </div>
      <div className={Styles["feature-single"]}>
        <div className={Styles["feature-icon"]}>
          <img src={images.security} />
        </div>
        <div className={Styles["feature-content"]}>
          <h4>Secure Payment</h4>
          <p>Most Secure Payment for customer.</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
