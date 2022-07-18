import React from "react";
import "./Partners.scss";

import item1 from "../../assets/imgs/item-1.png";
import item2 from "../../assets/imgs/item-2.png";
import item3 from "../../assets/imgs/item-3.png";
import item4 from "../../assets/imgs/item-4.png";
import item5 from "../../assets/imgs/item-5.png";

function Partners() {
  return (
    <section className="section partners">
      <div className="container">
        <ul className="partners__list">
          <ul className="partners__list__item">
            <img src={item1} alt="" />
          </ul>
          <ul className="partners__list__item">
            <img src={item2} alt="" />
          </ul>
          <ul className="partners__list__item">
            <img src={item3} alt="" />
          </ul>
          <ul className="partners__list__item">
            <img src={item4} alt="" />
          </ul>
          <ul className="partners__list__item">
            <img src={item5} alt="" />
          </ul>
        </ul>
      </div>
    </section>
  );
}

export default Partners;
