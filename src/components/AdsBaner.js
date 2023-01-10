import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/custom_swiper.css";

function AdsBaner() {
  return (
    <div className="grid">
      <div className="ads__wrap">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="ads__all-img"
        >
          <SwiperSlide>
            <img
              src="assets/baner.png"
              alt="-50% All breakfast"
              className="ads__baner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="assets/baner2.png"
              alt="set of shots 9$"
              className="ads__baner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="assets/baner3.png"
              alt="Philadelfia 10$"
              className="ads__baner"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default AdsBaner;
