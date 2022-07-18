import React from "react";
import "./CardInfo.scss";
import infoImg from "../../assets/imgs/info.png";

function CardInfo() {
  return (
    <div className="card-info">
      <div className="card-info__img">
        <img src={infoImg} alt="" />
      </div>
      <h4 className="card-info__title">set up your wallet</h4>
      <p className="card-info__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magni repudiandae.</p>
    </div>
  );
}

export default CardInfo;
