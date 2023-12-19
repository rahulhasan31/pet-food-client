import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProviders";
import { useGetUserQueriesQuery, usePostFoodsMutation } from "../../redux/features/catFood/catFoodApiEndPoint";


const AddFoods = () => {
    const {user}=useContext(AuthContext)

    const email=user?.email
    const {data:queryData,isLoading}=useGetUserQueriesQuery(email)
     const imgHostKey = import.meta.env.VITE_imgHostKey
    const[postFoods,{isSuccess ,isLoading:postLoading}]=usePostFoodsMutation()
  
   const {
    register,
    handleSubmit,
   reset
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    const image=data.imageURL[0]
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
    .then(res=> res.json())
    .then((imageData)=>{
     
        console.log(imageData);
        if (imageData.success ) {
        const option={
            name:data.name,
            price:parseInt(data.price),
            quantity:parseInt(data.quantity),
            imageURL: imageData.data.url,
            userEmail:user.email,
            shop:data.shop,
            description:data.description
        } 
        console.log('option', option);
        postFoods(option)
        reset()
        }
    })

  

    
   }

   useEffect(()=>{
      
    if (isSuccess) {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Food has been Added",
            showConfirmButton: false,
            timer: 1500
          });
    }
    
    },[isSuccess])

    return (
        <div>
             
           {
            isLoading? <><span className="loading loading-spinner text-primary"></span></>:<>
            
            {
                queryData?.shop?<>
                <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Food Name</label>
    <input {...register("name")} type="text" name="name" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "  required/>
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
    <input {...register("price")} type="text" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "  required/>
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
    <input readOnly defaultValue={"1"} {...register("quantity")} type="text" name="quantity" id="quantity" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "  required/>
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your shop Name</label>
    <input readOnly defaultValue={queryData?.shop} {...register("shop")} type="text" name="shop" id="shop" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "  required/>
  </div>
  <div className="mb-5">
  <label  name="imageURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Upload Your Image</label>
  <input {...register("imageURL")} required type="file" className="file-input file-input-bordered file-input-sm w-full max-w-md" />
  </div>

  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
  <textarea {...register("description")} name="description" id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" placeholder="Leave a comment..."></textarea>
  {
    postLoading?<><button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><span className="loading loading-spinner text-primary"></span></button></>:<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Food</button>
  }
  
</form>
                </>:<> <h1 className="text-2xl  text-red-500 font-medium flex justify-center items-center h-screen">Plase Update Your Seller Profile Then Post Your Products</h1> </>
             }
            </>
           }



        </div>
    );
};

export default AddFoods;