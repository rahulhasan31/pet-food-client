/* eslint-disable react/prop-types */

import './CatFoodCard.css';
import { LuEye } from 'react-icons/lu';
import { CiLock } from 'react-icons/ci';
import { GiSelfLove } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProviders';
import { usePostAddTOCartMutation } from '../../../redux/features/catFood/catFoodApiEndPoint';
import Loading from '../../../Loading/Loading';

const CatFoodCard = ({ food }) => {
  const { price, imageURL, name } = food;
  const { user, loading } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [postAddTOCart] = usePostAddTOCartMutation();

  const handleAddToCart = (food) => {
    const data = {
      _id: food._id,
      name: food.name,
      price: food.price,
      imageURL: food.imageURL,
      quantity: food.quantity,
      description: food.description,
      subCategory: 'Cat Health',
      userEmail: user?.email,
    };

    postAddTOCart(data);
    setIsModalOpen(false);

    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Add To Cart Success',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleClockAddToCart = (food) => {
    const data = {
      _id: food._id,
      name: food.name,
      price: food.price,
      imageURL: food.imageURL,
      quantity: food.quantity,
      description: food.description,
      subCategory: 'Cat Health',
      userEmail: user?.email,
    };

    postAddTOCart(data);

    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Add To Cart Success',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="food-card border-none mt-24 mb-0">
          <div className="image-container">
            <img className="food-image h-80 p-3 sm:max-w-max" src={imageURL} alt={name} />
            <div className="buttons-container">
              <Link>
                {user?.uid ? (
                  <button onClick={() => handleClockAddToCart(food)} className="button text-2xl font-semibold rounded-full">
                    <CiLock />
                  </button>
                ) : (
                  <button disabled onClick={() => handleClockAddToCart(food)} className="button text-2xl font-semibold rounded-full">
                    <CiLock />
                  </button>
                )}
              </Link>
              <button className="button text-2xl font-semibold rounded-full" onClick={showModal}>
                <LuEye />
              </button>
              <button className="button text-2xl font-semibold rounded-full">
                <GiSelfLove />
              </button>
            </div>
          </div>
          <Link to={`/single-food/${food._id}`}>
            <div className="food-details hover:text-green-500">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p>Price: ${price}</p>
            </div>
          </Link>
        </div>
      )}

      {/* Ant Design Modal */}
      <Modal
        title={name}
        visible={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
         user?.uid? <button key="addToCart" className="px-3 py-2 text-white bg-green-400 rounded-full ms-2" onClick={() => handleAddToCart(food)}>
            Add to Cart
          </button>:<button disabled key="addToCart" className="px-3 py-2 text-white bg-green-400 rounded-full ms-2" onClick={() => handleAddToCart(food)}>
            Add to Cart
          </button>,
        ]}
      >
        {/* Content of the modal */}
        <div style={{ display: 'flex' }} className='w-full max-h-full'>
          <div style={{ flex: 1 }}>
            <img src={imageURL} alt={name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </div>
          <div style={{ flex: 1, marginLeft: '20px', gap: '20px' }} className="w-full">
            <p className="text-2xl font-semibold">{name}</p>
            <p className="text-xl text-green-500 font-semibold">${price}</p>
            <p className="font-semibold">AVAILABILITY : <span className="text-green-500">IN STOCK</span></p>
            <p className="font-semibold">SKU: W-123</p>
            <p className="font-semibold">
              Captivate with this shirt’s versatile urban look that works as well at happy hour as it does in the back yard. The...
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CatFoodCard;
