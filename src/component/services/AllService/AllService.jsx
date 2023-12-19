import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../context/AuthProviders';
import Loading from '../../../Loading/Loading';
import { useGetCatFoodsQueriesQuery, useGetCatFoodsQuery, useGetSellerQuery, usePostAddTOCartMutation } from '../../../redux/features/catFood/catFoodApiEndPoint';
import { searched } from '../../../redux/features/filter/filterSlice';
import ShopName from '../ShopName/ShopName';


const AllService = () => {
  const {user}=useContext(AuthContext)
  const dispatch=useDispatch()
    const {search}=useSelector(state=> state.filter)
    const {tags}=useSelector(state=> state.filter)
    console.log(tags);
  const [input, setInput]=useState(search)
  const [shopInput, setShopInput]=useState(null)
    const {data,isLoading}=useGetCatFoodsQuery(input)
    const {data:shopData,}=useGetCatFoodsQueriesQuery(shopInput)
    
    const [postAddTOCart, ]=usePostAddTOCartMutation()
    const{data:sellerData, isLoading:sellerLoading}=useGetSellerQuery()

console.log(input);

    const handleClockAddToCart = (food) => {
      // Add your logic for adding the item to the cart
      const data={
        _id:food._id,
        name:food.name,
        price:food.price,
        imageURL:food.imageURL,
        quantity: food.quantity,
        description:food.description,
        subCategory:"Cat Health",
        userEmail:user?.email
      
    }
    console.log("option", data);
    postAddTOCart(data)
      
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Add To Cart Success",
        showConfirmButton: false,
        timer: 1500
      });// Close the modal after adding to the cart
    };


    const handleSubmit=(e)=>{
      e.preventDefault()
      dispatch(searched(input))
    }

  
    useEffect(()=>{
      tags.map(tag=>{
        setShopInput(tag)
      })
    },[tags])

   
  
    return (
        <div className=' lg:mt-24   max-sm:mt-28'
      
        >
             <Row>
      {
        sellerLoading?<><Loading/></>:<Col span={6}> 
        <h1 className="lg:text-center text-2xl font-semibold bg-green-400 text-white  rounded-md py-2   max-sm:text-xs">Food Shop Name</h1>

        {
          sellerData?.map((seller)=><ShopName key={seller._id} seller={seller}/>
          )
        }



      </Col>
      }
      <Col span={18} >
      <div  className='text-center mb-2'>
     <form onSubmit={handleSubmit}>
     <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs max-sm:w-40" />
     <button  type="submit" className='btn  bg-green-500 ms-1 text-white'>Shearch</button>
     </form>
      </div>
      <div  className="bg-gray-100">
      <div   className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg
            viewBox="0 0 88 88"
            className="w-full max-w-screen-xl text-indigo-100"
          >
            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="44"
            />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="37.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="29.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="22.5"
            />
          </svg>
        </div>
          {
            isLoading?<><Loading/></>:
            <div  className='relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {
              
                
        
              tags?.length ?<>
              {
                shopData?.data?.map((food)=>
                <>
                <div  key={food._id} className="">
         <div className="h-full justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
         
          <div  className="p-5">
          <Link to={`/single-food/${food._id}`}>
             <div className="flex items-center justify-center w-full h-40 mb-4 rounded-full">
              <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="w-96 h-32 "  src={food.imageURL} alt="" />
             </div>
             <p className="mb-2 font-bold">{food.name}</p>
             <p className="text-md leading-5 font-medium text-red-400">
              ${food.price}
             </p>
             <p className="text-md leading-5 font-medium text-red-400">
             Quantity: {food.quantity}
             </p>
             <p className="text-md leading-5 font-semibold text-sky-500">
             Shop name: {food?.shop}
             </p>
             <small className="text-sm leading-5 text-gray-900">
             {food.description}
             </small>
             </Link>
             <div>
             {
                user?.uid ?<><div>
                <button onClick={()=>handleClockAddToCart(food)} className='text-md bg-green-500 text-white font-medium py-2 px-4 rounded-md '>Add To Cart</button>
              </div></>:<div>
                <button disabled onClick={()=>handleClockAddToCart(food)} className='text-md bg-green-500 text-white font-medium py-2 px-4 rounded-md '>Add To Cart</button>
              </div>
              }
             </div>
           </div>
          
  
         </div>
      
        
          
         
         
       </div>
                </>
               )
              }
              </>:<>
              {
                data?.data?.map((food)=>
                 <>
                 <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" key={food._id} className="">
          <div className=" h-full justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
          
           <div className="p-5"  
            x
           >
           <Link to={`/single-food/${food._id}`}>
              <div  className="flex items-center justify-center w-full h-40 mb-4 rounded-full">
               <img className="w-96 h-40 p-5 "  src={food.imageURL} alt="" />
              </div>
              <p className="mb-2 font-bold">{food.name}</p>
              <p className="text-md leading-5 font-medium text-red-400">
               ${food.price}
              </p>
              <p className="text-md leading-5 font-medium text-red-400">
              Quantity: {food.quantity}
              </p>
              <p className="text-md leading-5 font-semibold text-sky-500">
             Shop name: {food?.shop}
             </p>
              <small className="text-sm leading-5 text-gray-900">
              {food.description}
              </small>
              </Link>
              {
                user?.uid ?<><div>
                <button onClick={()=>handleClockAddToCart(food)} className='text-md bg-green-500 text-white font-medium py-2 px-4 rounded-md '>Add To Cart </button>
              </div></>:<div>
                <button disabled onClick={()=>handleClockAddToCart(food)} className='text-md bg-green-500 text-white font-medium py-2 px-4 rounded-md '>Add To Cart</button>
              </div>
              }
            </div>
           
   
          </div>
       
         
           
          
          
        </div>
                 </>
                )
            }
              </>
            }
            </div>
          }
      </div>
    </div>
      </Col>
    </Row>
        </div>
    );
};

export default AllService;