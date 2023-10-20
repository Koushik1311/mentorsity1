"use client";

import React, { MutableRefObject, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

// Import Swiper styles
import "swiper/css";

type swiperType = {
  slideNext: () => void;
  slidePrev: () => void;
};

export default function TopUniversityPartners() {
  const swiperRef: MutableRefObject<swiperType | undefined> = useRef();

  return (
    <section>
      {/* Heading */}
      <h1 className="text-[2.5rem] font-semibold ml-11 sm:ml-32">
        Our Top University Partners
      </h1>
      {/* Navigation Button */}
      <div className="relative">
        {/* Navigation Button Left */}
        <button
          className="absolute top-16 sm:top-14 left-4 md:left-28"
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.slidePrev();
            }
          }}
        >
          <ChevronLeftIcon className="w-8 h-8 text-slate-500 font-extrabold" />
        </button>
        {/* Navigation Button Right */}
        <button
          className="absolute top-16 sm:top-14 right-4 md:right-28"
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.slideNext();
            }
          }}
        >
          <ChevronRightIcon className="w-8 h-8 text-slate-500 font-extrabold" />
        </button>

        {/* Crowsel: Our Top University Partners  */}
        <div className="mx-16 sm:mx-40">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={1}
            slidesPerView={1}
            speed={800}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 5,
              },
            }}
          >
            {/* Crowsel Slides: static */}
            {/* TODO: Make it Dynamic fetch data from api */}
            <SwiperSlide>
              <img src="/university/a.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/university/b.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/university/c.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/university/d.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/university/a.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/university/b.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/university/c.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/university/d.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/university/a.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/university/b.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/university/c.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/university/d.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
