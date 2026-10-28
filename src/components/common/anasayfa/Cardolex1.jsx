"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Cardolex1.scss";

import slides from "@/helpers/data/card-olex1.json";

export default function Cardolex1() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="gallery-page">

      {/* MAIN SWIPER */}
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
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

      {/* THUMBNAIL SWIPER */}
      <Swiper
        onSwiper={setThumbsSwiper}
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