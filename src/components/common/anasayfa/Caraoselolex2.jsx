"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./Caraoselolex.scss";

import data from "@/helpers/data/caraosel2-icerik.json";

export default function Caraoselolex2() {
  return (
    <div className="carousel-olex">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {data.map((item) => (
      <SwiperSlide key={item.id}>
            <p className="title">{item.title}</p>
            <img src={item.image} alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}