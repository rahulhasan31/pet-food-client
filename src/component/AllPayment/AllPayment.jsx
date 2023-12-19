
import { useEffect } from "react";
import { useState } from "react";
import { toast, } from "react-hot-toast";
import { useGetAllPaymentQuery, usePutOrderConfirmMutation } from "../../redux/features/catFood/catFoodApiEndPoint";


const AllPayment = () => {
    const {data, isLoading}=useGetAllPaymentQuery()
  const [IdData, setIdData ]=useState("")
  const [notConfirm, setNotConfirm ]=useState(null)
console.log("notconfirm",notConfirm);
    const [putOrderConfirm]=usePutOrderConfirmMutation(IdData)
    const handleConfirm=(transactionId)=>{
        putOrderConfirm(transactionId)
        setIdData(transactionId)
        toast.success('Order Confirm Successfully ')
       
  

    }

    useEffect(()=>{
      const notconfirm = data?.filter(payment=> !payment.status)
      setNotConfirm(notconfirm)
    },[data])
    return (
        <div>
   
            {
                isLoading?<> <span className="loading loading-spinner text-primary"></span>
                </>:<>
               <div>
        <div className="grid gap-8 row-gap-5 lg:grid-cols-2">
     {
      !notConfirm?.length?<> <p className="text-4xl text-center text-cyan-500 bg-slate-100 py-3 rounded-md"> All Orders Confirm Complete</p></>:<>
       {notConfirm?.map(payment=><>
     
     <div  key={payment._id}  className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl ">
  
  <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
    <div className="mb-6 mr-6 lg:mb-0">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
        <img src={payment?.imageURL} alt=""  />
      </div>
    </div>
    <div className="flex flex-col justify-between flex-grow">
      <div>
     
        <p className="mb-2 text-sm font-semibold text-green-400">
        Food Name: {payment?.name}
        </p>
        <p className="mb-2 text-sm font-semibold text-green-400">
        Quantity: {payment?.quantity}
        </p>
        <p className="mb-2 text-sm font-semibold text-orange-400">
        Price: {payment?.price}
        </p>
        <p className="mb-2 text-sm font-semibold text-orange-400">
        Total price: {payment?.overallTotal}
        </p>
        <p className="mb-2 text-sm font-semibold text-orange-400">
        transactionId: {payment?.transactionId}
        </p>
        <p className="mb-2 text-sm font-semibold text-orange-400">
        Email: {payment?.userEmail}
        </p>
      </div>

{
 payment.status? <>
 <button disabled className="  py-2 w-36 rounded-md  text-md font-medium text-white bg-cyan-600 text-center hover:bg-cyan-600">
       Food delivery
      </button>
 </>:<button onClick={()=>handleConfirm(payment?.transactionId)} className="  py-2 w-36 rounded-md  text-md font-medium text-white bg-red-600 text-center hover:bg-cyan-600">
       Order Confirm
      </button>
}
    </div>
  </div>

</div>

 </>)}
      </>
     }
   
  </div>
    </div>
                </>
            }
        </div>
    );
};

export default AllPayment;