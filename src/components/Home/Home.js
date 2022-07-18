import { React, useState, useEffect } from "react";
import "./Home.scss";
import { data } from "../../data";
import Card from "../../layouts/CardArts/CardArts";

export default function Home() {
  const [curetnCard, setCuretnCard] = useState(0);

  const cardsElements = data.cardsArts.map((card) => {
    return <Card key={card.id} curetnNft="all" {...card} />;
  });

  useEffect(() => {
    setInterval(() => {
      setCuretnCard((prevCard) => {
        return cardsElements[prevCard + 1] ? prevCard + 1 : 0;
      });
    }, 3000);
  }, []);

  return (
    <section className="home" id="home">
      <div className="container">
        <div className="home__hero">
          <h1 className="home__hero__titile">Discover a New Era Of Crypto Currency</h1>
          <p className="home__hero__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nam voluptatem est. Lorem ipsum dolor sit amet.</p>
          <a href="#home" className="btn">
            get started
          </a>
        </div>
        <div className="home__cards">{cardsElements[curetnCard]}</div>
      </div>
    </section>
  );
}
