import React from "react";
import Layout from "../layout/Layout";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";

import Slide1 from "../assets/slide1.jpg";
import Slide2 from "../assets/slide2.jpg";
import Slide3 from "../assets/slide3.jpg";
import Slide4 from "../assets/slide4.jpg";
import Slide5 from "../assets/slide5.jpg";
import Slide6 from "../assets/slide6.jpg";

const Home = () => {
  return (
    <Layout>
      <div className="">
        <div className="text-3xl">This is HOME page</div>
        {/* swiper */}
        <div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={false}
            loop={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={false}
            navigation={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          >
            <SwiperSlide>
              <img className="h-full" src={Slide1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="h-full" src={Slide2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="h-full" src={Slide3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="h-full" src={Slide4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="h-full" src={Slide5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="h-full" src={Slide6} alt="" />
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
