import React, { useState } from "react";

import Cart from "./Cart/Cart";
import Settings from "./Settings";

import Icon from "../../constants/Icon";
import images from "../../constants/images";
import Styles from "./Navbar.module.css";

const Navbar = (props) => {
  let num = "03";
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const [toggleSettings, setToggleSettings] = useState(false);

  const toggleSearchShow = () => {
    setToggleSearch(true);
    setToggleCart(false);
    setToggleSettings(false);
  };
  const toggleCartShow = () => {
    setToggleCart((t) => !t);
    setToggleSettings(false);
  };
  const toggleSettingsShow = () => {
    setToggleSettings((t) => !t);
    setToggleCart(false);
  };

  return (
    <nav className={Styles.nav}>
      <div className={Styles.logo}>
        <img src={images.logo} />
      </div>
      <div className={Styles.links}>
        <ul>
          <li>
            <a href="#">Home</a>{" "}
          </li>
          <li>
            <a href="#">Shop</a>{" "}
          </li>
          <li>
            <a href="#">Blog</a>{" "}
          </li>
          <li>
            <a href="#">About us</a>{" "}
          </li>
          <li>
            <a href="#">Contact us</a>{" "}
          </li>
        </ul>
      </div>
      <div className={Styles["right-content"]}>
        <ul className={Styles["right-content-ul"]}>
          <li>
            <a onClick={toggleSearchShow} href="#">
              <Icon.BsSearch className={Styles["icon-nav"]} />
            </a>
          </li>
          {toggleSearch && (
            <div className={`${Styles["search-overlay"]} ${Styles.inside}`}>
              <Icon.AiOutlineCloseCircle
                onClick={() => setToggleSearch(false)}
                className={`${Styles["close-overlay"]} ${Styles.icon}`}
              />
              <form>
                <div className={Styles["search-input"]}>
                  <input type="search" placeholder="Search Now" />
                  <Icon.BsSearch
                    className={`${Styles["search-icon-input"]} ${Styles.icon}`}
                  />
                </div>
              </form>
            </div>
          )}

          <li data-before={num} className={Styles.cart}>
            <a href="#" onClick={toggleCartShow}>
              <Icon.BsBag className={Styles["icon-nav"]} />
            </a>
            <span>$0.00</span>
          </li>
          {toggleCart && <Cart toggleCartShow={toggleCartShow} />}

          <li>
            <a href="#" onClick={toggleSettingsShow}>
              <Icon.FiSettings className={Styles["icon-nav"]} />
            </a>
          </li>
          {toggleSettings && <Settings />}
        </ul>
      </div>
      <div className={Styles["nav-smallscreen"]}>
        {toggleMenu && (
          <div
            onClick={() => {
              setToggleMenu(false);
            }}
            className={Styles["nav-smallscreen-overlay"]}
          ></div>
        )}
        <ul className={Styles["right-content-smallscreen"]}>
          <li data-before={num} className={Styles.cart}>
            <a href="#" onClick={toggleCartShow}>
              <Icon.BsBag className={Styles["icon-nav"]} />
              <span>$0.00</span>
            </a>
          </li>
          {toggleCart && <Cart toggleCartShow={toggleCartShow} />}
          <li>
            <a href="#">
              {" "}
              <Icon.AiOutlineMenu
                onClick={() => {
                  setToggleMenu(true);
                  setToggleCart(false);
                }}
                className={Styles["icon-nav"]}
              />
            </a>
          </li>
        </ul>
        {toggleMenu && (
          <div className={Styles["links-smallscreen-overlay"]}>
            <Icon.AiOutlineCloseCircle
              className={Styles["close-links-icon"]}
              onClick={() => {
                setToggleMenu(false);
              }}
            />

            <div className={Styles["searchbox-smallscreen"]}>
              <form>
                <input placeholder="Search entire stor" />
                <div className={Styles["searchbox-smallscreen-icon"]}>
                  <Icon.BsSearch />
                </div>
              </form>
            </div>
            <div className={Styles["links-smallscreen"]}>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div className={Styles["account-smallscreen"]}>
              <ul>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Creat Account</a>
                </li>
                <li>
                  <a href="#">My Account</a>
                </li>
              </ul>
            </div>
            <div className={Styles["socialmedia-smallscreen"]}>
              <a href="#">
                <Icon.FiFacebook />
              </a>
              <a href="#">
                <Icon.FiTwitter />
              </a>
              <a href="#">
                <Icon.FiInstagram />
              </a>
              <a href="#">
                <Icon.AiOutlineGoogle />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
