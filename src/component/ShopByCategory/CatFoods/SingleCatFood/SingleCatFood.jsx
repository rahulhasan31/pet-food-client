import { Col, Row } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { useGetSingleFoodQuery } from '../../../../redux/features/catFood/catFoodApiEndPoint';
import { Rate, Input } from 'antd';
import SinglePage from '../../../../page/SinglePage/SinglePage';
import { useEffect } from 'react';
import SingleTabs from './SingleTabs';

const { TextArea } = Input;

const SingleCatFood = () => {
  const { id } = useParams();
  const { data } = useGetSingleFoodQuery(id);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    scrollToTop();
  }, []);

  return (
    <div>
      <SinglePage data={data} />
      <Row gutter={[]}>
        <Col xs={24} md={8} className="text-center md:text-left">
          <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="w-full md:w-96 p-10" src={data?.imageURL} alt="" />
        </Col>
        <Col xs={24} md={14} className="p-5">
          <h1 className='text-3xl font-semibold'>{data?.name}</h1>
          <div className='flex flex-col md:flex-row items-center justify-between md:items-start'>
            <h3 className='text-red-500 mt-4 md:mt-0 text-2xl font-medium'>${data?.price}</h3>
            <Rate className='mt-4 md:mt-0 md:ml-4' allowHalf defaultValue={2.5} />
          </div>
          <p className='text- font-medium mt-4'>Captivate with this shirt’s versatile urban look that works as well at happy hour as it does in the back yard. The real mother of pearl buttons and embroidered crocodile..</p>
          <div className='mt-4'>
            <h2>Note:</h2>
            <TextArea rows={4} placeholder="Write here notes for the order" maxLength={6} />
          </div>
          <div className='w-full md:w-96 mt-4'>
            <Link to={'/dashboard/checkout'}>
              <button className="bg-green-500 py-2 px-3 w-full mt-3 rounded-full text-white">Buy It Now</button>
            </Link>
          </div>
        </Col>
      </Row>
      <div>
        <SingleTabs  foodData={data} />
      </div>
    </div>
  );
};

export default SingleCatFood;
