import React from "react";
import "./Footer.scss";
import logo from "../../assets/imgs/logo.png";

function Footer() {
  return (
    <footer className="footer" id="about us">
      <div className="container">
        <div className="footer__section">
          <a href="#home" className="logo">
            <img src={logo} alt="logo" className="logo__img" />
            <p className="logo__text">Panda NFT</p>
          </a>
          <p className="footer__section__desc">
            The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
          </p>
        </div>

        <div className="footer__section">
          <h4 className="footer__section__title">recorces</h4>
          <ul className="navbar__items footer__section__items">
            <li className="navbar__item">
              <a href="#home">help center</a>
            </li>
            <li className="navbar__item">
              <a href="#home">platform status</a>
            </li>
            <li className="navbar__item">
              <a href="#home">partners</a>
            </li>
            <li className="navbar__item">
              <a href="#home">marketplace</a>
            </li>
            <li className="navbar__item">
              <a href="#home">blog</a>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__section__title">company</h4>
          <ul className="navbar__items footer__section__items">
            <li className="navbar__item">
              <a href="#home">our team</a>
            </li>
            <li className="navbar__item">
              <a href="#home">about us</a>
            </li>
            <li className="navbar__item">
              <a href="#home">contact us</a>
            </li>
            <li className="navbar__item">
              <a href="#home">career</a>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__section__title">contact</h4>
          <p className="footer__section__desc">2715 Ash Dr. San Jose, South Dakota 83475</p>
          <div className="footer__section__social-media">
            <img src={require("../../assets/imgs/facebook.png")} alt="" />
            <img src={require("../../assets/imgs/twitter.png")} alt="" />
            <img src={require("../../assets/imgs/instagram.png")} alt="" />
          </div>
        </div>

        <div className="footer__section">
          <p className="footer__section__desc">&reg; 2022 All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
