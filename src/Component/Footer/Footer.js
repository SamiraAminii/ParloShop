import React from "react";

import Icon from "../../constants/Icon";
import images from "../../constants/images";

import "./Footer.css";
// import "bootstrap/dist/css/bootstrap.css";

const Footer = (props) => {
  return (
    <footer class="footer-area ">
      <div class="footer-top ">
        <nav>
          <ul>
            <li>
              <a href="index.html">Home </a>
            </li>
            <li>
              <a href="shop.html">Shop </a>
            </li>
            <li>
              <a href="shop.html">Accessories </a>
            </li>
            <li>
              <a href="contact-us.html">Contact </a>
            </li>
            <li>
              <a href="about-us.html">About </a>
            </li>
            <li>
              <a href="blog.html">Blog </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="footer-bottom ">
        <div class="footer-social ">
          <a href="#">Facebok</a>
          <a href="#">Twitter</a>
          <a href="#">Linkedin</a>
          <a href="#">Instagram</a>
        </div>

        <div class="copyright ">
          <p>Copyright © All Right Reserved</p>
        </div>

        <div class="payment-mathod ">
          <a href="#">
            <img src={images.payment} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
