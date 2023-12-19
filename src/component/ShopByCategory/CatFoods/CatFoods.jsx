import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './catFoods.css';
import { useGetCatFoodsQuery } from '../../../redux/features/catFood/catFoodApiEndPoint';
import CatFoodCard from '../CatFoodCard/CatFoodCard';
import { useSelector } from 'react-redux';
import Loading from '../../../Loading/Loading';

const CatFoods = () => {
  const { search } = useSelector((state) => state.filter);
  const { data, isLoading } = useGetCatFoodsQuery(search);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='grid grid-cols-1'>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {data?.data.map((food) => (
              <SwiperSlide key={food._id}>
                <CatFoodCard food={food}></CatFoodCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default CatFoods;
