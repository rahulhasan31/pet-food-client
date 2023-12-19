
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import'./BestSellers.css'

// import required modules

import { useAnimationFrame } from "framer-motion"
// Import Swiper styles
import "swiper/css";
import { useRef } from 'react';

const BestSellers = () => {
  const ref = useRef(null);

useAnimationFrame((time, delta) => {
  const rotationSpeed = 0.1; // Adjust this value to control the rotation speed
  ref.current.style.transform = `rotateY(${time * rotationSpeed}deg)`;
});
    return (
        <div className=''>
             <>
             <Swiper ref={ref}  watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
        <SwiperSlide>
          <img src="https://i.ibb.co/z6NpXP3/16-5a65154d-5778-401d-9d96-c14d79c964f0-360x.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/z6NpXP3/16-5a65154d-5778-401d-9d96-c14d79c964f0-360x.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/z6NpXP3/16-5a65154d-5778-401d-9d96-c14d79c964f0-360x.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/z6NpXP3/16-5a65154d-5778-401d-9d96-c14d79c964f0-360x.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/z6NpXP3/16-5a65154d-5778-401d-9d96-c14d79c964f0-360x.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/z6NpXP3/16-5a65154d-5778-401d-9d96-c14d79c964f0-360x.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/z6NpXP3/16-5a65154d-5778-401d-9d96-c14d79c964f0-360x.webp" alt="" />
        </SwiperSlide>
       
      </Swiper>
    </>
        </div>
    );
};

export default BestSellers;