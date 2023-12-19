import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Cover.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GiCat } from 'react-icons/gi';


const Cover = () => {
    return (
        <div className="">
              <div >
           <div className="flex justify-center  ">
             <h1 className="text-5xl text-orange-400 font-medium">
             <GiCat/>
             </h1>
             
            </div>
            <h1 className="text-center lg:text-5xl font-semibold text-green-400">
             Cat Gallery
             </h1>
           </div>
             <Swiper
             
        effect={'coverflow'}
        grabCursor={true}
        
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >

        <SwiperSlide>
          <img src="https://media.gettyimages.com/id/173240099/photo/surprise-kitty-cute-black-cat-screaming.jpg?s=612x612&w=0&k=20&c=fKCBMfIQuunPUC0DQTcI25iFnBAEaCfLxZX94oajjNM=" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.gettyimages.com/id/566679991/photo/grumpy-cat-seated.jpg?s=612x612&w=0&k=20&c=gRftGGo5MfS5NZMn-ssyusujYkADLJVa8oVa_gWOGL4=" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://t4.ftcdn.net/jpg/00/09/71/85/360_F_9718536_LeugTRSphvK0pmO8dnvgHzs79rJwJ49V.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Feral_cat_Virginia_crop.jpg/800px-Feral_cat_Virginia_crop.jpg" />
        </SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default Cover;