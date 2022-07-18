import React from "react";
import "./CardArts.scss";
import fire from "../../assets/imgs/fire.png";

function Card({ nftType, curetnNft, prevImg, title, creatorImg, creatorName, currentPaid }) {
  return (
    <div className={`card ${nftType === curetnNft || curetnNft === "all" ? "" : "hidden"}`}>
      <div className="card__view">
        <img src={require(`../../assets/imgs/${prevImg}`)} alt="" className="card__view__img" />
        <div className="card__view__timer">
          <img src={fire} alt="" />
          <p>17 : 07 : 22</p>
        </div>
        <a href="#home" className="btn">
          place a bid
        </a>
      </div>
      <div className="card__header">
        <h4 className="card__header__title">"{title}</h4>
        <div className="btn">{nftType}</div>
      </div>
      <div className="card__info">
        <div className="card__info__auth">
          <img src={require(`../../assets/imgs/${creatorImg}`)} alt="" />
          <div className="card__info__cont">
            <p className="card__info__cont__title">creator</p>
            <p className="card__info__cont__desc">{creatorName}</p>
          </div>
        </div>
        <div className="card__info__cont">
          <p className="card__info__cont__title">current bid</p>
          <p className="card__info__cont__desc">{currentPaid} ETH</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
