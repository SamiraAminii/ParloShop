import React from "react";

import Icon from "../../constants/Icon";

// import { bannerImage } from "../../Data/bannerImage";
import Styles from "./Banner.module.css";

const Banner = (props) => {
  return (
    <div className={Styles["banner"]}>
      {props.bannerImage.map(({ img, category, info, btnInfo }) => (
        <div key={category} className={Styles["each-banner"]}>
          <div
            className={Styles["banner-image"]}
            // style={{ backgroundImage: `url(${img})` }}
          >
            <img src={img} />
          </div>
          <div className={Styles["banner-text"]}>
            <h3 className={Styles["banner-text-heading"]}>{category}</h3>

            <p className={Styles["banner-large-text"]}>{info}</p>

            <a className={Styles["banner-btn"]}>{btnInfo}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
