import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useGetAllPaymentQuery, usePutOrderConfirmMutation } from "../../redux/features/catFood/catFoodApiEndPoint";


const ConfirmOrder = () => {

    const {data, isLoading}=useGetAllPaymentQuery()
    const [IdData, setIdData ]=useState("")
    const [Confirm, setConfirm ]=useState(null)
  console.log("notconfirm",Confirm);
      const [putOrderConfirm,{isSuccess}]=usePutOrderConfirmMutation(IdData)
      const handleConfirm=(transactionId)=>{
          putOrderConfirm(transactionId)
          setIdData(transactionId)
          toast.success('Order Confirmed!')
          if (isSuccess) {
              setIdData(" ")
              toast.success('Successfully toasted!')
          }
    
  
      }
  
      useEffect(()=>{
        const confirm = data?.filter(payment=> payment.status)
        setConfirm(confirm)
      },[data])
    return (
        <div>
        <Toaster
position="top-center"
reverseOrder={false}
/>
        {
            isLoading?<> <span className="loading loading-spinner text-primary"></span>
            </>:<>
           <div>
    <div className="grid gap-8 row-gap-5 lg:grid-cols-2">
{Confirm?.map(payment=><>
 
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

</div>
</div>
            </>
        }
    </div>
    );
};

export default ConfirmOrder;