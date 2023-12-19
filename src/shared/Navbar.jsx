import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping, FaCat, FaMinus } from "react-icons/fa6";

import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

import { useContext } from "react";
import { AuthContext } from "../context/AuthProviders";
import { useDeleteAddCartMutation, useGetAddToQuaryCartQuery, useGetUserQueriesQuery, usePostAddTOCartMutation, usePostDecrementMutation } from "../redux/features/catFood/catFoodApiEndPoint";
import { IoMenu } from "react-icons/io5";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const {user, logOutUser}=useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const email=user?.email
  const {data,}=useGetAddToQuaryCartQuery(email)
console.log(data);
const [sidebarOpen, setSidebarOpen] = useState(false);

const {data:queryData,}=useGetUserQueriesQuery(email)
const openSidebar = () => {
  setSidebarOpen(true);
};

const closeSidebar = () => {
  setSidebarOpen(false);
};

const [postDecrement,]=usePostDecrementMutation()
const [postAddTOCart, ]=usePostAddTOCartMutation()
const[deleteAddCart,]=useDeleteAddCartMutation()

const hanleCartDelete=(id)=>{
  deleteAddCart(id)
  toast.success('Food Delete Success')
}
const handleAddToCart = (food) => {
 
  const data={
      _id:food.foodId,
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

console.log(postAddTOCart);
toast.success('SuccessFull Add Food')// Close the modal after adding to the cart
};

const handleRemove=(food)=>{

  const data={
    _id:food.foodId,
    quantity: food.quantity,
    userEmail:user?.email
  
}
postDecrement(data)
toast.success('SuccessFull Remove Food')
}
  return (
   <>
 

<nav className=" fixed w-full  bg-white bg-opacity-50 shadow-none z-20 top-0 start-0  ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
  <Link  to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://i.ibb.co/rfcXgSY/logo-removebg-preview.png" className="h-8" alt="Pet-Food"/>
      <span className="self-center text-2xl font-semibold whitespace-nowrap "></span>
  </Link>
  <div className="flex  items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
     
     {
      user?.uid?<>
      <button onClick={openSidebar}  type="button" className="text-white bg-green-400 py-2 px-5 rounded-full me-3 flex"><FaCartShopping/>
     {data?.length}
     
     </button>
      </>:<>
      <button onClick={openSidebar}  type="button" className="text-white bg-green-400 py-2 px-5 rounded-full me-3 flex"><FaCartShopping/>
     
     
     </button>
      </>
     }
   
   {
    user?.uid?
    < >
       <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={queryData?.imageURL} />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4">
      
        
      <Link to={'/dashboard'}>
      <li ><button   type="button" className={`max-lg: text-white bg-green-400 border-none py-2 px-5 rounded-full   max-sm:hidden hover:bg-red-500`}>DashBoard</button></li></Link>
        <li ><button  onClick={logOutUser} type="button" className={`max-lg: text-white bg-green-400 border-none py-2 px-5 rounded-full   max-sm:hidden`}>Logout</button></li>
      </ul>
    </div>
 
  
    </>:<Link to={'/login'}>
     <button type="button" className="text-white bg-green-400 py-2 px-5 rounded-full">Login</button>
     </Link>
   }
    
      <button  onClick={() => setIsMenuOpen(true)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  bg-green-600  " aria-controls="navbar-sticky" >
        <span className="text-white"><IoMenu /></span>
       
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to={"/"} className="block py-2 px-3 text-white rounded md:bg-transparent md:text-green-500 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to={"/chat"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Chat</Link>
      </li>
      <li>
        <Link to={"/services"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
      </li>
      <li>
        <Link to={"/contact"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
      </li>
      <li>
        <Link to={"/blog"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</Link>
      </li>
     
    </ul>
  </div>
  </div>
  {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full ">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to={"/"}
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                     <img src="https://i.ibb.co/rfcXgSY/logo-removebg-preview.png" className="h-8" alt="Pet-Food"/>
                     
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to={"/chat"}
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Chat
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/services"}
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Service
                      </Link>
                    </li>
                  {
                    user?.uid?<>
                      <li>
                      <Link
                        to={"/dashboard"}
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Dashboard
                      </Link>
                    </li>
                    </>:" "
                  }
                 
                  </ul>
                </nav>
              </div>
            </div>
          )}
</nav>


   <div
        id="drawer-navigation"
        className={`fixed top-0 right-0 z-40 w-1/2 h-screen p-4 overflow-y-auto transition-transform ${
          sidebarOpen ? '' : 'translate-x-full'
        } bg-white dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          Menu
        </h5>
        <button
          type="button"
          onClick={closeSidebar}
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        {/* Rest of the sidebar content */}
        {/* ... */}
<div className="flex justify-between bg-slate-50 shadow-xl  mt-4 p-5">

<h1 className="text-2xl font-semibold text-green-500"><span className="text-red-600">Total Price</span>: ${"total"}</h1>
<button  className="px-4 py-3 bg-red-600 rounded-full text-white ms-2 "><FaCat />

 </button>
</div>
        {/* {
          foods.map((food)=><>
          <p food={food} key={food._id}>{food.name}</p></>)
        } */}

        

{
  user?.uid && data?.length ?<><div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
              <th scope="col" className="px-5 py-3">
                  Image
              </th>
              <th scope="col" className="px-5 py-3">
               name
              </th>
              <th scope="col" className="px-5 py-3">
                  Quantity
              </th>
              <th scope="col" className="px-5 py-3">
                  Price
              </th>
              <th scope="col" className="px-5 py-3">
                 Q Add 
              </th>
              <th scope="col" className="px-  py-2">
                  Q minus
              </th>
              <th scope="col" className="px-5  py-2">
                  Delete 
              </th>
          </tr>
      </thead>
      <tbody>
        {
          data?.map((food)=> <>
          
            <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <img className="w-20" src={food.imageURL} alt=""  />
              </th>
              <td className="px-6 py-4">
                  {food.name}
              </td>
              <td className="px-6 py-4">
                  {food.quantity}
              </td>
              <td className="px-6 py-4">
                  ${food.price}
              </td>
              <td className="px-6 py-4">
                  <button onClick={()=>handleAddToCart(food)}  className="bg-green-500 py-2 px-3 rounded-full text-white"><FaPlus />
</button>
              </td>
              <td className="px-6 py-4">
              <button onClick={()=>handleRemove(food)}  className="bg-red-600 py-2 px-3 rounded-full text-white"><FaMinus />
</button>
           
              </td>
              <td className="px-6 py-4">
              <button onClick={()=>hanleCartDelete(food._id)}  className="bg-red-600 py-2 px-3 rounded-full text-white"><MdDelete />
</button>
           
              </td>
              
          </tr>
          
          </>)
        }
    
      </tbody>
     
  </table>
</div></>:""
}














      </div>
    

   </>
  );
};

export default Navbar;