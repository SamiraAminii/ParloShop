import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Slider from "../Slider/Slider";

import Styles from "./Header.module.css";
import Icon from "../../constants/Icon";

const Header = (props) => {
  return (
    <>
      <Navbar />
      <Slider />
    </>
  );
};

export default Header;
