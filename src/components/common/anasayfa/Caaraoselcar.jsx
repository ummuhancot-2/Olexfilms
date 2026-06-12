"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./Caraoselolex.scss";

export default function Caraoselcar() {
  return (
    <div className="carousel-olex">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <img src="/logo/olex.png" alt="Olex" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/logo/olex.png" alt="Olex" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/logo/logo.png" alt="Logo" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}