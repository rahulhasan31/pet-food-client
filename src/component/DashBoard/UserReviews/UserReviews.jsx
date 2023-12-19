import { useContext} from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProviders";
import Loading from "../../../Loading/Loading";
import { useGetReviewsQuarysQuery, useReviewDeleteMutation } from "../../../redux/features/catFood/catFoodApiEndPoint";


const UserReviews = () => {
    const {user}=useContext(AuthContext)
    
    
   
    const email=user?.email
    console.log('email passe nh kno', email);
    const {data, isLoading,}=useGetReviewsQuarysQuery(email)

    
    const [reviewDelete,]=useReviewDeleteMutation()

    const handleDelete=(id)=>{
      reviewDelete(id)
      
    }
  
  
    
 console.log("data",data);
    return (
       <>
       {
        isLoading? <><Loading/> </>: <div>
        <div className="grid gap-8 row-gap-5 lg:grid-cols-2">
    {data?.map(review=><>
     
        <div  key={review._id}  className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl ">
     
     <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
       <div className="mb-6 mr-6 lg:mb-0">
         <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
           <img src={review?.foodData?.imageURL} alt=""  />
         </div>
       </div>
       <div className="flex flex-col justify-between flex-grow">
         <div>
        
           <p className="mb-2 text-sm font-semibold text-green-400">
           Food Name: {review?.foodData?.name}
           </p>
           <p className="mb-2 text-sm font-semibold text-green-400">
           Review: {review?.review}
           </p>
           <p className="mb-2 text-sm font-semibold text-orange-400">
           Email: {review?.userEmail}
           </p>
         </div>
      {
        user?.email==review?.userEmail?<>
         <div className='flex justify-end gap-9 '>
      <Link to={`/review/${review._id}`}>
      <button
    
    className=" inline-flex justify-between items-center text-4xl  font-semibold  text-red-400 "
   
  >

   <FaRegEdit />
  </button></Link>
         <button
         onClick={()=>handleDelete(review._id)}
           className=" inline-flex justify-between items-center text-4xl  font-semibold  text-red-400 "
         >
           <MdDelete />
         </button>
       </div>
        </>: <div className='flex justify-end gap-9 '>
      <Link to={`/review/${review._id}`}>
      <button
     disabled
    className=" inline-flex justify-between items-center text-4xl  font-semibold  text-red-400 "
   
  >

   <FaRegEdit />
  </button></Link>
         <button
         disabled
         onClick={()=>"handleDelete"(review._id)}
           className=" inline-flex justify-between items-center text-4xl  font-semibold  text-red-400 "
         >
           <MdDelete />
         </button>
       </div>
      }

       </div>
     </div>
   
   </div>
  
    </>)}
   
  </div>
    </div>
       }
       </>
    );
};

export default UserReviews;