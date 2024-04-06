import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/Main.css";

// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper/modules";
// import Images
import b1 from "../img/b1.jpg";
import b2 from "../img/b2.jpg";
import b3 from "../img/b3.jpg";

function Main() {
  return (
    <>
      <div className="Main">
        <div className="container ">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={b3} alt="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={b2} alt="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={b1} alt="img" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Main;
