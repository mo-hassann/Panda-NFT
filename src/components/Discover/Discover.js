import React from "react";
import "./Discover.scss";
import CardInfo from "../../layouts/CardInfo/CardInfo";

function Discover() {
  return (
    <section className="section discover" id="discover">
      <div className="container">
        <h2 className="section__title">
          create and cell your <br /> NFTs
        </h2>
        <div className="cards">
          <CardInfo />
          <CardInfo />
          <CardInfo />
        </div>
      </div>
    </section>
  );
}

export default Discover;
