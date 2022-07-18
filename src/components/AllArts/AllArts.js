import React, { useEffect, useState } from "react";
import "./AllArts.scss";
import { data } from "../../data";
import Card from "../../layouts/CardArts/CardArts";

function AllArts() {
  const [curentNfts, setCurentNfts] = useState("all");
  const nfts = ["all", ...new Set(data.cardsArts.map((e) => e.nftType))];
  const [cardsNumber, setCardsNumber] = useState(6);

  function selectNfts(e, nftType) {
    e.preventDefault();
    setCurentNfts(nftType);
  }

  const cardsElements = data.cardsArts
    .map((card) => {
      return <Card key={card.id} curetnNft={curentNfts} {...card} />;
    })
    .slice(0, cardsNumber);

  const nftsBtns = nfts.map((nft, i) => {
    return (
      <button key={i} onClick={(e) => selectNfts(e, nft)} className={`btn ${curentNfts === nft ? "" : "btn--secondry"}`}>
        {nft}
      </button>
    );
  });

  function addMore() {
    setCardsNumber((prCardsNumber) => prCardsNumber + 3);
  }

  useEffect(() => {
    if (curentNfts === "all") {
      setCardsNumber(6);
    } else {
      setCardsNumber(data.cardsArts.length);
    }
  }, [curentNfts]);

  return (
    <section className="section all-arts" id="blog">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">hot NFTs</h2>
          <div className="section__btns">{nftsBtns}</div>
        </div>
        <div className="all-arts__cards">{cardsElements}</div>
        <div className="all-arts__btns">
          {cardsNumber < data.cardsArts.length && (
            <button onClick={addMore} className="btn btn--secondry">
              view more
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default AllArts;
