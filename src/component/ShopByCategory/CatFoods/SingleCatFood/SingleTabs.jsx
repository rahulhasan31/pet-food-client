/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import {useGetReviewsQuery, usePostReviewMutation, useReviewDeleteMutation } from '../../../../redux/features/catFood/catFoodApiEndPoint';
import { Link, useParams } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import { useContext, useState } from 'react';
import{AuthContext}from '../../../../context/AuthProviders'

import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { BallTriangle } from 'react-loader-spinner';







const SingleTabs = ({foodData}) => {
  const {user}=useContext(AuthContext)
  const {id}=useParams()
  console.log("foodId",foodData);
  const [review, setReviewData]=useState(null)
  console.log("comment",review);
 
  
  
  

 
  






    const{data, isLoading}=useGetReviewsQuery(id,{
    })
 console.log("data",data);

const [reviewDelete, { isSuccess}]=useReviewDeleteMutation()

const handleDelete=(id)=>{
  reviewDelete(id)
  
}

const [postReview, {isSuccess:sucess,  }]=usePostReviewMutation()

const handleReviewSubmit=(e)=>{
  e.preventDefault()
  const form=e.target
  const review=form.review.value

  const option={
   
    foodID:id,
    userEmail:user?.email,
    review,
    foodData
    

  }
  postReview(option)
  console.log("option", option);
  form.reset()
  
}


useEffect(()=>{

  if (sucess) {
    toast.success('Successfully Reviews!');
  }
},[sucess])
useEffect(()=>{

  if (isSuccess) {
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Delete Success",
      showConfirmButton: false,
      timer: 1500
    });
  }
},[isSuccess])

useEffect(()=>{
  data?.map(d=>{
    setReviewData(d)
  })
},[data])
 
if(isLoading){
  <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
  console.log("looding/....");
}

    return (
        <div className='p-20'>
          <Toaster/>
          <Tabs>
    <TabList  >
    <div className='text-lg font-medium'>
    <Tab>CUSTOMER REVIEWS</Tab>
    <Tab>DESCRIPTION</Tab>
      <Tab>DELIVERY POLICY</Tab>
      <Tab>RETURNS & EXCHANGES POLICY</Tab>
      
    </div>
    </TabList>
    <div className='mt-4'>
      {
        user?.uid ?<><form onSubmit={handleReviewSubmit}>
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write a Review</label>
        <textarea id="message" name='review' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here... " required></textarea>
        
                <button className='bg-green-500 py-2 px-3 mt-3 rounded-lg text-white' type="submit">Submit Reviews </button>
                </form></>:<form onSubmit={handleReviewSubmit}>
<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write a Review</label>
<textarea id="message" name='review' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here... " required></textarea>

        <Link to={'/signup'}>
        <button className='bg-red-500 py-2 px-3 mt-3 rounded-lg text-white' type="submit"> Please Login First</button></Link>
        </form>
      }
        
        </div>
    <TabPanel>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
     
        <div className="grid gap-8 row-gap-5 lg:grid-cols-2">
        {data?.map(review=><>
         
            <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" key={review._id}  className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl ">
         
         <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
           <div className="mb-6 mr-6 lg:mb-0">
             <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
               <img  src={foodData?.imageURL} alt=""  />
             </div>
           </div>
           <div className="flex flex-col justify-between flex-grow">
             <div>
               <h6 className="mb-2 text-sm font-semibold leading-5">
                 {foodData?.name}
               </h6>
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
             onClick={()=>handleDelete(review._id)}
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
    </TabPanel>
    <TabPanel>
      <h2>Captivate with this shirt’s versatile urban look that works as well at happy hour as it does in the back yard. The real mother of pearl buttons and embroidered crocodile complete its elegant appeal.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</h2>

   <div className='ms-5'>
       
   <p className='mt-5'>
    -MACHINE WASH AT MAX.TEMP. 30° C - NORMAL PROCESS
    <br />
    -DO NOT BLEACH<br />
    -DO NOT TUMBLE DRY<br />
    -IRON AT MAX. TEMP. OF 110° C WITHOUT STEAM<br />
    -DO NOT DRY CLEAN
    </p>
   </div>
     <h1 className='font-semibold mt-2 mb-2'>Sample Ordered Lista</h1>
     <div className='ms-5'>
     1.Comodous in tempor ullamcorper miaculis <br />
     2.Pellentesque vitae neque mollis urna mattis laoreet.<br />
     3.Divamus sit amet purus justo.<br />
     4.Proin molestie egestas orci ac suscipit risus posuere loremous<br />
     </div>
     <h1 className='font-semibold mt-2 mb-2'>Sample Paragraph Text</h1>
     <div className='ms-5'>
       <p>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and your ready for summer!Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and your ready for summe!Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
     </div>
    </TabPanel>
    <TabPanel>
     <h2 className='mb-3 font-medium'>Lorem ipsum dolor sit amet
</h2>


<p className='mb-5'>Vivamus a placerat dolor. Proin ut vehicula mauris. Etiam sagittis augue ipsum. Aliquam vestibulum massa nulla, ullamcorper aliquam diam feugiat vel. Fusce porttitor ultrices ante, posuere vehicula lacus tempor eu. Sed et purus et massa mattis aliquet ac vel dolor. Pellentesque eros lectus, placerat nec finibus ac, lobortis eu risus.

Donec fringilla metus ligula, sit amet fermentum ex laoreet non</p>



<p className='mb-5'>
- Ribbed and double stitched collar and armholes
<br />

- High-density fabric for vivid print clarity
<br />
- Machine-wash safeSingle right rear button flap pocket
<br />
- Products are proudly printed in the United States
</p>



<p>
Curabitur egestas suscipit odio. Nam vitae aliquam dui

in laoreet elit. In posuere augue id velit placerat, vitae porttitor leo aliquet. Aenean non ligula sed lorem eleifend aliquam. Morbi posuere faucibus viverra. Proin ullamcorper, lorem lacinia cursus finibus.
</p>
    </TabPanel>
    <TabPanel>
    <h2 className='font-semibold'>Nullam at mi accumsan, fermentum turpis at, hendrerit tortor</h2> <br />



<p>
Vivamus commodo magna rutrum ipsum convallis luctus. Maecenas sollicitudin tincidunt sem at consectetur. Sed ligula elit, sodales feugiat porttitor non, commodo in ipsum. Donec vehicula orci et pharetra laoreet. Donec feugiat, nibh ac ornare hendrerit, dui augue semper felis, a finibus dui felis quis magna. Curabitur a ligula purus. Suspendisse vestibulum lorem non tellus aliquet blandit. </p><br />

<p>Proin cursus sollicitudin scelerisque. Donec ultrices elit quis magna lobortis porttitor. Quisque et consectetur mauris. Sed facilisis malesuada ante eget blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque rutrum mattis ex ac sagittis. Nulla convallis euismod ipsum, a mollis sapien fringilla eget. Nam dignissim ornare nisi, in bibendum nibh auctor id.</p>  <br />

<p>Quisque dictum justo id velit dapibus, id mollis diam tincidunt. Donec luctus tincidunt ultrices. Sed condimentum ante accumsan, sagittis lorem quis, dictum enim. Nam et facilisis odio. Ut iaculis dui non interdum accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacus sem, molestie non convallis nec, tristique a lacus. Proin eget lacus semper dui imperdiet accumsan. Morbi sagittis erat ac justo congue, a ornare tortor mollis. Aenean eu vulputate diam. Praesent suscipit ex non elit finibus ultricies.</p>
    </TabPanel>
    
  </Tabs>

  
        </div>
    );
};

export default SingleTabs;