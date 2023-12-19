

// eslint-disable-next-line react/prop-types
const OrderCard = ({food}) => {
    // eslint-disable-next-line react/prop-types
    const {name, imageURL, price, quantity, email, description, status,transactionId}=food
    console.log(food);
    return (
        <div    className="mb-10 p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl  ">
         
        <div className=" flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row  ">
        <div className="mb-6 mr-6 lg:mb-0">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32 ">
              <img src={imageURL} alt=""  />
            </div>
          </div>
          <div className="flex flex-col justify-between flex-grow ">
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
              <p className="mb-2 text-sm font-semibold text-orange-400">
              TransactionId:{transactionId}
              </p>
              <p className="mb-2 text-sm font-semibold text-green-400">
              Email:{email}
              </p>
              <small className="mb-2 text-green-400 text-sm font-medium ">
              Description:<small className=" text-black">{description}</small> 
              </small>
            </div>
            {
              status?<>  <p className="px-8 py-2 bg-cyan-600 w-40 text-center text-white flex justify-center rounded-md mt-2 " >{status}</p> </>:  <p className="px-8 py-2 bg-green-500  font-medium text-xl  text-white flex justify-center rounded-md mt-2 " >Payment Successful! and they are now waiting for admin confirmation</p>
            }
       
          
          </div>
        </div>
      
      </div>
    );
};

export default OrderCard;