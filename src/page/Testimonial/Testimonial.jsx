// Testimonial.jsx
import { Col, Row } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './testimonail.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonial = () => {
  return (
    <div className='mt-16'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12}>
              <div>
                <img src="https://i.ibb.co/85Y3rPc/img-21-720x.webp" alt="" />
              </div>
            </Col>
            <Col xs={24} sm={12} className="bg-green-100">
              <div className='text-start mt-5 ms-6'>
                <h1 className='text-xl font-medium text-cyan-400'>CUSTOMER REVIEW</h1>
                <i className='text-2xl flex justify-start items-center lg:mt-16'>
                  Love this! It is great for acne-prone skin. It
                  <br />
                  completely dried up the few pimples I had, and it
                  <br />
                  smelled really good and natural too
                </i>
                <br />
                <br />
                <h1 className='text-xl font-medium'>
                  Alex Jhon-NewYork
                </h1>
              </div>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12}>
              <div>
                <img src="https://i.ibb.co/3yWZ4b9/img-20-720x.webp" alt="" />
              </div>
            </Col>
            <Col xs={24} sm={12} className="bg-green-100">
              <div className='text-start mt-5 ms-6'>
                <h1 className='text-xl font-medium text-cyan-400'>CUSTOMER REVIEW</h1>
                <i className='text-2xl flex justify-start items-center lg:mt-16'>
                  Love this! It is great for acne-prone skin. It
                  <br />
                  completely dried up the few pimples I had, and it
                  <br />
                  smelled really good and natural too
                </i>
                <br />
                <br />
                <h1 className='text-xl font-medium'>
                  Alex Jhon-NewYork
                </h1>
              </div>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12}>
              <div>
                <img src="https://i.ibb.co/CsqRmjq/img-22-720x.webp" alt="" />
              </div>
            </Col>
            <Col xs={24} sm={12} className="bg-green-100">
              <div className='text-start mt-5 ms-6'>
                <h1 className='text-xl font-medium text-cyan-400'>CUSTOMER REVIEW</h1>
                <i className='text-2xl flex justify-start items-center lg:mt-16'>
                  Love this! It is great for acne-prone skin. It
                  <br />
                  completely dried up the few pimples I had, and it
                  <br />
                  smelled really good and natural too
                </i>
                <br />
                <br />
                <h1 className='text-xl font-medium'>
                  Alex Jhon-NewYork
                </h1>
              </div>
            </Col>
          </Row>
        </SwiperSlide>

        {/* Add more SwiperSlides as needed */}

      </Swiper>
    </div>
  );
};

export default Testimonial;
