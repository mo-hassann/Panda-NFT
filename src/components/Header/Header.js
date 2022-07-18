import { React, useState, useEffect } from "react";
import "./Header.scss";
import logo from "../../assets/imgs/logo.png";
import icons from "../../assets/icons/icons.svg";

export default function Header({ fixedNavbar, setFixedNavbar }) {
  const [mobileNavbarActive, setMobileNavbarActive] = useState(false);
  const [curNavItem, setCurNavItem] = useState("home");
  const navItems = ["home", "discover", "auctions", "blog", "create NFT"];

  function activeNavbar() {
    setMobileNavbarActive((prevmobileNavbarActive) => !prevmobileNavbarActive);
  }

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.pageYOffset > 100) {
        setFixedNavbar(true);
      } else {
        setFixedNavbar(false);
      }
    });
  });

  useEffect(() => {
    setMobileNavbarActive(false);
  }, [curNavItem]);

  const navItemsElements = navItems.map((item, i) => {
    return (
      <li key={i} className={`navbar__item ${curNavItem === item ? "active" : ""}`}>
        <a href={`#${item}`} onClick={() => setCurNavItem(item)}>
          {item}
        </a>
      </li>
    );
  });

  return (
    <header className={`header ${fixedNavbar ? "fixed" : ""}`}>
      <div className="container">
        <a href="#home" className="logo">
          <img src={logo} alt="logo" className="logo__img" />
          <p className="logo__text">Panda NFT</p>
        </a>
        <nav className={`navbar ${mobileNavbarActive ? "active" : ""}`}>
          <ul className="navbar__items">{navItemsElements}</ul>
          <a href="#home" className="btn btn--secondry">
            connect wallet
          </a>
        </nav>
        <svg className="icon mobile-menu" onClick={activeNavbar}>
          <use xlinkHref={`${icons}#${mobileNavbarActive ? "icon-close" : "icon-menu"}`}></use>
        </svg>
      </div>
    </header>
  );
}
