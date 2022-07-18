import React from "react";
import { data } from "../../data";
import "./Artists.scss";
import CardArtists from "../../layouts/CardArtists/CardArtists";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Artists() {
  const cardsElements = data.cardsArtists.map((card) => {
    return (
      <SwiperSlide key={card.id}>
        <CardArtists prevImg={card.prevImg} artistImg={card.artistImg} artistName={card.artistName} artistPrice={card.artistPrice} />
      </SwiperSlide>
    );
  });

  return (
    <section className="section artists">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">live Artists</h2>
          <a href="#home" className="btn">
            view more
          </a>
        </div>
        <div className="artists__cards">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
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

export default Artists;
