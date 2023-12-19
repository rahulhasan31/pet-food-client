import { useEffect } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProviders";
import Loading from "../../Loading/Loading";
import { useDeleteSellerFoodMutation, useSellerAddFoodQuery } from "../../redux/features/catFood/catFoodApiEndPoint";


const SellerAddFoods = () => {
    const {user}=useContext(AuthContext)
    const email=user.email
    const {data, isLoading}=useSellerAddFoodQuery(email)
    const[deleteSellerFood, {isSuccess}]=useDeleteSellerFoodMutation()
    const handleDeleteFood=(id)=>{
        deleteSellerFood(id)
    }
    useEffect(()=>{
        if (isSuccess) {
            toast.success("Sucessfully delete Food")
        }
    },[isSuccess])
    return (
        <div>
              <div className="bg-gray-100">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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

            <div className='relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        
              
                
        
             
              {
                data?.map((food)=>
                 <>
                 <div key={food._id} className="">
          <div className="h-full justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
          
           <div className="p-5 ">
     
              <div className="flex items-center justify-center w-full  mb-4 rounded-full ">
               <img className="w-96 h-32 " src={food.imageURL} alt="" />
              </div>
              <p className="mb-2 font-bold mt-8">{food.name}</p>
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
              
              <div>
                <button onClick={()=>handleDeleteFood(food._id)} className='text-md bg-red-500 text-white font-medium py-2 px-4 rounded-md '>Delete Food</button>
              </div>
            
            </div>
           
   
          </div>
       
         
           
          
          
        </div>
                 </>
                )
            }
            
            </div>
          }
      </div>
    </div>
        </div>
    );
};

export default SellerAddFoods;