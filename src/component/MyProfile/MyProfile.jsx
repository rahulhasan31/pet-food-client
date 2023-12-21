import { useContext } from "react";
import { AuthContext } from "../../context/AuthProviders";
import { useGetUserQueriesQuery, useUpdateUserMutation } from "../../redux/features/catFood/catFoodApiEndPoint";
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'
import { useEffect } from "react";
const MyProfile = () => {
    const {user}=useContext(AuthContext)

    const email=user?.email
    const {data:queryData,isLoading}=useGetUserQueriesQuery(email,{
        pollingInterval:10000,
        refetchOnMountOrArgChange: true
    })
   const[updateUser,{isSuccess}]=useUpdateUserMutation(email)
    const imgHostKey = import.meta.env.VITE_imgHostKey
    
   console.log(queryData);
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
       
        if(imageData.success && queryData.role==="Seller"){
            const option={
                email,
              data:{
                email:email,
                name:data.name,
                role:queryData.role,
                number:data.number,
                imageURL: imageData.data.url,
                shop:queryData.shop?queryData.shop:data.shop,
                shopAddress:data.shopAddress
              }
            }
            updateUser(option)
            console.log("if",option);
            reset()
        }else{
            const option={
                email,
              data:{
                email:email,
                name:data.name,
                role:queryData.role,
                number:data.number,
                imageURL: imageData.data.url,
                Address:data.Address
              }
            }
            updateUser(option)
            console.log("e",option);
            reset()
        }
    })

  

    
   }

   


useEffect(()=>{
      
if (isSuccess) {
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your Profile has been Updated",
        showConfirmButton: false,
        timer: 1500
      });
}

},[isSuccess])

    return (
        <div className="">

     {
        isLoading?<><p>Loading</p></>:       <div className="w-full  bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 t">
        <div className="flex justify-end px-4 pt-4">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <span className="sr-only">Open dropdown</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
            </button>
           
         
        </div>
        <div className="flex flex-col items-center pb-10">
            {
                queryData?.imageURL?<><img className="w-40 h-40 mb-3 rounded-full shadow-lg" src={queryData?.imageURL} alt="Bonnie image"/></>:<img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="" />
            }
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Name:{queryData?.name}</h5>
            <span className="text-lg text-black font-medium">Role: {queryData?.role}</span>
           {
            queryData?.role==="Seller"?<> <span className="text-lg text-black font-medium">Shop Name: {queryData?.shop}</span></>:''
           }
            <span className="text-lg text-black font-medium dark:text-gray-400">Namber: {queryData?.number}</span>
       
            <span className="text-xl text-black font-medium dark:text-gray-400">Email: {queryData?.email}</span>
            <div className="flex mt-4 md:mt-6">
           
            </div>
        </div>
    </div>
     }
      
     <div>

        <h1 className="text-2xl text-center mt-5 font-semibold  bg-green-500 max-w-md mx-auto py-3  text-white">Update Your profile</h1>

<form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10">
  <div className="relative z-0 w-full mb-5 group">
      <input readOnly type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder={user?.email} required />
     
  </div>

 
  <div className="grid ">
    <div className="relative z-0 w-full mb-5 group">
    <label  className=" text-xs text-gray-900"> Name</label>
        <input  {...register('name')} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder={queryData?.name} required />
     
    </div>
    
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input {...register("number")}   type="text"  name="number" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div>
   {
    queryData?.role==="Seller" && !queryData.shop ?<>  <div className="relative z-0 w-full mb-5 group">
    <input  defaultValue={queryData?.shop} {...register("shop")}  type="text" name="shop" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Shop Name </label>
</div></>:" "
   }
  </div>
  <div  className="relative z-0 w-full mb-5 group">
  <label  name="imageURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Upload Your Image</label>
  <input {...register("imageURL")} required type="file" className="file-input file-input-bordered file-input-sm w-full max-w-md" />

   
  {
   queryData?.role=="Seller"?<>
   <div className="relative z-0 w-full mb-5 group mt-5">
      <input {...register("shopAddress")} type="shopAddress" name="shopAddress" id="shopAddress" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Shop address</label>
  </div>
   </> :queryData?.role==="User"?<><div className="relative z-0 w-full mb-5 group mt-5">
      <input {...register("Address")} type="Address" name="Address" id="Address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> address</label>
  </div></>:''
  }
  </div>
  <button type="submit" className="text-white bg-green-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm w-full sm:w-auto px-10 py-2.5 text-center ">Submit</button>
</form>

     </div>

        </div>
    );
};

export default MyProfile;