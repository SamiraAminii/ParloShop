import React from "react";

import Styles from "./Settings.module.css";

const Settings = (props) => {
  return (
    <>
      <div className={Styles["setting-content"]}>
        <ul>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Create Account</a>
          </li>
          <li>
            <a href="#">My Account</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Settings;
