import React from "react";
import "./LiveArts.scss";
import { data } from "../../data";
import Card from "../../layouts/CardArts/CardArts";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Arts() {
  const cardsElements = data.cardsArts.map((card) => {
    return (
      <SwiperSlide key={card.id}>
        <Card prevImg={card.prevImg} nftType={card.nftType} curetnNft="all" creatorImg={card.creatorImg} title={card.title} currentPaid={card.currentPaid} creatorName={card.creatorName} />
      </SwiperSlide>
    );
  });

  return (
    <section className="section arts" id="auctions">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">live Auctions</h2>
          <a href="#home" className="btn">
            view more
          </a>
        </div>
        <div className="arts__cards">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            breakpoints={{
              320: {
                width: 320,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
          >
            {cardsElements}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Arts;
