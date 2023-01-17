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
            <picture>
              <source
                media="(max-width: 575px)"
                srcSet="assets/baner_mob.jpg 1x, assets/banermob2x.png 2x"
                sizes="575px"
              />
              <source srcSet="assets/baner.jpg 1200w" sizes="1200px" />

              <img
                src="assets/baner.jpg"
                alt="-50% All breakfast"
                className="ads__baner"
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source
                media="(max-width: 575px)"
                srcSet="assets/baner2_mob.jpg 1x, assets/baner2mob2x.png 2x"
                sizes="575px"
              />
              <source srcSet="assets/baner2.jpg 1200w" sizes="1200px" />
              <img src="assets/baner2.jpg" className="ads__baner" />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source
                media="(max-width: 575px)"
                srcSet="assets/baner3_mob.jpg 1x, assets/baner3mob2x.png 2x"
                sizes="575px"
              />
              <source srcSet="assets/baner3.jpg 1200w" sizes="1200px" />
              <img src="assets/baner3.jpg" className="ads__baner" />
            </picture>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default AdsBaner;
