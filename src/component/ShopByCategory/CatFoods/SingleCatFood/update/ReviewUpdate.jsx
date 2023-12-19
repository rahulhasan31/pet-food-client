/* eslint-disable react/prop-types */

import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useGetIdReviewQuery, useUpdateReviewMutation } from "../../../../../redux/features/catFood/catFoodApiEndPoint";



// eslint-disable-next-line no-unused-vars
const ReviewUpdate = () => {
    const [updateReview, {isSuccess}]=useUpdateReviewMutation()
   const {id}=useParams()
   const navigate=useNavigate()
   const from= location.state?.from?.pathname || '/'
    const {data}=useGetIdReviewQuery(id)
   console.log("dataUpdate", data);

   const handleReviewSubmit=(e)=>{
    e.preventDefault()
    const form=e.target
    const review=form.review.value
    const option={
        id,
        data:{
            review
        }
    }

    updateReview(option)
  
   }
  
   if(isSuccess){
     
    Swal.fire({
        position: "top",
        icon: "success",
        title: "Edit Success",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from ,{replace: true})

   }
   
   
    return (
        <>
    
 <div className=' h-screen w-96 mx-auto'>
                
<form onSubmit={handleReviewSubmit} className='mt-40'>
<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write a Review</label>
<textarea id="message" defaultValue={data?.review} name='review' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here... " required></textarea>

        <button className='bg-green-500 py-2 px-3 mt-3 rounded-lg text-white' type="submit">Submit Reviews </button>
        </form>
        
        </div>
        </>
    );
};

export default ReviewUpdate;