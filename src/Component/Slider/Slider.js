import React from "react";

import Icon from "../../constants/Icon";

import { sliderImages } from "../../Data/sliderImages";
import Styles from "./Slider.module.css";

const Slider = (props) => {
  return (
    <div className={Styles.slider}>
      {sliderImages.map(({ img, category, info, btnInfo }) => (
        <div key={category} className={Styles["each-slide"]}>
          <div className={Styles["slider-text"]}>
            <div className={Styles["slider-text-heading"]}>
              <h1>{category}</h1>
            </div>
            <div className={Styles["slider-large-text"]}>
              <p>{info}</p>
            </div>
            <br />
            <button className={Styles["slider-btn"]}>
              <span>{btnInfo}</span>
              <Icon.FiShoppingCart />
            </button>
          </div>
          <div className={Styles["slider-image"]}>
            <img src={img} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
