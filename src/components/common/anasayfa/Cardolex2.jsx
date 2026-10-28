"use client";

import { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import "./Cardolex2.scss";

import slides from "@/helpers/data/card-olex1.json";

export default function Cardolex2() {
  const thumbsRef = useRef(null);

  return (
    <div className="gallery-page">

      {/* MAIN SWIPER */}
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        navigation={true}
        pagination={{ clickable: true }}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        thumbs={{ swiper: thumbsRef.current }}

        modules={[Autoplay, Pagination, Navigation, FreeMode, Thumbs]}
        className="mainSwiper"
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="main-image">
              <Image
                src={item.image}
                alt={item.title}
                fill
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* THUMB SWIPER */}
      <Swiper
        onSwiper={(swiper) => {
          thumbsRef.current = swiper;
        }}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="thumbSwiper"
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="thumb-image">
              <Image
                src={item.image}
                alt={item.title}
                fill
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}