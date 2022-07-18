import React from "react";
import "./CardArtists.scss";
import icons from "../../assets/icons/icons.svg";

function CardArtist({ prevImg, artistImg, artistName, artistPrice }) {
  return (
    <div className="card-artist">
      <div className="card-artist__art">
        <img src={require(`../../assets/imgs/${prevImg}`)} className="card-artist__art__background" alt="" />
        <a href="#home" className="btn">
          call
        </a>
      </div>
      <div className="card-artist__info">
        <div className="card-artist__info__artist">
          <img src={require(`../../assets/imgs/${artistImg}`)} alt="" />
        </div>
        <h4 className="card-artist__info__name">{artistName}</h4>
        <p className="card-artist__info__price">
          <svg className="icon icon-mony">
            <use xlinkHref={`${icons}#icon-mony`}></use>
          </svg>
          {artistPrice}k
        </p>
      </div>
    </div>
  );
}

export default CardArtist;
