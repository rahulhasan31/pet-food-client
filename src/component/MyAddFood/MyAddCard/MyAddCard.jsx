/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProviders";

const MyAddCard = ({food}) => {
    // eslint-disable-next-line no-unused-vars
    const {user}=useContext(AuthContext)
    // eslint-disable-next-line react/prop-types
    const{name, imageURL, price , quantity, description, userEmail}=food
    console.log(food);
    return (
           
        <div    className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl ">
         
        <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
          <div className="mb-6 mr-6 lg:mb-0">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
              <img src={imageURL} alt=""  />
            </div>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <div>
           
              <p className="mb-2 text-sm font-semibold text-green-400">
              Name: {name}
              </p>
              <p className="mb-2 text-sm font-semibold text-orange-400">
              Price:${price}
              </p>
              <p className="mb-2 text-sm font-semibold text-orange-400">
              Quantity:{quantity}
              </p>
              <p className="mb-2 text-sm font-semibold text-green-400">
              Email:{userEmail}
              </p>
              <small className="mb-2 text-green-400 text-sm font-medium ">
              Description:<small className=" text-black">{description}</small> 
              </small>
            </div>
          {
            food?.paid?<><button className="px-4 py-2 bg-red-400 w-20 text-center text-white flex justify-center rounded-md mt-2" >Paid</button></>:<Link to={'/dashboard/checkout'}><button className="px-4 py-2 bg-green-400 w-20 text-center text-white flex justify-center rounded-md mt-2" >Payment</button></Link>
          }
          </div>
        </div>
      
      </div>
    );
};

export default MyAddCard;